import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
  containerWhite: {
    flex: 1,
    backgroundColor: Colors.primary_color_white,
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    flex: 1,
    backgroundColor: Colors.primary_color_dark,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
