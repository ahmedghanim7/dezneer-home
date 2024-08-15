import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { newColors } from "@/theme";
import { Image } from "expo-image";
interface CarouselItemProps {
  item: any;
  index: number;
  totalImagesCount: number;
}

const screenWidth = Dimensions.get("window").width;
const imageWidth = screenWidth - 16 - 30;

const ImageCarouselItem = ({
  index,
  item,
  totalImagesCount,
}: CarouselItemProps) => {
  const isSingleImage = totalImagesCount === 1;
  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: isSingleImage ? screenWidth - 10 : imageWidth,
          height: isSingleImage ? 350 : imageWidth,
        },
      ]}
    >
      <Image source={item} style={[styles.image]} resizeMode="cover" />
      {!isSingleImage && (
        <Text style={styles.activeImageStyle}>
          {index + 1}/{totalImagesCount}
        </Text>
      )}
    </View>
  );
};

export default ImageCarouselItem;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderRadius: 12,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
  activeImageStyle: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: "#333333ba",
    borderRadius: 14,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: newColors.white,
    fontSize: 12,
  },
});
