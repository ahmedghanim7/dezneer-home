// StoryItem.tsx
import { newColors, spacing } from "@/theme";
import React, { useMemo } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { IconButton, Typography } from "../common";
import { PlusIcon } from "@/assets/icons";

interface StoryItemProps {
  imageUrl: string;
  userName: string;
  storyCount: number;
  isCurrentUser?: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({
  imageUrl,
  userName,
  storyCount,
  isCurrentUser,
}) => {
  const size = 60; // Size of the outer circle
  const radius = (size - 4) / 2;
  const circumference = radius * 2 * Math.PI;
  const gapLength = 4; // Length of the gap between segments
  const dashLength = (circumference - gapLength * storyCount) / storyCount;

  const renderCircles = useMemo(() => {
    const circles = [];
    for (let i = 0; i < storyCount; i++) {
      circles.push(
        <Circle
          key={i}
          stroke={newColors.primary}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={2}
          strokeDasharray={`${dashLength}, ${storyCount > 1 ? gapLength : 0}`}
          rotation={(360 / storyCount) * i}
          origin={`${size / 2}, ${size / 2}`}
        />
      );
    }
    return circles;
  }, [storyCount]);

  const onStoryItemPressHandler = () => {
    console.log("onStoryItemPressHandler is running");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onStoryItemPressHandler}
        style={styles.svgContainer}
      >
        <Svg width={size} height={size}>
          {renderCircles}
        </Svg>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {isCurrentUser && (
          <IconButton
            onPress={onStoryItemPressHandler}
            containerStyle={styles.addStoryIcon}
            Icon={PlusIcon}
          />
        )}
      </TouchableOpacity>
      <Typography
        variant="xSmallRegular"
        content={userName}
        color={newColors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: spacing.normal - 2,
    justifyContent: "center",
  },

  svgContainer: {
    position: "relative",
    width: 60,
    height: 60,
  },
  image: {
    width: 49,
    height: 49,
    borderRadius: 25,
    position: "absolute",
    top: 5,
    left: 5,
  },
  addStoryIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  text: {
    fontSize: 12,
    color: "#000",
  },
});

export default StoryItem;
