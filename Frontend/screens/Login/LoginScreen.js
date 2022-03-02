import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import InputText from "../../components/InputText/InputText";
import BodyText from "../../components/Text/BodyText";
import MainButton from "../../components/UI/MainButton";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { loginHandler } from "../../helpers/authHelpers/loginHelper";
import { getUserData } from "../../helpers/userDataHelpers/getUserDataHelper";
import { useAuthContext } from "../../contexts/AuthContext";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const LoginScreen = (props) => {
  //text input
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //loading
  const [isLoading, setIsLoading] = useState(true);

  const { setUserData, setToken } = useAuthContext();

  const login = async () => {
    try {
      const result = await loginHandler(emailInput, passwordInput);
      if (result.status === 200 && result.data.data.login !== null) {
        //get token
        const token = result.data.data.login.token;
        setToken(result.data.data.login.token);
        //get the user data
        const getUserResult = await getUserData(token);

        if (
          getUserResult.status === 200 &&
          getUserResult.data.data.getUserData !== null
        ) {
          setUserData(getUserResult.data.data.getUserData);
          props.navigation.navigate("MyProfile");
        }
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  // the state of changing the eye icon
  const [ChangeEyeIcon, setChangeEyeIcon] = useState(false);

  // the state for changing the check square icon
  const [rememberMe, setRememberMe] = useState(false);

  // handler functions of changing icons
  const changeEyeIconHandler = () => {
    setChangeEyeIcon((prevState) => !prevState);
  };

  const changeRememberMeIcon = () => {
    setRememberMe((prevState) => !prevState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.screen}>
          <View style={styles.topPart}>
            <View style={styles.circle}></View>
            <View style={styles.textContainer}>
              <BodyText style={styles.title}>New here?</BodyText>
              <BodyText style={styles.subtitle}>
                Setup a new account with just a few clicks!
              </BodyText>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate("Signup")}
              >
                <MainButton style={styles.buttonContainer}>Sign Up</MainButton>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomPart}>
            <BodyText style={styles.containerTitle}>Welcome Back!</BodyText>
            <View style={styles.inputContainer}>
              <Entypo
                style={styles.icon}
                name="email"
                size={18}
                color="black"
              />
              <InputText
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email address"
                autoCorrect={false}
                onChangeText={(text) => setEmailInput(text)}
              />
            </View>

            <TouchableOpacity onPress={changeEyeIconHandler} activeOpacity={1}>
              <View style={styles.inputContainer}>
                <Feather
                  style={styles.icon}
                  name="lock"
                  size={18}
                  color="black"
                />
                <InputText
                  autoCapitalize="none"
                  placeholder="Password"
                  autoCorrect={false}
                  secureTextEntry={!ChangeEyeIcon ? true : false}
                  style={styles.passwordInput}
                  onChangeText={(text) => setPasswordInput(text)}
                />

                <View style={styles.iconContainer}>
                  <Entypo
                    style={styles.eyeIcon}
                    name={ChangeEyeIcon ? "eye" : "eye-with-line"}
                    size={20}
                    color="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            {isLoading && (
              <ActivityIndicator
                style={styles.activity}
                size="small"
                color={Colors.blue}
              />
            )}

            <TouchableOpacity onPress={changeRememberMeIcon} activeOpacity={1}>
              <View style={styles.rememberContainer}>
                <Feather
                  name={rememberMe ? "check-square" : "square"}
                  size={20}
                  color={Colors.blue}
                />
                <Text style={styles.rememberText}>Remember Me</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={login}>
              <MainButton style={styles.loginButton}>Login</MainButton>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: WIDTH,
    height: HEIGHT,
    position: "relative",
  },
  topPart: {
    height: HEIGHT / 1.8,
    alignItems: "center",
  },
  circle: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: WIDTH * 0.5,
    borderBottomRightRadius: WIDTH * 0.5,
    backgroundColor: Colors.blue,
    position: "absolute",
    top: -WIDTH * 0.4,
  },
  textContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginVertical: WIDTH * 0.15,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: WIDTH * 0.05,
    marginBottom: 0,
  },
  subtitle: {
    fontFamily: "Poppins-Medium",
    fontSize: WIDTH * 0.032,
  },
  buttonContainer: {
    marginTop: WIDTH * 0.02,
    width: WIDTH * 0.5,
    height: WIDTH * 0.08,
    borderRadius: WIDTH * 0.05,
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
    fontSize: WIDTH * 0.06,
  },
  inputContainer: {
    width: WIDTH / 1.3,
    height: WIDTH * 0.1,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: WIDTH * 0.05,
    marginVertical: WIDTH * 0.015,
    alignItems: "center",
    paddingHorizontal: WIDTH * 0.05,
    flexDirection: "row",
  },
  passwordInput: {
    width: "80%",
  },
  icon: {
    marginRight: WIDTH * 0.005,
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: -WIDTH * 0.08,
  },
  rememberContainer: {
    width: "31%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  rememberText: {
    fontFamily: "Poppins-Medium",
    color: Colors.blue,
  },
  loginButton: {
    backgroundColor: Colors.blue,
    width: WIDTH * 0.5,
    height: WIDTH * 0.08,
    borderRadius: WIDTH * 0.05,
    marginVertical: WIDTH * 0.02,
  },
  activity: {
    position: "absolute",
    top: HEIGHT * 0.5,
    left: WIDTH * 0.45,
  },
});

export default LoginScreen;
