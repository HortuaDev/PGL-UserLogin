import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListProps, Product } from "../../types/CardProduct";
import CardProduct from "../CardProduct";
import Color from "../../utils/styles/ColorList";

const List = ({
  listProducts,
  showDeleteButtons,
  onDeleteProduct,
  onToggleCheck,
}: ListProps & { onToggleCheck: (id: string | number) => void }) => {
  return (
    <View style={styles.listContainer}>
      {listProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>EMPTY LIST</Text>
        </View>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          {listProducts.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              showDeleteButton={showDeleteButtons}
              onDelete={() => onDeleteProduct(product.id)}
              onToggleCheck={() => onToggleCheck(product.id)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: { flex: 6 },
  scrollContainer: { paddingHorizontal: 10 },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 50,
    color: Color.text_secondary,
  },
});
