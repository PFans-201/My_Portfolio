import React from "react";
import ReactDOM from "react-dom/client";
/*import App from "./App";*/
import "@/styles/globals.css"; // Tailwind or global CSS*/
//TODO change back 
import App from "./minimal2";

console.log("React App has started");  // Add this log to check
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
