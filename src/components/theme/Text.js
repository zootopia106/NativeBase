import { Platform } from "react-native";

const platform = Platform.OS;

export default {
  DefaultFontSize: 16,
  textColor: "#777",
  inverseTextColor: "#fff",
  noteFontSize: 14,
  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontSizeBase: 15,
};
