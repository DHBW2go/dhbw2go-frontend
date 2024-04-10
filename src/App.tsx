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
import WelcomeScreen from './screens/WelcomeScreen';
import CourseScreen from './screens/Registration/CourseScreen';
import axios from 'axios';
import {MMKV} from 'react-native-mmkv';

const Stack = createNativeStackNavigator();
const HeaderRight = () => <AccountShortcut />;
const HeaderLeft = () => <BurgerMenu />;
const HeaderWelcomeRight = () => <></>;
const HeaderWelcomeLeft = () => <></>;

axios.defaults.baseURL = 'http://127.0.0.1:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const storage = new MMKV();

function App() {
  const getSignInState = () => {
    return (
      storage.contains('accessToken') &&
      storage.contains('refreshToken') &&
      storage.contains('tokenType')
    );
  };

  const signIn = (authenticationToken: any) => {
    storage.set('accessToken', authenticationToken.accessToken);
    storage.set('refreshToken', authenticationToken.refreshToken);
    storage.set('tokenType', authenticationToken.tokenType);
    setIsSignedIn(true);
  };

  const signOut = () => {
    storage.clearAll();
    setIsSignedIn(false);
  };

  const [isSignedIn, setIsSignedIn] = useState(getSignInState());

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isSignedIn ? 'HomeScreen' : 'WelcomeScreen'}
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
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={() => ({headerTitle: 'Willkommen'})}
            />
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
