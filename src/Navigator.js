
import { createStackNavigator, createAppContainer } from "react-navigation";
import CommitsScreen from "./screens/commits";
import FormScreen from "./screens/form";
import { USER, colors } from "./constants";


const AppNavigator = createStackNavigator(
  {
    Form: {
      screen: FormScreen
    },
    Commits: {
      screen: CommitsScreen
    }
  },
  {
    initialRouteName: "Form",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.color_dark
      },
      headerTintColor: colors.color_white,
      headerTitleStyle: {
        fontWeight: "300"
      }
    }
  }
);

export default createAppContainer(AppNavigator);