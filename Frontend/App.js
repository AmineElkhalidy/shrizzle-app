import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import GlobalStyles from "./GlobalStyles.js";
import Contact from "./screens/Contact.js";
import { SafeAreaView } from "react-native";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import NavBar from "./components/Navbar/NavBar";

//pages
import SplashScreen from "./screens/Splash/SplashScreen";

import GetStarted from "./screens/CreateAccount/GetStarted";
import LoginScreen from "./screens/Login/LoginScreen";
import Signup from "./screens/Signup/Signup";

//creating account pages
import GetUserLocation from "./screens/CreateAccount/GetUserLocation";
import ProfilePicName from "./screens/CreateAccount/ProfilePicName";
import UserBio from "./screens/CreateAccount/UserBio";
import GetSocialHandles from "./screens/CreateAccount/GetSocialHandles";
import AccountCreated from "./screens/CreateAccount/AccountCreated";

//routing
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//contexts
import CreateUserProvider from "./contexts/CreateUserContext";
import AuthProvider from "./contexts/AuthContext";
import LoadingAccount from "./screens/CreateAccount/LoadingAccount.js";
import UserProfile from "./screens/UserProfile/UserProfile.js";
import BusinessProfile from "./screens/Settings/Profile/BusinessProfile.js";

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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(e) => console.log(e)}
      />
    );
  }

  return (
    <AuthProvider>
      <CreateUserProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {showSplash && (
              <Stack.Screen name="Splash" component={SplashScreen} />
            )}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="ProfilePicName" component={ProfilePicName} />
            <Stack.Screen name="GetUserLocation" component={GetUserLocation} />
            <Stack.Screen name="UserBio" component={UserBio} />
            <Stack.Screen
              name="GetSocialHandles"
              component={GetSocialHandles}
            />
            <Stack.Screen name="AccountCreated" component={AccountCreated} />
            <Stack.Screen name="LoadingAccount" component={LoadingAccount} />
            <Stack.Screen name="MyProfile" component={UserProfile} />
          </Stack.Navigator>
        </NavigationContainer>
      </CreateUserProvider>
    </AuthProvider>
  );
}
