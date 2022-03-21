import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//constants
import Colors from "../../constants/Colors";

function ShareProfile({ setIsShareModalOpen }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.message}>
        You profile link is copied to the clipboard!
      </Text>
    </View>
  );
}

export default ShareProfile;

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    width: wp("90%"),
    height: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: wp("10%"),
    paddingVertical: wp("15%"),
    borderRadius: wp("5%"),
    top: wp("70%"),
    left: wp("5%"),
    borderColor: Colors.orange,
    borderWidth: 1,
    flex: 1,
  },

  addButton: {
    width: "100%",
    borderRadius: wp("8%"),
    padding: wp("4%"),
    marginRight: wp("4%"),
    marginBottom: wp("4%"),
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  shareButton: {
    width: "100%",
    borderRadius: wp("8%"),
    padding: wp("4%"),
    marginBottom: wp("4%"),
    backgroundColor: Colors.blue,
  },

  addButtonText: {
    color: Colors.blue,
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  closeText: {
    color: "#111",
    textAlign: "center",
    marginTop: wp("6%"),
    textDecorationLine: "underline",
    fontSize: wp("4%"),
    fontFamily: "Poppins-Bold",
  },
});
