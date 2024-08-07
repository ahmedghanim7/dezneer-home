import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { newColors } from "@/theme";

interface IconButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  icon?: any;
  iconStyle?: IconStyle;
  containerStyle?: StyleProp<ViewStyle>;
  Icon?: any;
  checkedIconFilled?: any;
  isChecked?: boolean;
}

interface IconStyle {
  width?: number;
  height?: number;
  fill?: string;
}
const IconButton = ({
  onPress,
  containerStyle,
  Icon,
  isChecked,
  iconStyle,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      hitSlop={5}
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Icon
        {...iconStyle}
        fill={isChecked ? newColors.primary : newColors.gray[200]}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
});
