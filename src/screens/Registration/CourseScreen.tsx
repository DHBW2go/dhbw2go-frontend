import {Button, Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

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
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#23303b',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
});

function CourseScreen({
  route,
  signIn,
}: {
  route: any;
  signIn: (authenticationToken: any) => void;
}) {
  const navigation = useNavigation();
  const {password, email, name} = route.params;

  const putRegister = () => {
    axios
      .put('/authentication/register', {
        username: email,
        password: password,
        name: name,
        location: '/',
        faculty: '/',
        program: '/',
        course: '/',
      })
      .then(function (response) {
        signIn(response.data);
        // @ts-ignore
        navigation.navigate('HomeScreen');
      })
      .catch(function (error) {
        //Handle error
      });
  };

  return (
    <View style={styles.view}>
      <Text style={styles.label}>An welcher DHBW studierst du?</Text>
      <Text style={styles.label}>Zu welcher Fakultät gehörst du?</Text>
      <Text style={styles.label}>Welchen Studiengang belegst du?</Text>
      <Text style={styles.label}>Zu welchem Kurs gehörst du?</Text>
      <Button
        style={styles.button}
        label={'Registrierung abschließen'}
        onPress={putRegister}
      />
    </View>
  );
}
export default CourseScreen;
