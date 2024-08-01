import { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";
import { Posts } from "@/@types";
import HomeHeader from "@/components/home/HomeHeader";
import { Screen } from "@/components/common";
import { DummyPosts } from "@/constants";
import { spacing } from "@/theme";

const Home = () => {
  // const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setRefreshing(false);
  };

  return (
    <Screen scrollable={false} top="huge" px="none">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard videoInfo={item} containerStyles={{marginHorizontal:spacing.xLarge}} />}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Screen>
  );
};

export default Home;

export const posts: Posts[] = [
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
