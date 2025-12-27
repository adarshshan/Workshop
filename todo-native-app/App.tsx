import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    AsyncStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await AsyncStorage.getItem("TODOS");
      if (data) {
        setTodos(JSON.parse(data));
      }
    };
    loadTodos();
  }, []);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const EmptyList = () => <Text style={styles.emptyText}>No todos yet 🚀</Text>;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>My Todo App</Text>

        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={EmptyList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.todoItem}
              onPress={() => toggleTodo(item.id)}
            >
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completedText,
                ]}
              >
                {item.title}
              </Text>

              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Text style={styles.deleteText}>❌</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />

        <View style={styles.inputRow}>
          <TextInput
            placeholder="Enter todo..."
            value={text}
            onChangeText={setText}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={addTodo}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  todoItem: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },
  deleteText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#9ca3af",
  },
});
