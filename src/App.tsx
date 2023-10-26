import {Image, View} from 'react-native-ui-lib';
import {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/logo.png')} />
      </View>
    );
  }
}
