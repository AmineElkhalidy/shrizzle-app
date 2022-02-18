import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";

import DefaultButton from "../../components/Buttons/DefaultButton";
import SkipButton from "../../components/Buttons/SkipButton";
import SocialHandleModal from "../../components/Modals/SocialHandleModal";
import SocialButton from "../../components/SocialButton";
import { MODALS_INFO } from "../../constants/SocialHandlesModal";

function GetSocialHandles(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHandler, setCurrentHandler] = useState({});

  return (
    <ImageBackground
      source={require("../../Assets/TestPictures/blackbg.png")}
      style={styles.screen}
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

        <DefaultButton text="Continue" />
        <SkipButton color="#000" />
        {isModalOpen && (
          <SocialHandleModal
            handler={currentHandler}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </View>
    </ImageBackground>
  );
}

export default GetSocialHandles;

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "relative",
    padding: 0,
  },
  container: {
    padding: Dimensions.get("window").width * 0.1,
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    position: "relative",
  },

  socialsContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    paddingTop: Dimensions.get("window").width * 0.07,
    marginBottom: Dimensions.get("window").width * 0.2,
    color: "white",
    fontSize: Dimensions.get("window").width * 0.12,
    fontWeight: "bold",
  },
});
