import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpacingTypes, colors, spacing } from "@/theme";
import { StatusBar } from "expo-status-bar";

interface ScreenProps {
  children: React.ReactNode;
  withStatusBar?: boolean;
  top?: SpacingTypes;
  px?: SpacingTypes;
  bottom?: SpacingTypes;
  bg?: string;
  scrollable?: boolean;
}

const Screen = ({
  children,
  withStatusBar = false,
  bottom = "none",
  px = "xLarge",
  top = "none",
  bg = colors.black[100],
  scrollable = true,
}: ScreenProps) => {
  if (scrollable) {
    return (
      <SafeAreaView style={styles.SafeAreaViewContainer}>
        <ScrollView
          style={{
            flex: 1,
            paddingBottom: spacing[bottom],
            paddingHorizontal: spacing[px],
            paddingTop: spacing[top],
            backgroundColor: bg,
          }}
        >
          {children}
        </ScrollView>
        {withStatusBar && <StatusBar backgroundColor="#161622" style="light" />}
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      {children}
      {withStatusBar && <StatusBar backgroundColor="#161622" style="light" />}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
  },
});
