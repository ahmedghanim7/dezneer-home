import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import React, { useMemo, useRef } from "react";
import ImageCarouselItem from "./ImageCarouselItem";

const screenWidth = Dimensions.get("window").width;
const imageWidth = screenWidth - 16 - 30;

interface ImagesCarouselProps {
  numberOfPostImages: number;
  postImages: any[];
}

const ImagesCarousel = ({
  numberOfPostImages,
  postImages,
}: ImagesCarouselProps) => {
  const flatListRef = useRef<FlatList>(null);

  const imagesIndexes = useMemo(() => {
    const result = [];
    for (let i = 0; i < numberOfPostImages; i++) {
      const minScrollX = i === 0 ? 0 : imageWidth * i - imageWidth / 2;
      const maxScrollX =
        i === 0 ? imageWidth / 2 : imageWidth * (i + 1) - imageWidth / 2;
      const intoXVal = i === 0 ? 0 : imageWidth * i - 20;
      result.push({ minScrollX, maxScrollX, intoXVal });
    }
    return result;
  }, [postImages]);

  const onScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const target = imagesIndexes.find((item) => {
      if (contentOffset <= item.maxScrollX && contentOffset >= item.minScrollX)
        return item;
    });
    // @ts-ignore
    flatListRef.current?.scrollToOffset({ offset: target?.intoXVal });
  };

  return (
    <FlatList
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={postImages}
      renderItem={({ item, index }) => (
        <ImageCarouselItem
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
  );
};

export default ImagesCarousel;
