import React from "react";
import styles from "./style";

const Card = ({ commit }) => {
  const { message = "", author, committer } = commit.commit;
  return (
    <View style={styles.commitCard} key={commit.sha}>
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
              uri: commit.author.avatar_url
            }}
          />
          <View style={{ paddingRight: 100 }}>
            <Text>
              {this.showAuthors(author, committer)} on{" "}
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
