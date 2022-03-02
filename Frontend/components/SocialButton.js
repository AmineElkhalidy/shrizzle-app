import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
  View,
} from "react-native";

import Checkmark from "../Assets/SocialMediaIcons/checkmark.svg";
import { useCreateUserContext } from "../contexts/CreateUserContext";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

function SocialButton({ handle, isSet, onPress }) {
  const {
    phone,
    email,
    facebook,
    twitter,
    instagram,
    snapshat,
    discord,
    tiktok,
    linkedIn,
  } = useCreateUserContext();

  //this function checks if the handler is not empty and set by the user
  const isHandlerSet = (handlerName) => {
    switch (handlerName) {
      case "Phone Number":
        return phone !== "";
      case "Email Address":
        return email !== "";
      case "Facebook Profile":
        return facebook !== "";
      case "Twitter Profile":
        return twitter !== "";
      case "Instagram Profile":
        return instagram !== "";
      case "Snapchat Profile":
        return snapshat !== "";
      case "Instagram Profile":
        return discord !== "";
      case "Tiktok Profile":
        return tiktok !== "";
      case "LinkedIn Profile":
        return linkedIn !== "";
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.socialButton}>
        <Image source={handle.icon} style={{ ...styles.socialIcon }} />
        {isHandlerSet(handle.title) && <Checkmark style={styles.checkmark} />}
      </View>
    </TouchableOpacity>
  );
}

export default SocialButton;

const styles = StyleSheet.create({
  socialButton: {
    //screen dimensions
    width: WIDTH * 0.18,
    height: WIDTH * 0.18,

    //other styling
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    margin: WIDTH * 0.035,
  },
  socialIcon: {
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
    overflow: "hidden",
    borderRadius: WIDTH * 0.01,
  },

  checkmark: {
    position: "absolute",
    top: -WIDTH * 0.03,
    right: -WIDTH * 0.03,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
