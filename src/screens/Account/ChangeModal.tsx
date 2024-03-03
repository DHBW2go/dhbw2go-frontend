import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import {View, Button, Modal, Text} from 'react-native-ui-lib';

// @ts-ignore
const ChangeModal = ({isVisible, onClose, onChangePassword}) => {
  const [newPassword, setNewPassword] = useState('');

  const handleOverlayClick = () => {
    onClose(); // Close the modal when overlay is clicked
  };
  const handleChangePassword = () => {
    onChangePassword(newPassword);
    setNewPassword('');
  };

  return (
    <Modal visible={isVisible} transparent>
      <TouchableWithoutFeedback onPress={handleOverlayClick}>
        <View style={style.overlay} />
      </TouchableWithoutFeedback>
      <View style={style.modal}>
        <Text style={style.title}>Passwort ändern</Text>
        <TextInput
          style={style.input}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Neues Passwort eingeben"
          secureTextEntry
        />
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
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 22,
    marginBottom: 10,
    ButtonSize: 'large',
  },
});

export default ChangeModal;
