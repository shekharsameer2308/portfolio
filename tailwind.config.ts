import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        notePaper: "#fcfbfa",
        gridLine: "#f0ece6",
        pastelPink: "#fce4ec",
        pastelPinkBorder: "#f8bbd0",
        pastelLavender: "#eef2f7",
        pastelLavenderBorder: "#d1c4e9",
        pastelMint: "#e0f2f1",
        pastelMintBorder: "#b2dfdb",
        markerYellow: "#fef08a",
      },
      fontFamily: {
        handwriting: ["var(--font-caveat)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
