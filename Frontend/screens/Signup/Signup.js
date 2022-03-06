import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import BodyText from "../../components/Text/BodyText";
import Colors from "../../constants/Colors";
import InputText from "../../components/InputText/InputText";
import MainButton from "../../components/UI/MainButton";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
//helpers
import { signUp } from "../../helpers/authHelpers/signUpHelper";
import { loginHandler } from "../../helpers/authHelpers/loginHelper";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//ignore firebase timer warning
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

//contexts
import { useAuthContext } from "../../contexts/AuthContext";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Signup = (props) => {
  //contexts
  const { setToken } = useAuthContext();
  const [changeEyeIcon, setChangeEyeIcon] = useState(false);
  const [changeEyeIconTwo, setChangeEyeIconTwo] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //loading
  const [isLoading, setIsLoading] = useState(false);

  const changeEyeIconHandler = () => {
    setChangeEyeIcon((prevState) => !prevState);
  };

  const changeEyeIconTwoHandler = () => {
    setChangeEyeIconTwo((prevState) => !prevState);
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
    setIsLoading(true);

    try {
      const result = await signUp(fullName, email, password);

      if (result.status !== 200) {
        return;
      } else {
        if (result.data.data.createUser !== null) {
          props.navigation.navigate("GetStarted", {
            firstName: fullName.split(" ")[0],
          });

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

        <TouchableOpacity onPress={changeEyeIconTwoHandler} activeOpacity={1}>
          <View style={styles.inputContainer}>
            <Feather style={styles.icon} name="lock" size={18} color="black" />
            <InputText
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Confirm Password"
              secureTextEntry={changeEyeIconTwo ? false : true}
              autoCorrect={false}
              onChangeText={confirmPasswordHandler}
            />

            <View style={styles.iconContainer}>
              <Entypo
                style={styles.eyeIcon}
                name={changeEyeIconTwo ? "eye" : "eye-with-line"}
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

      {isLoading && (
        <ActivityIndicator
          style={styles.activity}
          size="large"
          color={Colors.blue}
        />
      )}

      <View style={styles.bottomPart}>
        <View style={styles.circle}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
  },
  signUpContainer: {
    height: hp("50%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: wp("15%"),
  },
  signUpText: {
    color: Colors.blue,
    fontFamily: "Poppins-Bold",
    fontSize: wp("8%"),
  },
  inputContainer: {
    width: wp("76.5%"),
    height: wp("13"),
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: wp("7%"),
    marginVertical: wp("2%"),
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    flexDirection: "row",
  },
  passwordInput: {
    width: "98%",
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
    right: wp("0.25%"),
  },
  signUpButton: {
    backgroundColor: Colors.blue,
    width: wp("40%"),
    height: wp("12%"),
    borderRadius: wp("7%"),
    marginTop: hp("1%"),
  },
  bottomPart: {
    height: hp("30%"),
  },
  circle: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: wp("50"),
    borderTopRightRadius: hp("26%"),
    backgroundColor: Colors.blue,
    position: "absolute",
    bottom: -105,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: wp("5.2%"),
  },
  buttonContainer: {
    marginTop: wp("3%"),
    width: wp("40%"),
    height: wp("12%"),
    borderRadius: wp("6%"),
    borderColor: Colors.orange,
    borderWidth: 1,
  },
  activity: {
    position: "absolute",
    top: hp("60%"),
    left: wp("45%"),
  },
});

export default Signup;
