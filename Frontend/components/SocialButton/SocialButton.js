import React from "react";
import { StyleSheet, TouchableOpacity,Dimensions, Text, View } from "react-native";

function SocialButton({ Icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        {Icon}
      </View>
    </TouchableOpacity>
  );
}

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
