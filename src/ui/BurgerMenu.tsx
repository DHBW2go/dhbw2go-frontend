import {Component} from 'react';
import {Button, View} from 'react-native-ui-lib';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default class BurgerMenu extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => alert('This is a button!')}
          size={Button.sizes.medium}
          backgroundColor={'#FFFFFF'}
          iconSource={() => (
            <FontAwesomeIcon icon={faBars} size={25} color={'#000000'} />
          )}
        />
      </View>
    );
  }
}
