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
        charcoal: "#1c1c1c",
        "charcoal-2": "#252525",
        "charcoal-3": "#2e2e2e",
        gold: "#b8915a",
        "gold-light": "#c9a468",
        "gold-pale": "#e8d5b0",
        cream: "#f4f0ea",
        "warm-white": "#faf8f5",
        stone: "#e8e0d4",
        "text-dark": "#1c1c1c",
        "text-mid": "#4a4540",
        "text-light": "#7a726a",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      transitionDuration: {
        brand: "400ms",
      },
      letterSpacing: {
        label: "0.25em",
        button: "0.20em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
