import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samiur Rahman Wasi",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
