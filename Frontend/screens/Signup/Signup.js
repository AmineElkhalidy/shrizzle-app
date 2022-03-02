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

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //loading
  const [isLoading, setIsLoading] = useState(false);

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

      {isLoading && (
        <ActivityIndicator
          style={styles.activity}
          size="large"
          color={Colors.blue}
        />
      )}

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
    height: HEIGHT / 2,
    width: WIDTH,
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
    width: WIDTH / 1.3,
    height: WIDTH * 0.1,
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
    marginRight: WIDTH * 0.005,
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: -WIDTH * 0,
  },
  signUpButton: {
    backgroundColor: Colors.blue,
    width: WIDTH * 0.5,
    height: WIDTH * 0.08,
    borderRadius: WIDTH * 0.05,
    marginVertical: WIDTH * 0.03,
  },
  bottomPart: {
    height: HEIGHT / 1.9,
  },
  circle: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: WIDTH * 0.5,
    borderTopRightRadius: WIDTH * 0.5,
    backgroundColor: Colors.blue,
    position: "absolute",
    bottom: -WIDTH * 0.15,
  },
  textContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginVertical: WIDTH * 0.3,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: WIDTH * 0.035,
  },
  buttonContainer: {
    marginTop: WIDTH * 0.035,
    width: WIDTH * 0.35,
    height: WIDTH * 0.08,
    borderRadius: WIDTH * 0.05,
    borderColor: Colors.orange,
    borderWidth: 1,
  },
  activity: {
    position: "absolute",
    top: HEIGHT * 0.6,
    left: WIDTH * 0.45,
  },
});

export default Signup;
