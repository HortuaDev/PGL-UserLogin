import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

type Product = {
  name: string;
  price: string;
  category: string;
};

type Props = {
  visible: boolean;
  onCancel: () => void;
  onCreate: (product: Product) => void;
};

const categories = ["Split", "Ventana", "Industrial", "Cassete", "Portatil"];

const CreateProductModal: React.FC<Props> = ({
  visible,
  onCancel,
  onCreate,
}) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleCreate = () => {
    if (!name.trim() || !price.trim() || !category.trim()) {
      setError(true);
      setName("");
      setPrice("");
      setCategory("");
      setShowDropdown(false);
      return;
    }
    setError(false);
    onCreate({ name, price, category });
    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>CREATE NEW PRODUCT</Text>

          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>NAME</Text>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>PRICE</Text>
              <TextInput
                style={styles.textInput}
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                placeholder="Enter price"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>CATEGORY</Text>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setShowDropdown(!showDropdown)}
              >
                <Text>{category || "Select category"}</Text>
                <Text style={styles.dropdownArrow}>▼</Text>
              </TouchableOpacity>
            </View>

            {showDropdown && (
              <View style={styles.dropdownContainer}>
                {categories.map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    style={styles.dropdownOption}
                    onPress={() => {
                      setCategory(cat);
                      setShowDropdown(false);
                    }}
                  >
                    <Text>{cat}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {error && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  Error: please fill in all fields
                </Text>
              </View>
            )}
          </ScrollView>

          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.actionText}>CANCEL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleCreate}
              activeOpacity={0.8}
            >
              <Text style={styles.actionText}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateProductModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modalContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: 360,
    maxHeight: "85%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 8,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 8,
  },
  dropdownArrow: {
    color: "#444",
  },
  dropdownContainer: {
    backgroundColor: "#e6e6e6",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 4,
    marginBottom: 10,
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  errorBox: {
    backgroundColor: "#F8D7DA",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#F5C2C7",
    marginTop: 10,
  },
  errorText: {
    color: "#721C24",
    textAlign: "center",
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  cancelButton: {
    backgroundColor: "#C0392B",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  confirmButton: {
    backgroundColor: "#27AE60",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
