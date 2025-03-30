"use client";
import { useCallback, useEffect, useState } from "react";

export const THEME_KEY = "cobhub-theme";

const useTheme = () => {
  const readMode = useCallback(() => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      const setting = localStorage.getItem(THEME_KEY) || "system";
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (setting === "dark" || (prefersDark && setting !== "light")) {
        return true;
      }
    } catch {}

    return false;
  }, []);

  const [isDark, setIsDark] = useState(readMode);

  const toggleTheme = () => {
    localStorage.setItem(THEME_KEY, !isDark ? "dark" : "light");
    setIsDark((theme) => !theme);
  };

  useEffect(() => {
    const rootClass = document.documentElement.classList;
    rootClass.add("no-transition");

    if (isDark) {
      rootClass.add("dark");
    } else {
      rootClass.remove("dark");
    }

    setTimeout(() => {
      rootClass.remove("no-transition");
    }, 0);
  }, [isDark]);

  return { isDark, toggleTheme };
};

export default useTheme;
