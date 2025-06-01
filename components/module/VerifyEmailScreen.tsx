import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { RFPercentage } from "react-native-responsive-fontsize";

import ScreenWrapper from "../shared/ScreenWrapper";
import Typo from "../shared/Typo";
import ButtonWrapper from "../shared/ButtonWrapper";
import useTheme from "@/store/theme";
import { VerifyEmailCodeProps } from "@/types/types";

const CELL_COUNT = 6;

const VerifyEmailScreen = ({
  code,
  setCode,
  onVerifyPress,
  loading,
}: VerifyEmailCodeProps) => {
  const { theme } = useTheme((state) => state);

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1"
    >
      <ScreenWrapper>
        <View
          className="flex-1 justify-center"
          style={{ paddingHorizontal: RFPercentage(3), gap: RFPercentage(4) }}
        >
          <Typo
            size={28}
            fontWeight={700}
            style={{ textAlign: "center", color: theme.text_primary }}
          >
            Verify Your Email
          </Typo>

          <CodeField
            ref={ref}
            {...props}
            value={code}
            onChangeText={(val) => {
              const sanitized = val.replace(/[^0-9]/g, "");
              setCode(sanitized);
            }}
            cellCount={CELL_COUNT}
            rootStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: RFPercentage(1),
            }}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                onLayout={getCellOnLayoutHandler(index)}
                className={`items-center justify-center border text-center rounded-xl ${
                  isFocused ? "border-primary border-2" : "border-gray-300"
                }`}
                style={{
                  width: RFPercentage(6),
                  height: RFPercentage(7),
                  borderColor: isFocused
                    ? theme.button_primary
                    : theme.input_field_border,
                  backgroundColor: theme.input_field_background,
                }}
              >
                <Typo
                  size={18}
                  fontWeight={600}
                  style={{ color: theme.text_secondary, textAlign: "center" }}
                >
                  {symbol || (isFocused ? <Cursor /> : "-")}
                </Typo>
              </View>
            )}
          />

          <ButtonWrapper
            label="Verify"
            onPress={onVerifyPress}
            loading={loading}
            bgColor={theme.button_primary}
            buttonText={theme.button_text}
          />
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default VerifyEmailScreen;
