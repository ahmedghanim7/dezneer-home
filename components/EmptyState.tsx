import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

import { images } from "../constants";
import { spacing } from "@/theme";
import { useCallback } from "react";
import { CustomButton, CustomText } from "./common";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  const handleNavigate = useCallback(() => {
    router.push("/home");
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={images.empty}
        resizeMode="contain"
        style={{ width: "70%", height: 200 }}
      />
      <CustomText content={title} variant="smallRegular" />
      {subtitle && (
        <CustomText
          content={subtitle}
          variant="largeBold"
          containerStyles={{ marginTop: spacing.small }}
        />
      )}
      <CustomButton
        title="Back to Explore"
        onPress={handleNavigate}
        containerStyles={{ width: "100%", marginVertical: spacing.xLarge }}
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.tiny,
  },
});
