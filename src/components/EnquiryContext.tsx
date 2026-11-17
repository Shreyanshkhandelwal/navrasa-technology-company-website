import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";

type EnquiryContextValue = {
  openEnquiry: (prefill?: { selectedPackage?: string; source?: string }) => void;
  closeEnquiry: () => void;
  enquiryOpen: boolean;
  selectedPackage: string;
  source: string;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [prefill, setPrefill] = useState<{ selectedPackage: string; source: string }>({
    selectedPackage: "",
    source: "",
  });
  const location = useLocation();

  const openEnquiry = useCallback((options?: { selectedPackage?: string; source?: string }) => {
    if (location.pathname === "/contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setPrefill({
      selectedPackage: options?.selectedPackage ?? "",
      source: options?.source ?? location.pathname,
    });
    trackEvent("enquiry_popup_open");
    setEnquiryOpen(true);
  }, [location.pathname]);

  const closeEnquiry = useCallback(() => {
    setEnquiryOpen(false);
  }, []);

  return (
    <EnquiryContext.Provider
      value={{
        enquiryOpen,
        openEnquiry,
        closeEnquiry,
        selectedPackage: prefill.selectedPackage,
        source: prefill.source,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error("useEnquiry must be used within EnquiryProvider");
  return context;
}
