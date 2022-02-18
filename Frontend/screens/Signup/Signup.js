import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import BodyText from "../../components/Text/BodyText";
import Colors from "../../constants/Colors";
import InputText from "../../components/InputText/InputText";
import MainButton from "../../components/UI/MainButton";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
//helpers
import { signUp } from "../../helpers/authHelpers/signUpHelper";
import { loginHandler } from "../../helpers/authHelpers/loginHelper";

//ignore firebase timer warning
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

//contexts
import { useAuthContext } from "../../contexts/AuthContext";

const Signup = (props) => {
  //contexts
  const { setToken } = useAuthContext();

  const [changeEyeIcon, setChangeEyeIcon] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changeEyeIconHandler = () => {
    setChangeEyeIcon((prevState) => !prevState);
  };

  const fullNameHandler = (name) => {
    setFullName(name);
  };

  const emailHandler = (email) => {
    setEmail(email);
  };

  const passwordHandler = (password) => {
    setPassword(password);
  };

  const confirmPasswordHandler = (password) => {
    setConfirmPassword(password);
  };

  const handleContinue = async () => {
    if (
      confirmPassword === "" ||
      password === "" ||
      fullName === "" ||
      email === ""
    )
      return;
    if (confirmPassword !== password) return;

    try {
      const result = await signUp(fullName, email, password);

      if (result.status !== 200) {
        return;
      } else {
        if (result.data.data.createUser !== null) {
          props.navigation.navigate("GetStarted");
          const loginResult = await loginHandler(email, password);
          if (loginResult.status === 200) {
            if (loginResult.data.data.login !== null) {
              setToken(loginResult.data.data.login.token);
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
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
            onChangeText={(nameInput) => fullNameHandler(nameInput)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Entypo style={styles.icon} name="email" size={18} color="black" />
          <InputText
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email address"
            autoCorrect={false}
            onChangeText={(emailInput) => emailHandler(emailInput)}
          />
        </View>

        <TouchableOpacity onPress={changeEyeIconHandler} activeOpacity={1}>
          <View style={styles.inputContainer}>
            <Feather style={styles.icon} name="lock" size={18} color="black" />
            <InputText
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Password"
              secureTextEntry={changeEyeIcon ? false : true}
              autoCorrect={false}
              onChangeText={passwordHandler}
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

        <TouchableOpacity onPress={changeEyeIconHandler} activeOpacity={1}>
          <View style={styles.inputContainer}>
            <Feather style={styles.icon} name="lock" size={18} color="black" />
            <InputText
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Confirm Password"
              secureTextEntry={changeEyeIcon ? false : true}
              autoCorrect={false}
              onChangeText={confirmPasswordHandler}
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

        <TouchableOpacity activeOpacity={0.5} onPress={handleContinue}>
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
