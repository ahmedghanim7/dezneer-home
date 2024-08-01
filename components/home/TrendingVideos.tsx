import { FlatList, StyleSheet, Text, View, ViewToken } from "react-native";
import React, { useState } from "react";
import { Posts } from "@/@types";
import TrendingVideoItem from "./TrendingVideoItem";

interface TrendingVideosProps {
  posts: Posts[];
}

const TrendingVideos = ({ posts }: TrendingVideosProps) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  return (
    <FlatList
      pagingEnabled
      data={posts}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => {
        console.log({ item });

        return <TrendingVideoItem activeItem={activeItem} item={item} />;
      }}
    />
  );
};

export default TrendingVideos;

const styles = StyleSheet.create({});
