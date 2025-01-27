import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/globals.css"; // Tailwind or global CSS

console.log("React App has started");  // Add this log to check
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
