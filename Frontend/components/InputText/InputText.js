import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const InputText = (props) => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "100%",
  },
});

export default InputText;
