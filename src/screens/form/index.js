import React, { Component } from "react";
import { View, Text, TextInput, AsyncStorage } from "react-native";
import axios from "axios";
import styles from "./styles";
import Button from "../../components/button";
import { BASE_URL, USER, colors } from "../../constants";

class Form extends Component {
  static navigationOptions = {
    title: "Commit Wiki"
  };
  state = {
    text: "facebook/react-native",
    loading: false,
    user: {}
  };
  async componentDidMount() {
    try {
      console.log("updateLoginState", this.props.updateLoginState);
      const stringUser = await AsyncStorage.getItem(USER);
      const user = JSON.parse(stringUser);
      this.setState({ user });
    } catch (error) {
      console.log("error", error);
      alert(error);
    }
  }

  handleSubmit = async () => {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const { user } = this.state;
    const { text } = this.state;
    const url = `${BASE_URL}/repos/${text}/commits?page=1`;
    const token = user.credentials.accessToken;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      const commits = res.data;
      navigation.navigate("Commits", { commits, repo: text });
    } catch (error) {
      const data = error && error.response && error.response.data;
      let errorMessage = "An error occurred";
      if (data && data.message) {
        errorMessage = data.message;
      }
      alert(errorMessage);
    } finally {
      this.setState({ loading: false });
    }
  };

  logout = () => {
    AsyncStorage.removeItem(USER, () => {});
  };

  render() {
    const { text, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Enter repository to see commit history e.g(owner/repo)</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ text })}
            value={text}
          />
          <Button
            text="Submit"
            onPress={this.handleSubmit}
            loading={loading}
            color={colors.color_dark}
          />
        </View>
        <Button
          text="Logout"
          onPress={this.logout}
          color={colors.color_primary}
        />
      </View>
    );
  }
}

export default Form;
