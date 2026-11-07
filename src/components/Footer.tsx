import { useReducedMotion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { company, footer } from "@/data/site";
import { SocialIcons } from "./Social";
import { Logo, Mark } from "./ui";
import { useEnquiry } from "./EnquiryContext";
import { ArrowUpRight } from "lucide-react";

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
  const { openEnquiry } = useEnquiry();
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
            <button type="button" onClick={openEnquiry} className="mt-8 inline-flex min-h-12 items-center gap-3 bg-signal px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#d94d1c]">
              Start Your Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
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
              <ul className="mt-5 flex flex-col gap-3 text-[14px] text-paper/60">
                <li>
                  <a href={`mailto:${company.email}`} className="flex items-start gap-2.5 transition-colors hover:text-paper">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" strokeWidth={1.5} aria-hidden="true" />
                    <span>{company.email}</span>
                  </a>
                </li>
                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="flex items-start gap-2.5 transition-colors hover:text-paper">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" strokeWidth={1.5} aria-hidden="true" />
                      <span>{phone}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 transition-colors hover:text-paper"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" strokeWidth={1.5} aria-hidden="true" />
                    <span className="leading-relaxed">{company.location}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" strokeWidth={1.5} aria-hidden="true" />
                  <span>{company.hours}</span>
                </li>
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
