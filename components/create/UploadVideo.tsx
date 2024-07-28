import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, spacing } from "@/theme";
import { ResizeMode, Video } from "expo-av";
import CustomText from "../CustomText";
import { icons } from "@/constants";

interface UploadVideoProps {
  openPicker: (mediaType: string) => void;
  video: SelectedVideo;
}

interface SelectedVideo {
  localUri: string;
}
const UploadVideo = ({ openPicker, video }: UploadVideoProps) => {
  return (
    <View style={{ marginTop: spacing.small, rowGap: 2 }}>
      <CustomText content="Upload Video" variant="largeSemiBold" />
      <TouchableOpacity onPress={() => openPicker("video")}>
        {video ? (
          <Video
            source={{ uri: video.localUri }}
            style={{
              width: "100%",
              height: 64,
              borderRadius: spacing.xxLarge,
            }}
            useNativeControls
            resizeMode={ResizeMode.COVER}
            isLooping
          />
        ) : (
          <View style={styles.uploadVideoContainer}>
            <View style={styles.uploadVideoIcon}>
              <Image
                source={icons.upload}
                resizeMode="contain"
                alt="upload"
                style={{ width: 20, height: 20 }}
              />
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UploadVideo;

const styles = StyleSheet.create({
  uploadVideoContainer: {
    width: "100%",
    height: 40,
    paddingHorizontal: spacing.tiny,
    backgroundColor: colors.black.DEFAULT,
    borderRadius: spacing.xxLarge,
    borderWidth: 1,
    borderColor: colors.black[200],
    alignItems: "center",
    justifyContent: "center",
  },
  uploadVideoIcon: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.secondary.DEFAULT,
    alignItems: "center",
    justifyContent: "center",
  },
});
