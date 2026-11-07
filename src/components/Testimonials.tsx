import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GOOGLE_REVIEWS_URL, googleReviews, googleReviewsSummary } from "@/data/site";
import { Eyebrow, Reveal } from "./ui";

function getVisibleCount() {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export function Testimonials({ index = "06", tone = "light" }: { index?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const touchStart = useRef<number | null>(null);
  const [activeReview, setActiveReview] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [fullReview, setFullReview] = useState<(typeof googleReviews)[number] | null>(null);

  const move = (amount: number) => {
    setActiveReview((current) => (current + amount + googleReviews.length) % googleReviews.length);
  };

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || hovered || reduceMotion || fullReview) return;
    const timer = window.setInterval(() => move(1), 6000);
    return () => window.clearInterval(timer);
  }, [inView, hovered, reduceMotion, fullReview]);

  useEffect(() => {
    if (!fullReview) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFullReview(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [fullReview]);

  const visibleReviews = Array.from({ length: visibleCount }, (_, offset) =>
    googleReviews[(activeReview + offset) % googleReviews.length]
  );

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      className={dark ? "grain relative bg-ink text-paper" : "relative bg-paper-2 text-ink"}
    >
      <div className="container-x section-y relative">
        <div className="grid grid-cols-12 items-end gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="Google Reviews" tone={dark ? "dark" : "light"} />
            <Reveal>
              <h2 className={`display display-md mt-8 max-w-4xl uppercase ${dark ? "text-paper" : "text-ink"}`}>
                What clients say after we ship.
              </h2>
            </Reveal>
          </div>
          <Reveal className="col-span-12 lg:col-span-4">
            <div className={`border-y py-5 ${dark ? "border-white/10" : "border-ink/10"}`}>
              <div className="flex items-end gap-2">
                <span className="font-display text-4xl font-semibold leading-none">{googleReviewsSummary.rating}</span>
                <span className={`pb-0.5 text-sm ${dark ? "text-paper/75" : "text-[#555555]"}`}>/ 5.0</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-base tracking-[0.12em] text-[#fbbc04]" aria-label="5 out of 5 stars">★★★★★</span>
                <span className={`text-sm ${dark ? "text-paper/75" : "text-[#555555]"}`}>{googleReviewsSummary.totalReviews} Google Reviews</span>
              </div>
              <p className={`mt-2 text-xs ${dark ? "text-paper/65" : "text-[#777777]"}`}>Based on Google reviews</p>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium underline decoration-current/25 underline-offset-4 hover:text-signal">
                Read All Reviews on Google <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-12 md:mt-14"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const distance = touchStart.current - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1);
            touchStart.current = null;
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${activeReview}-${visibleCount}`}
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
              aria-live="polite"
            >
              {visibleReviews.map((review) => (
                <article
                  key={review.name}
                  className={`flex h-[310px] flex-col border p-5 md:p-6 ${dark ? "border-white/10 bg-paper/[0.025]" : "border-ink/12 bg-white/35"}`}
                >
                  <div className="flex min-h-[42px] items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[15px] font-semibold leading-tight">{review.name}</h3>
                      <p className={`mt-1 text-xs ${dark ? "text-paper/65" : "text-[#777777]"}`}>{review.date}</p>
                    </div>
                    <span className={`shrink-0 font-sans text-xs font-semibold ${dark ? "text-paper/70" : "text-ink/70"}`}>Google</span>
                  </div>
                  <div className="mt-4 text-sm tracking-[0.08em] text-[#fbbc04]" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote className={`mt-4 line-clamp-5 whitespace-pre-line text-[15px] leading-[1.65] ${dark ? "text-paper/80" : "text-ink/80"}`}>
                    {review.quote}
                  </blockquote>
                  <button
                    type="button"
                    onClick={() => setFullReview(review)}
                    className="mt-auto pt-4 text-left text-xs font-semibold underline decoration-current/30 underline-offset-4 hover:text-signal"
                    aria-label={`Read full review from ${review.name}`}
                  >
                    Read full review <span aria-hidden="true">↗</span>
                  </button>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
          <div className="flex items-center gap-2" aria-label="Choose a review">
            {googleReviews.map((review, reviewIndex) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveReview(reviewIndex)}
                className={`h-1.5 rounded-full transition-all ${reviewIndex === activeReview ? "w-8 bg-signal" : `w-1.5 ${dark ? "bg-paper/30" : "bg-ink/25"}`}`}
                aria-label={`Show reviews starting with ${review.name}`}
                aria-current={reviewIndex === activeReview ? "true" : undefined}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous reviews" className={`grid h-10 w-10 place-items-center border transition-colors hover:border-signal hover:text-signal ${dark ? "border-white/15" : "border-ink/15"}`}>
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next reviews" className={`grid h-10 w-10 place-items-center border transition-colors hover:border-signal hover:text-signal ${dark ? "border-white/15" : "border-ink/15"}`}>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`mt-7 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between ${dark ? "border-white/10" : "border-ink/10"}`}>
          <p className={`text-sm ${dark ? "text-paper/70" : "text-ink/70"}`}>See what clients say about working with NavRasa.</p>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline decoration-current/30 underline-offset-4 hover:text-signal">
            Read All Reviews on Google ↗
          </a>
        </div>
      </div>

      {fullReview && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-ink/75 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setFullReview(null); }}>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} role="dialog" aria-modal="true" aria-labelledby="full-review-title" className="max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-paper p-6 text-ink shadow-2xl md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 id="full-review-title" className="font-display text-2xl font-semibold">{fullReview.name}</h3>
                <p className="mt-1 text-xs text-[#777777]">{fullReview.date} · Google review</p>
              </div>
              <button type="button" onClick={() => setFullReview(null)} aria-label="Close full review" className="grid h-10 w-10 shrink-0 place-items-center border border-ink/15 hover:border-signal hover:text-signal">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-5 text-base tracking-[0.08em] text-[#fbbc04]" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote className="mt-5 whitespace-pre-line text-[15px] leading-[1.75] text-[#555555]">{fullReview.quote}</blockquote>
          </motion.div>
        </div>
      )}
    </section>
  );
}
