import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Home from "./assets/home";
import Footer from "./assets/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
