import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./assets/home";
import Footer from "./assets/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
    <Footer />
  </StrictMode>,
);
