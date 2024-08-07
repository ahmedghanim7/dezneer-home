import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { IconButton, Typography } from "@/components/common";
import {
  CommentsIcon,
  LikeIcon,
  ViewsIcon,
  WorkspacePremiumIcon,
} from "@/assets/icons";
import { spacing } from "@/theme";

const PostActions = () => {
  const [isPostLiked, setIsPostLiked] = useState<boolean>(false);
  const likePostToggle = () => setIsPostLiked((prev) => !prev);

  return (
    <View style={styles.container}>
      <PostActionItem label={"Comment"} Icon={CommentsIcon} number={"87.3k"} />
      <PostActionItem label={"View"} Icon={ViewsIcon} number={"77.1k"} />
      <PostActionItem
        label={"Like"}
        Icon={LikeIcon}
        number={"69.4k"}
        isPostLiked={isPostLiked}
        likePostToggle={likePostToggle}
      />
      <PostActionItem
        label={"Appreciate"}
        Icon={WorkspacePremiumIcon}
        number={"77.3k"}
      />
    </View>
  );
};

export default PostActions;

const PostActionItem = ({
  Icon,
  label,
  number,
  likePostToggle,
  isPostLiked,
}: PostActionItemProps) => {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <IconButton
        iconStyle={{ fill: "#666666" }}
        Icon={Icon}
        // containerStyle={{ width: 24, height: 24 }}
        isChecked={isPostLiked}
        onPress={likePostToggle || undefined}
      />
      <Typography content={`${number} ${label}`} variant="xxxSmallRegular" />
    </View>
  );
};

interface PostActionItemProps {
  label: string;
  number: string;
  Icon: any;
  likePostToggle?: (val: boolean) => void;
  isPostLiked?: boolean;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.small,
    paddingTop: spacing.small,
    paddingBottom: 1,
  },
});
