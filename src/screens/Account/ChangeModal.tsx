import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {View, Button, Modal, Text} from 'react-native-ui-lib';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
const ChangeModal = ({isVisible, onClose, onChangePassword}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleOverlayClick = () => {
    onClose(); // Close the modal when overlay is clicked
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleNewPasswordBlur = () => {
    if (newPassword.trim() === '') {
      setPasswordMismatch(false); // Setze passwordMismatch zurück, wenn der Inhalt des Textfelds leer ist
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPassword.trim() === '') {
      setPasswordMismatch(false); // Setze passwordMismatch zurück, wenn der Inhalt des Textfelds leer ist
    }
  };

  const handleChangePassword = () => {
    // Überprüfe, ob die Eingaben für das neue Passwort gleich sind
    if (newPassword !== confirmPassword) {
      // Falls nicht, zeige eine Fehlermeldung an
      Alert.alert('Fehler', 'Die Passwörter stimmen nicht überein.');
      setPasswordMismatch(true); // Setze passwordMismatch auf true, um den roten Rahmen anzuzeigen
      return;
    }

    // Falls die Eingaben übereinstimmen, sende das Passwort ans Backend
    onChangePassword(newPassword);

    // Setze die Eingabefelder zurück
    setNewPassword('');
    setConfirmPassword('');
    setPasswordMismatch(false); // Setze passwordMismatch zurück
  };

  return (
    <Modal visible={isVisible} transparent>
      <TouchableWithoutFeedback onPress={handleOverlayClick}>
        <View style={style.overlay} />
      </TouchableWithoutFeedback>
      <View style={style.modal}>
        <Text style={style.title}>Passwort ändern</Text>
        <View style={style.inputContainer}>
          <TextInput
            style={[style.input, passwordMismatch && style.inputError]} // Dynamisches Anwenden des Fehlerstils
            value={newPassword}
            onChangeText={setNewPassword}
            onBlur={handleNewPasswordBlur}
            placeholder="Neues Passwort eingeben"
            secureTextEntry={!newPasswordVisible} // Verberge das Passwort, wenn newPasswordVisible falsch ist
          />
          <TouchableOpacity
            onPress={toggleNewPasswordVisibility}
            style={style.showPasswordButton}>
            {newPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} size={25} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size={25} />
            )}
          </TouchableOpacity>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={[style.input, passwordMismatch && style.inputError]} // Dynamisches Anwenden des Fehlerstils
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onBlur={handleConfirmPasswordBlur}
            placeholder="Neues Passwort erneut eingeben"
            secureTextEntry={!confirmPasswordVisible} // Verberge das Passwort, wenn confirmPasswordVisible falsch ist
          />
          <TouchableOpacity
            onPress={toggleConfirmPasswordVisibility}
            style={style.showPasswordButton}>
            {confirmPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} size={25} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size={25} />
            )}
          </TouchableOpacity>
        </View>
        <Button
          label={'Passwort ändern'}
          backgroundColor={'#0d730d'}
          style={style.button}
          onPress={() => handleChangePassword()}
        />
        <Button
          label={'Abbrechen'}
          backgroundColor={'#E30813'}
          onPress={() => onClose()}
        />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    borderColor: '#E30813', // Setze den Rahmen auf rot bei Fehlanpassung
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  showPasswordButton: {
    padding: 10,
    position: 'absolute',
    right: 3,
  },
  button: {
    fontSize: 22,
    marginBottom: 10,
    ButtonSize: 'large',
  },
});

export default ChangeModal;
