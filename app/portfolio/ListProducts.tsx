import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/HeaderList";
import NavBar from "../../components/NavBar";
import Color from "../../utils/styles/ColorList";
import List from "../../components/List";
import { Product } from "../../types/CardProduct";
import uuid from "react-native-uuid";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function listProducts() {
  const [listProducts, setListProducts] = useState<Product[]>([
    {
      id: uuid.v4(),
      name: "Samsung Split",
      price: 349.99,
      category: "Split",
      checked: false,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "Cecotec Portátil",
      price: 259.99,
      category: "Portatil",
      checked: true,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "Daikin Cassette",
      price: 799.99,
      category: "Cassette",
      checked: false,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "LG Multisplit",
      price: 999.99,
      category: "Industrial",
      checked: false,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "Panasonic Conducto",
      price: 1199.99,
      category: "Ventana",
      checked: false,
      deleted: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleCreateProduct = (product: {
    name: string;
    price: string;
    category: string;
  }) => {
    const newProduct: Product = {
      id: uuid.v4(),
      name: product.name,
      price: parseFloat(product.price),
      category: product.category,
      checked: false,
      deleted: false,
    };

    setListProducts([...listProducts, newProduct]);
    setShowModal(false);
    setShowDeleteButtons(false);
  };

  const [showDeleteButtons, setShowDeleteButtons] = useState(false);

  const handleOpenAddModal = () => {
    if (showDeleteButtons) setShowDeleteButtons(false);
  };

  const handleDeleteProduct = (id: string | number) => {
    setListProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleToggleCheck = (id: string | number) => {
    setListProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <NavBar
        onCreateProduct={handleCreateProduct}
        onToggleDeleteButtons={() => setShowDeleteButtons(!showDeleteButtons)}
        onOpenAdd={handleOpenAddModal}
      />

      <List
        listProducts={listProducts}
        showDeleteButtons={showDeleteButtons}
        onDeleteProduct={handleDeleteProduct}
        onToggleCheck={handleToggleCheck}
      />

      <Footer listProducts={listProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background_primary,
  },
});
