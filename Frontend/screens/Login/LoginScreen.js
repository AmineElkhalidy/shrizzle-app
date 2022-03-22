import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
  //text input
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //loading
  const [isLoading, setIsLoading] = useState(false);

  const { setUserData, setToken } = useAuthContext();

  const login = async () => {
    try {
      setIsLoading(true);
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
          props.navigation.navigate("Overview");
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

  // clear the Onboarding storage
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (error) {
      console.log("Error @clearOnboarding: ", error);
    }
  };

  useEffect(() => {
    clearOnboarding();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.screen}>
          <View style={styles.topPart}>
            <View style={styles.circle}>
              <View style={styles.textContainer}>
                <BodyText style={styles.title}>New here?</BodyText>
                <BodyText style={styles.subtitle}>
                  Setup a new account with just a few clicks!
                </BodyText>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => props.navigation.navigate("Signup")}
                >
                  <MainButton style={styles.buttonContainer}>
                    Sign Up
                  </MainButton>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bottomPart}>
            <BodyText style={styles.headerTitle}>Welcome Back!</BodyText>
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
        {isLoading && (
          <ActivityIndicator
            style={styles.activity}
            size="large"
            color={Colors.blue}
          />
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
    position: "relative",
  },
  topPart: {
    height: hp("30%"),
    width: wp("100%"),
    alignItems: "center",
  },
  circle: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: wp("50"),
    borderBottomRightRadius: hp("26%"),
    backgroundColor: Colors.blue,
    position: "absolute",
    top: hp("-1%"),
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginVertical: wp("15%"),
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: wp("6%"),
    marginBottom: 0,
  },
  subtitle: {
    fontFamily: "Poppins-Medium",
    fontSize: wp("4%"),
  },
  buttonContainer: {
    marginTop: wp("3%"),
    width: wp("38%"),
    height: wp("12%"),
    borderRadius: wp("6%"),
    borderColor: Colors.orange,
    borderWidth: 1,
  },
  bottomPart: {
    width: "100%",
    height: hp("70%"),
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: Colors.blue,
    alignItems: "center",
    fontFamily: "Poppins-Bold",
    fontSize: wp("7.5%"),
  },
  inputContainer: {
    width: wp("76.5%"),
    height: wp("13%"),
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: wp("7%"),
    marginVertical: wp("2%"),
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    flexDirection: "row",
  },
  passwordInput: {
    width: "80%",
  },
  icon: {
    marginRight: wp("1.5%"),
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: wp("-7%"),
  },
  rememberContainer: {
    width: wp("50%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("1%"),
  },
  rememberText: {
    fontFamily: "Poppins-Medium",
    display: "flex",
    alignItems: "center",
    fontSize: wp("4.5%"),
    color: Colors.blue,
    marginLeft: wp("2%"),
  },
  loginButton: {
    backgroundColor: Colors.blue,
    width: wp("40%"),
    height: wp("12%"),
    borderRadius: wp("7%"),
    marginVertical: wp("2%"),
  },
  activity: {
    position: "absolute",
    top: hp("87%"),
    left: wp("45%"),
  },
});

export default LoginScreen;
