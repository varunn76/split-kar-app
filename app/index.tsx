import useTheme from "@/store/theme";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, View } from "react-native";

const index = () => {
  const { theme, setTheme } = useTheme((state) => state);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background_primary,
      }}
    >
      <Image
        style={{ height: "20%", aspectRatio: 1 }}
        resizeMode="contain"
        source={require("../assets/images/splashImage.png")}
      />
    </View>
  );
};

export default index;
