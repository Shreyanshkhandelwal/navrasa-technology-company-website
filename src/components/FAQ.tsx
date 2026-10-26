import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { company, faqs } from "@/data/site";
import { Button, EASE, Eyebrow, Lines, Reveal } from "./ui";

export function FAQ({ index = "03", tone = "light" }: { index?: string; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const dark = tone === "dark";

  /* Expose the same Q&As to search engines as FAQPage structured data. */
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.faq = "true";
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
  }, []);

  return (
    <section id="faq" className={dark ? "grain relative bg-ink text-paper" : "relative bg-paper text-ink"}>
      <div className="container-x section-y relative">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8">
          <div className="col-span-12 lg:col-span-4">
            <Eyebrow index={index} label="Questions" tone={dark ? "dark" : "light"} />
            <Lines
              lines={["Straight", "answers."]}
              className={cn("display display-sm mt-8 uppercase", dark ? "text-paper" : "text-ink")}
            />
            <Reveal delay={0.1}>
              <p className={cn("mt-6 max-w-[34ch] text-[15px] leading-relaxed", dark ? "text-paper/60" : "text-ink/60")}>
                The questions we are asked most often, answered the way we would answer them on a call.
              </p>
              <div className="mt-8">
                <Button href="/contact" tone={dark ? "dark" : "light"} variant="outline">
                  Ask us something else
                </Button>
              </div>
              <p className={cn("mt-6 text-[14px]", dark ? "text-paper/50" : "text-ink/50")}>
                Or email{" "}
                <a
                  href={`mailto:${company.email}`}
                  className={cn("underline underline-offset-4", dark ? "text-paper" : "text-ink")}
                >
                  {company.email}
                </a>
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ul className={cn("border-t", dark ? "border-white/10" : "border-ink/12")}>
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className={cn("border-b", dark ? "border-white/10" : "border-ink/12")}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span
                          className={cn(
                            "text-[17px] font-medium leading-snug tracking-[-0.01em] transition-colors md:text-[19px]",
                            isOpen ? (dark ? "text-paper" : "text-ink") : dark ? "text-paper/80" : "text-ink/80"
                          )}
                        >
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "relative mt-1 block h-4 w-4 shrink-0",
                            dark ? "text-paper" : "text-ink"
                          )}
                          aria-hidden="true"
                        >
                          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                          <span
                            className={cn(
                              "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-[var(--ease-expo)]",
                              isOpen ? "scale-y-0" : "scale-y-100"
                            )}
                          />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-${i}`}
                          initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p
                            className={cn(
                              "max-w-[62ch] pb-7 pr-10 text-[15.5px] leading-relaxed",
                              dark ? "text-paper/65" : "text-ink/65"
                            )}
                          >
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
