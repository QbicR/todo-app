import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  root: "src",
  resolve: { alias: { "@": "/src" } },
  server: {
    port: 3000,
  },
})
