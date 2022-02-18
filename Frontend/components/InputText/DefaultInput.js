import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../../constants/Colors";

function DefaultInput(props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput {...props} style={styles.input} />
      </View>
    </View>
  );
}

export default DefaultInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: 300,
    height: 40,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 8,
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    width: 250,
    marginHorizontal: 40,
    textAlign: "center",
  },
});
