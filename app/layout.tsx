import "./globals.css";
import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Futurix C-Tech",
  description: "Official C.Tech Association",
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} antialiased`}>
        <ThemeProvider>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
