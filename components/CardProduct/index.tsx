import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Product, ProductProps } from "../../types/CardProduct";
import Color from "../../utils/styles/ColorList";
import { images } from "../../utils/images";

type Props = ProductProps & {
  showDeleteButton: boolean;
  onDelete: () => void;
  onToggleCheck: () => void;
};

const CardProduct = ({
  product,
  showDeleteButton,
  onDelete,
  onToggleCheck,
}: Props) => {
  const { id, name, price, category, checked } = product;

  return (
    <View key={id} style={styles.cardProductContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.textName}>{name}</Text>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={
                images[category.toLowerCase()] ||
                require("../../assets/images/default.png")
              }
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.textPrice}>{price} $</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsConatiner}>
        <TouchableOpacity
          style={[
            styles.checkButton,
            checked && { borderColor: "green", backgroundColor: "#1e8e3e33" },
          ]}
          onPress={onToggleCheck}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.textCheck,
              checked && { color: "green", fontWeight: "bold" },
            ]}
          >
            {checked ? "OK" : "X"}
          </Text>
        </TouchableOpacity>
        {showDeleteButton && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={onDelete}
            activeOpacity={0.7}
          >
            <Text style={styles.textDelete}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  cardProductContainer: {
    backgroundColor: Color.background_secondary,
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  infoContainer: { width: "50%", gap: 10 },
  nameContainer: {},
  textName: { color: Color.text_primary, fontSize: 15 },
  descContainer: { flexDirection: "row" },
  imgContainer: { backgroundColor: "orange", width: 50, height: 50 },
  priceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textPrice: { color: Color.text_primary, fontSize: 20 },
  buttonsConatiner: {
    flex: 1,
    width: "50%",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 40,
  },
  checkButton: {
    borderWidth: 1.5,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flex: 1,
  },
  textCheck: {
    color: Color.text_primary,
  },
  deleteButton: {
    borderWidth: 1.5,
    borderColor: Color.text_cancel,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flex: 1,
  },

  textDelete: {
    color: Color.text_cancel,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});
