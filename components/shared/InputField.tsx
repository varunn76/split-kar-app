import useTheme from "@/store/theme";
import { useState } from "react";
import { Platform, Pressable, Text, TextInput, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { iconNames } from "../icons";
import Icon from "../icons/Icon";

interface InputFieldProps {
  label: string;
  icon: iconNames;
  placeHolder?: string;
  value: string;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setTouchedField: (field: string, touched: boolean) => void;
  setFieldValue: (field: string, value: string) => void;
}

const InputField = ({
  label,
  icon,
  placeHolder,
  value,
  errors,
  touched,
  setTouchedField,
  setFieldValue,
}: InputFieldProps) => {
  const [show, setShow] = useState(false);
  const theme = useTheme((state) => state.theme);

  const isPassword = ["password", "confirmPassword"].includes(label);
  const isAndroid = Platform.OS === "android";

  const formattedLabel = label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  return (
    <View style={{ gap: RFPercentage(1) }}>
      {/* {label && (
        <Text
          className="ml-2 font-medium"
          style={{
            color: theme.text_secondary,
            fontSize: RFPercentage(1.6),
          }}
        >
          {formattedLabel}
        </Text>
      )} */}

      <View
        className="flex-row items-center border-2"
        style={{
          paddingVertical: isAndroid ? RFPercentage(0.5) : RFPercentage(1.5),
          paddingHorizontal: RFPercentage(2),
          borderRadius: RFPercentage(2),
          gap: RFPercentage(1),
          backgroundColor: theme.input_field_background,
          borderColor: theme.input_field_border,
        }}
      >
        <Icon name={icon} color={theme.icon_color} size={RFPercentage(2.5)} />

        <TextInput
          autoCapitalize="none"
          placeholder={placeHolder}
          placeholderTextColor={theme.text_secondary}
          style={{
            flex: 1,
            color: theme.text_primary,
            fontSize: RFPercentage(1.8),
            paddingVertical: isAndroid ? RFPercentage(0.9) : 0,
          }}
          onFocus={() => setTouchedField(label, true)}
          secureTextEntry={isPassword && !show}
          value={value}
          onChangeText={(text) => setFieldValue(label, text)}
        />

        {isPassword && (
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              name={show ? "show" : "hide"}
              color={theme.icon_color}
              size={RFPercentage(3)}
            />
          </Pressable>
        )}
      </View>

      {errors[label] && touched[label] && (
        <Text
          className="text-left"
          style={{
            color: theme.errorColor,
            marginHorizontal: RFPercentage(1),
            fontSize: RFPercentage(1.5),
          }}
        >
          {errors[label]}
        </Text>
      )}
    </View>
  );
};

export default InputField;
