import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import useTheme from "@/store/theme";
import AuthHeader from "@/components/shared/AuthHeader";
import LoginImg from "../../assets/images/welcome.svg";
import Typo from "@/components/shared/Typo";
import { RFPercentage } from "react-native-responsive-fontsize";
import { loginUserConfigArray } from "@/constants";
import InputField from "@/components/shared/InputField";
import useForm from "@/hooks/form";
import { toast } from "@/store/toast";
import ButtonWrapper from "@/components/shared/ButtonWrapper";
import { loginSchema } from "@/constants/validation/signup.validation";
export default function Page() {
  const { theme } = useTheme((state) => state);
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const { setToast } = toast((state) => state);
  const {
    values,
    errors,
    touched,
    loading,
    handleSubmit,
    setTouchedField,
    setFieldValue,
    submitValidation,
  } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmitAsync: async (values) => {
      if (submitValidation()) {
        setToast({
          message: "Invalid credentials.",
          type: "error",
          color: "red",
        });
        return;
      }

      if (!isLoaded) return;
      try {
        const signInAttempt = await signIn.create({
          identifier: values.email,
          password: values.password,
        });
        if (signInAttempt.status === "complete") {
          await setActive({ session: signInAttempt.createdSessionId });
          router.replace("/(root)");
        } else {
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (err: any) {
        console.error(JSON.stringify(err, null, 2));

        setToast({
          message: err?.errors?.[0]?.message || "Sign In failed.",
          type: "error",
          color: "red",
        });
      }
    },
    validation: loginSchema,
  });

  return (
    <ScreenWrapper>
      <AuthHeader HeadImg={LoginImg} />
      <View
        style={{ gap: RFPercentage(2.5), paddingHorizontal: RFPercentage(2) }}
      >
        <Typo style={{ color: theme.text_primary }} size={30} fontWeight={700}>
          Sign In
        </Typo>

        <View style={{ gap: RFPercentage(3) }}>
          {loginUserConfigArray.map(({ label, icon, placeHolder }, index) => (
            <InputField
              key={index}
              label={label}
              icon={icon}
              placeHolder={placeHolder}
              value={values[label]}
              errors={errors}
              setFieldValue={setFieldValue}
              setTouchedField={setTouchedField}
              touched={touched}
            />
          ))}

          <ButtonWrapper
            label={"Sign In"}
            bgColor={theme.button_primary}
            buttonText={theme.button_text}
            onPress={handleSubmit}
            loading={loading}
            style={{
              paddingTop: RFPercentage(2),
              paddingBottom: RFPercentage(2),
              marginTop: RFPercentage(2),
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
