import { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto",
    },
    extend: {
      height: {
        header: "var(--header-height)",
        main: "var(--main-height)",
      },
    },
  },
  plugins: [],
} satisfies Config
