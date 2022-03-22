import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import NavBar from "../../components/Navbar/NavBar";

//contexts
import { useAuthContext } from "../../contexts/AuthContext";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// Testing image
import Img from "../../Assets/TestPictures/avatar.png";

//helpers
import { getUserData } from "../../helpers/userDataHelpers/getUserDataHelper";
import Colors from "../../constants/Colors";
import Connection from "../../components/Connections/Connection";
import AddProfile from "../../components/Modals/AddProfile";
import ShareProfile from "../../components/Modals/ShareProfile";

const OverView = (props) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
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
      {/* ===== COVER ===== */}
      <Image style={styles.cover} source={DEFAULT_COVER} />

      <View>
        <Image style={styles.profilePic} source={getProfilePic()} />

        {/* ===== Profile NAME ===== */}
        <Text style={styles.profileName}>{userData?.fullName}</Text>
        <Text style={styles.personalProfile}>Personal Profile</Text>

        {/* ===== BUTTONS ===== */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => setIsAddModalOpen(true)}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Contact</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.shareButton}>
              <Text style={styles.buttonText}>Share profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.lastConnection}>
          <Text style={styles.title}>Latest Connection</Text>

          <Connection
            profileImage={Img}
            profileName="Amine Elkhalidy"
            profileType="Business Profile"
            profileStatus="Connected Now"
          />
        </View>
      </View>

      {isAddModalOpen && <AddProfile setIsAddModalOpen={setIsAddModalOpen} />}
      {isShareModalOpen && (
        <ShareProfile setIsShareModalOpen={setIsShareModalOpen} />
      )}

      <NavBar navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    width: wp("100%"),
    height: hp("100%"),
    flex: 1,
  },
  cover: {
    width: wp("100%"),
    height: hp("28%"),
    backgroundColor: "#000",
  },
  profilePic: {
    width: wp("50%"),
    height: wp("50%"),
    borderRadius: wp("50%"),
    marginTop: wp("-25%"),
    marginLeft: wp("22%"),
    borderWidth: 2,
    borderColor: "#edd",
  },
  profileName: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: wp("5%"),
    marginLeft: wp("-5%"),
    marginBottom: wp("2%"),
    fontSize: wp("8%"),
    fontFamily: "Poppins-Medium",
  },
  personalProfile: {
    color: "#808080",
    marginLeft: wp("-5%"),
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: wp("5%"),
  },
  addButton: {
    width: wp("40%"),
    borderRadius: wp("8%"),
    padding: wp("4%"),
    marginRight: wp("4%"),
    marginBottom: wp("4%"),
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  shareButton: {
    width: wp("40%"),
    borderRadius: wp("8%"),
    padding: wp("4%"),
    marginLeft: wp("2%"),
    marginBottom: wp("4%"),
    backgroundColor: Colors.orange,
  },

  addButtonText: {
    color: Colors.blue,
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  lastConnection: {
    paddingLeft: wp("5%"),
  },
  title: {
    marginTop: wp("5%"),
    fontWeight: "bold",
    fontSize: wp("6.5%"),
    color: "#111",
  },
});

export default OverView;

let DEFAULT_COVER = {
  uri: "https://firebasestorage.googleapis.com/v0/b/shrizzle-82093.appspot.com/o/images%2Fcover.jpg?alt=media&token=f3d9770c-1612-45ac-bfaa-95f06c1e46d3",
};
