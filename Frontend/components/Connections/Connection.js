import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Connection = ({
  profileImage,
  profileName,
  profileType,
  profileStatus,
}) => {
  return (
    <View style={styles.connection}>
      <View style={styles.imageContainer}>
        <Image source={profileImage} style={styles.image} />
      </View>

      <View style={styles.details}>
        <Text style={styles.profileName}>{profileName}</Text>
        <Text style={styles.profileType}>{profileType}</Text>
        <Text style={styles.status}>{profileStatus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  connection: {
    width: wp("90%"),
    height: hp("16%"),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
    marginTop: wp("2%"),
  },
  imageContainer: {
    width: wp("30%"),
    height: wp("30%"),
    alignItems: "center",
    justifyContent: "center",
    marginRight: wp("2%"),
  },
  image: {
    height: "90%",
    width: "90%",
  },

  details: {
    width: wp("60%"),
    height: "100%",
    justifyContent: "center",
  },
  profileName: {
    fontFamily: "Poppins-Medium",
    fontSize: wp("5%"),
  },
  profileType: {
    fontFamily: "Poppins",
    fontSize: wp("4%"),
  },
  status: {
    fontFamily: "Poppins",
    fontSize: wp("3.1%"),
  },
});

export default Connection;
