import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Typography } from "@/components/common";
import { newColors, spacing } from "@/theme";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

interface PostBodyProps {
  postText?: string;
  postImages?: string[];
}

const PostBody = ({ postImages, postText = "" }: PostBodyProps) => {
  const scrollX = useSharedValue(0);
  const numberOfPostImages = postImages?.length || 0;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // @ts-ignore
  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) setActiveImageIndex(viewableItems[0].index);
  };

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View
      style={{ marginVertical: spacing.tiny + 1, rowGap: spacing.tiny + 1 }}
    >
      <Typography
        content={postText}
        variant="smallRegular"
        color={newColors.black}
        textStyles={{ textAlign: "left" }}
      />
      {!!numberOfPostImages && (
        <View style={{ position: "relative" }}>
          {numberOfPostImages > 1 && (
            <Text style={styles.activeImageStyle}>
              {activeImageIndex + 1}/{numberOfPostImages}
            </Text>
          )}
          <Animated.FlatList
            // style={{ minHeight: 345, marginTop: spacing.tiny }}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            data={postImages}
            renderItem={({ item, index }) => (
              <Image style={[styles.postImage]} source={item} />
              // <SliderItem item={item} index={index} scrollX={scrollX} />
            )}
            keyExtractor={(item) => item}
            onViewableItemsChanged={viewableItemsChanged}
            onScroll={onScrollHandler}
          />
        </View>
      )}
    </View>
  );
};

interface SliderItemProps {
  item: any;
  index: number;
  scrollX: SharedValue<number>;
}

const SliderItem = ({ item, index, scrollX }: SliderItemProps) => {
  const screenWidth = Dimensions.get("screen").width;

  // const rnAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: interpolate(
  //           scrollX.value,
  //           [
  //             (index - 1) * screenWidth,
  //             index * screenWidth,
  //             (index + 1) * screenWidth,
  //           ],
  //           [screenWidth * -0.25, 0, screenWidth * 0.25],
  //           Extrapolation.CLAMP
  //         ),
  //       },
  //     ],
  //   };
  // });
  return (
    <Image style={[styles.postImage]} source={item} />
    // <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
    //   <View
    //     style={{
    //       flex: 1,
    //       backgroundColor: "yellow",
    //     }}
    //   >

    //   </View>
    // </Animated.View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
    height: 350,
    backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "black",
  },
  postImage: {
    height: 350,
    width: Dimensions.get("screen").width - 20 - 2,
    borderRadius: spacing.medium - 2,
    marginHorizontal: 1,
  },
  activeImageStyle: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: "#333333ba",
    borderRadius: 10,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: newColors.white,
    // textDecorationLine:""
  },
});
