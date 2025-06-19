import { WSProvider } from "@/service/WSProvider";
import { Stack } from "expo-router";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <WSProvider>
      <Stack
        screenOptions={{
          headerShown: false,
           animation: "slide_from_right",
        }}
      />
    </WSProvider>
  );
};

export default gestureHandlerRootHOC(RootLayout);
