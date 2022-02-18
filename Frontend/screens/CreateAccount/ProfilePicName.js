import React, { useState } from "react";

//icons
import Avatar from "../../Assets/TestPictures/avatar.svg";
import CameraIcon from "../../Assets/TestPictures/camera_icon.svg";
import Logo from "../../Assets/TestPictures/Logo_full.svg";


//image picker
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

//uuid
import uuid from "react-native-uuid";

//components
import DefaultButton from "../../components/Buttons/DefaultButton";
import DefaultInput from "../../components/InputText/DefaultInput";
import InputText from "../../components/InputText/InputText";

//firebase
import { firebaseStorage } from "../../firebase/index";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

//contexts
import { useCreateUserContext} from "../../contexts/CreateUserContext"

function ProfilePicName(props) {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const {setUrl} = useCreateUserContext();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [6, 6],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadFiles(result);
    }
  };

  const uploadFiles = async (image) => {
    try {
      const storageRef = ref(firebaseStorage, `images/${uuid.v4()}`);
      console.log(storageRef);
      //convert image to array of bytes
      const img = await fetch(image.uri);
      const bytes = await img.blob();
      console.log(bytes);

      const uploadTask = uploadBytesResumable(storageRef, bytes);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Setup your profile</Text>

        <TouchableOpacity activeOpacity={0.8} onPress={pickImage}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200, borderRadius: 100 }}
                />
              ) : (
                <Avatar />
              )}
              {image ? <View></View> : <CameraIcon style={styles.cameraIcon} />}
            </View>
          </View>
        </TouchableOpacity>

        <DefaultButton
          text="Continue"
          onPress={() => props.navigation.navigate("UserBio")}
        />

        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    </View>
  );
}

export default ProfilePicName;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: 0,
  },
  container: {
    padding: 20,
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    paddingTop: 30,
    marginBottom: 40,
    color: "#00285c",
    fontSize: 50,
    fontWeight: "bold",
  },
  avatarContainer: {
    width: "100%",
    marginBottom: 30,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "relative",
  },
  cameraIcon: {
    position: "absolute",
    top: -15,
    right: 0,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
