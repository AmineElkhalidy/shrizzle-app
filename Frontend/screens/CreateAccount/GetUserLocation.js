import React from 'react';


import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";

import DefaultButton from "../../components/Buttons/DefaultButton"
import SkipButton from "../../components/Buttons/SkipButton"


function GetUserLocation({name}) {
    return <ImageBackground source={require("../../Assets/TestPictures/orange_bg.png")} style={styles.screen}>
      
      <View style={styles.container}>
        <Text style={styles.hi}>Hi {name},</Text>
        <Text style={styles.info}>Allow us to help you meet new people by  </Text>
        <Text style={styles.info}>sharing your location</Text>

        <View style={styles.imageContainer}>
          <Image source={require("../../Assets/TestPictures/location_img.png")}></Image>
        </View>

        <DefaultButton text={"Detect My location"} />
        <SkipButton />
      </View>
    </ImageBackground>;
}

export default GetUserLocation;


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