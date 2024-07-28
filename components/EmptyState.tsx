import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

import { images } from "../constants";
import CustomButton from "./CustomButton";
import { spacing } from "@/theme";
import CustomText from "./CustomText";
import { useCallback } from "react";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  // Memoize the navigation function
  const handleNavigate = useCallback(() => {
    router.push("/home");
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={images.empty}
        resizeMode="contain"
        style={{ width: 270, height: 216 }}
      />

      <CustomText content={title} variant="xLargeBold" />
      {subtitle && <CustomText content={subtitle} variant="mediumRegular" />}

      <CustomButton
        title="Back to Explore"
        onPress={handleNavigate}
        containerStyles={{ width: "100%", marginVertical: spacing.smaller }}
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
