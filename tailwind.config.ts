import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media", // Uses system preference seamlessly
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      boxShadow: {
        paper: "0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 0 3px rgba(0,0,0,0.05)",
        "paper-dark": "0 4px 30px -2px rgba(0, 0, 0, 0.5), 0 0 3px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
