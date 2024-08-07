import { images } from "@/assets";
import { Screen } from "@/components/common";
import TimelineHeader from "@/components/timeline/TimelineHeader";
import UserStories from "@/components/timeline/UserStories";
import Post from "@/components/timeline/posts/Post";
import { FlatList, StyleSheet, View } from "react-native";
// import { BlurView } from "@react-native-community/blur";

const HomeScreen = () => {
  return (
    <Screen scrollable={false} px="none" bg="#F0F2F5">
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <TimelineHeader />
            <UserStories />
          </View>
        }
        contentContainerStyle={{ paddingBottom: 0 }}
        style={{ minHeight: 345 }}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
};

export default HomeScreen;

const posts = [
  {
    id: 1,
    user: { fullname: "John Wike", username: "john.wike", id: 1 },
    content: "New photo for Palestine ♥",
    postImages: [images.image4, images.image1, images.image2, images.image3],
  },

  {
    id: 2,
    user: { fullname: "Mike Gordn", username: "miko.g.ordn", id: 2 },
    content:
      "Not everyone can be a millionaire, not everyone can have the beauty queens, not everyone can be happy. It's a competition.",
    postImages: [images.image],
  },
  {
    id: 3,
    isTodoShown: true,
  },
  {
    id: 4,
    user: { fullname: "Rami Al-Abdallah", username: "rami.aballah", id: 3 },
    content:
      "Here is an example of putting long tasks that skip the first line",
    postImages: [],
  },
];
