import { VariantTypes, colors, spacing } from "@/theme";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import CustomText from "./CustomText";

interface CustomButtonProps {
  title: string;
  onPress: (e: GestureResponderEvent) => void;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
  variant?: VariantTypes;
  rest?: any;
}

const CustomButton = ({
  title,
  onPress,
  containerStyles,
  textStyles,
  isLoading,
  variant = "mediumRegular",
  rest,
}: CustomButtonProps) => {
  const containerDefaultStyle: StyleProp<ViewStyle> = {
    backgroundColor: colors.secondary.DEFAULT,
    borderRadius: spacing.tiny,
    minHeight: 62,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    opacity: isLoading ? 0.5 : 1,
  };

  const containerCustomStyle: StyleProp<ViewStyle> = [
    containerDefaultStyle,
    containerStyles ? containerStyles : {},
  ];

  const textDefaultStyle: StyleProp<TextStyle> = {
    fontSize: spacing.large,
    color: colors.black[100],
    fontWeight: "500",
  };

  const textCustomStyle: StyleProp<TextStyle> = [
    textDefaultStyle,
    textStyles ? textStyles : {},
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={containerCustomStyle}
      disabled={isLoading}
      {...rest}
    >
      <CustomText
        content={title}
        variant={variant}
        textStyles={textCustomStyle}
      />
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={{ marginLeft: spacing.tiny }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
