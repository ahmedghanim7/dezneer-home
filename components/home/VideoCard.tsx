import { useState } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { spacing } from "@/theme";
import { VideoPlayer } from "../common";
import VideoCardHeader from "./VideoCardHeader";
import { Posts } from "@/@types";

const VideoCard = ({
  videoInfo,
  containerStyles,
}: {
  videoInfo: Posts;
  containerStyles?: StyleProp<ViewStyle>;
}) => {
  const { creator, thumbnail, title, video } = videoInfo;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <View style={[styles.container, containerStyles]}>
      <VideoCardHeader
        avatar={creator.avatar}
        creator={creator.username}
        title={title}
      />
      <VideoPlayer
        isVideoPlaying={isVideoPlaying}
        setIsVideoPlaying={setIsVideoPlaying}
        thumbnailUrl={thumbnail}
        videoUrl={video}
      />
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: spacing.normal,
    marginBottom: spacing.xxLarge,
  },
});
