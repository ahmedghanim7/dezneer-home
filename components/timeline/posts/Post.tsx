import { StyleSheet, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { newColors, spacing } from "@/theme";
import PostBody from "./PostBody";
import PostActions from "./PostActions";
import TodoList from "../todo/TodoList";

const Post = ({ post }: { post: any }) => {
  if (post.isTodoShown) return <TodoList />;
  return (
    <View style={styles.container}>
      <PostHeader user={post.user} />
      <PostBody postText={post.content} postImages={post.postImages} />
      <PostActions />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.medium,
    marginBottom: spacing.smaller,
    backgroundColor: newColors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
