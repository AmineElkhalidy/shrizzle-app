import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
const MainButton = (props) => {
  return (
    <View style={{...styles.buttonContainer, ...props.style}}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
});

export default MainButton;
