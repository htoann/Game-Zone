import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ReviewDetails from "../screens/ReviewDetails";
import About from "./../screens/About";
import Home from "./../screens/Home";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Game Zone",
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "coral",
    },
  },
});

export default createAppContainer(HomeStack);
