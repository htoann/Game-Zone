import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ReviewDetails from "../screens/ReviewDetails";
import About from "./../screens/About";
import Home from "./../screens/Home";

const screens = {
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
