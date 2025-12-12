import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Color from "../../utils/styles/ColorList";
import AddModal from "../../modals/AddModal";

type Props = {
  onCreateProduct: (product: {
    name: string;
    price: string;
    category: string;
  }) => void;
  onToggleDeleteButtons: () => void;
  onOpenAdd: () => void;
};

const NavBar: React.FC<Props> = ({
  onCreateProduct,
  onToggleDeleteButtons,
  onOpenAdd,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.navBarContainer}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonAdd}
          onPress={() => setShowModal(!showModal)}
        >
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>

        <Pressable style={styles.buttonDelete} onPress={onToggleDeleteButtons}>
          <Text style={styles.buttonText}>DELETE</Text>
        </Pressable>
      </View>

      <AddModal
        visible={showModal}
        onCancel={() => {
          onOpenAdd();
          setShowModal(false);
        }}
        onCreate={(product) => {
          onCreateProduct(product);
          setShowModal(false);
        }}
      />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarContainer: {
    padding: 5,
    margin: 1,
  },
  buttonContainer: {
    backgroundColor: Color.background_thertiary,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 8,
  },
  buttonAdd: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 3,
    backgroundColor: Color.button_primary,
  },
  buttonDelete: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: Color.button_primary,
  },
  buttonText: { fontSize: 20 },
});
