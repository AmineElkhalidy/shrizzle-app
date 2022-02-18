import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import GlobalStyles from "./GlobalStyles.js";
import Contact from "./screens/Contact.js";
import { SafeAreaView } from "react-native";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import NavBar from "./components/Navbar/NavBar.js";

//pages
import SplashScreen from "./screens/Splash/SplashScreen.js";

import GetStarted from "./screens/CreateAccount/GetStarted.js";
import LoginScreen from "./screens/Login/LoginScreen.js";
import Signup from "./screens/Signup/Signup.js";

//creating account pages
import GetUserLocation from "./screens/CreateAccount/GetUserLocation.js";
import ProfilePicName from "./screens/CreateAccount/ProfilePicName.js";
import UserBio from "./screens/CreateAccount/UserBio.js";

import Onboarding from "./screens/Onboarding/Onboarding.js";
import SettingsScreen from "./screens/Settings/SettingsScreen.js";
import BusinessProfile from "./screens/Settings/Profile/BusinessProfile.js";

//routing
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//contexts
import CreateUserProvider from "./contexts/CreateUserContext"


const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Fonts.loadAsync({
    Poppins: require("./Assets/Fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./Assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./Assets/Fonts/Poppins-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [switchTo, setSwitchTo] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const switchToHandler = () => {
    setSwitchTo((prevState) => !prevState);
  };

  let currentlyLoaded = <LoginScreen onClick={switchToHandler} />;

  if (switchTo) {
    currentlyLoaded = <Signup onClick={switchToHandler} />;
  }

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(e) => console.log(e)}
      />
    );
  }

  // if(showSplash)
  // {
  //   return <SplashScreen />;
  // }else
  // {
  //   return currentlyLoaded;
  // }

  return (
    // <SafeAreaView style={GlobalStyles.droidSafeArea}>
    //   {/* <BusinessProfile /> */}
    //   {/* {currentlyLoaded} */}
    //   {/* <Contact />
    //   <NavBar /> */}
    //   {/* <ProfilePicName />  */}
    //   {/* <UserBio /> */}
    //   {/* <SplashScreen /> */}
    //   {/* <Onboarding /> */}
    //   {/* <SettingsScreen /> */}
    // </SafeAreaView>

   <CreateUserProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showSplash && <Stack.Screen name="Splash" component={SplashScreen} />}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="ProfilePicName" component={ProfilePicName} />
        <Stack.Screen name="GetUserLocation" component={GetUserLocation} />
        <Stack.Screen name="UserBio" component={UserBio} />
      </Stack.Navigator>
    </NavigationContainer>
     </CreateUserProvider>
  );
}
