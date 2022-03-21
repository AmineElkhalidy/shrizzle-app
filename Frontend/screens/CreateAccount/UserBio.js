import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

//colors
import Colors from "../../constants/Colors";

//buttons
import DefaultButton from "../../components/Buttons/DefaultButton";
import SkipButton from "../../components/Buttons/SkipButton";

//contexts
import { useCreateUserContext } from "../../contexts/CreateUserContext";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function UserBio(props) {
  const [bioInput, setBioInput] = useState("");
  const { setBio } = useCreateUserContext();

  const bioHandler = (text) => {
    setBioInput(text);
  };

  const onPressHandler = () => {
    setBio(bioInput);
    props.navigation.navigate("GetSocialHandles");
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../../Assets/TestPictures/orange_bg_bottom.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Can you tell us a bit about yourself</Text>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={60}>
            <View style={styles.inputContainer}>
              <View style={styles.inputTextContainer}>
                <TextInput
                  style={styles.input}
                  multiline={true}
                  numberOfLines={12}
                  placeholder="Please enter your bio..."
                  onChangeText={bioHandler}
                  textAlign="left"
                />
              </View>
            </View>
            <DefaultButton text="Continue" onPress={onPressHandler} />

            <SkipButton
              color="#fff"
              onPress={() => props.navigation.navigate("GetSocialHandles")}
            />
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default UserBio;

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    marginTop: hp("4.0%"),
  },
  container: {
    paddingVertical: hp("0.1%"),
    paddingHorizontal: wp("6%"),
    position: "relative",
    marginTop: hp("0.3%"),
  },

  title: {
    paddingTop: hp("2%"),
    marginBottom: hp("8%"),
    color: "#00285c",
    fontSize: wp("12%"),
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: "100%",
    marginTop: wp("12%"),
    alignItems: "center",
    justifyContent: "center",
  },
  inputTextContainer: {
    width: "95%",
    borderColor: Colors.blue,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: wp("5%"),
    overflow: "hidden",
  },
  input: {
    width: "100%",
    textAlignVertical: "top",
    fontFamily: "Poppins-Medium",
    fontSize: wp("4.75%"),
    padding: hp("2.5%"),
  },
});
