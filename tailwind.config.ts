import type { Config } from "tailwindcss";

export default {
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
      },
      backgroundImage: { shadow: 'url("/shadow.svg")' },
      animationDelay: {
        "anime-delay-500": "500ms",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
} satisfies Config;
