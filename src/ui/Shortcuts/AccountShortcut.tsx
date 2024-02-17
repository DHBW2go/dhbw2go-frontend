import {Button, View} from 'react-native-ui-lib';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
  },
  icon: {
    color: '#000000',
  },
});

function AccountShortcut() {
  const navigation = useNavigation();

  const navigateToAccountScreen = () => {
    // @ts-ignore
    navigation.navigate('AccountScreen');
  };

  return (
    <View>
      <Button
        onPress={navigateToAccountScreen}
        //size={Button.sizes.medium}
        style={style.button}
        iconSource={() => (
          <FontAwesomeIcon icon={faUser} size={25} style={style.icon} />
        )}
      />
    </View>
  );
}

export default AccountShortcut;
