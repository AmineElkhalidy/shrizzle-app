import React from "react";

import { StyleSheet, View, Dimensions, Image } from "react-native";

import DefaultButton from "../../components/Buttons/DefaultButton";
import Colors from "../../constants/Colors";
import Avatar from "../../Assets/TestPictures/avatar.png";
import BodyText from "../../components/Text/BodyText";
import { useAuthContext } from "../../contexts/AuthContext";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

function AccountCreated(props) {
  const { userData } = useAuthContext();
  const getProfilePic = () => {
    if (userData?.personalProfile.profilePic !== "") {
      console.log(userData.personalProfile.profilePic);
      return { uri: userData?.personalProfile.profilePic };
    } else {
      return Avatar;
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <BodyText style={styles.title}>
          Your profile was successfully created
        </BodyText>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={getProfilePic()}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <BodyText style={styles.text}>{userData.fullName}</BodyText>
        <DefaultButton
          style={styles.buttonContainer}
          text="Go To My Profile"
          onPress={() => props.navigation.navigate("MyProfile")}
        />
      </View>
    </View>
  );
}

export default AccountCreated;

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    marginBottom: hp("10%"),
  },
  title: {
    fontSize: wp("5.75%"),
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    color: Colors.blue,
  },
  container: {
    width: "90%",
    height: hp("50%"),
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: wp("5%"),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: wp("6%"),
    color: Colors.blue,
    marginBottom: 0,
    fontFamily: "Poppins-Medium",
  },
  buttonContainer: {
    paddingVertical: hp("1.65%"),
    paddingHorizontal: wp("9.5%"),
  },
});
