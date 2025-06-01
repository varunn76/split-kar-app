import { Dimensions, Text, View } from "react-native";
import styles from "./styles";
import { toast } from "@/store/toast";
import Icon from "../icons/Icon";
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { RFPercentage } from "react-native-responsive-fontsize";
import { toastTime } from "@/constants";
import { useEffect } from "react";
import useTheme from "@/store/theme";

export default function Toast() {
  const theme = useTheme((state) => state.theme);
  const { message, color, type, setToast } = toast((state) => state);
  const opacity = useSharedValue(0);

  const bottom = useSharedValue(-RFPercentage(3));
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  function show() {
    opacity.value = withTiming(1, { duration: 500 });
    bottom.value = withTiming(RFPercentage(3), { duration: 500 });
  }

  function hide() {
    opacity.value = withTiming(0, { duration: 500 });
    bottom.value = withTiming(-RFPercentage(3), { duration: 500 });
  }

  useEffect(() => {
    const mainTimeout = setTimeout(() => {
      if (message) {
        show();
      }
      let hideTimeout = setTimeout(() => {
        hide();
        clearTimeout(hideTimeout);
      }, toastTime * 1000);
      let timeout = setTimeout(() => {
        setToast({ message: null });
        clearTimeout(timeout);
      }, toastTime * 1000 + 500);
    }, 100);
    return () => clearTimeout(mainTimeout);
  }, [message]);

  return (
    <>
      <View
        style={{
          display: message ? "flex" : "none",
          height: screenHeight,
          width: screenWidth,
          position: "absolute",
          zIndex: 100,
        }}
      ></View>
      <Animated.View
        style={[
          styles.toastContainer,
          {
            borderLeftWidth: RFPercentage(0.5),
            borderLeftColor: color,
            opacity,
            bottom,
            backgroundColor: theme.background_secondary,
          },
        ]}
      >
        <Icon name={type || "error"} color={color} size={RFPercentage(3)} />
        <Text style={[styles.toastMessage, { color: theme.text_primary }]}>
          {message}
        </Text>
      </Animated.View>
    </>
  );
}
