import { View } from "react-native";
import React, { useContext } from "react";
import QRCode from "react-native-qrcode-svg";
import styles from "../../utils/styles/QrImageStyles";
import { TabsContext } from "../portfolio/_layout"; // Ajusta la ruta si es necesario

const QrImage = () => {
  const context = useContext(TabsContext);
  if (!context) return null;

  const { isDarkMode } = context;

  return (
    <View style={isDarkMode ? styles.bodyStylesDark : styles.bodyStylesWhite}>
      <View
        style={isDarkMode ? styles.QrContainerDark : styles.QrContainerWhite}
      >
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
};

export default QrImage;
