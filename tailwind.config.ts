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
        background: "var(--background)",
        foreground: "var(--foreground)",
        hunter: {
          950: "#020b08",
          900: "#071611",
          800: "#0d261d",
          700: "#123127",
          600: "#1d4b3a",
          500: "#2c5f4a",
          400: "#3b735b",
          300: "#4e8a71",
          200: "#6ca087",
          100: "#8db7a0",
          50: "#c7dcd1",
        },
        parchment: {
          50: "#fdfaf2",
          100: "#f5efdc",
          200: "#ede0c4",
          300: "#e0cfac",
        },
        brass: "#c58f51",
        highlight: "#f4d8a4",
        patina: "#5b937f",
        oxide: "#b28a6b",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        etched: "inset 0 1px rgba(255,255,255,0.25), inset 0 -2px 6px rgba(13,34,27,0.35)",
        "rod-float": "0 25px 45px rgba(3,9,7,0.4)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(13,38,29,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,38,29,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
