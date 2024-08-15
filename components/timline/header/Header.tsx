import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { newColors, spacing } from "@/theme";
import {
  LogoIcon,
  NotificationsIcon,
  SearchIcon,
  UserIcon,
} from "@/assets/icons";
import { IconButton } from "@/components/common";

const Header = () => {
  return (
    <View style={styles.container}>
      <LogoIcon />
      <View>
        <View style={styles.actions}>
          <View style={styles.lastFeedUpdate}>
            <Text style={styles.lastFeedNumber}>34</Text>
            <Text style={styles.lastFeedLabel}>min</Text>
          </View>
          <IconButton
            containerStyle={{ width: 24, height: 24 }}
            Icon={SearchIcon}
          />
          <IconButton
            containerStyle={{ width: 24, height: 24 }}
            Icon={NotificationsIcon}
          />
          <IconButton Icon={UserIcon} />
        </View>
      </View>
    </View>
  );
};

export default Header;

/* 34 */

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 22,
    backgroundColor: newColors.white,
    minHeight: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 6,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.medium,
  },
  lastFeedUpdate: {
    width: 28,
    height: 28,
    borderColor: newColors.gray[300],
    borderRadius: 14,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  lastFeedNumber: {
    fontFamily: "Segoe-UI-Semi-Bold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    color: "#808080",
    height: 12,
  },
  lastFeedLabel: {
    fontFamily: "Segoe-UI-Semi-Bold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 8,
    lineHeight: 11,
    color: "#9A9A9A" /* min */,
  },
});
