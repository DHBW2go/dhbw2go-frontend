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
function ToDoScreen() {
  return (
    <View style={style.view}>
      <Text>To-Do Screen</Text>
      <FooterComponent />
    </View>
  );
}
export default ToDoScreen;
