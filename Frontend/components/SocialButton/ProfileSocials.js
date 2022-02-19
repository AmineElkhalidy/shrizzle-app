import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
} from "react-native";
import { useAuthContext } from "../../contexts/AuthContext";

export const Social = ({ Icon, onPress }) => {
  const { userData } = useAuthContext();
  for (const [key, value] of Object.entries(userData.personalProfile)) {
    console.log(`${key}: ${value}`);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>{Icon}</View>
    </TouchableOpacity>
  );
};

function ProfileSocials(data) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>{Icon}</View>
    </TouchableOpacity>
  );
}

export default ProfileSocials;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderRadius: 50,
    paddingVertical: 10,
    margin: 30,
    marginHorizontal: 50,
    paddingHorizontal: 0,
    marginBottom: 10,
    backgroundColor: "#00285c",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
