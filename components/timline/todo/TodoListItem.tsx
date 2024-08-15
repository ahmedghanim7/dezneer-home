import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton, Typography } from "@/components/common";
import { CheckBoxIcon, CheckedBoxIcon } from "@/assets/icons";
import { newColors, spacing } from "@/theme";

interface TodoListItemProps {
  updateTodoItemStatus: (id: number) => void;
  item: TodoItem;
}

interface TodoItem {
  id: number;
  label?: string;
  isChecked?: boolean;
}

const TodoListItem = ({
  item: { id, isChecked, label },
  updateTodoItemStatus,
}: TodoListItemProps) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isChecked ? "#ECECEC" : "#5e61ff15" },
      ]}
    >
      <Typography
        color={isChecked ? newColors.gray[100] : newColors.black}
        content={label || ""}
        variant={"smallRegular"}
        textStyles={[
          styles.todoLabel,
          { textDecorationLine: isChecked ? "line-through" : "none" },
        ]}
      />
      <IconButton
        onPress={() => updateTodoItemStatus(id)}
        containerStyle={{ width: 20, height: 20 }}
        Icon={isChecked ? CheckedBoxIcon : CheckBoxIcon}
      />
    </View>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.medium - 2,
    paddingVertical: spacing.tiny + 1,
    borderRadius: spacing.normal,
  },
  todoLabel: {
    textDecorationColor: "red",
    textDecorationStyle: "solid",
    width: "90%",
    textAlign: "left",
  },
});

/* Read pages 20 from marketing book */
