import { useState } from "react";
import { cn } from "@/utils/cn";
import { engineering } from "@/data/site";
import { Eyebrow, Lines, Reveal } from "./ui";

export function Engineering({ index = "05" }: { index?: string }) {
  const [hot, setHot] = useState<number | null>(null);

  return (
    <section id="engineering" className="relative bg-paper text-ink">
      <div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="02 / Product Engineering" tone="light" />
            <Lines lines={["Engineered for", "what comes next."]} className="display display-md mt-10 uppercase text-ink" />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className="max-w-[38ch] text-base leading-relaxed text-ink/65 md:text-lg">{engineering.lead}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-16 md:mt-24">
          {/* architecture */}
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="border border-ink/12 bg-paper">
              <div className="flex items-center justify-between border-b border-ink/12 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                <span>System architecture</span>
                <span>Request → Response</span>
              </div>
              <ol onMouseLeave={() => setHot(null)}>
                {engineering.layers.map((l, i) => {
                  const active = hot === i;
                  return (
                    <li key={l.name} className="relative">
                      <div
                        onMouseEnter={() => setHot(i)}
                        className={cn(
                          "grid grid-cols-12 items-center gap-3 px-5 py-4 transition-colors duration-500 md:py-5",
                          active ? "bg-ink text-paper" : "bg-transparent text-ink",
                          i !== engineering.layers.length - 1 && !active && "border-b border-ink/10"
                        )}
                      >
                        <div className="col-span-5 flex items-center gap-4 sm:col-span-4">
                          <span className={cn("font-mono text-[10px] tracking-[0.2em]", active ? "text-signal" : "text-mute")}>
                            L{i + 1}
                          </span>
                          <span className="font-display text-lg font-semibold tracking-[-0.02em] md:text-xl">{l.name}</span>
                        </div>
                        <ul className="col-span-7 flex flex-wrap justify-end gap-1.5 sm:col-span-8 sm:gap-2">
                          {l.modules.map((m, mi) => (
                            <li
                              key={m}
                              style={{ transitionDelay: active ? `${mi * 50}ms` : "0ms" }}
                              className={cn(
                                "border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-500 sm:px-2.5 sm:text-[10.5px]",
                                active ? "translate-x-0 border-white/25 text-paper" : "border-ink/15 text-ink/70"
                              )}
                            >
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* connector */}
                      {i !== engineering.layers.length - 1 && (
                        <span className="pointer-events-none absolute left-[3.25rem] top-full z-10 hidden h-px w-px sm:block" aria-hidden="true" />
                      )}
                    </li>
                  );
                })}
              </ol>
              <div className="relative h-14 overflow-hidden border-t border-ink/12">
                <div className="absolute inset-y-0 left-1/2 w-px bg-ink/10" />
                <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-px bg-signal motion-safe:animate-flow" />
                <div className="absolute inset-0 flex items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  <span>Observability across every layer</span>
                  <span>Designed to evolve</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* qualities */}
          <div className="col-span-12 lg:col-span-5 lg:pl-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Non-negotiables</p>
              <ul className="mt-6 border-t border-ink/10">
                {engineering.qualities.map((q, i) => (
                  <li key={q.title} className="group flex items-baseline gap-5 border-b border-ink/10 py-5 md:py-6">
                    <span className="w-7 shrink-0 font-mono text-[11px] tracking-[0.2em] text-mute">0{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-2 md:text-3xl">
                        {q.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink/60">{q.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <blockquote className="border-l-2 border-signal pl-6">
                <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-3xl">
                  {engineering.message}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
