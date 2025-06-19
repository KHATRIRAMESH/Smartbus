import { useDriverStore } from "@/store/driverStore";
import { tokenStorage } from "@/store/storage";
import { useUserStore } from "@/store/userStore";
import { resetAndNavigate } from "@/utils/Helpers";
import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "./config";

export const signin = async (
  payload: {
    role: "user" | "driver";
    phone: string;
  },
  updateAccessToken: () => void
) => {
  const { setUser } = useUserStore.getState();
  const { setUser: setDriverUser } = useDriverStore.getState();

  // Check if the payload has a valid role
  try {
    const res = await axios.post(`${BASE_URL}/auth/signin`, payload);

    tokenStorage.set("user_role", payload.role);
    // console.log("Signin payload:", res);

    if (res.data.user.role === "user") {
      setUser(res.data.user);
    } else {
      setDriverUser(res.data.user);
    }

    tokenStorage.set("access_token", res.data.access_token);
    tokenStorage.set("refresh_token", res.data.refresh_token);

    console.log("Access Token:", res.data.user.role);

    if (res.data.user.role === "user") {
      resetAndNavigate("/user/home");
    } else {
      resetAndNavigate("/driver/home");
    }

    updateAccessToken();
  } catch (error: any) {
    Alert.alert(
      "Error",
      "An error occurred while signing in. Please try again."
    );
    console.error("Signin error:", error || "Error signin");
  }
};

export const logout = async (disconnect?: () => void) => {
  const { clearUserData } = useUserStore.getState();
  const { clearDriverData } = useDriverStore.getState();

  tokenStorage.clearAll();
  clearUserData();
  clearDriverData();
  resetAndNavigate("/role");
};
