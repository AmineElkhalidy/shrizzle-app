import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

const BodyText = (props) => {
  return (
    <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text:{
    color: Colors.white,
    fontFamily: 'Poppins',
    marginBottom: 10
  }
});

export default BodyText;
