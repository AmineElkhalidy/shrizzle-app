import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";

// importing the Onboarding item
import OnboardingItem from "../../components/OnBoarding/OnboardingItem";

// importing the Paginator
import Paginator from "../../components/OnBoarding/Paginator";

// importing the NextButton Component
import NextButton from "../../components/OnBoarding/NextButton";

// import slides data
import slides from "../../data/slides";

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Onboarding = (props) => {
  // currently viewed index
  const [currentIndex, setCurrentIndex] = useState(0);

  // slide reference
  const slideRef = useRef(null);

  // animation value
  const scrollX = useRef(new Animated.Value(0)).current;

  // currently viewed index handler on the flatList
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  // the item will show 50% on the screen after changing to the next
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
        props.navigation.navigate("Signup");
      } catch (error) {
        console.log("Error @setItem ", error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />

      <NextButton
        percentage={(currentIndex + 1) * (100 / slides.length)}
        scrollTo={scrollTo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Onboarding;
