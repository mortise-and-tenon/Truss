"use client";

import { createContext, useEffect, useState } from "react";
import { Env_LoginFormPosition } from "../Util";

export type LoginFormPositionType = "RIGHT" | "CENTER";

export type CustomConfig = {
  loginFormPosition: LoginFormPositionType;
};

type ThemeType = {
  theme: string;
  customConfig: CustomConfig;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeType>({
  theme: "light",
  customConfig: {
    loginFormPosition: "RIGHT",
  },
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const [customConfig, setCustomConfig] = useState<CustomConfig>({
    loginFormPosition: "RIGHT",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }

    setCustomConfig({
      loginFormPosition: Env_LoginFormPosition,
    });
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, customConfig, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
