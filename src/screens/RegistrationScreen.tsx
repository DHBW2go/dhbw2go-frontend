import {Button, Text, View} from 'react-native-ui-lib';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

function RegistrationScreen() {
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleNewPasswordBlur = () => {
    if (password.trim() === '') {
      setPasswordMismatch(false); // Setze passwordMismatch zurück, wenn der Inhalt des Textfelds leer ist
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigation = useNavigation();

  const navigateToCourseScreen = () => {
    // @ts-ignore
    navigation.navigate('CourseScreen');
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
      <ScrollView>
        <Text style={styles.label}>Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Name eingeben"
            onChangeText={setName}
          />
        </View>
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
            onBlur={handleNewPasswordBlur}
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
        <Text style={styles.label}>Passwort wiederholen:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            onBlur={handleNewPasswordBlur}
            placeholder="Passwort nochmals eingeben"
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
          label={'Weiter'}
          style={styles.button}
          onPress={navigateToCourseScreen}></Button>
      </ScrollView>
    </View>
  );
}

export default RegistrationScreen;
