import React from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";

export default function App() {
  return (
    <NavigationContainer>
      <Home />
      <About />
      <ReviewDetails />
    </NavigationContainer>
  );
}
