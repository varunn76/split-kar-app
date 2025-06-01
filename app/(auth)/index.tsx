import React, { useEffect } from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import ScreenWrapper from "@/components/shared/ScreenWrapper";
import Typo from "@/components/shared/Typo";
import { AUTH_OPTION } from "@/constants";
import useTheme from "@/store/theme";

import AuthButton from "@/components/shared/AuthButton";
import ButtonWrapper from "@/components/shared/ButtonWrapper";
import OrDivider from "@/components/shared/OrDivider";
import { Link } from "expo-router";
import OnboardSvg from "../../assets/images/onboard.svg";
import * as WebBrowser from "expo-web-browser";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession();

const AuthScreen = () => {
  useWarmUpBrowser();
  const { theme } = useTheme((state) => state);

  return (
    <ScreenWrapper>
      <View
        className="flex-1 items-center "
        style={{ paddingHorizontal: RFPercentage(3) }}
      >
        <View className="mt-10 mb-6 bg-white rounded-full">
          <OnboardSvg height={180} width={180} />
        </View>

        <Typo
          style={{ padding: RFPercentage(3) }}
          size={30}
          fontWeight={600}
          color={theme.text_primary}
        >
          Let's You In
        </Typo>

        <View className="w-full mt-4  gap-6">
          {AUTH_OPTION.map((item, idx) => (
            <AuthButton
              key={idx}
              icon={item.icon}
              label={`Continue with ${item.name}`}
              strategy={item.strategy}
            />
          ))}
        </View>
        <OrDivider title="or" />
        <ButtonWrapper
          label="Sign In with Password"
          bgColor={theme.button_primary}
          buttonText={theme.button_text}
          path="/(auth)/sign-in"
        />
        <View className="flex-row items-center justify-center gap-1 mt-10">
          <Typo size={12} color={theme.text_primary}>
            Don't have an account?
          </Typo>
          <Link href="/(auth)/sign-up" className="text-blue-500 font-semibold">
            Sign Up
          </Link>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AuthScreen;
