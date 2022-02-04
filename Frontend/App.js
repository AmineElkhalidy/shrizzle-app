import React, {useState} from "react";
import { View, Text } from "react-native";
import GlobalStyles from './GlobalStyles.js';
import Contact from "./screens/Contact.js";
import { SafeAreaView } from "react-native";
import * as Fonts from 'expo-font';
import AppLoading from "expo-app-loading";
// import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
import NavBar from "./components/NavBar.js";
import LoginScreen from "./screens/Login/LoginScreen.js";
import SplashScreen from "./screens/Splash/SplashScreen.js";
import Onboarding from "./screens/Onboarding/Onboarding.js";
import Signup from "./screens/Signup/Signup.js";

const fetchFonts = () =>
{
  return Fonts.loadAsync({
    'Poppins': require('./Assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./Assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./Assets/Fonts/Poppins-Bold.ttf')

  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [switchTo, setSwitchTo] = useState(false);

  const switchToHandler = () =>
  {
    setSwitchTo((prevState) => !prevState);
  }

  let currentlyLoaded = <LoginScreen onClick={switchToHandler} />;

  if(switchTo)
  {
    currentlyLoaded = <Signup onClick={switchToHandler} />
  }


  if(!fontLoaded)
  {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={(e) => console.log(e)} />;
  }
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      {/* {currentlyLoaded} */}
      {/* <Signup /> */}
      {/* <LoginScreen /> */}
      <Contact />
      <NavBar />
      {/* <SplashScreen />
      <Onboarding /> */}
    </SafeAreaView>
  );
}
