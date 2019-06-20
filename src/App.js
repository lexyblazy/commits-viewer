import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CommitsScreen from "./screens/commits";
import FormScreen from "./screens/form";
import Home from "./screens/home";
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

const AppWithNavigation = createAppContainer(AppNavigator);

class App extends Component {
  state = {
    isAuthenticated: false
  };
  componentDidMount() {
    this.getAuthenticatedUser();
  }

  getAuthenticatedUser = async () => {
    AsyncStorage.getItem(USER, (err, user) => {
      if (err) {
        console.log({ err });
        this.setState({ isAuthenticated: false });
      } else {
        if (user) {
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ isAuthenticated: false });
        }
      }
    });
  };
  render() {
    const { isAuthenticated } = this.state;
    return isAuthenticated ? (
      <AppWithNavigation />
    ) : (
      <Home updateLoginState={this.getAuthenticatedUser} />
    );
  }
}
export default App;
