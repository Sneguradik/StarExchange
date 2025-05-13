import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@layouts": path.resolve(__dirname, "src", "layouts"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@styles": path.resolve(__dirname, "src", "styles")
    }
  },
  server : {
    port: 3000,
    allowedHosts: true
  },
  plugins: [react(), tailwindcss()]
})
