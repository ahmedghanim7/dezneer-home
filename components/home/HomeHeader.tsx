import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { spacing } from "@/theme";
import CustomText from "../CustomText";
import { images } from "@/constants";
import SearchInput from "../SearchInput";
import Trending from "../Trending";
import { Posts } from "@/@types";

const HomeHeader = ({ latestPosts }: { latestPosts?: Posts[] }) => {
  return (
    <View
      style={{
        marginVertical: spacing.smaller,
        paddingHorizontal: spacing.tiny,
        gap: spacing.smaller,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
          marginBottom: spacing.smaller,
        }}
      >
        <View>
          <CustomText content={"Welcome Back"} variant="largeSemiBold" />
          <CustomText content={"JSMastery"} variant="mediumSemiBold" />
        </View>

        <View style={{ marginTop: spacing.tiny }}>
          <Image
            source={images.logoSmall}
            style={{
              width: spacing.small,
              height: spacing.medium,
            }}
            resizeMode="contain"
          />
        </View>
      </View>

      <SearchInput />

      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: spacing.smaller,
          paddingBottom: spacing.small,
        }}
      >
        <CustomText content={"Latest Videos"} variant="mediumSemiBold" />

        <Trending posts={latestPosts ?? []} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
