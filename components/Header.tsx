import React from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import styles from "../utils/styles/HeaderStyles";

interface HeaderProps {
  setDisplayMyQR: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const Header = ({ setDisplayMyQR, setIsDarkMode, isDarkMode }: HeaderProps) => {
  const ICON_MOON = require("../assets/icon_moon.png");
  const ICON_SUN = require("../assets/icon_sun_white.png");
  const AVATAR = require("../assets/yoda.jpg");

  const router = useRouter();

  return (
    <View
      style={isDarkMode ? styles.topContainerDark : styles.topContainerWhite}
    >
      <View
        style={
          isDarkMode
            ? styles.headerContainerTopDark
            : styles.headerContainerTopWhite
        }
      >
        <Text style={isDarkMode ? styles.titleDark : styles.titleWhite}>
          My Portfolio App
        </Text>

        <Pressable onPress={() => setIsDarkMode(!isDarkMode)}>
          <Image
            source={isDarkMode ? ICON_SUN : ICON_MOON}
            style={
              isDarkMode ? styles.isDarkButtonDark : styles.isDarkButtonWhite
            }
          />
        </Pressable>
      </View>

      <View
        style={isDarkMode ? styles.contentImageDark : styles.contentImageWhite}
      >
        <Image
          source={AVATAR}
          style={isDarkMode ? styles.avatarDark : styles.avatarWhite}
        />

        <View
          style={isDarkMode ? styles.contentTextDark : styles.contentTextWhite}
        >
          <Text
            style={
              isDarkMode
                ? styles.descriptionTitleDark
                : styles.descriptionTitleWhite
            }
          >
            Descripción sobre mí!
          </Text>

          <Text
            style={
              isDarkMode
                ? styles.descriptionTextDark
                : styles.descriptionTextWhite
            }
          >
            Maestro yo ser, paciencia infinita tener, pero mis padawans
            testarudos a veces loco volverme, y a veces preguntarme hago, si la
            Fuerza no está de su lado.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
