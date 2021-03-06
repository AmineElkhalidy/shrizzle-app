import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import Colors from "../../constants/Colors";
import { getUserData } from "../../helpers/userDataHelpers/getUserDataHelper";
import SocialHandle from "../../components/MyProfile/SocialHandle";
import NavBar from "../../components/Navbar/NavBar";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function UserProfile(props) {
  const { userData, setUserData, token } = useAuthContext();

  const getUser = async () => {
    try {
      //get the user data
      const getUserResult = await getUserData(token);
      if (
        getUserResult.status === 200 &&
        getUserResult.data.data.getUserData !== null
      ) {
        setUserData(getUserResult.data.data.getUserData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let Image_Http_URL = {
    uri:
      "https://firebasestorage.googleapis.com/v0/b/shrizzle-82093.appspot.com/o/images%2Fcover.jpg?alt=media&token=f3d9770c-1612-45ac-bfaa-95f06c1e46d3",
  };

  const getProfilePic = () => {
    if (userData?.personalProfile.profilePic !== "") {
      return { uri: userData?.personalProfile.profilePic };
    } else {
      return Image_Http_URL;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* ===== COVER ===== */}
        <View>
          <Image style={styles.cover} source={Image_Http_URL} />
        </View>
        {/* ===== Profile  ===== */}
        <View style={styles.profile}>
          {/* ===== Profile INFO ===== */}
          <View style={styles.profileNameContainer}>
            {/* ===== Profile PICTURE ===== */}
            <View>
              <Image style={styles.profilePic} source={getProfilePic()} />
            </View>

            {/* ===== Profile NAME ===== */}
            <Text style={styles.profileName}>{userData?.fullName}</Text>
          </View>

          {/* ===== Profile INFO ===== */}
          <Text style={styles.bio}>{userData?.personalProfile?.bio}</Text>

          <ScrollView>
            <Text style={styles.title}>Social Media</Text>
            <View style={styles.socialsContainer}>
              {/* ===== Profile Social Media Icons ===== */}
              <SocialHandle personalProfile={userData?.personalProfile} />
            </View>
          </ScrollView>
        </View>
      </View>
      <NavBar navigation={props.navigation} />
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
    flex: 1,
    position: "relative",
  },
  cover: {
    width: wp("100%"),
    height: hp("28%"),
    backgroundColor: "#000",
  },
  profile: {
    paddingHorizontal: wp("5%"),
  },

  profileNameContainer: {
    width: wp("100%"),
    flexDirection: "row",
    marginTop: wp("2%"),
  },

  profilePic: {
    width: wp("35%"),
    height: wp("35%"),
    borderRadius: wp("50%"),
    marginTop: wp("-15%"),
    borderWidth: 2,
    borderColor: "#edd",
  },

  profileName: {
    marginTop: wp("1%"),
    marginLeft: wp("4%"),
    fontSize: wp("7"),
    fontFamily: "Poppins-Medium",
  },

  bio: {
    marginTop: wp("5%"),
    color: Colors.greyText,
    fontFamily: "Poppins",
  },

  title: {
    marginTop: wp("3%"),
    fontSize: wp("7"),
    fontFamily: "Poppins-Medium",
  },
});
