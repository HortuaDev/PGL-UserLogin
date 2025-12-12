import AsyncStorage from '@react-native-async-storage/async-storage'
import { WelcomeResponse } from '../types/WelcomeTypes';

export async function getInfo(): Promise<{ data: WelcomeResponse, token: string } | null> {
  const token = await AsyncStorage.getItem('userToken');

    if(!token){
        console.error("No hay tokens campeon");
        return null;
    }
    try {

        const response = await fetch("http://192.168.0.12:5000/welcome", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
             },
        });

        const data:WelcomeResponse = await response.json();

        if(data.statusCode === 200){
            return {data, token};
        } else {
            console.error("Token vencido sinverguenza");
            return null;
        }
        
    } catch (error) {
        console.error("Error en la petición:", error);
        return null;
    }


}