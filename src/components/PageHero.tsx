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
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div
        className="dots-dark absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_80%_20%,#000,transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_85%_10%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(30%_30%_at_5%_100%,rgba(255,77,18,0.05),transparent_60%)]"
        aria-hidden="true"
      />
      <Mark className="pointer-events-none absolute -right-8 top-24 -z-10 hidden h-[60vh] w-auto text-paper/[0.04] md:block" />

      <div className="container-x relative flex min-h-[64svh] flex-col justify-end pb-14 pt-32 md:pb-20 md:pt-44">
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
              className={cn("display uppercase text-paper", size === "lg" ? "display-lg" : "display-md")}
            />
          </div>
          {intro && (
            <Reveal delay={0.35} className="col-span-12 lg:col-span-4">
              <p className="max-w-[38ch] text-lg leading-relaxed text-paper/70 md:text-xl">{intro}</p>
              {children}
            </Reveal>
          )}
        </div>

        {meta && (
          <div className="eyebrow mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-mute-2">
            {meta}
          </div>
        )}
      </div>
    </section>
  );
}
