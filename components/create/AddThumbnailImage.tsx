import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { colors, spacing } from "@/theme";
import { icons } from "@/constants";

interface AddThumbnailImageProps {
  openPicker: (mediaType: string) => void;
  thumbnail: Thumbnail;
}

interface Thumbnail {
  localUri: string;
}
const AddThumbnailImage = ({
  openPicker,
  thumbnail,
}: AddThumbnailImageProps) => {
  return (
    <View style={{ marginTop: spacing.small, rowGap: 2 }}>
      <CustomText content="Thumbnail Image" variant="largeSemiBold" />

      <TouchableOpacity onPress={() => openPicker("image")}>
        {thumbnail ? (
          <Image
            source={{ uri: thumbnail.localUri }}
            resizeMode="cover"
            style={styles.thumbnailImage}
          />
        ) : (
          <View style={styles.chooseThumbnailContainer}>
            <Image
              source={icons.upload}
              resizeMode="contain"
              alt="upload"
              style={styles.chooseThumbnailIcon}
            />
            <CustomText content="Choose a file" variant="mediumMedium" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AddThumbnailImage;

const styles = StyleSheet.create({
  thumbnailImage: {
    width: "100%",
    height: 64,
    borderRadius: spacing.xxLarge,
  },
  chooseThumbnailContainer: {
    width: "100%",
    height: spacing.normal,
    backgroundColor: colors.black.DEFAULT,
    borderRadius: spacing.xxLarge,
    borderWidth: 2,
    borderColor: colors.black[200],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 2,
  },
  chooseThumbnailIcon: { width: spacing.smaller, height: spacing.smaller },
});
