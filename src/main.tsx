import "@fontsource/lexend-deca";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./shared/styles/base.css";
import "./shared/styles/resets.css";
import "./shared/styles/utilities.css";
import "./shared/styles/tokens.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
