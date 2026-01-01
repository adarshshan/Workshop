import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface TodoInputInterface {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onAdd: () => void;
}

const TodoInput: React.FC<TodoInputInterface> = ({
  value,
  onChange,
  onAdd,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter todo..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={onAdd}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TodoInput;
