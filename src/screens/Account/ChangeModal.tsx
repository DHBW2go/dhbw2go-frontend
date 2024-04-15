import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Modal, Text, View} from 'react-native-ui-lib';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

function ChangeModal({
  isVisible,
  onClose,
  onChangePassword,
}: {
  isVisible: boolean;
  onClose: () => void;
  onChangePassword: (value: String) => void;
}) {
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
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={handleOverlayClick}>
            <View style={styles.modalContainer}>
              <View style={styles.modal}>
                <Text style={styles.title}>Passwort ändern</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      passwordMismatch && styles.inputError,
                    ]}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    onBlur={handleNewPasswordBlur}
                    placeholder="Neues Passwort eingeben"
                    secureTextEntry={!newPasswordVisible}
                  />
                  <TouchableOpacity
                    onPress={toggleNewPasswordVisibility}
                    style={styles.showPasswordButton}>
                    {newPasswordVisible ? (
                      <FontAwesomeIcon icon={faEye} size={25} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} size={25} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      passwordMismatch && styles.inputError,
                    ]}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    onBlur={handleConfirmPasswordBlur}
                    placeholder="Neues Passwort erneut eingeben"
                    secureTextEntry={!confirmPasswordVisible}
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
                  label={'Passwort ändern'}
                  backgroundColor={'#0d730d'}
                  style={styles.button}
                  onPress={() => handleChangePassword()}
                />
                <Button
                  label={'Abbrechen'}
                  backgroundColor={'#E30813'}
                  onPress={() => onClose()}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});

export default ChangeModal;
