import { Image, StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { getInfo } from "../../services/welcomeService";

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome User</Text>

      <Image
        source={require("../../assets/cat.jpg")}
        style={styles.avatarImage}
      />

      <View style={styles.buttonsGroup}>
        <View style={styles.buttonContainer}>
          <Link style={styles.buttonText} href="navigation/portfolio" push>
            Portfolio
          </Link>
        </View>
        <Button
          title="get token"
          onPress={async () => {
            const result = await getInfo();
            if (!result) {
              Alert.alert("Error", "No se pudo obtener la información");
              return;
            }
            Alert.alert(
              "Bienvenido",
              `${result.data.object} \n\n Token: ${result.token}`
            );
          }}
        ></Button>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

  title: { fontWeight: "bold", fontSize: 24, marginBottom: 20 },
  buttonsGroup: { flexDirection: "row", gap: 20 },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "lightgray",
    padding: 10,
  },
  buttonText: {
    color: "blue",
    margin: 0,
  },
  avatarImage: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
});
