import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Lines, Mark, Reveal } from "./ui";

/* Shared opening for inner pages: dark, typographic, oriented by a breadcrumb. */
export function PageHero({
  label,
  lines,
  intro,
  size = "lg",
  meta,
  children,
}: {
  label: string;
  lines: string[];
  intro?: string;
  size?: "lg" | "md";
  meta?: ReactNode;
  children?: ReactNode;
}) {
  const titleSize = size === "md" ? "text-[clamp(2rem,4vw,3.75rem)]" : "page-hero-title";

  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div
        className="dots-dark absolute inset-0 -z-10 opacity-25 [mask-image:radial-gradient(ellipse_at_80%_20%,#000,transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_85%_10%,rgba(255,255,255,0.035),transparent_60%),radial-gradient(30%_30%_at_5%_100%,rgba(255,77,18,0.03),transparent_60%)]"
        aria-hidden="true"
      />
      <Mark className="pointer-events-none absolute -right-8 top-24 -z-10 hidden h-[60vh] w-auto text-paper/[0.04] md:block" />

      <div className="container-x relative flex min-h-[58svh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-36">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex items-center gap-3 text-mute-2">
          <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
          <Link to="/" className="transition-colors hover:text-paper">
            NavRasa
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-paper" aria-current="page">
            {label}
          </span>
        </nav>

        <div className="grid grid-cols-12 items-end gap-x-4 gap-y-8 md:gap-x-8">
          <div className={cn("col-span-12", intro && "lg:col-span-8")}>
            <Lines
              as="h1"
              lines={lines}
              reveal={false}
              className={cn("display leading-[0.98] tracking-[-0.04em] uppercase text-paper", titleSize)}
            />
          </div>
          {intro && (
            <Reveal delay={0.25} className="col-span-12 lg:col-span-4">
                <p className="max-w-[38ch] text-base leading-relaxed text-paper/70 md:text-lg">{intro}</p>
              {children}
            </Reveal>
          )}
        </div>

        {meta && (
          <div className="eyebrow mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-mute-2">
            {meta}
          </div>
        )}
      </div>
    </section>
  );
}
