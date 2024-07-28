import { router } from "expo-router";
import { FlatList } from "react-native";

// import { icons } from "../../constants";
// import useAppwrite from "../../lib/useAppwrite";
// import { getUserPosts, signOut } from "../../lib/appwrite";
// import { useGlobalContext } from "../../context/GlobalProvider";
import { EmptyState, VideoCard } from "../../components";
import Screen from "@/components/Screen";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { Posts } from "@/@types";

const Profile = () => {
  // const { user, setUser, setIsLogged } = useGlobalContext();
  // const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    // setUser(null);
    // setIsLogged(false);

    router.replace("/sign-in");
  };

  const posts: Posts[] = [];

  return (
    <Screen scrollable={false}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
        ListHeaderComponent={
          <ProfileHeader
            logout={logout}
            posts={[]}
            user={{ avatar: "avatar", username: "ahmedghanim7" }}
          />
        }
      />
    </Screen>
  );
};

export default Profile;
