import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avantgarde: ["var(--font-avantgardebookbt)", "sans-serif"],
      },
      colors: {
        // background: "var(--background)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        "body-text": "var(--body-text)",
        brandinfo: "var(--brandinfo)",
        dark: "var(--dark)",
        "dark-shade": "var(--dark-shade)",
        "gray-900": "var(--gray-900)",
        "line-shape": "var(--line-shape)",
        neutralgrey: "var(--neutralgrey)",
        neutralwhite: "var(--neutralwhite)",
        primary: "var(--primary)",
        "text-on-dark": "var(--text-on-dark)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
} satisfies Config;
