import Typo from "@/components/shared/Typo";
import { SignOutButton } from "@/components/SignOutButton";
import useTheme from "@/store/theme";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();
  console.log("user", user?.firstName);
  const { theme } = useTheme((state) => state);
  return (
    <View>
      <SignedIn>
        <Typo style={{ color: theme.text_primary }} size={30} fontWeight={700}>
          Hello {user?.firstName}
        </Typo>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Typo style={{ color: theme.text_primary }} size={20}>
            Sign In
          </Typo>
        </Link>
        <Link href="/(auth)/sign-up">
          <Typo style={{ color: theme.text_primary }} size={20}>
            Sign up
          </Typo>
        </Link>
      </SignedOut>
    </View>
  );
}
