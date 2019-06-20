import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OAuthManager from "react-native-oauth";
import styles from "./styles";

const manager = new OAuthManager("AskSteve");

const config = {
  github: {
    client_id: "501ad4139f62f1ab76df",
    client_secret: "954b1db94ddd0b447719fe3271dd15ece64c587c"
  }
};
manager.configure(config);

class Home extends Component {
  static navigationOptions = {
    title: "Ask Steve",
    headerStyle: {
      backgroundColor: '#24292e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '300',
    },
  };
  componentDidMount() {}

  login = () => {
    manager
      .authorize("github")
      .then(resp => {
        console.log(resp);
        const { navigation } = this.props;
        navigation.navigate("Form");
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={styles.buttonText}>Login with Github </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
