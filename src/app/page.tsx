"use client";
import { useContext } from "react";
import LoginForm from "./components/LoginForm";
import { ThemeContext } from "./utils/providers/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const { customConfig } = useContext(ThemeContext);
  return (
    <div className="flex flex-col h-screen bg-[url('/img/bg.jpg')] bg-cover bg-center">
      <Header />
      <div
        className={`flex-1 flex items-center ${
          customConfig.loginFormPosition === "RIGHT"
            ? "justify-end pr-16"
            : "justify-center"
        }`}
      >
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}
