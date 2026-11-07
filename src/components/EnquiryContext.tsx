import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";

type EnquiryContextValue = {
  openEnquiry: () => void;
  closeEnquiry: () => void;
  enquiryOpen: boolean;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const location = useLocation();

  const openEnquiry = useCallback(() => {
    if (location.pathname === "/contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    sessionStorage.setItem("navrasa-enquiry-popup-seen", "true");
    trackEvent("enquiry_popup_open");
    setEnquiryOpen(true);
  }, [location.pathname]);

  const closeEnquiry = useCallback(() => {
    sessionStorage.setItem("navrasa-enquiry-popup-seen", "true");
    setEnquiryOpen(false);
  }, []);

  return (
    <EnquiryContext.Provider value={{ enquiryOpen, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error("useEnquiry must be used within EnquiryProvider");
  return context;
}
