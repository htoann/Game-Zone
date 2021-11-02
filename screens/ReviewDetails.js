import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./../styles/global";

export default ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
      <Text style={globalStyles.paragraph}>{navigation.getParam("body")}</Text>
      <Text>
        <Text>Rating: </Text>
        {navigation.getParam("rating")}
      </Text>
    </View>
  );
};
