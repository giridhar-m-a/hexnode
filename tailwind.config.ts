import type { Config } from "tailwindcss";
// import {tailwindcss-animate} from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "var(--button)",
        button_accent: "var(--button-accent)",
        text_accent: "var(--text-accent)",
        border_accent: "var(--border-color)",
        string: "var(--text-dark)",
        bg_accent: "var(--bg-accent)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  //   plugins: [require("tailwindcss-animate")],
} satisfies Config;
