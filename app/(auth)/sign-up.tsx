import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import useTheme from "@/store/theme";
import AuthHeader from "@/components/shared/AuthHeader";
import SignupImg from "../../assets/images/signupimg.svg";
import { RFPercentage } from "react-native-responsive-fontsize";
import useForm from "@/hooks/form";
import InputField from "@/components/shared/InputField";
import { signupUserConfigArray } from "@/constants";
import Typo from "@/components/shared/Typo";
import ButtonWrapper from "@/components/shared/ButtonWrapper";
import { toast } from "@/store/toast";
import VerifyEmailScreen from "@/components/module/VerifyEmailScreen";
import { signupSchema } from "@/constants/validation/signup.validation";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const { theme } = useTheme((state) => state);
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
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
      phoneNumber: "",
      firstName: "",
      lastName: "",
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
        await signUp.create({
          emailAddress: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          firstName: values.firstName,
          lastName: values.lastName,
        });

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        setToast({
          message: "Verification email sent!",
          type: "success",
          color: "green",
        });

        setPendingVerification(true);
      } catch (err: any) {
        console.error("Sign-up error:", err);
        setToast({
          message: err?.errors?.[0]?.message || "Sign up failed.",
          type: "error",
          color: "red",
        });
      }
    },
    validation: signupSchema,
  });

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(root)");
      } else {
        console.warn("Verification incomplete:", signUpAttempt);
      }
    } catch (err) {
      console.error("Verification error:", err);
    }
  };

  if (pendingVerification) {
    return (
      <VerifyEmailScreen
        code={code}
        setCode={setCode}
        onVerifyPress={onVerifyPress}
        loading={loading}
      />
    );
  }

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <View
          className="flex-1"
          style={{ paddingVertical: RFPercentage(2) }}
          pointerEvents={loading ? "none" : "auto"}
        >
          <AuthHeader HeadImg={SignupImg} />
          <ScrollView
            contentContainerStyle={{
              gap: RFPercentage(0.5),
              maxWidth: RFPercentage(45),
              width: RFPercentage(45),
              marginHorizontal: "auto",
            }}
            className="w-full"
          >
            <View
              style={{
                gap: RFPercentage(2.5),
                paddingHorizontal: RFPercentage(2),
              }}
            >
              <Typo
                style={{ color: theme.text_primary }}
                size={30}
                fontWeight={700}
              >
                Sign up
              </Typo>

              <View style={{ gap: RFPercentage(3) }}>
                {signupUserConfigArray.map(
                  ({ label, icon, placeHolder }, index) => (
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
                  )
                )}

                <ButtonWrapper
                  label={"Sign Up"}
                  bgColor={theme.button_primary}
                  buttonText={theme.button_text}
                  onPress={handleSubmit}
                  loading={loading}
                  style={{
                    paddingTop: RFPercentage(2),
                    paddingBottom: RFPercentage(2),
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
