// frontend/src/api/config.js
//export const NODE_API_URL = 'http://localhost:5000/api';
//export const DJANGO_API_URL = 'http://localhost:8000/api';

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // Prevent Vite from trying to open the browser automatically
    allowedHosts: ['pfanica.com', 'invest.pfanica.com', 'localhost', '0.0.0.0'],
    // Enable access from the network
    host: '0.0.0.0', // This allows access from any network, change if more restrictive behavior is needed
    port: 3001,  // Adjust for each frontend project
    watch: {
      usePolling: true, // Ensures file changes in Docker volumes are detected
      ignored: ['**/node_modules/**'], // Ignore unnecessary files
    },
    hmr: {
      clientPort: 80, // This is crucial for HMR through Nginx
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
