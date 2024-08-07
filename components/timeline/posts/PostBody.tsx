import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { Typography } from "@/components/common";
import { newColors, spacing } from "@/theme";

interface PostBodyProps {
  postText?: string;
  postImages?: string[];
}
const imageWidth = Dimensions.get("window").width - 16 - 30;
const screenWidth = Dimensions.get("window").width;

const PostBody = ({ postImages = [], postText = "" }: PostBodyProps) => {
  const numberOfPostImages = postImages?.length || 0;
  const flatListRef = useRef<FlatList>(null);

  const imagesIndexes = useMemo(() => {
    const result = [];
    for (let i = 0; i < numberOfPostImages; i++) {
      const min = i === 0 ? 0 : imageWidth * i - imageWidth / 2;
      const max =
        i === 0 ? imageWidth / 2 : imageWidth * (i + 1) - imageWidth / 2;
      const into = i === 0 ? 0 : imageWidth * i - 20;
      result.push({ min, max, into });
    }
    return result;
  }, [postImages]);

  const onScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const target = imagesIndexes.find((item) => {
      if (contentOffset <= item.max && contentOffset >= item.min) return item;
    });
    // @ts-ignore
    flatListRef.current?.scrollToOffset({ offset: target?.into });
  };

  return (
    <View style={styles.container}>
      <Typography
        content={postText}
        variant="smallRegular"
        color={newColors.black}
        textStyles={{ textAlign: "left", paddingHorizontal: 4 }}
      />
      {!!numberOfPostImages && (
        <FlatList
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={postImages}
          renderItem={({ item, index }) => (
            <SliderItem
              item={item}
              index={index}
              totalImagesCount={numberOfPostImages}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          onScrollEndDrag={onScrollHandler}
          scrollEventThrottle={16}
          decelerationRate="fast"
        />
      )}
    </View>
  );
};

interface SliderItemProps {
  item: any;
  index: number;
  totalImagesCount: number;
}

const SliderItem = ({ item, index, totalImagesCount }: SliderItemProps) => {
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
      <Image source={item} style={[styles.image, {}]} resizeMode="cover" />
      {!isSingleImage && (
        <Text style={styles.activeImageStyle}>
          {index + 1}/{totalImagesCount}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.tiny + 1,
    rowGap: spacing.tiny + 1,
    paddingHorizontal: 4,
  },
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
export default PostBody;
