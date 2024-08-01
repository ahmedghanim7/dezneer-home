import {
  DimensionValue,
  Image,
  ImageResizeMode,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import React from "react";
import { colors, spacing } from "@/theme";

interface AvatarProps {
  source: any;
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  resizeMode?: ImageResizeMode | undefined;
}

const Avatar = ({
  source,
  height,
  width,
  borderColor,
  borderRadius,
  borderWidth,
  resizeMode,
}: AvatarProps) => {
  const imageStyles: StyleProp<ImageStyle> = [
    styles.container,
    { width, height, borderColor, borderRadius, borderWidth, resizeMode },
  ];

  console.log({ source });

  return (
    <Image
      source={source.url ? { uri: source.url } : source}
      style={imageStyles}
      resizeMode="cover"
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 46,
    height: 46,
    borderRadius: spacing.small,
    borderWidth: 3,
    borderColor: colors.secondary.DEFAULT,
  },
});
