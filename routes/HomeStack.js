import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewDetails from "../screens/ReviewDetails";
import Home from "./../screens/Home";
import { NavigationContainer } from "@react-navigation/native";

const HomeStack = createStackNavigator();
export default function myStacks() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name="Game Zone"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Review Details" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
}
