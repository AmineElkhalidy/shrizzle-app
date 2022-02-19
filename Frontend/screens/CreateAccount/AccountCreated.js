import React from "react";

import { StyleSheet, View, Dimensions, Image } from "react-native";

import DefaultButton from "../../components/Buttons/DefaultButton";
import Colors from "../../constants/Colors";
import Avatar from "../../Assets/TestPictures/avatar.png";
import BodyText from "../../components/Text/BodyText";
import { useAuthContext } from "../../contexts/AuthContext";

function AccountCreated(props) {
  const { userData } = useAuthContext();
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
            source={userData?.personalProfile.profilePic || Avatar}
            resizeMode="contain"
          />
        </View>

        <BodyText style={styles.text}>{userData.fullName}</BodyText>
        <DefaultButton
          style={styles.buttonContainer}
          text="Go To My Profile"
          onPress={""}
        />
      </View>
    </View>
  );
}

export default AccountCreated;

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    color: Colors.blue,
  },
  container: {
    width: "90%",
    height: Dimensions.get("window").height * (1 / 2),
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
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: Colors.blue,
    marginBottom: 0,
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
});
