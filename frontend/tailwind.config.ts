import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "../shared/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7fb",
          900: "#0d1321",
        },
        teal: {
          500: "#0f8b8d",
          600: "#0c7577",
        },
      },
      boxShadow: {
        soft: "0 24px 60px rgba(13, 19, 33, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
