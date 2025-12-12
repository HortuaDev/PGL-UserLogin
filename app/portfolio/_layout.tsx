import { Slot, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import React, { createContext, useState } from "react";
import { Text, View } from "react-native";
import Header from "../../components/Header";

type TabsContextType = {
  displayMyQR: boolean;
  setDisplayMyQR: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TabsContext = createContext<TabsContextType | undefined>(
  undefined
);

export default function TabsLayout() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <TabsContext.Provider
        value={{ displayMyQR, setDisplayMyQR, isDarkMode, setIsDarkMode }}
      >
        <Header
          setIsDarkMode={setIsDarkMode}
          setDisplayMyQR={setDisplayMyQR}
          isDarkMode={isDarkMode}
        />
        <View style={{ flex: 1 }}>
          <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
              name="Hobbies"
              options={{
                title: "Hobbies",
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="yelp" size={28} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="QrImage"
              options={{
                title: "Qr",
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="qrcode" size={28} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="ListProducts"
              options={{
                title: "ListProducts",
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="product-hunt" size={28} color={color} />
                ),
              }}
            />
          </Tabs>
        </View>
      </TabsContext.Provider>
    </View>
  );
}
