import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Uses next-themes class strategy
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        dot: "var(--dot)",
        ink: "var(--ink)",
        soft: "var(--soft)",
        bar: "var(--bar)",
        card: "var(--card)",
        line: "var(--line)",
        bezel: "var(--bezel)",
        desk: "var(--desk)",
        pink: "var(--pink)",
        lav: "var(--lav)",
        mint: "var(--mint)",
        yel: "var(--yel)",
      },
      fontFamily: {
        sans: ["var(--font-patrick)", "var(--font-inter)", "system-ui", "sans-serif"],
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
