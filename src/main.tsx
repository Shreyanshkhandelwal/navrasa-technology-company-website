
import { StrictMode, type ComponentType, type ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

/*
 * Production and local HTTP servers use clean browser URLs.
 * HashRouter is only used when opening the app through file/blob URLs.
 */
const isHttp = /^https?:$/.test(window.location.protocol);

const Router: ComponentType<{ children: ReactNode }> = isHttp
  ? BrowserRouter
  : HashRouter;

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root was not found.");
}

const app = (
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

/*
 * If server-rendered HTML exists, hydrate it.
 * Otherwise, use normal client-side rendering (development fallback).
 */
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
