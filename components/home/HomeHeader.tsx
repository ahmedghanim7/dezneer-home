import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, spacing } from "@/theme";
import CustomText from "../common/CustomText";
import { DummyPosts, images } from "@/constants";
import SearchInput from "../SearchInput";
import { Posts } from "@/@types";
import { useAppSelector } from "@/store";
import TrendingVideos from "./TrendingVideos";

const HomeHeader = ({ latestPosts }: { latestPosts?: Posts[] }) => {
  const { username } = useAppSelector((state) => state.user);
  return (
    <View style={{ paddingVertical: 10, marginBottom: 20 }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={{ alignItems: "flex-start" }}>
            <CustomText content={"Welcome Back"} variant="smallRegular" />
            <CustomText content={username || "Username"} variant="xLargeBold" />
          </View>
          <Image
            source={images.logoSmall}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </View>
        <SearchInput />
        <CustomText
          content={"Trending Videos"}
          variant="smallRegular"
          color={colors.gray["300"]}
          textStyles={{ marginTop: spacing.xLarge, marginBottom: spacing.normal}}
        />
      </View>
      <TrendingVideos posts={posts} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.large,
    alignItems: "flex-start",
  },

  topContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom:spacing.large
  },
  trendingContainer: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
  },
});

const posts: Posts[] = [
  {
    creator: { avatar: DummyPosts.DummyAvatar, username: "Ahmed GH" },
    $id: "1114785",
    thumbnail: DummyPosts.Thumbnail1,
    title: "title 1 for some desc...",
    video: DummyPosts.Video1,
  },
  {
    creator: { avatar: DummyPosts.DummyAvatar, username: "John Mat" },
    $id: "44758",
    thumbnail: DummyPosts.Thumbnail2,
    title: "what did you think title 2 for some desc...",
    video: DummyPosts.Video2,
  },
  {
    creator: { avatar: DummyPosts.DummyAvatar, username: "Andrian Jil" },
    $id: "778596",
    thumbnail: DummyPosts.Thumbnail3,
    title: "did you think title 3 for some desc...",
    video: DummyPosts.Video3,
  },
];
