import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


function SkipButton({ text, onPress }) {
    return <TouchableOpacity onPress={onPress}>
      <View >
        <Text style={styles.buttonText}>Skip for now</Text>
      </View>
    </TouchableOpacity>;
}

export default SkipButton;


const styles = StyleSheet.create({
  buttonText: {
    color: '#00285c',
    textDecorationLine:"underline",
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  }
});