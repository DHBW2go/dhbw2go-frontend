import {View} from 'react-native-ui-lib';
import {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './screens/HomeScreen';

library.add(fab, faSquareCheck, faMugSaucer);

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <HomeScreen />
      </View>
    );
  }
}
