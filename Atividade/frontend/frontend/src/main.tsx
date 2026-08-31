import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./assets/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
);
