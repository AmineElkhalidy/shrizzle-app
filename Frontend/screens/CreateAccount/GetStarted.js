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

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

function GetStarted(props) {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../../Assets/TestPictures/orange_bg.png")}
        style={styles.screen}
      >
        <View style={styles.container}>
          <Text style={styles.hi}>Hi {props.route.params.firstName},</Text>
          <Text style={styles.info}>
            We need some information about you, to setup your profile
          </Text>
          {/* <Text style={styles.info}>to setup your profile</Text> */}

          <View style={styles.imageContainer}>
            <WelcomeImg />
          </View>

          <DefaultButton
            text={"Let's get started"}
            onPress={() => props.navigation.navigate("ProfilePicName")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default GetStarted;

const styles = StyleSheet.create({
  screen: {
    width: WIDTH,
    height: HEIGHT,
    marginTop: HEIGHT * 0.022,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  container: {
    padding: WIDTH * 0.05,
    position: "relative",
  },
  hi: {
    paddingTop: WIDTH * 0.1,
    marginBottom: WIDTH * 0.02,
    color: "#00285c",
    fontSize: WIDTH * 0.12,
    fontFamily: "Poppins-Medium",
  },
  info: {
    color: "white",
    fontSize: WIDTH * 0.05,
    fontFamily: "Poppins",
  },
  imageContainer: {
    paddingTop: WIDTH * 0.1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
