import { create } from "zustand";
import { toastTime } from "@/constants";

interface initialData {
  message: string | null;
  color?: string;
  type?: "error" | "warning" | "info" | "success";
}
interface toastStore extends initialData {
  setToast: (params: initialData) => void;
}

export const toast = create<toastStore>((set) => ({
  message: null,
  color: "red",
  type: "error",
  setToast: ({ message, color, type }) => {
    set({ message, color: color || "red", type: type || "error" });
  },
}));
