import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Feather } from '@expo/vector-icons';
import InputText from "../../components/InputText/InputText";
import BodyText from "../../components/Text/BodyText";
import MainButton from "../../components/UI/MainButton";
import Colors from "../../constants/Colors";

const LoginScreen = (props) => {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <View style={styles.screen}>
        <View style={styles.topPart}>
          <View style={styles.circle}></View>
          <View style={styles.textContainer}>
            <BodyText style={styles.title}>New here?</BodyText>
            <BodyText style={styles.subtitle}>
              Setup a new account with just a few clicks!
            </BodyText>
            <TouchableOpacity activeOpacity={0.5} onPress={() => props.onClick()} >
              <MainButton style={styles.buttonContainer}>Sign Up</MainButton>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomPart}>
          <BodyText style={styles.containerTitle}>Welcome Back!</BodyText>
          <View style={styles.inputContainer}>
            <InputText
              style={styles.inputContainer}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email address"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <InputText
              autoCapitalize="none"
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.rememberContainer} >
            <Feather name="square" size={20} color={Colors.blue} /><Text style={styles.rememberText} >Remember Me</Text>
          </View>

          <TouchableOpacity>
            <MainButton style={styles.loginButton}>Login</MainButton>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  topPart: {
    height: Dimensions.get("window").height / 1.9,
  },
  circle: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 175,
    borderBottomRightRadius: 175,
    backgroundColor: Colors.blue,
    position: "absolute",
    top: -180,
  },
  textContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginVertical: 50,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
  subtitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 10,
    width: 120,
    height: 35,
    borderRadius: 25,
    borderColor: Colors.orange,
    borderWidth: 1,
  },
  bottomPart: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  containerTitle: {
    color: Colors.blue,
    alignItems: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 25,
  },
  inputContainer: {
    width: 250,
    height: 40,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 8,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  rememberContainer:{
    width: '31%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  rememberText:{
      fontFamily: 'Poppins-Medium',
      color: Colors.blue
  },
  loginButton: {
    backgroundColor: Colors.blue,
    width: 125,
    height: 35,
    borderRadius: 25,
    marginVertical: 10,
  },
});

export default LoginScreen;
