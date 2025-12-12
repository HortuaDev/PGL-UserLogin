import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
  topContainerWhite: {
    paddingTop: 5,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: Colors.primary_color_white,
  },
  topContainerDark: {
    paddingTop: 5,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: Colors.primary_color_dark,
  },

  headerContainerTopWhite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerContainerTopDark: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  titleWhite: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    flex: 1,
    color: Colors.text_color_primary_white,
  },
  titleDark: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    flex: 1,
    color: Colors.text_color_primary_dark,
  },

  isDarkButtonWhite: { width: 30, height: 30 },
  isDarkButtonDark: { width: 30, height: 30 },

  contentImageWhite: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contentImageDark: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarWhite: { width: 90, height: 90, borderRadius: 100 },
  avatarDark: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.secondary_color_dark,
  },
  contentTextWhite: {
    marginLeft: 10,
    backgroundColor: Colors.secondary_color_white,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  contentTextDark: {
    marginLeft: 10,
    backgroundColor: Colors.primary_color_dark,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  descriptionTitleWhite: {
    fontWeight: "700",
    fontSize: 20,
    color: Colors.text_color_secondary_white,
    textAlign: "center",
    marginBottom: 5,
  },
  descriptionTitleDark: {
    fontWeight: "700",
    fontSize: 20,
    color: Colors.text_color_primary_dark,
    textAlign: "center",
    marginBottom: 5,
  },
  descriptionTextWhite: {
    fontWeight: "700",
    color: Colors.text_color_secondary_white,
    textAlign: "center",
  },
  descriptionTextDark: {
    fontWeight: "700",
    color: Colors.text_color_primary_dark,
    textAlign: "center",
  },

  menuContainerWhite: {
    flexDirection: "row",
    backgroundColor: Colors.secondary_color_white,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 5,
  },
  menuContainerDark: {
    flexDirection: "row",
    backgroundColor: Colors.primary_color_dark,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 5,
  },

  infoButtonWhite: { width: "50%" },
  infoButtonDark: { width: "50%" },

  titleInfoButtonWhite: {
    shadowColor: Colors.secondary_color_white,
    color: Colors.text_color_primary_white,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    textAlign: "center",
  },
  titleInfoButtonDark: {
    shadowColor: Colors.tertiary_color_white,
    color: Colors.text_color_primary_dark,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    textAlign: "center",
  },
});

export default styles;
