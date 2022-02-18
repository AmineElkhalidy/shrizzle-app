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
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.socialButton}>
        <Image source={handle.icon} style={styles.socialIcon}></Image>
        {isHandlerSet(handle.title) && <Checkmark style={styles.checkmark} />}
      </View>
    </TouchableOpacity>
  );
}

export default SocialButton;

const styles = StyleSheet.create({
  socialButton: {
    //screen dimensions
    width: Dimensions.get("window").width * 0.18,
    height: Dimensions.get("window").width * 0.18,

    //other styling
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: Dimensions.get("window").width * 0.035,
  },
  socialIcon: {
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").width * 0.2,
    overflow: "hidden",
    borderRadius: Dimensions.get("window").width * 0.02,
  },

  checkmark: {
    position: "absolute",
    top: -Dimensions.get("window").width * 0.03,
    right: -Dimensions.get("window").width * 0.03,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
