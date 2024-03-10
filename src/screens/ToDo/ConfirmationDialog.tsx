import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {View, Button, Text, Dialog, PanningProvider} from 'react-native-ui-lib';
import React from 'react';

interface ConfirmationDialogProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmationDialog({
  isVisible,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  const handleOverlayClick = () => {
    onCancel(); // Close the modal when overlay is clicked
  };

  return (
    <Dialog
      visible={isVisible}
      onDismiss={() => onCancel()}
      panDirection={PanningProvider.Directions.DOWN}>
      <TouchableWithoutFeedback onPress={handleOverlayClick}>
        <View style={style.overlay} />
      </TouchableWithoutFeedback>
      <View style={style.modal}>
        <Text style={style.title}>
          Wollen Sie wirklich alle erledigten To-Do's löschen?
        </Text>
        <Button
          label={'Löschen'}
          backgroundColor={'#23303b'}
          style={style.button}
          onPress={() => onConfirm()}
        />
        <Button
          label={'Abbrechen'}
          backgroundColor={'#E30813'}
          onPress={() => onCancel()}
        />
      </View>
    </Dialog>
  );
}

const style = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
  },
  modal: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    fontSize: 22,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
export default ConfirmationDialog;
