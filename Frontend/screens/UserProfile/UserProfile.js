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

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

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
    console.log(userData);
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
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  screen: {
    width: WIDTH,
    height: HEIGHT,
    position: "relative",
  },
  cover: {
    width: WIDTH,
    height: HEIGHT * 0.28,
    backgroundColor: "#000",
  },
  profile: {
    paddingHorizontal: WIDTH * 0.05,
  },

  profileNameContainer: {
    width: WIDTH,
    flexDirection: "row",
    marginTop: WIDTH * 0.02,
  },

  profilePic: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.25,
    borderRadius: WIDTH * 0.5,
    marginTop: -WIDTH * 0.1,
    borderWidth: 2,
    borderColor: "#edd",
  },

  profileName: {
    marginTop: WIDTH * 0.01,
    marginLeft: WIDTH * 0.04,
    fontSize: WIDTH * 0.05,
    fontFamily: "Poppins",
  },

  bio: {
    marginTop: WIDTH * 0.05,
    color: Colors.greyText,
    fontFamily: "Poppins",
  },

  title: {
    marginTop: WIDTH * 0.03,
    fontSize: WIDTH * 0.05,
    fontFamily: "Poppins",
  },
});
