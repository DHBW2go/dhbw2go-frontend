import {Button, Text, View} from 'react-native-ui-lib';
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

function LoginScreen({
  setIsSignedIn,
  navigation,
}: {
  setIsSignedIn: (value: boolean) => void;
  navigation: any;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const signIn = () => {
    setIsSignedIn(true);
    navigation.replace('HomeScreen');
  };

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      position: 'absolute',
      left: 0,
      right: 0,
      padding: 20,
    },
    label: {
      fontSize: 22,
    },
    labelRegistrate: {
      marginTop: 20,
      fontSize: 16,
    },
    input: {
      height: 40,
      borderWidth: 1,
      width: '100%',
      borderColor: 'gray',
      marginBottom: 10,
      marginTop: 10,
      paddingHorizontal: 10,
    },
    inputContainer: {
      flexDirection: 'row',
    },
    showPasswordButton: {
      padding: 10,
      position: 'absolute',
      right: 3,
      bottom: 7,
    },
    button: {
      backgroundColor: '#23303b',
      padding: 10,
      borderRadius: 10,
      margin: 10,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.view}>
      <Text style={styles.label}>E-Mail:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="E-Mail eingeben"
          onChangeText={setEmail}
        />
      </View>
      <Text style={styles.label}>Passwort:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Passwort eingeben"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.showPasswordButton}>
          {passwordVisible ? (
            <FontAwesomeIcon icon={faEye} size={25} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} size={25} />
          )}
        </TouchableOpacity>
      </View>
      <Button
        label={'Anmelden'}
        style={styles.button}
        onPress={signIn}></Button>
    </View>
  );
}

export default LoginScreen;
