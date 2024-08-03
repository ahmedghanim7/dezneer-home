import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { VideoPlayer, VideoThumbnail } from "../common";
import { Post } from "@/@types";
import { colors } from "@/theme";

const TrendingVideoItem = ({ item }: { item: Post }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <Animatable.View
      style={{ marginRight: 10 }}
      // animation={activeItem === item?.$id ? zoomIn : zoomOut}
      duration={500}
    >
      <VideoThumbnail
        post={item}
        thumbnailStyles={{
          borderRadius: 14,
          shadowOffset: { height: 5, width: 5 },
          shadowColor: colors.black[100],
          shadowOpacity: 0.4,
          width: 148,
          height: 236,
        }}
      />
    </Animatable.View>
  );
};

export default TrendingVideoItem;

const zoomIn: any = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut: any = {
  //  Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle> = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};
