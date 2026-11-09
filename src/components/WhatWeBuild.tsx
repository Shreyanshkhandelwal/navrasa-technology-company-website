import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { builds } from "@/data/site";
import { Button, Eyebrow, Lines, Reveal, useSpotlight } from "./ui";
import { useEnquiry } from "./EnquiryContext";

function Glyph({ id }: { id: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 md:h-16 md:w-16" aria-hidden="true">
      {id === "ai" && (
        <>
          <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
          <path d="M32 12a20 20 0 0 1 20 20" {...common} className="origin-center transition-transform duration-700 ease-[var(--ease-expo)] group-hover:rotate-90" />
          <path d="M32 52a20 20 0 0 1-20-20" {...common} className="origin-center transition-transform duration-700 ease-[var(--ease-expo)] group-hover:rotate-90" />
          <circle cx="32" cy="32" r="11" {...common} strokeDasharray="3 4" className="origin-center transition-transform duration-1000 ease-[var(--ease-expo)] group-hover:-rotate-180" />
          <circle cx="32" cy="32" r="28" {...common} opacity="0.35" />
        </>
      )}
      {id === "saas" && (
        <>
          <path d="M12 40l20 10 20-10" {...common} className="transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-y-1" />
          <path d="M12 32l20 10 20-10" {...common} />
          <path d="M32 14l20 10-20 10-20-10z" {...common} className="transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-1" />
          <circle cx="32" cy="24" r="1.5" fill="currentColor" stroke="none" />
        </>
      )}
      {id === "mobile" && (
        <>
          <rect x="20" y="8" width="24" height="48" rx="3" {...common} />
          <path d="M28 12h8" {...common} />
          <rect x="24" y="20" width="16" height="10" {...common} opacity="0.5" className="transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-y-2" />
          <path d="M24 36h16M24 41h10" {...common} opacity="0.5" className="transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-y-2" />
        </>
      )}
      {id === "web" && (
        <>
          <rect x="8" y="12" width="48" height="40" {...common} />
          <path d="M8 20h48" {...common} />
          <circle cx="13" cy="16" r="1" fill="currentColor" stroke="none" />
          <circle cx="17" cy="16" r="1" fill="currentColor" stroke="none" />
          <path d="M24 20v32M8 36h48" {...common} opacity="0.5" className="transition-opacity duration-500 group-hover:opacity-100" />
          <rect x="30" y="26" width="20" height="5" {...common} opacity="0.5" className="transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-1" />
        </>
      )}
      {id === "enterprise" && (
        <>
          <rect x="10" y="10" width="20" height="20" {...common} />
          <rect x="34" y="10" width="20" height="20" {...common} />
          <rect x="10" y="34" width="20" height="20" {...common} />
          <rect x="34" y="34" width="20" height="20" fill="currentColor" stroke="none" className="origin-center transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-75" />
          <path d="M30 20h4M20 30v4M44 30v4M30 44h4" {...common} />
        </>
      )}
      {id === "infra" && (
        <>
          <circle cx="14" cy="50" r="3" {...common} />
          <circle cx="50" cy="50" r="3" {...common} />
          <circle cx="32" cy="14" r="3" {...common} />
          <circle cx="32" cy="38" r="3" fill="currentColor" stroke="none" />
          <path d="M32 17v18M29.5 40l-13 8M34.5 40l13 8" {...common} strokeDasharray="60" className="transition-[stroke-dashoffset] duration-700 [stroke-dashoffset:0] group-hover:[stroke-dashoffset:60]" />
          <path d="M14 47l18-30 18 30" {...common} opacity="0.3" />
        </>
      )}
    </svg>
  );
}

export function WhatWeBuild({ headless = false, index = "02" }: { headless?: boolean; index?: string }) {
  const { openEnquiry } = useEnquiry();
  const spotlight = useSpotlight<HTMLElement>();
  return (
    <section id="what-we-build" className="grain relative bg-ink text-paper">
      <div className={cn("container-x relative", headless ? "pb-24 md:pb-32 lg:pb-40" : "section-y")}>
        {headless ? (
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 border-b border-white/10 pb-12 pt-24 md:gap-x-8 md:pb-16 md:pt-32">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow index={index} label="01 / What We Build" />
              <Lines lines={["Technology built", "around your business."]} className="display display-md mt-10 uppercase text-paper" />
            </div>
            <Reveal className="col-span-12 self-end lg:col-span-4">
              <p className="max-w-[38ch] text-lg leading-relaxed text-paper/60">Every business has different challenges. We build the digital products and software systems needed to solve them.</p>
            </Reveal>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow index={index} label="What We Build" />
              <Lines
                lines={["We build products.", "Not just projects."]}
                className="display display-md mt-10 uppercase text-paper"
              />
            </div>
            <Reveal className="col-span-12 self-end lg:col-span-4">
              <p className="max-w-[36ch] text-base leading-relaxed text-paper/60 md:text-lg">
                Six areas where we go deep. Each one is a discipline in its own right — and most serious products need
                several of them at once.
              </p>
            </Reveal>
          </div>
        )}

        <div
          className={cn(
            "grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-2",
            !headless && "mt-16 md:mt-24"
          )}
        >
          {builds.slice(0, 4).map((b, i) => (
            <Reveal key={b.id} delay={(i % 3) * 0.06} className="flex">
              <button
                type="button"
                id={`build-${b.id}`}
                onClick={openEnquiry}
                onMouseMove={spotlight}
                className={cn("spotlight group flex min-h-[300px] w-full flex-col justify-between border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.03] md:p-8", i === 0 && "md:min-h-[400px]", i === 1 && "md:min-h-[370px]", i > 1 && "md:min-h-[350px]")}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-mute-2 transition-colors duration-500 group-hover:text-signal">
                    0{i + 1}
                  </span>
                  <span className="text-paper/70 transition-colors duration-500 group-hover:text-paper">
                    <Glyph id={b.id} />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{b.title}</h3>
                  <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-paper/60">{b.text}</p>
                  <div className="mt-8 flex items-center justify-between">
                    <ul className="flex flex-wrap gap-2">
                      {(b.capabilities ?? b.tags).map((t) => (
                        <li
                          key={t}
                          className="border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <ArrowUpRight
                      className="h-5 w-5 -translate-x-2 translate-y-2 text-paper opacity-0 transition-all duration-500 ease-[var(--ease-expo)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {headless && (
          <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-[52ch] text-base text-paper/55">
              Most serious products need several of these at once. Start with the one that matters most — we'll design
              the rest to fit.
            </p>
            <Button href="/contact" tone="dark" variant="outline">
              Start with a conversation
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
