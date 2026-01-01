import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Todo } from "../types/todo";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}) {
  const renderRightActions = () => (
    <TouchableOpacity onPress={onDelete} style={styles.deleteAction}>
      <Ionicons name="trash-bin" size={24} color="white" />
    </TouchableOpacity>
  );

  const renderLeftActions = () => (
    <TouchableOpacity
      style={styles.archiveAction}
      onPress={() => alert("Archived!")}
    >
      <Ionicons name="archive" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <Swipeable
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
      >
        <TouchableOpacity onPress={onToggle} style={styles.container}>
          <View style={styles.todoContent}>
            <View
              style={[
                styles.checkbox,
                todo.completed && styles.completedCheckbox,
              ]}
            >
              {todo.completed && (
                <Ionicons name="checkmark" size={16} color="white" />
              )}
            </View>
            <Text
              style={[styles.title, todo.completed && styles.completedTitle]}
            >
              {todo?.title}
            </Text>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  todoContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: "#AAA",
  },
  deleteAction: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  archiveAction: {
    backgroundColor: "#34C759",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#007BFF",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  completedCheckbox: {
    backgroundColor: "#007BFF",
  },
});
