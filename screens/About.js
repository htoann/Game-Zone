import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./../styles/global";

export default About = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.titleText}>About</Text>
    </View>
  );
};