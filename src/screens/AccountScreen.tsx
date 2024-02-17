import {Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function AccountScreen() {
  return (
    <View style={style.view}>
      <Text>Account Screen</Text>
    </View>
  );
}
export default AccountScreen;
