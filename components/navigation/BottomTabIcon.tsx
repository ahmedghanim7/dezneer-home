import { StyleSheet, View } from "react-native";
import React from "react";
import { Typography } from "../common";
import { newColors } from "@/theme";

interface BottomTabIconProps {
  Icon?: any;
  color: string;
  name: string;
  focused: boolean;
}

const BottomTabIcon = ({ color, focused, name, Icon }: BottomTabIconProps) => {
  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.iconContainer,
          focused ? { backgroundColor: "#5E60FF1A" } : {},
        ]}
      >
        <Icon fill={focused ? newColors.primary : newColors.gray[100]} />
      </View>
      <Typography
        content={name}
        variant={"xxxxSmallRegular"}
        color={color}
        textStyles={styles.label}
      />
    </View>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  iconContainer: {
    borderRadius: 12,
    width: 40,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    textTransform: "uppercase",
    letterSpacing: 1.3,
    lineHeight: 11,
    fontSize: 8,
  },
});
