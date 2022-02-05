import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


function DefaultButton({ text, onPress }) {
    return <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>;
}

export default DefaultButton;


const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 10,
    margin:30,
    marginHorizontal: 50,
    paddingHorizontal: 0,
    marginBottom:10,
    backgroundColor: '#00285c',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  }
});