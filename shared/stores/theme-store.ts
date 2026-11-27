"use client";
import { create } from "zustand";
type ThemeState = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  toggleTheme: () => void;
};
export const useThemeStore = create<ThemeState>((set, get) => ({
  isDark: false,
  setIsDark: (isDark) => {
    set({ isDark });
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("thamires-theme-v1", isDark ? "dark" : "light");
    } catch {}
  },
  toggleTheme: () => get().setIsDark(!get().isDark),
}));
