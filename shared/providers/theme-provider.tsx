"use client";
import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/shared/stores/theme-store";
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const sync = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
      useThemeStore.setState({ isDark });
    };
    sync(document.documentElement.classList.contains("dark"));
    const media = matchMedia("(prefers-color-scheme: dark)");
    const followSystem = () => {
      try {
        const value = localStorage.getItem("thamires-theme-v1");
        if (value !== "dark" && value !== "light") sync(media.matches);
      } catch {
        sync(media.matches);
      }
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === "thamires-theme-v1" || event.key === null)
        sync(
          event.newValue === "dark" ||
            (event.newValue !== "light" && media.matches),
        );
    };
    media.addEventListener("change", followSystem);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return children;
}
