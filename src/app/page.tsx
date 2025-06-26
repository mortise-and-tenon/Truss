"use client";
import { useContext } from "react";
import LoginForm from "./components/LoginForm";
import { ThemeContext } from "./utils/providers/ThemeProvider";

export default function Home() {
  const { customConfig } = useContext(ThemeContext);
  return (
    <div className="w-full h-screen bg-[url('/img/bg.jpg')] bg-cover bg-center">
      <div
        className={`h-full flex items-center ${
          customConfig.loginFormPosition === "RIGHT"
            ? "justify-end pr-16"
            : "justify-center"
        }`}
      >
        <LoginForm />
      </div>
    </div>
  );
}
