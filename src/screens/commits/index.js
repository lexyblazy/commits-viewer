import React, { Component } from "react";
import { FlatList, View, ActivityIndicator, AsyncStorage } from "react-native";
import axios from "axios";
import CommitCard from "../../components/commitCard";
import { BASE_URL, USER } from "../../constants";

class CommitsList extends Component {
  state = {
    commits: [],
    title: "",
    loading: false,
    user: {}
  };
  async componentDidMount() {
    const { navigation } = this.props;
    this.page = 1;
    const commits = navigation.getParam("commits", []);
    try {
      const stringUser = await AsyncStorage.getItem(USER);
      const user = JSON.parse(stringUser);
      this.setState({ commits, user });
    } catch (error) {
      alert("An error occurred");
    }
  }
  static navigationOptions = {
    title: "Commits"
  };

  loadMoreCommits = async () => {
    const { navigation } = this.props;
    const { user } = this.state;
    const repo = navigation.getParam("repo", []);
    const token = user.credentials.accessToken;
    this.page = this.page + 1;

    this.setState({ loading: true });
    const url = `${BASE_URL}/repos/${repo}/commits?page=${this.page}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      const OlderCommits = res.data;
      this.setState({
        commits: [...this.state.commits, ...OlderCommits]
      });
    } catch (error) {
      console.log(error);
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

  renderCommits = () => {
    const { commits = [], loading } = this.state;
    console.log(commits[1])
    return (
      <FlatList
        data={commits}
        keyExtractor={item => item.sha}
        renderItem={({ item }) => <CommitCard commit={item} />}
        onEndReached={this.loadMoreCommits}
        ListFooterComponent={() => (
          <View>
            {loading ? (
              <ActivityIndicator color="#24292e" size="large" />
            ) : null}
          </View>
        )}
        ListFooterComponentStyle={{
          marginBottom: 50
        }}
      />
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>{this.renderCommits()}</View>
      </View>
    );
  }
}

export default CommitsList;
