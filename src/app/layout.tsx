import type { Metadata } from "next";
import { Inter, Caveat, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";
import { ThemeProvider } from "@/components/ThemeProvider";
import LampToggle from "@/components/LampToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });
const patrick = Patrick_Hand({ weight: "400", subsets: ["latin"], variable: "--font-patrick", display: "swap" });

const title = "Sameer Shekhar - Chemical Engineering, ML and Simulation";
const description =
  "Chemical engineering student at BIT Mesra building ML and simulation tools for process industries.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, type: "website", url: site.url },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} ${patrick.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
