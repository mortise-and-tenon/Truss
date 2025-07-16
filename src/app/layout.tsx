import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/providers/ThemeProvider";
import { I18nProvider } from "./utils/providers/I18nProvider";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Truss Web Framework",
  description: "Truss Web Framework Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextIntlClientProvider>
          <I18nProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </I18nProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
