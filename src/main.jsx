import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // your global styles
import "./css/style.css"; // template styles
import "bootstrap/dist/css/bootstrap.min.css"; // optional: if you use bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
