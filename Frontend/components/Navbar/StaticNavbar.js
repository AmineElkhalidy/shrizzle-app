import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const { width } = Dimensions.get("window");

export default function StaticTabbar({ tabs, value, navigation }) {
  let tempValues = tabs.map(
    (tab, index) => new Animated.Value(index === 0 ? 1 : 0)
  );

  const [values, setValues] = useState(tempValues);

  const onPressHandler = (index, route) => {
    const tabWidth = width / tabs.length;
    Animated.sequence([
      Animated.parallel(
        values.map((v) =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          })
        )
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, key) => {
        const tabWidth = width / tabs.length;
        const cursor = tabWidth * key;
        const opacity = value.interpolate({
          inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
          outputRange: [1, 0, 1],
          extrapolate: "clamp",
        });
        const translateY = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [64, 0],
          extrapolate: "clamp",
        });
        const opacity1 = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        });
        return (
          <React.Fragment {...{ key }}>
            <TouchableWithoutFeedback
              onPress={() => onPressHandler(key, tab.route)}
            >
              <Animated.View style={[styles.tab, { opacity }]}>
                <Icon name={tab.name} color="white" size={25} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={{
                position: "absolute",
                top: -8,
                left: tabWidth * key,
                width: tabWidth,
                height: 64,
                justifyContent: "center",
                alignItems: "center",
                opacity: opacity1,
                transform: [{ translateY }],
              }}
            >
              <View style={styles.activeIcon}>
                <Icon name={tab.name} color="white" size={20} />
              </View>
            </Animated.View>
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
  },
  activeIcon: {
    backgroundColor: Colors.blue,
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
