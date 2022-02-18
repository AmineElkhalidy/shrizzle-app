import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
} from "react-native";

function DefaultButton({ text, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...style }}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default DefaultButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 10,
    margin: 30,
    marginHorizontal: 50,
    paddingHorizontal: 0,
    marginBottom: 10,
    backgroundColor: "#00285c",
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    textAlign: "center",
  },
});
