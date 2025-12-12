import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { user } from "../types/RegisterTypes";
import { validateEmail, validatePassword } from "../utils/validation";

export const registerService = () => {

    const router = useRouter();

    const handleRegister = async ({fullname,email,password}:user) => {

        if (!fullname) {
        Alert.alert("Error", "Debes ingresar tu nombre completo");
        return;
        }

        if (!validateEmail(email)) {
        Alert.alert("Error", "Email invalido");
        return;
        }

        if (!validatePassword(password)) {
        Alert.alert("Error", "La contraseña debe tener minimo 6 caracteres");
        return;
        }

        const userData = { fullname, email, pswd: password };

        try {
        const response = await fetch("http://192.168.0.12:5000/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        if (response.status === 200 || response.status === 201) {
            await response.json();
            Alert.alert("Registro exitoso", "Usuario creado correctamente", [
            { text: "Ir al Login", onPress: () => router.push("/login") },
            ]);
        } else {
            const data = await response.json();
            Alert.alert("Error", data.message || "Error al registrar el usuario");
        }
        } catch (error) {
        Alert.alert("Error", "No se pudo conectar con el servidor");
        }
    };

    const handleLogin = () => {
        router.push("/login");
    };
        
    return { handleRegister, handleLogin };
}