import { useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { company } from "@/data/site";
import { SocialIcons } from "./Social";
import { Logo } from "./ui";
import { useEnquiry } from "./EnquiryContext";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const cls = "text-[14px] leading-6 text-paper/65 transition-colors duration-300 hover:text-signal";
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
  const reduce = useReducedMotion();
  const { openEnquiry } = useEnquiry();
  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "For Startups", href: "/solutions" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Mobile App Development", href: "/mobile-app-development" },
    { label: "Website Development", href: "/what-we-build" },
    { label: "Custom Software Development", href: "/custom-software-development" },
    { label: "MVP Development", href: "/mvp-development" },
    { label: "AI Development", href: "/ai-development" },
  ];

  const industries = [
    "Automotive & Mobility",
    "Healthcare & HealthTech",
    "Education & EdTech",
    "Travel, Logistics & Transportation",
    "E-commerce & Digital Marketplaces",
  ];

  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <div className="container-x relative pt-14 pb-10 md:pt-20 md:pb-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(240px,2fr)_minmax(120px,.8fr)_minmax(160px,1.1fr)_minmax(190px,1.2fr)_minmax(220px,1.4fr)] xl:gap-x-10">
          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-1">
            <Logo className="text-paper" />
            <p className="mt-7 max-w-[38ch] text-[14px] font-medium leading-5 text-paper/90">
              Engineering Digital Products. Empowering Businesses.
            </p>
            <p className="mt-4 max-w-[42ch] text-[13px] leading-[1.75] text-paper/55">
              NavRasa IT Solutions is a technology and product engineering company helping startups and businesses turn ideas into scalable digital products. From mobile applications and web platforms to custom software and AI-powered solutions, we bring strategy, design and engineering together to build technology that moves businesses forward.
            </p>
            <SocialIcons tone="dark" size="sm" className="mt-6" />
          </div>

          <div>
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-mute-2">Company</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-mute-2">Services</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-mute-2">Industries</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {industries.map((industry) => (
                <li key={industry} className="text-[14px] leading-6 text-paper/65">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-1">
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-mute-2">Let's Connect</h2>
            <ul className="mt-5 flex flex-col gap-3.5 text-[13px] text-paper/65">
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-paper"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.5} aria-hidden="true" />
                  <span className="leading-relaxed">{company.location}</span>
                </a>
              </li>
              <li>
                <a href="tel:+917014686805" className="flex items-center gap-3 transition-colors hover:text-paper">
                  <Phone className="h-4 w-4 shrink-0 text-signal" strokeWidth={1.5} aria-hidden="true" />
                  <span>+91 7014686805</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-paper">
                  <Mail className="h-4 w-4 shrink-0 text-signal" strokeWidth={1.5} aria-hidden="true" />
                  <span>{company.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h3 className="text-[16px] font-medium tracking-[-0.02em] text-paper">Stay Ahead With Technology.</h3>
              <p className="mt-2 max-w-[38ch] text-[12.5px] leading-5 text-paper/55">
                Get product development insights, technology updates and practical ideas for building better digital products.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex min-h-11 items-center gap-2.5 border border-white/15 px-4 text-[11px] font-medium uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:border-signal hover:text-signal"
              >
                Contact Us <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between md:gap-8 md:py-8">
          <div>
            <h2 className="font-display text-xl font-medium tracking-[-0.03em] text-paper sm:text-2xl">
              Have an Idea? Let&apos;s Build Something That Matters.
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-paper/55">
              Let&apos;s discuss your product vision and explore how we can build it together.
            </p>
          </div>
          <button
            type="button"
            onClick={openEnquiry}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start border border-white/20 px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:border-signal hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal md:self-auto"
          >
            Start Your Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-[11px] text-mute-2 md:flex-row md:items-center md:justify-between">
          <span>© 2026 NavRasa IT Solutions. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-signal">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-signal">Terms of Service</Link>
            <Link to="/contact" className="transition-colors hover:text-signal">Contact Us</Link>
            <button
              type="button"
              onClick={toTop}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-signal"
            >
              Back to top <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
