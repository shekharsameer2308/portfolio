import type { Metadata, Viewport } from "next";
import { personalInfo } from "@/data/personal";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${sans.variable} ${mono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
