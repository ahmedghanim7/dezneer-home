import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import { Typography } from "@/components/common";
import { newColors, spacing } from "@/theme";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      label: "Read pages 20 from marketing book",
      isChecked: false,
    },
    {
      id: 2,
      label: "important task to get done today",
      isChecked: false,
    },
    {
      id: 3,
      label:
        "Here is an example of putting long tasks that skip the first line",
      isChecked: false,
    },
  ]);

  const updateTodoItemStatus = (id: number) => {
    const updatedTodos = todoItems.map((item) => {
      if (item.id === id) item.isChecked = !item.isChecked;
      return item;
    });
    setTodoItems(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <Typography
        color={newColors.black}
        variant="mediumSmallSemiBold"
        content="3 Important Things To get done today"
        textStyles={{ textTransform: "capitalize", textAlign: "left" }}
      />
      <View style={styles.todoItemsList}>
        {todoItems.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            updateTodoItemStatus={updateTodoItemStatus}
          />
        ))}
      </View>
      <Typography
        color={newColors.primary}
        variant="smallSemiBold"
        content="View the calendar"
        textStyles={{ textDecorationLine: "underline" }}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: spacing.smaller,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  todoItemsList: {
    rowGap: spacing.medium - 2,
    marginTop: spacing.large,
    marginBottom: spacing.normal,
  },
});

/* View the calendar */
