import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import "../styles/themes.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Sameer Shekhar | Notebook",
  description: "Chemical Engineering × Data × AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>{children}</body>
    </html>
  );
}
