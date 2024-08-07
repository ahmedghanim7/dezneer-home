import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { images } from "@/assets";

const { width: viewportWidth } = Dimensions.get("window");
const postImages = [images.image4, images.image1, images.image2, images.image3];

const VideosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomImageSliderItem images={postImages} index={2} item={{}} /> */}
      <CustomImageSlider images={postImages} />
    </SafeAreaView>
  );
};

interface renderItemProps {
  images: [];
  index: number;
  item: any;
  pagingEnabled: boolean;
}

const CustomImageSliderItem = ({
  images,
  item,
  index,
  pagingEnabled,
}: renderItemProps) => {
  const screenWidth = Dimensions.get("screen").width;
  const isFirstItem = index === 0;
  const isLastItem = index === images.length - 1;
  const currentImage = images[index];
  const nextImage = isLastItem ? null : images[index + 1];
  const prevImage = isFirstItem ? null : images[index - 1];

  return (
    <View
      style={{ width: screenWidth, height: 350, flexDirection: "row", gap: 10 }}
    >
      {!isFirstItem && (
        <Image source={prevImage} style={{ width: 10, height: "100%" }} />
      )}
      <Image
        source={currentImage}
        style={{
          width:
            isFirstItem || isLastItem ? screenWidth - 20 : screenWidth - 40,
          height: "100%",
        }}
      />
      {!isLastItem && (
        <Image source={nextImage} style={{ width: 10, height: "100%" }} />
      )}
    </View>
  );
};

const CustomImageSlider = ({ images }) => {
  const [pagingEnabled, setPagingEnabled] = useState(true);
  return (
    <FlatList
      onScroll={(e) => {
        setPagingEnabled(false);
        console.log("scroll");
      }}
      onScrollEndDrag={(e) => {
        console.log(e.nativeEvent.contentOffset);
        setPagingEnabled(true);
      }}
      data={images}
      renderItem={({ item, index }) => (
        <CustomImageSliderItem
          pagingEnabled={pagingEnabled}
          item={item}
          index={index}
          images={images}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
      pagingEnabled={pagingEnabled}
      snapToInterval={viewportWidth}
      decelerationRate="fast"
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 0,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default VideosScreen;
