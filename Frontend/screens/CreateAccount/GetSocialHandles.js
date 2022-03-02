import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";

//components
import DefaultButton from "../../components/Buttons/DefaultButton";
import SkipButton from "../../components/Buttons/SkipButton";
import SocialHandleModal from "../../components/Modals/SocialHandleModal";
import SocialButton from "../../components/SocialButton";

//constants
import { MODALS_INFO } from "../../constants/SocialHandlesModal";

// Dimensions API Variables
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

function GetSocialHandles(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHandler, setCurrentHandler] = useState({});

  return (
    <View style={styles.screen}>
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
    </View>
  );
}

export default GetSocialHandles;

const styles = StyleSheet.create({
  screen: {
    width: WIDTH,
    height: HEIGHT,
  },
  imageBackground: {
    width: WIDTH,
    height: HEIGHT,
    position: "relative",
    marginTop: HEIGHT * 0.04,
  },
  container: {
    padding: WIDTH * 0.15,
    paddingHorizontal: WIDTH * 0.05,
    position: "relative",
  },
  title: {
    marginBottom: WIDTH * 0.2,
    color: "white",
    fontSize: WIDTH * 0.1,
    fontFamily: "Poppins-Bold",
  },
  socialsContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
