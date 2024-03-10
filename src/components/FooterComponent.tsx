import {Text, View} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {
  faBuilding,
  faCalendar,
  faChartBar,
  faRectangleList,
} from '@fortawesome/free-regular-svg-icons';
import React from "react";

// @ts-ignore
function FooterComponent() {
  const style = StyleSheet.create({
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 90,
      bottom: 0,
      width: '100%',
      position: 'absolute',
    },
    tile: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: '#000000',
    },
  });

  const navigation = useNavigation();
  const navigateToCalendarScreen = () => {
    // @ts-ignore
    navigation.navigate('CalendarScreen');
  };
  const navigateToGradesScreen = () => {
    // @ts-ignore
    navigation.navigate('GradesScreen');
  };
  const navigateToToDoScreen = () => {
    // @ts-ignore
    navigation.navigate('ToDoScreen');
  };

  const navigateToHomeScreen = () => {
    // @ts-ignore
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={style.footer}>
      <TouchableOpacity style={style.tile} onPress={navigateToHomeScreen}>
        <FontAwesomeIcon icon={faBuilding} size={30} style={style.icon} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.tile} onPress={navigateToCalendarScreen}>
        <FontAwesomeIcon icon={faCalendar} size={30} style={style.icon} />
        <Text>Kalender</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.tile} onPress={navigateToGradesScreen}>
        <FontAwesomeIcon icon={faChartBar} size={30} style={style.icon} />
        <Text>Noten</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.tile} onPress={navigateToToDoScreen}>
        <FontAwesomeIcon icon={faRectangleList} size={30} style={style.icon} />
        <Text>To-Do's</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FooterComponent;
