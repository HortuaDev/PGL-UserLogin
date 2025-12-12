import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { styles } from "../utils/styles/RegisterStyles";
import { registerService } from "../services/registerService";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister, handleLogin } = registerService();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("userToken");
        if (value) {
          router.replace("/navigation");
        } else {
          router.replace("/login");
        }
      } catch (e) {
        console.error("Error reading userToken from AsyncStorage:", e);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={fullname}
        onChangeText={setFullname}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electronico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Crear cuenta"
        onPress={() => handleRegister({ fullname, email, password })}
      />

      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.link}>Ya tengo cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}
