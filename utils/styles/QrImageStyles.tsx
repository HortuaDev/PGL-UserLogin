import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
  bodyStylesWhite: {
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.primary_color_dark,
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  QrContainerWhite: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  bodyStylesDark: {
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.secondary_color_dark,
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  QrContainerDark: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    borderColor: Colors.primary_color_dark,
    backgroundColor: Colors.tertiary_color_dark,
  },
});

export default styles;
