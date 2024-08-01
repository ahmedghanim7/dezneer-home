import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { VideoPlayer } from "../common";
import { Posts } from "@/@types";
import { colors } from "@/theme";

interface TrendingVideoItemProps {
  activeItem: any;
  item: Posts;
}

const TrendingVideoItem = ({ activeItem, item }: TrendingVideoItemProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <Animatable.View
      style={{ marginRight: 5 }}
      animation={activeItem === item?.$id ? zoomIn : zoomOut}
      duration={500}
    >
      <VideoPlayer
        containerStyles={{ width: 148, height: 236 }}
        videoStyles={{ width: 148, height: 236 }}
        isVideoPlaying={isVideoPlaying}
        setIsVideoPlaying={setIsVideoPlaying}
        thumbnailUrl={item.thumbnail}
        videoUrl={item.video}
        thumbnailStyles={{
          borderRadius: 14,
          shadowOffset: { height: 5, width: 5 },
          shadowColor: colors.black[100],
          shadowOpacity: 0.4,
        }}
      />
    </Animatable.View>
  );
};

export default TrendingVideoItem;

const zoomIn: any = {
  //  Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle> = {
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
