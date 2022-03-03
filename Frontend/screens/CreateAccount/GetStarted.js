import React from "react";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";

import WelcomeImg from "../../Assets/TestPictures/welcome_img.svg";
import DefaultButton from "../../components/Buttons/DefaultButton";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function GetStarted(props) {
  return (
    <ScrollView style={styles.screen}>
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
    </ScrollView>
  );
}

export default GetStarted;

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
    marginTop: hp("2.2%"),
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  container: {
    padding: wp("5%"),
    position: "relative",
  },
  hi: {
    paddingTop: hp("3%"),
    marginBottom: hp("1%"),
    color: "#00285c",
    fontSize: wp("12%"),
    fontFamily: "Poppins-Medium",
  },
  info: {
    color: "white",
    fontSize: wp("5%"),
    fontFamily: "Poppins",
  },
  imageContainer: {
    paddingTop: wp("10%"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
