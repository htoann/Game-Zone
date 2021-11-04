import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "./../styles/global";
import { Data } from "./../data";
import Card from "../shared/card";

export default Home = ({ navigation }) => {
  const [reviews, setReviews] = useState(Data);

  const handlePress = (item) => {
    navigation.navigate("Review Details", item);
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
