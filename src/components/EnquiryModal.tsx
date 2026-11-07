import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { EnquiryForm } from "./EnquiryForm";
import { useEnquiry } from "./EnquiryContext";
import { Eyebrow } from "./ui";

const AUTO_POPUP_KEY = "navrasa-enquiry-popup-seen";

export function EnquiryModal() {
  const { enquiryOpen, openEnquiry, closeEnquiry } = useEnquiry();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location.pathname === "/contact" || sessionStorage.getItem(AUTO_POPUP_KEY)) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(AUTO_POPUP_KEY, "true");
      openEnquiry();
    }, 7000);
    return () => window.clearTimeout(timer);
  }, [location.pathname, openEnquiry]);

  useEffect(() => {
    if (!enquiryOpen) return;
    previousFocus.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEnquiry();
      if (event.key !== "Tab") return;
      const dialog = document.getElementById("enquiry-modal-title")?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!dialog?.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKey);
      previousFocus.current?.focus();
    };
  }, [enquiryOpen, closeEnquiry]);

  return (
    <AnimatePresence>
      {enquiryOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/75 sm:items-center sm:p-8"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeEnquiry(); }}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            transition={{ duration: 0.35 }}
            className="relative max-h-[100svh] w-full overflow-y-auto bg-paper text-ink sm:max-h-[calc(100vh-64px)] sm:w-[800px] sm:max-w-[800px]"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-ink/10 bg-paper px-5 py-4 sm:px-7">
              <div>
                <Eyebrow label="Project Inquiry" tone="light" />
                <h2 id="enquiry-modal-title" className="display mt-2 max-w-[30ch] text-2xl font-semibold uppercase leading-none tracking-[-0.035em] text-[#111111] sm:text-3xl">LET'S BUILD SOMETHING GREAT.</h2>
                <p className="mt-2 max-w-[48ch] text-[13px] leading-relaxed text-[#555555]">Tell us about your next digital product. Share your requirements and our team will help you take the next step.</p>
              </div>
              <button ref={closeButtonRef} type="button" onClick={closeEnquiry} aria-label="Close project enquiry" className="grid h-10 w-10 shrink-0 place-items-center border border-ink/15 transition-colors hover:border-signal hover:text-signal">
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-5 sm:px-7 sm:py-5"><EnquiryForm compact /></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
