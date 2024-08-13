/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto",
    },
    colors: { ...colors },
    extend: {
      height: {
        header: "var(--header-height)",
        content: "var(--content-height)",
      },
    },
  },
  plugins: [],
}
