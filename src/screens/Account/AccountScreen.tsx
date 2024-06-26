import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Image, Text, View} from 'react-native-ui-lib';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import ChangeModal from './ChangeModal';
import FooterComponent from '../../components/FooterComponent';
import {useNavigation} from '@react-navigation/native';

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  label: {
    fontSize: 22,
    marginBottom: 10,
    marginLeft: 20,
  },
  button: {
    fontSize: 22,
    marginBottom: 10,
    marginLeft: 20,
  },
});

const mockBackendData = {
  username: 'John Doe',
  email: 'johndoe@example.com',
  profileImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_BtB3w_jb8m-8SkMsQ1dbA7L7-ZqDrWC8llSddRKwA&s',
};

function AccountScreen({signOut}: {signOut: () => void}) {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(mockBackendData);
  const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] =
    useState(false);

  useEffect(() => {
    // Simulating backend call
    setTimeout(() => {
      setUserData(mockBackendData);
    }, 1000);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changePassword = (newPassword: string) => {
    // Logic to change password
    setIsChangePasswordModalVisible(false);
  };

  const logout = () => {
    signOut();
    // @ts-ignore
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={style.view}>
      {userData && userData.profileImage ? (
        <Image source={{uri: userData.profileImage}} style={style.image} />
      ) : (
        <FontAwesomeIcon icon={faUser} size={100} />
      )}
      <Text style={style.label}>Benutzername: {userData.username}</Text>
      <Text style={style.label}>E-Mail: {userData.email}</Text>
      <Button
        label={'Passwort ändern'}
        backgroundColor={'#A6A6A6'}
        style={style.button}
        onPress={() => setIsChangePasswordModalVisible(true)}
      />
      <Button
        label={'Abmelden'}
        backgroundColor={'#E30813'}
        style={style.button}
        onPress={logout}
      />
      <ChangeModal
        isVisible={isChangePasswordModalVisible}
        onClose={() => setIsChangePasswordModalVisible(false)}
        onChangePassword={changePassword}
      />
      <FooterComponent />
    </View>
  );
}

export default AccountScreen;
