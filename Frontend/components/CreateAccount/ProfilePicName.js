import React from 'react';


import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";

import DefaultButton from "../Buttons/DefaultButton"
import DefaultInput from '../InputText/DefaultInput';
import InputText from '../InputText/InputText';


function ProfilePicName() {
    return <View style={styles.screen}>
      
      <View style={styles.container}>

        <View>
          <Image source={require("../../Assets/TestPictures/avatar.png")}></Image>
        </View>

        <DefaultInput  placeholder="Please enter your name" />
        <DefaultInput  placeholder="Please enter your phone number" />

        <DefaultButton text={"Continue"} />
      </View>
    </View>;
}

export default ProfilePicName;


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
    display:"flex",
    justifyContent:"center"
    
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