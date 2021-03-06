import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";

//components
import DefaultButton from "../../components/Buttons/DefaultButton";
import SkipButton from "../../components/Buttons/SkipButton";
import SocialHandleModal from "../../components/Modals/SocialHandleModal";
import SocialButton from "../../components/SocialButton";

//constants
import { MODALS_INFO } from "../../constants/SocialHandlesModal";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function GetSocialHandles(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHandler, setCurrentHandler] = useState({});

  return (
    <ScrollView style={styles.screen}>
      <ImageBackground
        source={require("../../Assets/TestPictures/blackbg.png")}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Others handles you can share</Text>

          <View style={styles.socialsContainer}>
            {MODALS_INFO.map((handle) => (
              <SocialButton
                key={handle.title}
                handle={handle}
                onPress={() => {
                  setIsModalOpen(true);
                  setCurrentHandler(handle);
                }}
              />
            ))}
          </View>

          <DefaultButton
            text="Continue"
            onPress={() => props.navigation.navigate("LoadingAccount")}
          />
          <SkipButton
            color="#000"
            onPress={() => props.navigation.navigate("LoadingAccount")}
          />
          {isModalOpen && (
            <SocialHandleModal
              handler={currentHandler}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default GetSocialHandles;

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    position: "relative",
    marginTop: hp("4%"),
  },
  container: {
    padding: wp("15%"),
    paddingHorizontal: wp("5%"),
    position: "relative",
  },
  title: {
    marginBottom: wp("20%"),
    color: "white",
    fontSize: wp("10%"),
    fontFamily: "Poppins-Bold",
  },
  socialsContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp("8%"),
  },
});
