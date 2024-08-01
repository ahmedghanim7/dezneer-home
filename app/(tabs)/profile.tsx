import { router } from "expo-router";
import { FlatList } from "react-native";

import { EmptyState, VideoCard } from "../../components";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { Screen } from "@/components/common";
import { posts } from "./home";

const Profile = () => {
  // const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  return (
    <Screen scrollable={false} top="xLarge" bg="#161622">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[]}
        keyExtractor={(item) => item?.$id}
        renderItem={({ item }) => <VideoCard videoInfo={item} />}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
        ListHeaderComponent={<ProfileHeader />}
      />
    </Screen>
  );
};

export default Profile;
