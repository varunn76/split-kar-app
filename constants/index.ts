import { iconNames } from "@/components/icons";
import appleSvg from "../assets/images/apple.svg";
import facebooSvg from "../assets/images/facebook.svg";
import googleSvg from "../assets/images/google.svg";

export const toastTime: number = 1;

export const AUTH_OPTION = [
  { name: "Google", icon: googleSvg, strategy: "google" as const },
  { name: "Facebook", icon: facebooSvg, strategy: "facebook" as const },
  { name: "Apple", icon: appleSvg, strategy: "apple" as const },
];

export const signupUserConfigArray: {
  label: string;
  icon: iconNames;
  placeHolder: string;
}[] = [
  {
    label: "email",
    icon: "mail",
    placeHolder: "Email",
  },
  {
    label: "firstName",
    icon: "user",
    placeHolder: "First Name",
  },
  {
    label: "lastName",
    icon: "user",
    placeHolder: "Last Name",
  },

  {
    label: "phoneNumber",
    icon: "phone",
    placeHolder: "Phone Number",
  },
  {
    label: "password",
    icon: "lock",
    placeHolder: "Password",
  },
];

export const loginUserConfigArray: {
  label: string;
  icon: iconNames;
  placeHolder: string;
}[] = [
  {
    label: "email",
    icon: "mail",
    placeHolder: "Email",
  },
  {
    label: "password",
    icon: "lock",
    placeHolder: "Password",
  },
];

// keiralluburo-6566@yopmail.com
// RAMGP795oRzzeG7
// RAMGP795oR&&
