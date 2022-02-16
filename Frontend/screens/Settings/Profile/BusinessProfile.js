import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Img from "../../../Assets/TestPictures/testpdp.jpg";
import BodyText from "../../../components/Text/BodyText";
import IconContainer from "../../../components/UI/IconContainer";
import Colors from "../../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const BusinessProfile = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={Img} resizeMode="contain" />
        </View>

        <View style={styles.textContainer}>
          <BodyText style={styles.titleText}>Anas Samoudi</BodyText>
          <BodyText style={styles.subtitleText}>Business Profile</BodyText>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.optionsList}>
          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="list-alt" size={18} color={Colors.orange} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <View>
                <BodyText style={styles.optionTextOne}>Company Name</BodyText>
                <BodyText style={styles.optionTextTwo}>Google</BodyText>
              </View>

              <IconContainer style={styles.iconContainer}>
                <MaterialIcons name="edit" size={17} color={Colors.blue} />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <FontAwesome name="phone" size={18} color={Colors.orange} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <View>
                <BodyText style={styles.optionTextOne}>Business Phone</BodyText>
                <BodyText style={styles.optionTextTwo}>+193 789 451</BodyText>
              </View>

              <IconContainer style={styles.iconContainer}>
                <MaterialIcons name="edit" size={17} color={Colors.blue} />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <Ionicons name="mail" size={18} color={Colors.orange} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <View>
                <BodyText style={styles.optionTextOne}>Email Address</BodyText>
                <BodyText style={styles.optionTextTwo}>
                  email@email.com
                </BodyText>
              </View>

              <IconContainer style={styles.iconContainer}>
                <MaterialIcons name="edit" size={17} color={Colors.blue} />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
              <Entypo name="network" size={18} color={Colors.orange} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <View>
                <BodyText style={styles.optionTextOne}>
                  Company's Website
                </BodyText>
                <BodyText style={styles.optionTextTwo}>
                  company@gmail.com
                </BodyText>
              </View>

              <IconContainer style={styles.iconContainer}>
                <MaterialIcons name="edit" size={17} color={Colors.blue} />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
            <FontAwesome name="facebook-f" size={18} color={Colors.orange} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <View>
                <BodyText style={styles.optionTextOne}>
                  Facebook Page
                </BodyText>
                <BodyText style={styles.optionTextTwo}>
                  @facebookPage
                </BodyText>
              </View>

              <IconContainer style={styles.iconContainer}>
                <MaterialIcons name="edit" size={17} color={Colors.blue} />
              </IconContainer>
            </View>
          </View>

          <View style={styles.option}>
            <IconContainer>
            <FontAwesome name="twitter" size={18} color={Colors.orange} />
            </IconContainer>

            <View style={styles.optionContainer}>
              <View>
                <BodyText style={styles.optionTextOne}>
                  Twitter Account
                </BodyText>
                <BodyText style={styles.optionTextTwo}>
                  @twitterAccount
                </BodyText>
              </View>

              <IconContainer style={styles.iconContainer}>
                <MaterialIcons name="edit" size={17} color={Colors.blue} />
              </IconContainer>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  profileContainer: {
    height: (Dimensions.get("window").height / 2) * 0.7,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  imageContainer: {
    height: 160,
    width: 160,
    borderRadius: 80,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    color: Colors.blue,
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    marginBottom: 0,
  },
  subtitleText: {
    color: Colors.blue,
    fontFamily: "Poppins",
    fontSize: 13,
  },
  optionsContainer: {
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width,
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
    justifyContent: "space-between",
    marginBottom: 15,
  },
  optionContainer: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionTextOne: {
    color: Colors.lightGrey,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
  },
  optionTextTwo: {
    color: Colors.blue,
    fontSize: 15,
  },
  iconContainer: {
    height: 28,
    width: 28,
    borderRadius: 14,
  },
});

export default BusinessProfile;
