import useTheme from "@/store/theme";
import { IconProps } from "@/types/types";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Typo from "./Typo";
import { useSSO, useUser } from "@clerk/clerk-expo";
import * as AuthSession from "expo-auth-session";

const AuthButton = ({
  icon: Icon,
  label,
  strategy,
  disabled = false,
}: {
  icon?: React.FC<IconProps>;
  label: string;
  strategy: "facebook" | "google" | "apple";
  disabled?: boolean;
}) => {
  const { theme } = useTheme((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();

  const { startSSOFlow } = useSSO();
  const getStrategy = () => {
    if (strategy === "facebook") {
      return "oauth_facebook";
    } else if (strategy === "google") {
      return "oauth_google";
    } else if (strategy === "apple") {
      return "oauth_apple";
    }
    return "oauth_facebook";
  };
  const onPress = useCallback(async () => {
    try {
      setIsLoading(true);
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: getStrategy(),
          redirectUrl: AuthSession.makeRedirectUri(),
        });
      if (createdSessionId) {
        console.log("Session created", createdSessionId);
        setActive!({ session: createdSessionId });
        await user?.reload();
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      className="w-full rounded-full border px-4 py-4"
      style={{
        backgroundColor: theme.background_secondary,
        borderColor: theme.borderColor,
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <View
        className="flex-row items-center justify-center"
        style={{ gap: RFPercentage(1.8) }}
      >
        {Icon && <Icon height={28} width={28} color={theme.text_primary} />}
        <Typo size={17} color={theme.text_primary} fontWeight={500}>
          {label}
        </Typo>
      </View>
    </Pressable>
  );
};

export default AuthButton;
