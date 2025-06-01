import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const AuthLayout = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)"} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent", flexGrow: 1 },
      }}
    >
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default AuthLayout;
