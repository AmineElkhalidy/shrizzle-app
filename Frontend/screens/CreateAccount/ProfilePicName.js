import React from "react";

//icons
import Avatar from "../../Assets/TestPictures/avatar.svg";
import CameraIcon from "../../Assets/TestPictures/camera_icon.svg";
import Logo from "../../Assets/TestPictures/Logo_full.svg";

import { StyleSheet, View, Text, Image, TextInput } from "react-native";

import DefaultButton from "../../components/Buttons/DefaultButton";
import DefaultInput from "../../components/InputText/DefaultInput";
import InputText from "../../components/InputText/InputText";

function ProfilePicName(props) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Setup your profile</Text>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Avatar />
            <CameraIcon style={styles.cameraIcon} />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("GetUserLocation")}
        >
          <DefaultInput placeholder="Please enter your name" />
        </TouchableOpacity>
        <DefaultButton text="Continue" />

        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    </View>
  );
}

export default ProfilePicName;

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
    display: "flex",
    justifyContent: "center",
  },
  title: {
    paddingTop: 30,
    marginBottom: 40,
    color: "#00285c",
    fontSize: 50,
    fontWeight: "bold",
  },
  avatarContainer: {
    width: "100%",
    marginBottom: 30,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "relative",
  },
  cameraIcon: {
    position: "absolute",
    top: -15,
    right: 0,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
