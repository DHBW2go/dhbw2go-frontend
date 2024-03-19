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
import RegistrationScreen from './screens/RegistrationScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import CourseScreen from './screens/CourseScreen';

const Stack = createNativeStackNavigator();
const HeaderRight = () => <AccountShortcut />;
const HeaderLeft = () => <BurgerMenu />;
const HeaderWelcomeRight = () => <></>;
const HeaderWelcomeLeft = () => <></>;

function App() {
  const getIsSignedIn = () => {
    // custom logic
    return false;
  };
  const [isSignedIn, setIsSignedIn] = useState(getIsSignedIn());
  //const handleSignIn = (value: boolean) => {
  //setIsSignedIn(value);
  //};

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
              component={AccountScreen}
              options={{
                headerTitle: 'Account',
                headerRight: HeaderRight,
                headerLeft: HeaderLeft,
              }}
            />
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
              {props => (
                <LoginScreen {...props} setIsSignedIn={setIsSignedIn} />
              )}
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
              component={CourseScreen}
              options={{
                headerTitle: 'Kursauswahl',
                headerRight: HeaderWelcomeRight,
                headerLeft: HeaderWelcomeLeft,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
