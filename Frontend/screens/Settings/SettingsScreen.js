import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BodyText from "../../components/Text/BodyText";
import Colors from "../../constants/Colors";
import Img from "../../Assets/TestPictures/testpdp.jpg";
import IconContainer from "../../components/UI/IconContainer";
import NavBar from "../../components/Navbar/NavBar";
// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SettingsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>Settings</BodyText>
      <View style={styles.profileContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={Img} resizeMode="cover" />
          </View>
        </View>
        <View style={styles.dataContainer}>
          <BodyText style={styles.username}>Anas Samoudi</BodyText>

          <TouchableOpacity activeOpacity={0.2}>
            <View style={styles.icon}>
              <MaterialIcons name="edit" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.optionsList}>
          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="user" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>Personal Info</BodyText>
              <IconContainer style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color={Colors.green}
                />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="briefcase" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>Business Info</BodyText>
              <IconContainer style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color={Colors.green}
                />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <Ionicons name="people" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>My Connections</BodyText>
              <IconContainer style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color={Colors.green}
                />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="user" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>Dark Mode</BodyText>
              <MaterialCommunityIcons
                name="toggle-switch"
                size={25}
                color={Colors.green}
              />
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="user" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>My Subscription</BodyText>
              <IconContainer style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color={Colors.green}
                />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="user" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>Manage Cards</BodyText>
              <IconContainer style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color={Colors.green}
                />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="user" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>About</BodyText>
              <IconContainer style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color={Colors.green}
                />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="user" size={15} color={Colors.green} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <BodyText style={styles.optionText}>Support</BodyText>
              <IconContainer style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color={Colors.green}
                />
              </IconContainer>
            </View>
          </View>
        </View>
      </View>
      <NavBar navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontFamily: "Poppins-Medium",
    marginVertical: 25,
    marginHorizontal: 30,
    color: Colors.blue,
  },
  profileContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  container: {
    height: "80%",
    width: "22%",
    marginRight: 5,
    position: "relative",
  },
  imageContainer: {
    position: "absolute",
    top: -6,
    height: "100%",
    width: "100%",
    borderRadius: 40,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  dataContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  username: {
    width: "100%",
    height: "100%",
    color: "black",
    fontSize: 15,
    fontFamily: "Poppins-Bold",
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: -5,
  },
  optionsContainer: {
    height: Dimensions.get("window").height / 2,
    width: "100%",
    alignItems: "center",
  },
  optionsList: {
    width: "80%",
    height: 50,
  },
  option: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 5,
    justifyContent: "space-between",
    position: "relative",
  },
  optionContainer: {
    width: "65%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionText: {
    color: Colors.green,
    fontSize: 17,
    height: "100%",
    textAlignVertical: "center",
    marginTop: 15,
  },
  iconContainer: {
    height: 28,
    width: 28,
    borderRadius: 14,
  },
});

export default SettingsScreen;
