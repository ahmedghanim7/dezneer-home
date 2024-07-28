import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
  StyleSheet,
} from "react-native";

import { icons } from "../constants";
import CustomText from "./CustomText";
import { colors, spacing } from "@/theme";

interface FormFieldProps {
  name?: string;
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  containerStyles?: StyleProp<ViewStyle>;
  type?: "PASSWORD" | "TEXT";
  errors?: any;
  touched?: any;
  keyboardType?: KeyboardTypeOptions;
}

const FormField = ({
  label,
  value,
  placeholder,
  onChangeText,
  containerStyles,
  type = "TEXT",
  errors,
  touched,
  keyboardType = "default",
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "PASSWORD";
  return (
    <View style={[styles.container, containerStyles]}>
      <CustomText
        content={label}
        variant="mediumRegular"
        color={colors.gray[100]}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { width: isPasswordField ? "90%" : "100%" }]}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={onChangeText}
          secureTextEntry={label === "Password" && !showPassword}
          {...props}
        />

        {type === "PASSWORD" && (
          <TouchableOpacity
            style={styles.togglePassword}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: { rowGap: spacing.tiny, alignItems: "flex-start" },

  inputContainer: {
    width: "100%",
    height: spacing.xLarge * 2,
    backgroundColor: colors.black[100],
    borderRadius: spacing.medium,
    borderWidth: 2,
    borderColor: colors.gray[100],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    color: "white",
    height: "100%",
    width: "100%",
    borderRadius: spacing.medium,
    paddingLeft: spacing.tiny,
    fontSize: spacing.normal,
  },
  togglePassword: {
    padding: spacing.tiny,
    alignItems: "center",
    justifyContent: "center",
  },
});
