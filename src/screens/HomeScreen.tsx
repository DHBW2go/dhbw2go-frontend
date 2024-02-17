import {Button, Text, View} from 'react-native-ui-lib';

// @ts-ignore
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('CalendarScreen')} />
    </View>
  );
}

export default HomeScreen;
