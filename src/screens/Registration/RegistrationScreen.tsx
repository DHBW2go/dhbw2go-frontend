import { Button, Text, View } from "react-native-ui-lib";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

function RegistrationScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordBlur = () => {
    if (password.trim() === '') {
      setPasswordMismatch(false); // Setze passwordMismatch zurück, wenn der Inhalt des Textfelds leer ist
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPassword.trim() === '') {
      setPasswordMismatch(false); // Setze passwordMismatch zurück, wenn der Inhalt des Textfelds leer ist
    }
  };

  const handleSetPassword = () => {
    // Überprüfe, ob die Eingaben für das neue Passwort gleich sind
    if (password !== confirmPassword) {
      // Falls nicht, zeige eine Fehlermeldung an
      Alert.alert('Fehler', 'Die Passwörter stimmen nicht überein.');
      setPasswordMismatch(true); // Setze passwordMismatch auf true, um den roten Rahmen anzuzeigen
      return;
    }

    // Falls die Eingaben übereinstimmen, zum CourseScreen navigieren
    // @ts-ignore
    navigation.navigate("CourseScreen", { password, email, name });

    // Setze die Eingabefelder zurück
    setPassword('');
    setConfirmPassword('');
    setPasswordMismatch(false); // Setze passwordMismatch zurück
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
      overflow: 'hidden',
    },
    inputContainer: {
      flexDirection: 'row',
    },
    inputError: {
      height: 40,
      borderWidth: 1,
      width: '100%',
      borderColor: '#E30813', // Setze den Rahmen auf rot bei Fehlanpassung
      marginBottom: 10,
      paddingHorizontal: 10,
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
            style={[styles.input, passwordMismatch && styles.inputError]}
            value={password}
            onChangeText={setPassword}
            onBlur={handlePasswordBlur}
            placeholder="Passwort eingeben"
            secureTextEntry={!passwordVisible}
            textContentType="none"
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
            style={[styles.input, passwordMismatch && styles.inputError]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onBlur={handleConfirmPasswordBlur}
            placeholder="Passwort nochmals eingeben"
            secureTextEntry={!confirmPasswordVisible}
            textContentType="none"
          />
          <TouchableOpacity
            onPress={toggleConfirmPasswordVisibility}
            style={styles.showPasswordButton}>
            {confirmPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} size={25} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size={25} />
            )}
          </TouchableOpacity>
        </View>
        <Button
          label={'Weiter'}
          style={styles.button}
          onPress={handleSetPassword}
        />
      </ScrollView>
    </View>
  );
}

export default RegistrationScreen;
