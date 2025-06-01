export type colorKeys =
  | "background_primary"
  | "background_secondary"
  | "card_background"
  | "text_primary"
  | "text_secondary"
  | "button_primary"
  | "button_text"
  | "input_field_background"
  | "input_field_border"
  | "errorColor"
  | "active_icon_color"
  | "icon_text_color"
  | "icon_color"
  | "borderColor";

export type themes = "light" | "dark";

export default {
  light: {
    background_primary: "#f7f6f9",
    background_secondary: "#ffffff",
    card_background: "#ffffff",
    text_primary: "#141316",
    text_secondary: "#423758",
    button_primary: "#614497",
    button_text: "#ffffff",
    input_field_background: "#ffffff",
    input_field_border: "#9d8bc1",
    icon_color: "#614497",
    icon_text_color: "#423758",
    active_icon_color: "#9d8bc1",
    errorColor: "#F22D3D",
    borderColor: "#e5e7eb;",
  },
  dark: {
    background_primary: "#070609",
    background_secondary: "#120f18",
    card_background: "#120f18",
    text_primary: "#eae9ec",
    text_secondary: "#b2a7c8",
    button_primary: "#8568bb",
    button_text: "#ffffff",
    input_field_background: "#120f18",
    input_field_border: "#503e74",
    icon_color: "#8568bb",
    icon_text_color: "#b2a7c8",
    active_icon_color: "#503e74",
    errorColor: "#F22D3D",
    borderColor: "#2d3748",
  },
  // light: {
  //   background_primary: "#f0f5fa",
  //   background_secondary: "#ffffff",
  //   card_background: "#ffffff",
  //   text_primary: "#0c1a27",
  //   text_secondary: "#224b6d",
  //   button_primary: "#bfb93b",
  //   button_text: "#ffffff",
  //   input_field_background: "#ffffff",
  //   input_field_border: "#d7837f",
  //   icon_color: "#bfb93b",
  //   icon_text_color: "#224b6d",
  //   active_icon_color: "#d7837f",
  //   errorColor: "#d7837f",
  //   borderColor: "#e5e7eb;",
  // },
  // dark: {
  //   background_primary: "#050a0f",
  //   background_secondary: "#0b1117",
  //   card_background: "#0b1117",
  //   text_primary: "#d8e6f3",
  //   text_secondary: "#92bbdd",
  //   button_primary: "#c4be40",
  //   button_text: "#050a0f",
  //   input_field_background: "#0b1117",
  //   input_field_border: "#802d28",
  //   icon_color: "#c4be40",
  //   icon_text_color: "#92bbdd",
  //   active_icon_color: "#802d28",
  //   errorColor: "#802d28",
  //   borderColor: "#2d3748",
  // },
} as { [key in themes]: { [key in colorKeys]: string } };
