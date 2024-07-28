import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, spacing } from "@/theme";
import { icons } from "@/constants";
import InfoBox from "../InfoBox";

interface ProfileHeaderProps {
  logout?: () => void;
  user?: User;
  posts?: [];
}

interface User {
  avatar?: string;
  username?: string;
}

const ProfileHeader = ({ logout, user, posts }: ProfileHeaderProps) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: spacing.smaller,
        marginBottom: spacing.normal,
        paddingHorizontal: spacing.tiny,
      }}
    >
      <TouchableOpacity
        onPress={logout}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "flex-end",
          marginBottom: spacing.medium,
        }}
      >
        <Image
          source={icons.logout}
          resizeMode="contain"
          style={{ width: spacing.small, height: spacing.small }}
        />
      </TouchableOpacity>

      <View
        style={{
          width: spacing.xLarge,
          height: spacing.xLarge,
          borderWidth: 2,
          borderColor: colors.secondary.DEFAULT,
          borderRadius: spacing.tiny,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: user?.avatar }}
          style={{ width: "90%", height: "90%", borderRadius: spacing.xLarge }}
          resizeMode="cover"
        />
      </View>

      {user?.username && (
        <InfoBox
          title={user?.username}
          containerStyles={{ marginTop: spacing.smaller }}
        />
      )}

      <View
        style={{
          marginTop: spacing.smaller,
          flexDirection: "row",
        }}
      >
        <InfoBox
          title={"17"}
          subtitle="Posts"
          containerStyles={{ marginRight: spacing.medium }}
        />
        <InfoBox title="1.2k" subtitle="Followers" />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
