import React from "react";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";

import WelcomeImg from "../../Assets/TestPictures/welcome_img.svg";

import DefaultButton from "../../components/Buttons/DefaultButton";

function GetStarted(props) {
  return (
    <ImageBackground
      source={require("../../Assets/TestPictures/orange_bg.png")}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.hi}>Hi {props.route.params.firstName},</Text>
        <Text style={styles.info}>We need some information about you </Text>
        <Text style={styles.info}>to setup your profile</Text>

        <View style={styles.imageContainer}>
          <WelcomeImg />
        </View>

        <DefaultButton
          text={"Let's get started"}
          onPress={() => props.navigation.navigate("ProfilePicName")}
        />
      </View>
    </ImageBackground>
  );
}

export default GetStarted;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: 0,
  },
  container: {
    padding: 20,
    position: "relative",
  },
  hi: {
    paddingTop: 60,
    marginBottom: 10,
    color: "#00285c",
    fontSize: 50,
    fontWeight: "bold",
  },
  info: {
    color: "white",
    fontSize: 15,
  },
  imageContainer: {
    paddingTop: Dimensions.get("window").width * 0.18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
