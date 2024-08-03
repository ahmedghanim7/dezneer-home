import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, spacing } from "@/theme";
import { FileMedia } from "@/@types/Posts.type";
import { Button, Typography } from "../common";
import { icons } from "@/assets";

interface AddThumbnailImageProps {
  openPicker: (mediaType: string) => void;
  thumbnail: FileMedia;
  clearMedia: (type: string) => void;
}

const AddThumbnailImage = ({
  openPicker,
  thumbnail,
  clearMedia,
}: AddThumbnailImageProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          content="Thumbnail Image"
          variant="mediumRegular"
          color={colors.gray.DEFAULT}
        />

        {thumbnail.uri && (
          <Button
            variant="smallRegular"
            title="Clear"
            containerStyles={styles.clearButton}
            textStyles={{ color: "white" }}
            onPress={() => clearMedia("thumbnail")}
          />
        )}
      </View>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => openPicker("image")}
      >
        {thumbnail.uri ? (
          <Image
            source={{ uri: thumbnail.uri }}
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
            <Typography content="Choose a file" variant="smallRegular" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AddThumbnailImage;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.small,
    rowGap: spacing.small,
    alignItems: "flex-start",
  },
  thumbnailImage: {
    width: "100%",
    height: 150,
    borderRadius: spacing.xxLarge,
  },
  chooseThumbnailContainer: {
    width: "100%",
    height: 58,
    backgroundColor: colors.black[100],
    borderRadius: spacing.normal,
    borderWidth: 2,
    borderColor: colors.black[200],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 2,
  },
  chooseThumbnailIcon: { width: spacing.large, height: spacing.large },
  clearButton: {
    minHeight: 20,
    paddingHorizontal: 4,
    paddingVertical: 4,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.red.redDark,
  },
});
