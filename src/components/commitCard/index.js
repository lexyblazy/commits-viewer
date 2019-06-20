import React from "react";
import styles from "./style";
import { View, Text, Image } from "react-native";
const defaultUrl =
  "https://facebook.github.io/react-native/docs/assets/favicon.png";
const showAuthors = (author, committer) => {
  if (committer.name !== author.name) {
    return `${author.name} authored and ${committer.name} committed`;
  }
  return `${author.name} committed`;
};

const Card = ({ commit }) => {
  const { message = "", author, committer } = commit.commit;
  return (
    <View style={styles.commitCard}>
      <View style={styles.commitMain}>
        <View>
          <Text>
            {message.length > 40 ? `${message.slice(0, 40)}...` : message}
          </Text>
        </View>
        <View style={styles.commitAuthor}>
          <Image
            style={styles.authorImage}
            source={{
              uri: (commit.author && commit.author.avatar_url) || defaultUrl
            }}
          />
          <View style={{ paddingRight: 70 }}>
            <Text>
              {showAuthors(author, committer)} on{" "}
              {new Date(author.date).toDateString()}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.commitHash}>
        <Text>{commit.sha.slice(0, 7)}</Text>
      </View>
    </View>
  );
};

export default Card;
