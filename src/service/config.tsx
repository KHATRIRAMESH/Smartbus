import { Platform } from "react-native";

// export const BASE_URL =
//   Platform.OS === "android" ? "http://localhost:3000" : "http://localhost:3000";
export const BASE_URL =
  Platform.OS === "android" ? "http://192.168.18.16:3000" : "http://localhost:3000";

export const SOCKET_URL =
  Platform.OS === "android" ? "http://192.168.18.16:3000" : "ws://localhost:3000";
