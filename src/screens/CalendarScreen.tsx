import {Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// @ts-ignore
function CalendarScreen() {
  return (
    <View style={style.view}>
      <Text>Calendar Screen</Text>
    </View>
  );
}
export default CalendarScreen;
