import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const InputText = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  input: {
    width: "100%",
    height: "100%",
  },
});

export default InputText;
