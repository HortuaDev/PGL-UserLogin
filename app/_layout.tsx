import React from "react";
import { Drawer } from "expo-router/drawer";

const MainLayout = () => {
  return (
    <Drawer>
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
