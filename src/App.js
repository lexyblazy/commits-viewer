import React, { Component } from "react";
import { connect } from "react-redux";
import AppWithNavigation from "./Navigator";
import Home from "./screens/home";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? <AppWithNavigation /> : <Home />;
  }
}
const mapStateToProps = (state = {}) => {
  return state;
};
export default connect(mapStateToProps)(App);
