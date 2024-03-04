import {Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import FooterComponent from '../components/FooterComponent';

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
      <FooterComponent />
    </View>
  );
}
export default CalendarScreen;
