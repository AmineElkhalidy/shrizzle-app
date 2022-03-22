import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Animated,
} from "react-native";
import { line, curveBasis } from "d3-shape";
import { Path, Svg } from "react-native-svg";
import Colors from "../../constants/Colors";
import StaticNavbar from "./StaticNavbar";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get("window");
const height = 64;
const tabs = [
  {
    name: "home",
    route: "Overview",
  },
  {
    name: "user",
    route: "MyProfile",
  },
  {
    name: "users",
    route: "Connections",
  },
  {
    name: "gear",
    route: "Settings",
  },
];
const tabWidth = width / tabs.length;
const backgroundColor = Colors.blue;

const getPath = () => {
  const left = line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 },
  ]);
  const tab = line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(curveBasis)([
    { x: width, y: 0 },
    { x: width - 30, y: -3 },
    { x: width + 10, y: 5 },
    { x: width + 15, y: height },
    { x: width + tabWidth - 15, y: height },
    { x: width + tabWidth - 10, y: 5 },
    { x: width + tabWidth + 30, y: -1 },
    { x: width + tabWidth, y: 0 },
  ]);
  const right = line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);
  return `${left} ${tab} ${right}`;
};

const d = getPath();

// eslint-disable-next-line react/prefer-stateless-function
export default function Tabbar({ navigation }) {
  const temp = new Animated.Value(0);
  const [value, setValue] = useState(temp);
  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });

  return (
    <View style={styles.navContainer}>
      <View {...{ height, width }}>
        <AnimatedSvg
          width={width * 2}
          {...{ height }}
          style={{ transform: [{ translateX }] }}
        >
          <Path fill={backgroundColor} {...{ d }} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticNavbar {...{ tabs, value }} navigation={navigation} />
        </View>
      </View>
      <SafeAreaView style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor,
  },
  navContainer: {
    position: "absolute",
    bottom: hp("0%"),
  },
});
