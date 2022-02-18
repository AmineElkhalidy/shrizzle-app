import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function SkipButton({ text, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={styles(color).buttonText}>{text || "Skip for now"}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SkipButton;

const styles = (color) =>
  StyleSheet.create({
    buttonText: {
      color: color || "#00285c",
      textDecorationLine: "underline",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
    },
  });
