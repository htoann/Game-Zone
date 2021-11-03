import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./../styles/global";

export default About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Full Name: Tran Huu Toan</Text>
      <Text style={globalStyles.titleText}>Birth Date: 2002</Text>
    </View>
  );
};
