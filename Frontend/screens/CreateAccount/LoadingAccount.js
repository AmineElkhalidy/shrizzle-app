import axios from "axios";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, StyleSheet, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { API_URL } from "../../constants/api";
import Colors from "../../constants/Colors";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCreateUserContext } from "../../contexts/CreateUserContext";
import { editProfileHelper } from "../../helpers/userDataHelpers/editProfileHelper";
import { editUserProfile } from "../../helpers/userDataHelpers/editUserProfileHelper";
import { getUserData } from "../../helpers/userDataHelpers/getUserDataHelper";

const LoadingAccount = (props) => {
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

  useEffect(() => {
    handleSignUp();
  }, []);

  const handleSignUp = async () => {
    try {
      const result = await axios.post(
        API_URL,
        {
          query: `mutation {updateProfile(profileInfoInput: {personalProfile: true,businessProfile: false, 
            phoneNumber: "${phone}",bio: "${bio}",facebook:"${facebook}", twitter: "${twitter}", discord: "${discord}", address: "${discord}", linkedIn: "${linkedIn}", profilePic:"${url}",snapshat: "${snapshat}",  instagram:"${instagram}", whatsapp:"${whatsapp}", customLink: "${website}", tiktok:"${tiktok}"}) 
            {
            fullName
            personalProfile {
              bio
                          profilePic                   
            }                
          }   
          }`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (result.status === 200 && result.data.data.updateProfile !== null) {
        const getUserResult = await getUserData(token);
        if (
          getUserResult.status === 200 &&
          getUserResult.data.data.getUserData !== null
        ) {
          setUserData(getUserResult.data.data.getUserData);
          props.navigation.navigate("AccountCreated");
        }
      }
    } catch (err) {
      console.log(err.response);
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
    marginTop: 15,
    fontFamily: "Poppins",
    fontSize: widthPercentageToDP("5%"),
  },
});

export default LoadingAccount;
