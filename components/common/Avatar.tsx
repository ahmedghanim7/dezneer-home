import { Image, ImageResizeMode, ImageStyle, StyleProp } from "react-native";
import React from "react";

interface AvatarProps {
  source: any;
  width?: number;
  height?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  resizeMode?: ImageResizeMode | undefined;
}

const Avatar = ({ source, height, width, resizeMode }: AvatarProps) => {
  const avatarWidth = width || 46;
  const avatarHeight = height || 46;
  const imageStyles: StyleProp<ImageStyle> = {
    width: avatarWidth,
    height: avatarHeight,
    borderRadius: avatarWidth / 2,
  };

  return (
    <Image
      source={typeof source === "string" ? { uri: source } : source}
      style={imageStyles}
      resizeMode={resizeMode || "cover"}
    />
  );
};

export default Avatar;
