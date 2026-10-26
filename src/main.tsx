import { StrictMode, type ComponentType, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

/* Clean URLs (/about, /work …) when deployed at a domain root — the normal
   production case (see public/_redirects and vercel.json for SPA fallbacks).
   If the build is opened from a file/blob URL or served from a nested preview
   path, fall back to hash routing so deep links can never 404. */
const { protocol, pathname } = window.location;
const nested = pathname.split("/").filter(Boolean).length > 1 || /\.html?$/i.test(pathname);
const Router: ComponentType<{ children: ReactNode }> =
  /^https?:$/.test(protocol) && !nested ? BrowserRouter : HashRouter;

if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
