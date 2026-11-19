import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#F26B1D", dark: "#D9560B", soft: "#FFF1E8" },
        ink: { DEFAULT: "#1F2430", muted: "#677084" },
        canvas: "#F6F7F9",
        line: "#E6E8EC",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
