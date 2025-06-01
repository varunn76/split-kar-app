import useTheme from "@/store/theme";
import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const { theme, setTheme } = useTheme((state) => state);
  const { isSignedIn } = useUser();
  if (!isSignedIn) return <Redirect href={"/(auth)/sign-in"} />;
  return (
    <>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: theme.background_secondary,
        }}
      >
        <SafeAreaView edges={["top"]} />
        <View
          style={{
            flexGrow: 1,
            backgroundColor: theme.background_primary,
          }}
        >
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: theme.background_primary,
                flexGrow: 1,
              },
            }}
          >
            <Stack.Screen name="index" />
          </Stack>
        </View>
      </View>
      {/* <Toast /> */}
    </>
  );
}
