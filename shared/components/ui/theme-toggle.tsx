"use client";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/shared/stores/theme-store";
export function ThemeToggle() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const isDark = useThemeStore((s) => s.isDark);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema escuro"
      aria-pressed={isDark}
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-foreground hover:bg-soft"
    >
      <Moon size={18} strokeWidth={1.5} className="dark:hidden" />
      <Sun size={18} strokeWidth={1.5} className="hidden dark:block" />
    </button>
  );
}
