import React from "react";
import { StyleSheet, View } from "react-native";

const IconContainer = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default IconContainer;
