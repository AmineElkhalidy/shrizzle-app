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

function SocialButton({ handle, isSet, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.socialButton}>
        <Image source={handle.icon} style={styles.socialIcon}></Image>
        {isSet && <Checkmark style={styles.checkmark} />}
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
