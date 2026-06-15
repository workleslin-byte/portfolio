import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EFEDE8",
        "paper-2": "#E7E4DD",
        ink: "#14110F",
        "ink-soft": "#6E6A63",
        line: "#D9D5CC",
        accent: "#C2381B",
        white: "#FFFFFF",
        // legacy aliases kept so retired components still compile cleanly
        mute: "#6E6A63",
        "mute-dark": "#9A9A9A",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        dossier: "1440px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        "fade-in": "fade-in 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
