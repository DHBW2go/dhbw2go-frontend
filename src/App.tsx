import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CalendarScreen from './screens/CalendarScreen';
import AccountShortcut from './ui/Shortcuts/AccountShortcut';
import BurgerMenu from './ui/BurgerMenu';
import AccountScreen from './screens/Account/AccountScreen';
import ToDoScreen from './screens/ToDo/ToDoScreen';
import GradesScreen from './screens/GradesScreen';

library.add(faBars, faUser);

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: 'DHBW2go',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#E30813',
          },
          headerRight: () => <AccountShortcut />,
          headerLeft: () => <BurgerMenu />,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="GradesScreen" component={GradesScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
