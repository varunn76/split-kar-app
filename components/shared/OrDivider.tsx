import useTheme from "@/store/theme";
import React from "react";
import { Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const OrDivider = ({ title }: { title: string }) => {
  const { theme } = useTheme((state) => state);

  return (
    <View className="w-full py-10">
      <View className="flex-row items-center justify-between">
        <View
          style={{ backgroundColor: theme.text_primary }}
          className="flex-1 h-0.5"
        />
        <Text
          style={{ color: theme.text_primary, fontSize: RFPercentage(2) }}
          className="mx-4 font-bold"
        >
          {title}
        </Text>
        <View
          style={{ backgroundColor: theme.text_primary }}
          className="flex-1 h-0.5"
        />
      </View>
    </View>
  );
};

export default OrDivider;
