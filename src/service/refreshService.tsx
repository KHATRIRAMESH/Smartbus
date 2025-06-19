import { tokenStorage } from "@/store/storage";
import axios from "axios";
import { logout } from "./authService";
import { BASE_URL } from "./config";

export const refresh_tokens = async () => {
  try {
    const refreshToken = tokenStorage.getString("refresh_token");
    if (!refreshToken) throw new Error("No refresh token");

    const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
      refresh_token: refreshToken,
    });

    const new_access_token = response.data.access_token;
    const new_refresh_token = response.data.refresh_token;

    tokenStorage.set("access_token", new_access_token);
    tokenStorage.set("refresh_token", new_refresh_token);

    return new_access_token;
  } catch (error) {
    console.error("Error refreshing tokens:", error);
    tokenStorage.clearAll?.(); // optional chaining in case not available
    logout(); // redirect to login or clear state
    return null;
  }
};
