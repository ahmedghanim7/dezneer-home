import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { colors } from "@/theme";

interface FormikErrorMessageProps {
  errors: any;
  touched: any;
  inputName: string;
}

const FormikErrorMessage = ({
  errors,
  touched,
  inputName,
}: FormikErrorMessageProps) => {
  const isThereError = errors[inputName] && touched[inputName];

  if (!isThereError) return;

  return (
    <View>
      <CustomText
        content={isThereError ? errors[inputName] : ""}
        color={colors.secondary[100]}
      />
    </View>
  );
};

export default FormikErrorMessage;

const styles = StyleSheet.create({});
