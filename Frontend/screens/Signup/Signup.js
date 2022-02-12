import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import BodyText from "../../components/Text/BodyText";
import Colors from "../../constants/Colors";
import InputText from "../../components/InputText/InputText";
import MainButton from "../../components/UI/MainButton";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

const Signup = (props) => {
  const [changeEyeIcon, setChangeEyeIcon] = useState(false);

  const changeEyeIconHandler = () => {
    setChangeEyeIcon((prevState) => !prevState);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.signUpContainer}>
        <BodyText style={styles.signUpText}>Create Your Account</BodyText>

        <View style={styles.inputContainer}>
          <AntDesign style={styles.icon} name="user" size={18} color="black" />
          <InputText
            autoCapitalize="none"
            keyboardType="default"
            placeholder="Full Name"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Entypo style={styles.icon} name="email" size={18} color="black" />
          <InputText
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email address"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity onPress={changeEyeIconHandler} activeOpacity={1} >
          <View style={styles.inputContainer}>
            <Feather style={styles.icon} name="lock" size={18} color="black" />
            <InputText
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Password"
              secureTextEntry={changeEyeIcon ? false:true}
              autoCorrect={false}
            />

            <View style={styles.iconContainer}>
              <Entypo
                style={styles.eyeIcon}
                name={changeEyeIcon ? "eye" : "eye-with-line"}
                size={20}
                color="black"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <MainButton style={styles.signUpButton}>Sign Up</MainButton>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomPart}>
        <View style={styles.circle}></View>
        <View style={styles.textContainer}>
          <BodyText style={styles.title}>Already have an account?</BodyText>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate("Login")}
          >
            <MainButton style={styles.buttonContainer}>Login</MainButton>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  signUpContainer: {
    height: Dimensions.get("window").height / 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  signUpText: {
    color: Colors.blue,
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
    paddingHorizontal: 12,
    flexDirection: "row",
  },
  passwordInput: {
    width: "98%",
  },
  icon: {
    marginRight: 5,
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 20,
  },
  signUpButton: {
    backgroundColor: Colors.blue,
    width: 125,
    height: 35,
    borderRadius: 25,
    marginVertical: 10,
  },
  bottomPart: {
    height: Dimensions.get("window").height / 1.9,
  },
  circle: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 175,
    borderTopRightRadius: 175,
    backgroundColor: Colors.blue,
    position: "absolute",
    bottom: -75,
  },
  textContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginVertical: 135,
  },
  title: {
    fontFamily: "Poppins-Bold",
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
});

export default Signup;
