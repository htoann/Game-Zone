import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const RootDrawerNavigator = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator>
        <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
        <RootDrawerNavigator.Screen name="About" component={AboutStack} />
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  );
}
