import { StyleSheet, View } from "react-native";
import React from "react";
import { Typography } from "@/components/common";
import { newColors, spacing } from "@/theme";
import ImagesCarousel from "./images-carousel/ImagesCarousel";

interface PostBodyProps {
  postText?: string;
  postImages?: string[];
}

const PostBody = ({ postImages = [], postText = "" }: PostBodyProps) => {
  const numberOfPostImages = postImages?.length || 0;
  return (
    <View style={styles.container}>
      <Typography
        content={postText}
        variant="smallRegular"
        color={newColors.black}
        textStyles={{ textAlign: "left", paddingHorizontal: 4 }}
      />
      {!!numberOfPostImages && (
        <ImagesCarousel
          postImages={postImages}
          numberOfPostImages={numberOfPostImages}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.tiny + 1,
    rowGap: spacing.tiny + 1,
    paddingHorizontal: 4,
  },
});
export default PostBody;
