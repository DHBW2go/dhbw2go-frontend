import {Button, Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 20,
  },
  label: {
    fontSize: 22,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#23303b',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
});
function WelcomeScreen() {
  const navigation = useNavigation();

  const navigateToLoginScreen = () => {
    // @ts-ignore
    navigation.navigate('LoginScreen');
  };
  const navigateToRegistrationScreen = () => {
    // @ts-ignore
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Willkommen bei DHBW2go!</Text>
      <Text style={styles.label}>
        Wenn du schon einen Account bei uns hast, logge dich hier ein:
      </Text>
      <Button
        style={styles.button}
        label={'Login'}
        onPress={navigateToLoginScreen}
      />
      <Text style={styles.label}>
        Wenn du noch keinen Account bei uns hast, kannst du dich hier
        registrieren:
      </Text>
      <Button
        style={styles.button}
        label={'Registrieren'}
        onPress={navigateToRegistrationScreen}
      />
    </View>
  );
}
export default WelcomeScreen;
