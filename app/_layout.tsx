import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { useColorScheme, View } from "react-native";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import "./globals.css";

import colors from "@/constants/colors";
import useTheme from "@/store/theme";
import Toast from "@/components/toast";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  const { theme, setTheme } = useTheme((state) => state);
  const deviceTheme = useColorScheme();

  useEffect(() => {
    setTheme(deviceTheme === "dark" ? colors.dark : colors.light);
  }, [deviceTheme]);

  return (
    <>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={CLERK_PUBLISHABLE_KEY}
      >
        <ClerkLoaded>
          <View
            style={{
              flex: 1,
              backgroundColor: theme.background_secondary,
            }}
          >
            <Slot />
          </View>
        </ClerkLoaded>
      </ClerkProvider>
      <Toast />
    </>
  );
}
