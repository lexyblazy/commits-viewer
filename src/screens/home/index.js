import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import OAuthManager from "react-native-oauth";
import Config from "react-native-config";
import { connect } from "react-redux";
import Button from "../../components/button";
import styles from "./styles";
import { USER, colors } from "../../constants";
import { handleAuth } from "../../actions";

const manager = new OAuthManager("AskSteve");

const config = {
  github: {
    client_id: Config.CLIENT_ID,
    client_secret: Config.CLIENT_SECRET
  }
};
manager.configure(config);

class Home extends Component {
  login = () => {
    const { dispatch } = this.props;
    manager
      .authorize("github")
      .then(resp => {
        AsyncStorage.setItem(USER, JSON.stringify(resp.response), err => {
          if (!err) {
            dispatch(handleAuth(true));
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
        <Button
          text="Login with Github"
          onPress={this.login}
          color={colors.color_dark}
        />
      </View>
    );
  }
}

export default connect()(Home);
