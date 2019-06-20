import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
const Button = ({ text, onPress, loading = false }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      style={styles.button}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{text || "Submit"}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
