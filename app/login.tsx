import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../utils/styles/LoginStyles";
import { sendLogin } from "../services/LoginService";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
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
        title="Iniciar Sesion"
        onPress={() => {
          console.log("esto: ");
          console.log(email, password);

          sendLogin(email, password);
        }}
      />

      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.link}>No tienes cuenta? Registrate aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
