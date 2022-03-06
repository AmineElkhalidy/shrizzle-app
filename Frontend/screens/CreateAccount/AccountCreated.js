import React from "react";

import { StyleSheet, View, Dimensions, Image } from "react-native";

import DefaultButton from "../../components/Buttons/DefaultButton";
import Colors from "../../constants/Colors";
import Avatar from "../../Assets/TestPictures/avatar.png";
import BodyText from "../../components/Text/BodyText";
import { useAuthContext } from "../../contexts/AuthContext";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

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
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 21,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    color: Colors.blue,
  },
  container: {
    width: "90%",
    height: HEIGHT * (1 / 2),
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
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
    color: Colors.blue,
    marginBottom: 0,
    fontFamily: "Poppins-Medium",
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
});
