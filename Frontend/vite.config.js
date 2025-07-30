import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        // Use Docker Compose service name for backend in containerized environment
        target: process.env.VITE_APP_BACKEND_URL || "http://localhost:4000",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
