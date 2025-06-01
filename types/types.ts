import { TextProps, TextStyle, ViewStyle } from "react-native";

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export type TypoProps = {
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  children: any | null;
  style?: TextStyle;
  textProps?: TextProps;
};

export type IconProps = { height?: number; width?: number; color?: string };

export type ButtonWrapperProps = {
  icon?: React.FC<IconProps>;
  label: string;
  bgColor?: string;
  borderColor?: string;
  buttonText?: string;
  path?: any;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
};

export type VerifyEmailCodeProps = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  onVerifyPress: () => void;
  loading: boolean;
};
