import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "./../styles/global";

export default ReviewDetails = ({ route }) => {
  const item = route.params;

  const { rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text style={globalStyles.paragraph}>{item.body}</Text>
        <View style={styles.rating}>
          <Text>
            <Text>Rating: </Text>
            <Image source={images.ratings[rating]} />
          </Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
