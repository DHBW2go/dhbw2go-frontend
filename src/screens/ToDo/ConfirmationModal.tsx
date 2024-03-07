import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {View, Button, Modal, Text} from 'react-native-ui-lib';

interface ConfirmationModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmationModal({
  visible,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  const handleOverlayClick = () => {
    onCancel(); // Close the modal when overlay is clicked
  };

  return (
    <Modal visible={visible} transparent>
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
    </Modal>
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    fontSize: 22,
    marginBottom: 10,
    ButtonSize: 'large',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
export default ConfirmationModal;
