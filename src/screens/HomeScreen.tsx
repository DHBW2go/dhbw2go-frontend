import {Text, View} from 'react-native-ui-lib';
import FooterComponent from '../components/FooterComponent';
import React from 'react';

// @ts-ignore
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <FooterComponent />
    </View>
  );
}

export default HomeScreen;
