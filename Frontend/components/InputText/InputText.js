import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const InputText = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: "100%",
    fontFamily: "Poppins-Medium",
    fontSize: wp("4.25%"),
  },
});

export default InputText;
