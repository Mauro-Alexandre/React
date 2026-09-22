import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./assets/App";
import Footer from "./assets/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
);
