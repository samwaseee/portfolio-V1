import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samiur Rahman Wasi",
  description: "I am an enthusiastic Computer Science undergraduate with a strong foundation in full-stack web development. My passion for web development has honed my analytical skills, allowing me to create user-friendly and responsive web applications. With a keen interest in applying my competitive programming skills to practical projects, I am committed to continuous learning and strive to excel as a software engineer. I excel in both independent and collaborative settings, adapting quickly to different processes. I am eager to contribute to teams that prioritize innovative solutions and ongoing enhancement.",
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
