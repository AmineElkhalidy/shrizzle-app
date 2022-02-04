import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Onboarding = () => {
  return (
      <View style={styles.screen} >
          <Text>The Onboarding screen</Text>
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
export default Onboarding;