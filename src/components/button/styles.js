import { StyleSheet } from "react-native";
import { colors } from "../../constants";

const styles = StyleSheet.create({

  button: {
    backgroundColor: colors.color_dark,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "300"
  },
  
});

export default styles;
