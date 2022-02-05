import React from 'react';


import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";

import DefaultButton from "../Buttons/DefaultButton"


function GetStarted() {
    return <ImageBackground source={require("../../Assets/TestPictures/orange_bg.png")} style={styles.screen}>
      
      <View style={styles.container}>
        <Text style={styles.hi}>Hi,</Text>
        <Text style={styles.info}>We need some informations about you </Text>
        <Text style={styles.info}>to setup your profile</Text>

        <View style={styles.imageContainer}>
          <Image source={require("../../Assets/TestPictures/welcome_img.png")}></Image>
        </View>

        <DefaultButton text={"Let's get started"} />
      </View>
    </ImageBackground>;
}

export default GetStarted;


const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: 0,
  },
  container:{
    padding: 20,
    position: "relative",
    
  },
  hi: {
    paddingTop:60,
    marginBottom:10,
    color: "#00285c",
    fontSize: 50,
    fontWeight:"bold",
  },
  info: {
    color: "white",
    fontSize: 15,
  },
  imageContainer:{
    paddingTop:100,
    display:"flex",
    justifyContent: "center",
    alignItems:"center"
  }
});