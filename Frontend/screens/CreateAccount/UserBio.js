import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

//colors
import Colors from "../../constants/Colors";

//buttons
import DefaultButton from "../../components/Buttons/DefaultButton";
import SkipButton from "../../components/Buttons/SkipButton";

//contexts
import { useCreateUserContext } from "../../contexts/CreateUserContext";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

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
    width: WIDTH,
    height: HEIGHT,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    marginTop: HEIGHT * 0.045,
  },
  container: {
    paddingVertical: HEIGHT * 0.0001,
    paddingHorizontal: WIDTH * 0.06,
    position: "relative",
    marginTop: HEIGHT * 0.002,
  },

  title: {
    paddingTop: HEIGHT * 0.02,
    marginBottom: HEIGHT * 0.08,
    color: "#00285c",
    fontSize: WIDTH * 0.12,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: "100%",
    marginTop: WIDTH * 0.0025,
    alignItems: "center",
    justifyContent: "center",
  },
  inputTextContainer: {
    width: "95%",
    borderColor: Colors.blue,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 25,
    overflow: "hidden",
  },
  input: {
    width: "100%",
    textAlignVertical: "top",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    padding: HEIGHT * 0.025,
  },
});
