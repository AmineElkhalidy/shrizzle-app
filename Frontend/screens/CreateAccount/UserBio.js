import React from 'react';


import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import Colors from '../../constants/Colors';

import DefaultButton from "../../components/Buttons/DefaultButton"
import SkipButton from "../../components/Buttons/SkipButton"
import DefaultInput from '../../components/InputText/DefaultInput';


function UserBio() {
    return <ImageBackground source={require("../../Assets/TestPictures/orange_bg_bottom.png")} style={styles.screen}>
      
      <View style={styles.container}>
        <Text style={styles.title}>Can you tell us a bit about yourself</Text>

        <View  style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <TextInput 
              style={styles.input}
              multiline={true} 
              numberOfLines={15} 
              placeholder="Please enter your bio..."
            />
          </View>
        </View>


        <DefaultButton text="Continue" />
        <SkipButton color="#fff"/>
      </View>
    </ImageBackground>;
}

export default UserBio;


const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: 0,
  },
  container:{
    padding: 10,
    paddingHorizontal:30,
    position: "relative",
    
  },
  
  title: {
    paddingTop:30,
    marginBottom:40,
    color: "#00285c",
    fontSize: 48,
    fontWeight:"bold",
  },
  inputContainer:{
    width: "100%",
    marginTop:30
    
  },
  inputTextContainer: {
    width: 350,
    borderColor: Colors.blue,
    backgroundColor:"white",
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 8,
    paddingVertical:0,
  },
  input:{
    width: 250,
    marginHorizontal: 40,
    textAlign:"left"
  }
});