import { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [nextui()],
} satisfies Config
