import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CalendarScreen from './screens/CalendarScreen';
import AccountShortcut from './ui/Shortcuts/AccountShortcut';
import BurgerMenu from './ui/BurgerMenu';
import AccountScreen from './screens/Account/AccountScreen';
import ToDoScreen from './screens/ToDo/ToDoScreen';
import GradesScreen from './screens/GradesScreen';
import React, {useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/Registration/RegistrationScreen';
import CourseScreen from './screens/Registration/CourseScreen';
import axios, {AxiosResponse} from 'axios';
import {MMKV} from 'react-native-mmkv';

const Stack = createNativeStackNavigator();
const HeaderRight = () => <AccountShortcut />;
const HeaderLeft = () => <BurgerMenu />;
const HeaderWelcomeRight = () => <></>;
const HeaderWelcomeLeft = () => <></>;

axios.defaults.baseURL = 'http://127.0.0.1:8080/';
axios.defaults.headers['Content-Type'] = 'application/json';

function App() {
  const storage = new MMKV();

  const getSignInState = () => {
    return (
      storage.contains('refreshToken') &&
      storage.contains('accessToken') &&
      storage.contains('tokenType')
    );
  };

  const signIn = (authenticationToken: any) => {
    storage.set('accessToken', authenticationToken.accessToken);
    storage.set('refreshToken', authenticationToken.refreshToken);
    storage.set('tokenType', authenticationToken.tokenType);
    axios.defaults.headers.Authorization = `${authenticationToken.tokenType} ${authenticationToken.accessToken}`;
    setIsSignedIn(true);
  };

  const signOut = () => {
    axios.defaults.headers.Authorization = '';
    storage.clearAll();
    setIsSignedIn(false);
  };

  const [isSignedIn, setIsSignedIn] = useState(getSignInState());

  const postAuthenticationToken = async () => {
    const refreshToken = storage.getString('refreshToken');
    if (refreshToken) {
      const response = await axios.post('/authentication/refresh', {
        refreshToken: refreshToken,
      });
      const authenticationToken = response.data;
      storage.set('accessToken', authenticationToken.accessToken);
      storage.set('refreshToken', authenticationToken.refreshToken);
      storage.set('tokenType', authenticationToken.tokenType);
      axios.defaults.headers.Authorization = `${authenticationToken.tokenType} ${authenticationToken.accessToken}`;
      return authenticationToken;
    }
    throw new Error('No refresh token found!');
  };

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log('response', response);
      return response;
    },
    async error => {
      console.log('error', error);
      if (error.response.status === 403) {
        try {
          const authenticationToken = await postAuthenticationToken();
          const originalRequest = error.config;
          originalRequest.headers.Authorization = `${authenticationToken.tokenType} ${authenticationToken.accessToken}`;
          return await axios(originalRequest);
        } catch (authenticationTokenError) {
          signOut();
          throw authenticationTokenError;
        }
      }
      return Promise.reject(error);
    },
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isSignedIn ? 'HomeScreen' : 'LoginScreen'}
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#E30813',
          },
        }}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerTitle: 'DHBW2go',
                headerRight: HeaderRight,
                headerLeft: HeaderLeft,
              }}
            />
            <Stack.Screen
              name="CalendarScreen"
              component={CalendarScreen}
              options={{
                headerTitle: 'Kalender',
                headerRight: HeaderRight,
                headerLeft: HeaderLeft,
              }}
            />
            <Stack.Screen
              name="GradesScreen"
              component={GradesScreen}
              options={{
                headerTitle: 'Noten',
                headerRight: HeaderRight,
                headerLeft: HeaderLeft,
              }}
            />
            <Stack.Screen
              name="AccountScreen"
              options={{
                headerTitle: 'Account',
                headerRight: HeaderWelcomeRight,
                headerLeft: HeaderWelcomeLeft,
              }}>
              {props => <AccountScreen {...props} signOut={signOut} />}
            </Stack.Screen>
            <Stack.Screen
              name="ToDoScreen"
              component={ToDoScreen}
              options={{
                headerTitle: 'To-Do Liste',
                headerRight: HeaderRight,
                headerLeft: HeaderLeft,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              options={{
                headerTitle: 'Login',
                headerRight: HeaderWelcomeRight,
                headerLeft: HeaderWelcomeLeft,
              }}>
              {props => <LoginScreen {...props} signIn={signIn} />}
            </Stack.Screen>
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
              options={{
                headerTitle: 'Registration',
                headerRight: HeaderWelcomeRight,
                headerLeft: HeaderWelcomeLeft,
              }}
            />
            <Stack.Screen
              name="CourseScreen"
              options={{
                headerTitle: 'Kursauswahl',
                headerRight: HeaderWelcomeRight,
                headerLeft: HeaderWelcomeLeft,
              }}>
              {props => <CourseScreen {...props} signIn={signIn} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
