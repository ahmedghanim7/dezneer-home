import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { spacing } from "@/theme";

interface BottomTabIconProps {
  icon?: any;
  color: string;
  name: string;
  focused: boolean;
}

const BottomTabIcon = ({ color, focused, name, icon }: BottomTabIconProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 6, height: 6 }}
      />
      <Text
        style={{
          color: color,
          fontSize: spacing.large,
          fontWeight: focused ? "bold" : "normal",
        }}
      >
        {name}
      </Text>
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
});
