import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
} from "react-native";
import { Todo } from "../types/todo";
import { loadTodos, saveTodos } from "../storage/todoStorage";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.header}>My-Todo</Text>
        <FlatList
          data={todos}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onToggle={() =>
                setTodos((prev) =>
                  prev.map((t) =>
                    t.id === item.id ? { ...t, completed: !t.completed } : t
                  )
                )
              }
              onDelete={() =>
                setTodos((prev) => prev.filter((t) => t.id !== item.id))
              }
            />
          )}
          contentContainerStyle={styles.listContent}
        />
        <TodoInput
          value={text}
          onChange={setText}
          onAdd={() => {
            if (!text) return;
            setTodos([
              ...todos,
              { id: Date.now().toString(), title: text, completed: false },
            ]);
            setText("");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 20,
  },
});
