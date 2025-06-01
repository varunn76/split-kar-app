import { useRouter, useNavigation } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { SvgProps } from "react-native-svg";
import Icon from "../icons/Icon";
import useTheme from "@/store/theme";

const AuthHeader = ({ HeadImg }: { HeadImg: React.FC<SvgProps> }) => {
  const router = useRouter();
  const navigation = useNavigation();
  const { theme } = useTheme((state) => state);
  const handleBack = () => {
    if (navigation.canGoBack()) {
      router.back();
    } else {
      router.replace("/(auth)");
    }
  };

  return (
    <View
      className="flex pt-4"
      style={{
        paddingHorizontal: RFPercentage(3),
        paddingVertical: RFPercentage(2),
      }}
    >
      <Pressable onPress={handleBack} className="flex-row items-start">
        <Icon
          name="arrow"
          color={theme.text_primary}
          size={RFPercentage(4.5)}
        />
      </Pressable>

      <View className="items-center">
        <HeadImg height={200} width={200} />
      </View>
    </View>
  );
};

export default AuthHeader;
