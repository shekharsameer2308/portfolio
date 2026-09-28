import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ── Background ── */
        void: "#050507",

        /* ── Structural ── */
        spine: "rgba(255,255,255,0.04)",
        paper: "var(--paper)",
        "paper-surface": "var(--paper-surface)",

        /* ── Surfaces ── */
        surface: {
          active: "rgba(18,20,26,0.85)",
          distant: "rgba(12,13,17,0.4)",
          hover: "rgba(24,26,34,0.7)",
          card: "rgba(14,15,20,0.6)",
        },

        /* ── Borders ── */
        border: {
          subtle: "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
          focus: "rgba(255,255,255,0.12)",
          inverse: "var(--border-inverse)",
        },

        /* ── Typography ── */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: {
            DEFAULT: "var(--text-inverse)",
            secondary: "var(--text-inverse-secondary)",
            muted: "var(--text-inverse-muted)",
          }
        },

        /* ── Solar Flare Accent ── */
        flare: {
          DEFAULT: "#FF6B00",
          start: "#FF6B00",
          end: "#FFA800",
          glow: "rgba(255,107,0,0.15)",
          muted: "rgba(255,107,0,0.4)",
        },

        /* ── System Status ── */
        status: {
          online: "#22C55E",
          warning: "#F59E0B",
          offline: "#64748B",
        },
      },

      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "monospace",
        ],
      },

      fontSize: {
        /* Hero title sizes — restrained, not excessively oversized */
        "hero-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-md": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "hero-lg": ["4rem", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        /* Technical metadata */
        "tech-xs": ["0.625rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        "tech-sm": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },

      spacing: {
        /* Section spacing */
        "section": "6rem",
        "section-sm": "4rem",
      },

      borderRadius: {
        /* Restrained radii — engineered, not soft */
        "technical": "4px",
        "card": "6px",
        "panel": "8px",
      },

      backdropBlur: {
        "surface": "24px",
      },

      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-delayed": "fadeIn 0.6s ease-out 0.3s forwards",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "slide-down": "slideDown 0.2s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      transitionDuration: {
        "fast": "180ms",
        "standard": "350ms",
        "spatial": "700ms",
      },

      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
