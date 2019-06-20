import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OAuthManager from "react-native-oauth";

const manager = new OAuthManager("AskSteve");

const config = {
  github: {
    client_id: "501ad4139f62f1ab76df",
    client_secret: "954b1db94ddd0b447719fe3271dd15ece64c587c"
  }
};
manager.configure(config);

class App extends Component {
  componentDidMount() {
    manager
      .authorize("github")
      .then(resp => {
        console.log(resp);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <View>
        <Text>Hello world </Text>
      </View>
    );
  }
}

export default App;
