import { images } from "@/assets";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Image, StyleSheet, Animated, Dimensions } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from "react-native-gesture-handler";

const { width: screenWidth } = Dimensions.get("window");
const postImages = [images.image4, images.image1, images.image2, images.image3];

const ImageSlider: React.FC = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(screenWidth);

  const isFirstItem = useMemo(() => currentIndex === 0, [currentIndex]);

  const isLastItem = useMemo(
    () => currentIndex === postImages.length - 1,
    [currentIndex]
  );

  const isMiddleItem = useMemo(
    () => !isFirstItem && !isLastItem,
    [isFirstItem, isLastItem]
  );

  const imageWidthMain = useMemo(() => {
    if (isFirstItem || isLastItem) return screenWidth - 25; // Adjust as needed
    if (isMiddleItem) return screenWidth - 35; // Adjust as needed
  }, [isFirstItem, isMiddleItem, isLastItem, currentIndex]);

  const translationXToMove = useMemo(
    () => -currentIndex * imageWidthMain,
    [imageWidthMain, currentIndex]
  );

  useEffect(() => {
    console.log({ isFirstItem, isMiddleItem, isLastItem });
  }, [isFirstItem, isMiddleItem, isLastItem]);

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    const { translationX, state } = event.nativeEvent;

    if (state === State.ACTIVE) {
      let newTranslateX = -currentIndex * screenWidth + translationX;

      if (currentIndex === 0 && translationX > 0) {
        newTranslateX = 0; // Prevent swiping right on the first image
      } else if (currentIndex === postImages.length - 1 && translationX < 0) {
        newTranslateX = -currentIndex * screenWidth; // Prevent swiping left on the last image
      }

      translateX.setValue(newTranslateX);
    } else if (state === State.END) {
      const threshold = screenWidth / 4;
      let newIndex = currentIndex;

      if (translationX < -threshold && currentIndex < postImages.length - 1) {
        // Swipe left
        newIndex = Math.min(currentIndex + 1, postImages.length - 1);
      } else if (translationX > threshold && currentIndex > 0) {
        // Swipe right
        newIndex = Math.max(currentIndex - 1, 0);
      }

      setCurrentIndex(newIndex);

      Animated.spring(translateX, {
        toValue: translationXToMove,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={handleGesture}
      >
        <Animated.View
          style={[styles.imageContainer, { transform: [{ translateX }] }]}
        >
          {postImages.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={[
                styles.image,
                {
                  width: imageWidthMain,
                },
              ]}
            />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 300, // Adjust as needed
    overflow: "hidden",
  },
  imageContainer: {
    flexDirection: "row",
    height: "100%",
  },
  image: {
    height: "100%",
    marginHorizontal: 5,
  },
});

export default ImageSlider;
