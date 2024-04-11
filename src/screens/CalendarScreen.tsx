import { Text, View } from "react-native-ui-lib";
import { StyleSheet } from "react-native";
import FooterComponent from "../components/FooterComponent";
import React from "react";

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function CalendarScreen() {
  return (
    <View style={style.view}>
      <Text>Calendar Screen</Text>
      <FooterComponent />
    </View>
  );
}
export default CalendarScreen;
