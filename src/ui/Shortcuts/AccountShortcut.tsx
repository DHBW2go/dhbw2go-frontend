import {Component} from 'react';
import {Button, View} from 'react-native-ui-lib';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

export default class AccountShortcut extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => alert('This is a button!')}
          size={Button.sizes.medium}
          backgroundColor={'#FFFFFF'}
          iconSource={() => (
            <FontAwesomeIcon icon={faUser} size={25} color={'#000000'} />
          )}
        />
      </View>
    );
  }
}
