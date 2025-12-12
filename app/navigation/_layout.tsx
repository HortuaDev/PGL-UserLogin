import React from "react";
import { Drawer } from "expo-router/drawer";
import { Button } from "react-native";
import { logout } from "../../services/authService";

const MainLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <Button title="Logout" onPress={logout} />,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
        }}
      />
    </Drawer>
  );
};

export default MainLayout;
