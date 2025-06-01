import React from "react";
import { Pressable, ActivityIndicator } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useRouter } from "expo-router";
import useTheme from "@/store/theme";
import Typo from "./Typo";
import { ButtonWrapperProps } from "@/types/types";

const ButtonWrapper = ({
  icon: Icon,
  label,
  bgColor,
  borderColor,
  buttonText,
  path,
  onPress,
  style,
  loading = false,
}: ButtonWrapperProps) => {
  const { theme } = useTheme((state) => state);
  const router = useRouter();

  const handleRoute = () => {
    if (loading) return;
    if (path) {
      router.push(path);
    } else {
      onPress?.();
    }
  };

  return (
    <Pressable
      onPress={handleRoute}
      className="w-full rounded-full border px-4 py-4 flex-row items-center justify-center"
      style={[
        {
          gap: RFPercentage(2),
          // marginTop: RFPercentage(2),
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: borderColor ? RFPercentage(0.2) : 0,
          opacity: loading ? 0.5 : 1,
        },
        style,
      ]}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={theme.text_primary} />
      ) : (
        <>
          {Icon && <Icon height={28} width={28} color={theme.text_primary} />}
          <Typo size={18} fontWeight={600} color={buttonText}>
            {label}
          </Typo>
        </>
      )}
    </Pressable>
  );
};

export default ButtonWrapper;
