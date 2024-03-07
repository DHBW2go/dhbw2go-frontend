import React, {Component} from 'react';
import {Button, View} from 'react-native-ui-lib';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Alert, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
  },
  icon: {
    color: '#000000',
  },
});

export default class BurgerMenu extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => Alert.alert('This is a button!')}
          //size={Button.sizes.medium}
          style={style.button}
          iconSource={() => (
            <FontAwesomeIcon icon={faBars} size={25} style={style.icon} />
          )}
        />
      </View>
    );
  }
}
