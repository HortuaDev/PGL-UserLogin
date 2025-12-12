import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/styles/ColorList";
import { FooterCard } from "../../types/CardFooter";

interface CardFooterProps {
  card: FooterCard;
}

const CardFooter = ({ card }: CardFooterProps) => {
  const { title, value } = card;

  return (
    <View style={styles.cardFooterContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.textNumber}>{value}</Text>
      </View>
    </View>
  );
};

export default CardFooter;

const styles = StyleSheet.create({
  cardFooterContainer: {
    flex: 1,
    gap: 4,
  },
  titleContainer: {
    backgroundColor: Color.background_secondary,
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 5,
  },
  textTitle: {
    fontSize: 18,
    textAlign: "center",
    color: Color.text_primary,
  },
  numberContainer: {
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 5,
    justifyContent: "center",
  },
  textNumber: {
    fontSize: 30,
    textAlign: "center",
  },
});
