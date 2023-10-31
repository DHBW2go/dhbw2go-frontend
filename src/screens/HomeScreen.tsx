import {Component} from 'react';
import {View} from 'react-native-ui-lib';
import HeaderComponent from '../components/HeaderComponent';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <HeaderComponent />
      </View>
    );
  }
}
