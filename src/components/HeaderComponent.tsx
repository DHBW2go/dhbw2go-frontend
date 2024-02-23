import {Component} from 'react';
import {Image, View} from 'react-native-ui-lib';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/logo.png')} />
      </View>
    );
  }
}
