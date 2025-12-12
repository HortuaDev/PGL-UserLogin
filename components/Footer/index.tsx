import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/styles/ColorList";
import CardFooter from "../CardFooter";
import { FooterCard } from "../../types/CardFooter";
import { Product } from "../../types/CardProduct";

interface FooterProps {
  listProducts: Product[];
}

const Footer = ({ listProducts }: FooterProps) => {
  const totalProducts = listProducts.length;
  const selectedProducts = listProducts.filter((p) => p.checked).length;
  const totalPrice = listProducts
    .filter((p) => p.checked)
    .reduce((sum, p) => sum + p.price, 0);

  const footerCards: FooterCard[] = [
    { id: 1, title: "Products", value: totalProducts },
    { id: 2, title: "Selected", value: selectedProducts },
    { id: 3, title: "Total (€)", value: parseFloat(totalPrice.toFixed(2)) },
  ];

  return (
    <View style={styles.footerContainer}>
      <View style={styles.totalTitleContainer}>
        <Text style={styles.totalTitle}>Total</Text>
      </View>
      <View style={styles.cardsContainer}>
        {footerCards.map((card) => (
          <CardFooter key={card.id} card={card} />
        ))}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    gap: 10,
  },
  totalTitleContainer: {
    backgroundColor: Color.background_secondary,
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 5,
  },
  totalTitle: { color: Color.text_primary, textAlign: "center", fontSize: 20 },
  cardsContainer: { gap: 20, flexDirection: "row" },
});
