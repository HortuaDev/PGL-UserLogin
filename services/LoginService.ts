import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Alert } from "react-native";

export const sendLogin = async (email: string, pswd: string) => {
  
    // se llama pswd porque asi lo pide la api

    const loginData = { email, pswd};

  try {
    const response = await fetch("http://192.168.0.12:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (data.statusCode === 200) {
      await AsyncStorage.setItem("userToken", data.object.token);
      router.push("/navigation");
    } else {
      Alert.alert("Error al logearse", data.message);
    }
  } catch (error) {
    console.error("Error en la solicitud de login:", error);
    Alert.alert("Error", "No se pudo conectar con el servidor.");
  }
};
