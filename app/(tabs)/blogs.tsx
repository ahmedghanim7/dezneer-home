import { images } from "@/assets";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const postImages = [images.image4, images.image1, images.image2, images.image3];

const BlogsScreen = () => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={postImages}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
};

interface SliderItemProps {
  item: any;
  index: number;
  scrollX: SharedValue<number>;
}

const SliderItem = ({ item, index, scrollX }: SliderItemProps) => {
  const screenWidth = Dimensions.get("window").width;

  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [-screenWidth * 0.25, 0, screenWidth * 0.25],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <Image source={item} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 400,
    width: 250,
    borderRadius: 12,
  },
});

export default BlogsScreen;
