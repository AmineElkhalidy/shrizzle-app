import React, { useEffect } from "react";
import { ActivityIndicator, Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCreateUserContext } from "../../contexts/CreateUserContext";
import { editUserProfile } from "../../helpers/userDataHelpers/editUserProfileHelper";
import { getUserData } from "../../helpers/userDataHelpers/getUserDataHelper";

const LoadingAccount = (props) => {
  useEffect(() => {
    handleSignUp();
  }, []);

  const { token, setUserData } = useAuthContext();

  const {
    bio,
    url,
    phone,
    email,
    website,
    facebook,
    twitter,
    instagram,
    snapshat,
    discord,
    whatsapp,
    tiktok,
    linkedIn,
  } = useCreateUserContext();

  const handleSignUp = async () => {
    try {
      const result = await editUserProfile(
        true,
        false,
        phone,
        bio,
        facebook,
        twitter,
        discord,
        "",
        linkedIn,
        url,
        snapshat,
        whatsapp,
        instagram,
        website,
        email,
        tiktok,
        token
      );

      if (result.status === 200 && result.data.data.updateProfile !== null) {
        const getUserResult = await getUserData(token);
        console.log(getUserResult);
        if (
          getUserResult.status === 200 &&
          getUserResult.data.data.getUserData !== null
        ) {
          setUserData(getUserResult.data.data.getUserData);
          props.navigation.navigate("AccountCreated");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.screen}>
      <View>
        <ActivityIndicator size="large" color={Colors.orange} />
        <Text style={styles.text}>Creating your account...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue,
  },
  text: {
    color: "white",
    marginTop: 10,
  },
});

export default LoadingAccount;
