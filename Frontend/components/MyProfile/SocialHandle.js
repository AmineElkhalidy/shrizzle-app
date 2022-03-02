import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { PROFILE } from "../../constants/profileStructure";
import { ICONS_PATH } from "../../constants/SocialIcons";

const WIDTH = Dimensions.get("window").width;

function SocialHandle({ personalProfile }) {
  const [socialHandles, setSocialHandles] = useState([]);

  useEffect(() => {
    for (const [key, value] of Object.entries(personalProfile)) {
      //check if the value is empty or null or undefined so we skip it
      if (value !== "" && value !== null && value !== undefined) {
        //we got the key and we want the icon path for it
        //if the key exists in the profile structure we have
        if (PROFILE.includes(key)) {
          //now that the key actually exists in the profile structure we have
          //we will need to get the convenient icon for it
          //check if the name of the icon match the key of the handle
          const result = ICONS_PATH.find((element) => element.name === key);
          if (result) {
            let socialHandleTemp = {
              name: result.name,
              icon: result.icon,
              value: value,
            };
            //add the social handle to the social handles array
            setSocialHandles((oldData) => [...oldData, socialHandleTemp]);
          }
        }
      }
    }
  }, []);

  return (
    <View style={styles.socialsContainer}>
      {socialHandles.map((handle) => (
        <TouchableOpacity onPress={() => console.log(handle.value)}>
          <View style={styles.socialButton}>
            <Image source={handle.icon} style={{ ...styles.socialIcon }} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default SocialHandle;

const styles = StyleSheet.create({
  socialsContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
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
});
