import { Platform } from "react-native";

const platform = Platform.OS;

export default {
  DefaultFontSize: 16,
  textColor: "#FFF",
  noteFontSize: 14,
  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontSizeBase: 15,
};
