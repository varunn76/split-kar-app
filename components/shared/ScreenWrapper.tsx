import useTheme from "@/store/theme";
import { ScreenWrapperProps } from "@/types/types";
import React from "react";
import { Dimensions, Platform, StatusBar, View } from "react-native";

const { height } = Dimensions.get("window");
const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 50;
  const { theme } = useTheme((state) => state);
  return (
    <View
      style={[
        { paddingTop, flex: 1, backgroundColor: theme.background_primary },
        style,
      ]}
    >
      <StatusBar barStyle={`light-content`} />
      {children}
    </View>
  );
};

export default ScreenWrapper;
