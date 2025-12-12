import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import styles from "../../utils/styles/PrincipalContentStyles";
import { TabsContext } from "../portfolio/_layout";

const Hobbies = () => {
  const context = useContext(TabsContext);

  if (!context) return <Text>Loading...</Text>;

  const { isDarkMode } = context;

  const likesItems = [
    "Salir a pasear",
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
    "Ir de cenar romántica",
  ];

  return (
    <View style={isDarkMode ? styles.bodyStylesDark : styles.bodyStylesWhite}>
      <View>
        <Text style={isDarkMode ? styles.likesTextDark : styles.likesTextWhite}>
          cosas que me gustan mucho:
        </Text>
        <ScrollView style={styles.ScrollViewStyle}>
          {likesItems.map((element) => (
            <Text
              key={element}
              style={
                isDarkMode ? styles.contentItemDark : styles.contentItemWhite
              }
            >
              {element}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Hobbies;
