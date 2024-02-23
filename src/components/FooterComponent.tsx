import {Component} from 'react';
import {Image, View} from 'react-native-ui-lib';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default class FooterComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/logo.png')} />
        <FontAwesomeIcon icon="square-check" />
      </View>
    );
  }
}
