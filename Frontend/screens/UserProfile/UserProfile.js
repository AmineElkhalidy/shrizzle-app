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
import React, { useEffect } from "react";
import RoundButton from "../../components/RoundButton";
import ProfilePicture from "../../components/ProfilePicture";
import DefaultCover from "../../Assets/TestPictures/default_cover.svg";
import { useAuthContext } from "../../contexts/AuthContext";
import Colors from "../../constants/Colors";
import { MODALS_INFO } from "../../constants/SocialHandlesModal";
import SocialButton from "../../components/SocialButton";
import { getUserData } from "../../helpers/userDataHelpers/getUserDataHelper";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

function UserProfile(props) {
  const { userData, setUserData, token } = useAuthContext();

  const getUser = async () => {
    try {
      //get the user data
      const getUserResult = await getUserData(token);
      console.log(getUserResult);
      if (
        getUserResult.status === 200 &&
        getUserResult.data.data.getUserData !== null
      ) {
        setUserData(getUserResult.data.data.getUserData);
        console.log(getUserResult.data.data.getUserData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  let Image_Http_URL = {
    uri: "https://firebasestorage.googleapis.com/v0/b/shrizzle-82093.appspot.com/o/images%2Fcover.jpg?alt=media&token=f3d9770c-1612-45ac-bfaa-95f06c1e46d3",
  };
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
              <Image style={styles.profilePic} source={Image_Http_URL} />
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
    width: "100%",
    height: "100%",
    position: "relative",
    padding: 0,
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
    display: "flex",
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
  },

  bio: {
    marginTop: WIDTH * 0.05,
    color: Colors.greyText,
    fontStyle: "italic",
  },

  title: {
    marginTop: WIDTH * 0.03,
    fontSize: WIDTH * 0.05,
  },
});
