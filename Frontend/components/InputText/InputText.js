import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const InputText = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: "100%",
    fontFamily: "Poppins-Medium",
  },
});

export default InputText;
