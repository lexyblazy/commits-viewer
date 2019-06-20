import { StyleSheet } from "react-native";

export default StyleSheet.create({
  commitCard: {
    flexDirection: "row",
    padding: 10
  },
  commitMain: {
    flex: 1
  },
  commitAuthor: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  authorImage: {
    width: 35,
    height: 35,
    borderRadius: 30,
    marginRight: 5
  }
});
