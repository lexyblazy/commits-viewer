import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import OAuthManager from "react-native-oauth";
import Button from "../../components/button";
import styles from "./styles";
import { USER } from "../../constants";

const manager = new OAuthManager("AskSteve");

const config = {
  github: {
    client_id: "501ad4139f62f1ab76df",
    client_secret: "954b1db94ddd0b447719fe3271dd15ece64c587c"
  }
};
manager.configure(config);

class Home extends Component {
  login = () => {
    const { updateLoginState } = this.props;
    manager
      .authorize("github")
      .then(resp => {
        AsyncStorage.setItem(USER, JSON.stringify(resp.response), err => {
          if (!err) {
            console.log("User set in async storage");
            updateLoginState && updateLoginState();
          }
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button text="Login with Github" onPress={this.login} />
      </View>
    );
  }
}

export default Home;
