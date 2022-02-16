import React from "react";

import { StyleSheet, View, Text, ImageBackground } from "react-native";

import DefaultButton from "../../components/Buttons/DefaultButton";
import SkipButton from "../../components/Buttons/SkipButton";

function UserBio(props) {
  return (
    <ImageBackground
      source={require("../../Assets/TestPictures/orange_bg_bottom.png")}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Others handles you can share</Text>

        <DefaultButton text="Continue" />
        <SkipButton color="#fff" />
      </View>
    </ImageBackground>
  );
}

export default UserBio;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: 0,
  },
  container: {
    padding: 10,
    paddingHorizontal: 30,
    position: "relative",
  },

  title: {
    paddingTop: 30,
    marginBottom: 40,
    color: "#00285c",
    fontSize: 48,
    fontWeight: "bold",
  },
});
