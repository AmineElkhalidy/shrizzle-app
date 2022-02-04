import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
  return (
      <View style={styles.screen} >
          <Text>The splash screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default SplashScreen;
