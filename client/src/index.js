import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// const AuthContextProvider = require("./context/authContext");
import { AuthContextProvider } from "./context/authContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);