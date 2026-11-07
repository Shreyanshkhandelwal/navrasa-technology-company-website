import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { company, nav } from "@/data/site";
import { Button, EASE, Logo, useScrolled } from "./ui";

export function Nav() {
  const scrolled = useScrolled(32);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const location = useLocation();

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,height] duration-500 ease-[var(--ease-expo)]",
          scrolled || open
            ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/60"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between transition-[height] duration-500 ease-[var(--ease-expo)]",
            scrolled ? "h-16" : "h-20 md:h-24"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "group relative px-4 py-2 text-[13.5px] font-medium transition-colors hover:text-paper",
                    isActive ? "text-paper" : "text-paper/70"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-paper transition-transform duration-500 ease-[var(--ease-expo)]",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="/contact" tone="dark" size="md" className="h-11 px-5">
                Start Your Project
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center border border-white/15 text-paper lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "absolute h-px w-5 bg-current transition-transform duration-500 ease-[var(--ease-expo)]",
                  open ? "rotate-45" : "-translate-y-[3.5px]"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-5 bg-current transition-transform duration-500 ease-[var(--ease-expo)]",
                  open ? "-rotate-45" : "translate-y-[3.5px]"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-24 lg:hidden"
          >
            <div className="grain absolute inset-0" aria-hidden="true" />
            <div className="container-x relative flex flex-1 flex-col justify-between overflow-y-auto pb-10">
              <nav className="flex flex-col" aria-label="Mobile">
                {nav.map((item, i) => {
                  const active = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.12 + i * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        aria-current={active ? "page" : undefined}
                        className="flex items-center justify-between border-b border-white/10 py-5 font-display text-4xl font-semibold tracking-[-0.03em] text-paper sm:text-5xl"
                      >
                        <span className="flex items-center gap-4">
                          {active && <span className="h-2 w-2 bg-signal" aria-hidden="true" />}
                          {item.label}
                        </span>
                        <ArrowUpRight className="h-6 w-6 text-mute-2" strokeWidth={1.5} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                className="mt-10 flex flex-col gap-6"
              >
                <Button href="/contact" tone="dark" size="lg" className="w-full">
                  Start Your Project
                </Button>
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">
                  <a href={`mailto:${company.email}`} className="hover:text-paper">
                    {company.email}
                  </a>
                  <span>{company.city}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
