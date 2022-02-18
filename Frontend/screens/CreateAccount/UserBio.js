import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

//colors
import Colors from "../../constants/Colors";

//buttons
import DefaultButton from "../../components/Buttons/DefaultButton";
import SkipButton from "../../components/Buttons/SkipButton";

//contexts
import { useCreateUserContext } from "../../contexts/CreateUserContext";

function UserBio() {
  const { setBio } = useCreateUserContext();

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../../Assets/TestPictures/orange_bg_bottom.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Can you tell us a bit about yourself</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={15}
                placeholder="Please enter your bio..."
                onChangeText={(bioInput) => setBio(bioInput)}
                textAlign="left"
              />
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={""}>
            <DefaultButton text="Continue" />
          </TouchableOpacity>

          <TouchableOpacity>
            <SkipButton color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default UserBio;

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    position: "relative",
    marginTop: 10,
  },

  title: {
    paddingTop: 30,
    marginBottom: 40,
    color: "#00285c",
    fontSize: 48,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: "100%",
    marginTop: 65,
  },
  inputTextContainer: {
    width: "97%",
    borderColor: Colors.blue,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 25,
  },
  input: {
    width: "100%",
    textAlignVertical: "top",
    margin: 15,
    fontFamily: "Poppins",
    fontSize: 16,
  },
});
