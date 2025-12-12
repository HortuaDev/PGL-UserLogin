import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("userToken");
    router.replace("/login");
  } catch (error) {
    console.error("Error al cerrar sesion:", error);
  }
};
