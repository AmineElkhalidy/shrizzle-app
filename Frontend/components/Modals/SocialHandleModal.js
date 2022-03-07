import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
  TextInput,
  Modal,
  View,
} from "react-native";

import SkipButton from "../Buttons/SkipButton";
import DefaultButton from "../Buttons/DefaultButton";
import DefaultInput from "../InputText/DefaultInput";
import Colors from "../../constants/Colors";
import { useCreateUserContext } from "../../contexts/CreateUserContext";

function SocialHandleModal({ handler, setIsModalOpen }) {
  const [inputText, setInputText] = useState("");
  const {
    setPhone,
    setEmail,
    setFacebook,
    setTwitter,
    setInstagram,
    setSnapshat,
    setDiscord,
    setTiktok,
    setLinkedIn,
  } = useCreateUserContext();

  const setHandler = (handlerName) => {
    switch (handlerName) {
      case "Phone Number":
        setPhone(inputText);
        return;
      case "Email Address":
        setEmail(inputText);
        return;
      case "Facebook Profile":
        setFacebook(inputText);
        return;
      case "Twitter Profile":
        setTwitter(inputText);
        return;
      case "Instagram Profile":
        setInstagram(inputText);
        return;
      case "Snapchat Profile":
        setSnapshat(inputText);
        return;
      case "Discord Profile":
        setDiscord(inputText);
        return;
      case "Tiktok Profile":
        setTiktok(inputText);
        return;
      case "LinkedIn Profile":
        setLinkedIn(inputText);
        return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{handler.title}</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={handler.inputPlaceholder}
              onChangeText={(text) => setInputText(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setHandler(handler.title);
            setIsModalOpen(false);
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Confirm</Text>
          </View>
        </TouchableOpacity>
        <SkipButton
          text="Cancel"
          color="#fff"
          onPress={() => setIsModalOpen(false)}
        />
      </View>
    </View>
  );
}
export default SocialHandleModal;

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  modalContainer: {
    position: "absolute",
    top: -Dimensions.get("window").width * 1.2,

    //screen dimensions

    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.8,
    backgroundColor: Colors.blue,

    //border
    borderRadius: Dimensions.get("window").width * 0.025,
    //padding & margin

    //other styling
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: Dimensions.get("window").width * 0.08,
    marginBottom: Dimensions.get("window").width * 0.08,
  },
  textInputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: 300,
    height: 40,
    borderColor: Colors.orange,
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 8,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  input: {
    marginHorizontal: Dimensions.get("window").width * 0.05,
    textAlign: "center",
    color: Colors.blue,
  },

  button: {
    borderRadius: Dimensions.get("window").width * 0.08,
    paddingVertical: Dimensions.get("window").width * 0.02,
    margin: Dimensions.get("window").width * 0.08,
    marginHorizontal: Dimensions.get("window").width * 0.08,
    paddingHorizontal: Dimensions.get("window").width * 0.1,
    marginBottom: Dimensions.get("window").width * 0.04,
    backgroundColor: Colors.orange,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
