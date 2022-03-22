import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

// Importing the icon from AntDesign
import { AntDesign } from "@expo/vector-icons";
import NavBar from "../../components/Navbar/NavBar";
// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Testing image
import Img from "../../Assets/TestPictures/avatar.png";
import Connection from "../../components/Connections/Connection";

const Connections = (props) => {
  return (
    <View style={styles.screen}>
      {/* Text Container */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>My Connections</Text>
      </View>
      {/* Search Bar Container */}
      <View style={styles.searchContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Search by name, date or location"
            style={styles.textInput}
          />
          <AntDesign
            name="search1"
            size={20}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>
      {/* Liste of connections */}
      {/* the scrollView is going to be added later, but the best choice is to add a flatList because we don't know how much of connections a user can have... */}
      <View style={styles.connections}>
        {/* reusable component */}
        <Connection
          profileImage={Img}
          profileName="Amine Elkhalidy"
          profileType="Business Profile"
          profileStatus="Connected Now"
        />
      </View>

      <NavBar navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
    flex: 1,
  },

  textContainer: {
    height: "10%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: wp("10%"),
    marginBottom: hp("1%"),
    marginTop: hp("2%"),
  },
  text: {
    fontSize: wp("7%"),
    fontFamily: "Poppins-Bold",
  },

  searchContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("1%"),
  },
  textInputContainer: {
    width: "80%",
    height: "70%",
    borderWidth: 1,
    borderRadius: wp("10%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
  },
  textInput: {
    width: "75%",
    fontFamily: "Poppins",
  },
  icon: {
    width: "10%",
  },

  connections: {
    height: "80%",
    width: "100%",
    alignItems: "center",
  },
  // connection: {
  //   width: "80%",
  //   height: "15%",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: hp("2%"),
  // },
  // imageContainer: {
  //   width: "30%",
  //   height: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginRight: wp("3%"),
  // },
  // image: {
  //   height: "90%",
  //   width: "90%",
  // },

  // details: {
  //   width: "70%",
  //   height: "100%",
  //   justifyContent: "center",
  // },
  // profileName: {
  //   fontFamily: "Poppins-Medium",
  //   fontSize: wp("5%"),
  // },
  // profileType: {
  //   fontFamily: "Poppins",
  //   fontSize: wp("4%"),
  // },
  // status: {
  //   fontFamily: "Poppins",
  //   fontSize: wp("3.1%"),
  // },
});

export default Connections;
