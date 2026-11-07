import { motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { EASE } from "./components/ui";
import { AboutPage } from "./pages/AboutPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { ContactPage } from "./pages/ContactPage";
import { Home } from "./pages/Home";
import { InsightsPage } from "./pages/InsightsPage";
import { MobileAppDevelopmentPage } from "./pages/MobileAppDevelopmentPage";
import { PrivacyPage, TermsPage } from "./pages/LegalPage";
import { NotFound } from "./pages/NotFound";
import { SolutionsPage } from "./pages/SolutionsPage";
import { WhatWeBuildPage } from "./pages/WhatWeBuildPage";
import { WorkPage } from "./pages/WorkPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { CareersPage } from "./pages/CareersPage";
import { EnquiryProvider } from "./components/EnquiryContext";
import { EnquiryModal } from "./components/EnquiryModal";

/* Scroll to top on route change; honour #hash targets (instant across pages,
   smooth when jumping within the current page). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef<string | null>(null);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;

    if (samePage && target) {
      target.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
      return;
    }
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    if (target) target.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname, hash, reduce]);

  return null;
}

export default function App() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <EnquiryProvider>
    <div className="relative min-w-0 overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <ScrollManager />
      <motion.main
        id="main"
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-build" element={<WhatWeBuildPage />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
      <Footer />
      <EnquiryModal />
    </div>
    </EnquiryProvider>
  );
}
