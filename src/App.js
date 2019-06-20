import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import Home from "./screens/home";
import { USER } from "./constants";
import AppWithNavigation from "./Navigator";
import { connect } from "react-redux";
import { handleAuth } from "./actions";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? (
      <AppWithNavigation />
    ) : (
      <Home/>
    );
  }
}
const mapStateToProps = (state = {}) => {
  return state;
};
export default connect(mapStateToProps)(App);
