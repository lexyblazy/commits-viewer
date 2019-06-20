import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export default StyleSheet.create({
  commitCard: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.color_grey_light_1,
    borderWidth: 1,
    borderColor: colors.color_grey_light_3
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
