import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewDetails from "../screens/ReviewDetails";
import Home from "./../screens/Home";

const HomeStack = createStackNavigator();
export default function myStacks() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Game Zone" component={Home} />
      <HomeStack.Screen name="Review Details" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
}
