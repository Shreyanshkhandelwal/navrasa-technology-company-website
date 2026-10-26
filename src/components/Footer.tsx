import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { company, footer } from "@/data/site";
import { SocialIcons } from "./Social";
import { Logo, Mark } from "./ui";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const cls = "text-[15px] text-paper/75 transition-colors hover:text-paper";
  return href.startsWith("/") ? (
    <Link to={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();
  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <div className="container-x relative pt-20 md:pt-28">
        <div className="grid grid-cols-12 gap-x-4 gap-y-14 md:gap-x-8">
          <div className="col-span-12 lg:col-span-6">
            <Logo />
            <p className="display mt-10 text-[clamp(2.75rem,7vw,7.5rem)] uppercase text-paper">
              Build
              <br />
              what's
              <br />
              next.
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-[1fr_1fr_1.6fr] lg:col-span-6 lg:pt-3">
            <div>
              <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute-2">Company</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {footer.company.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute-2">Solutions</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {footer.solutions.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute-2">Get in touch</h4>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <FooterLink href={`mailto:${company.email}`}>{company.email}</FooterLink>
                </li>
                {company.phones.map((p) => (
                  <li key={p}>
                    <FooterLink href={`tel:${p.replace(/\s/g, "")}`}>{p}</FooterLink>
                  </li>
                ))}
                <li className="pt-1 text-[14px] leading-relaxed text-paper/50">{company.location}</li>
                <li className="text-[14px] text-paper/50">{company.hours}</li>
              </ul>

              <h4 className="mt-9 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute-2">Follow</h4>
              <SocialIcons tone="dark" size="sm" className="mt-4" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 py-8 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-2 md:mt-28 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="transition-colors hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-2 self-start text-paper/70 transition-colors hover:text-paper md:self-auto"
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>

      <Mark className="pointer-events-none absolute -bottom-24 -right-16 h-[420px] w-auto text-paper/[0.03] md:-bottom-40 md:h-[640px]" />
    </footer>
  );
}
