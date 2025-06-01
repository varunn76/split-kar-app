import colors, { colorKeys } from "@/constants/colors";
import { create } from "zustand";

type themeStore = {
  theme: { [key in colorKeys]: string };
  setTheme: (theme: { [key in colorKeys]: string }) => void;
};

const useTheme = create<themeStore>((set) => ({
  theme: colors.light,
  setTheme: (theme: { [key in colorKeys]: string }) => set({ theme }),
}));

export default useTheme;
