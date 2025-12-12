import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
  bodyStylesWhite: {
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.primary_color_white,
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatarWhite: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  contentItemWhite: {
    borderColor: Colors.primary_color_white,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: Colors.secondary_color_white,
  },
  contentImageWhite: { flexDirection: "row", alignItems: "center" },
  contentTextWhite: {
    margin: 10,
    backgroundColor: Colors.secondary_color_white,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },

  descriptionTitleWhite: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: Colors.text_color_secondary_white,
  },
  descriptionTextWhite: {
    textAlign: "center",
    fontWeight: "700",
    color: Colors.text_color_secondary_white,
  },
  likesTextWhite: {
    color: Colors.text_color_secondary_white,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  ScrollViewStyle: { padding: 10 },
  //----------------------------
  bodyStylesDark: {
    width: "100%",
    borderWidth: 2,
    backgroundColor: Colors.primary_color_dark,
    borderColor: Colors.secondary_color_dark,
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatarDark: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.secondary_color_dark,
  },
  contentItemDark: {
    borderColor: Colors.secondary_color_dark,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: Colors.text_color_tertiary_dark,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: Colors.primary_color_dark,
  },
  contentImageDark: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentTextDark: {
    margin: 10,
    backgroundColor: Colors.primary_color_dark,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  descriptionTitleDark: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: Colors.text_color_primary_dark,
  },
  descriptionTextDark: {
    textAlign: "center",
    fontWeight: "700",
    color: Colors.text_color_primary_dark,
  },
  likesTextDark: {
    color: Colors.text_color_primary_dark,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
