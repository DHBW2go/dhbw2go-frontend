import {Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function GradesScreen() {
  return (
    <View style={style.view}>
      <Text>Grades Screen</Text>
    </View>
  );
}
export default GradesScreen;
