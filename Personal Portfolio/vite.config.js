// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jeremy/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output folder
  },
});
