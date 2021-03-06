import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import GlobalStyles from "./GlobalStyles.js";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import NavBar from "./components/Navbar/NavBar";

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Colors
import Colors from "./constants/Colors";

//pages
import SplashScreen from "./screens/Splash/SplashScreen";
import Onboarding from "./screens/Onboarding/Onboarding.js";
import UserProfile from "./screens/UserProfile/UserProfile.js";
import Connections from "./screens/Connections/Connections.js";
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
import SettingsScreen from "./screens/Settings/SettingsScreen.js";
import Connection from "./components/Connections/Connection.js";
import OverView from "./screens/Overview/Overview.js";

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Fonts.loadAsync({
    Poppins: require("./Assets/Fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./Assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./Assets/Fonts/Poppins-Bold.ttf"),
  });
};

// Loading for a bit after the onBoarding screen
const Loading = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.orange} />
    </View>
  );
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(true);

  // check if the user has already seen the Onboarding screen
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("Error @checkOnboarding", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    checkOnboarding();
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
            {isLoading ? (
              <Stack.Screen name="Loading" component={Loading} />
            ) : viewedOnboarding ? (
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            ) : (
              <Stack.Screen name="Onboarding" component={Onboarding} />
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
            <Stack.Screen name="LoadingAccount" component={LoadingAccount} />
            <Stack.Screen name="AccountCreated" component={AccountCreated} />
            <Stack.Screen name="MyProfile" component={UserProfile} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Connections" component={Connections} />
            <Stack.Screen name="Overview" component={OverView} />
          </Stack.Navigator>
        </NavigationContainer>
      </CreateUserProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
});
