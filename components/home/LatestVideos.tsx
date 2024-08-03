import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import TrendingVideoItem from "./TrendingVideoItem";
import { useAppSelector } from "@/store";
import { Typography } from "../common";
import { colors, spacing } from "@/theme";

const LatestVideos = () => {
  const { latestPosts } = useAppSelector((state) => state.posts);
  return (
    <View style={styles.container}>
      {!!latestPosts.length && (
        <Typography
          content={"Latest Videos"}
          variant="smallRegular"
          color={colors.gray.DEFAULT}
          textStyles={{ textAlign: "left", marginHorizontal: spacing.xLarge }}
        />
      )}
      <FlatList
        contentContainerStyle={{ marginHorizontal: 10 }}
        data={latestPosts}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => {
          return <TrendingVideoItem item={item} />;
        }}
      />
    </View>
  );
};

export default LatestVideos;

const styles = StyleSheet.create({
  container: {
    rowGap: spacing.medium,
    marginTop: spacing.xLarge,
    marginBottom: spacing.normal,
  },
});
