import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { VariantTypes, newColors, typography } from "@/theme";

interface TypographyProps extends TextProps {
  content: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  touchable?: boolean;
  rest?: TextProps;
  onPress?: (e: GestureResponderEvent) => void;
  variant?: VariantTypes;
  color?: string;
}

const Typography = ({
  content,
  containerStyles,
  textStyles,
  touchable,
  onPress,
  variant = "xSmallRegular",
  children,
  color,
  ...rest
}: TypographyProps) => {
  const textCustomStyles: StyleProp<TextStyle> = [
    typography[variant],
    { color: color || newColors.gray[200], textAlign: "center" },
    textStyles,
  ];

  if (touchable) {
    return (
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onPress}
        style={containerStyles}
      >
        {/* @ts-ignore */}
        <Text {...rest} onPress={undefined} style={textCustomStyles}>
          {content} {children}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    //@ts-ignore
    <Text {...rest} style={textCustomStyles}>
      {content}
      {children}
    </Text>
  );
};

export default Typography;
