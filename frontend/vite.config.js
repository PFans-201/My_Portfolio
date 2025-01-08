// frontend/src/api/config.js
//export const NODE_API_URL = 'http://localhost:5000/api';
//export const DJANGO_API_URL = 'http://localhost:8000/api';

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    open: false,
    host: true, // Allows access on the local network
    port: 3000,  // Adjust for each frontend project
    watch: {
      usePolling: true, // Ensures file changes in Docker volumes are detected
      ignored: ['**/node_modules/**'], // Ignore unnecessary files
    },
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],  // Ensure Tailwind CSS is used
    },
  },
});
