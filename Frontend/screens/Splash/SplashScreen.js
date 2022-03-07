import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import Logo from "../../Assets/images/Logo/Logo.svg";
import BodyText from "../../components/Text/BodyText";

const SplashScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <BodyText style={styles.text}>SHRIZZLE</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue,
  },
  logoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  theLogo: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
  },
});
export default SplashScreen;
