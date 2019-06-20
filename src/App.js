import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home";
import FormScreen from "./screens/form";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Form: {
      screen: FormScreen
    }
  },
  {
    initialRouteName: "Form"
  }
);

export default createAppContainer(AppNavigator);
