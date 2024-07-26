import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface BottomTabIconProps {
  icon?: any;
  color: string;
  name: string;
  focused: boolean;
}

const BottomTabIcon = ({ color, focused, name, icon }: BottomTabIconProps) => {
  return (
    <View>
      {icon && (
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          width={6}
          height={6}
        />
      )}
      {/* <Text style={{ color: color }}>{name}</Text> */}
    </View>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({});
