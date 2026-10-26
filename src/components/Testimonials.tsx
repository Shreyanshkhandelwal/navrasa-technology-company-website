import { testimonials } from "@/data/site";
import { Eyebrow, Lines, Reveal } from "./ui";

/* Verbatim client feedback. Quotes are never edited — only added to, with consent. */
export function Testimonials({ index = "06", tone = "light" }: { index?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <section
      id="testimonials"
      className={dark ? "grain relative bg-ink text-paper" : "relative bg-paper-2 text-ink"}
    >
      <div className="container-x section-y relative">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="Client Feedback" tone={dark ? "dark" : "light"} />
            <Lines
              lines={["What clients say", "after we ship."]}
              className={`display display-md mt-10 uppercase ${dark ? "text-paper" : "text-ink"}`}
            />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className={`max-w-[38ch] text-base leading-relaxed md:text-lg ${dark ? "text-paper/60" : "text-ink/65"}`}>
              Unedited feedback from the founders and business owners we've built for.
            </p>
          </Reveal>
        </div>

        <ul
          className={`mt-16 grid grid-cols-1 border-l border-t md:mt-20 md:grid-cols-2 ${
            dark ? "border-white/10" : "border-ink/12"
          }`}
        >
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name + i}
              delay={(i % 2) * 0.08}
              className={`flex flex-col justify-between border-b border-r p-7 md:p-10 ${
                dark ? "border-white/10" : "border-ink/12"
              }`}
            >
              <div>
                <span
                  aria-hidden="true"
                  className={`block font-display text-5xl leading-none ${dark ? "text-paper/15" : "text-ink/15"}`}
                >
                  &ldquo;
                </span>
                <blockquote
                  className={`mt-4 text-lg leading-snug tracking-[-0.01em] md:text-xl ${
                    dark ? "text-paper/90" : "text-ink"
                  }`}
                >
                  {t.quote}
                </blockquote>
              </div>
              <figcaption
                className={`mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t pt-5 ${
                  dark ? "border-white/10" : "border-ink/10"
                }`}
              >
                <span>
                  <span className={`block text-[15px] font-medium ${dark ? "text-paper" : "text-ink"}`}>{t.name}</span>
                  <span className={`mt-0.5 block text-[13.5px] ${dark ? "text-paper/55" : "text-ink/55"}`}>
                    {t.role}
                  </span>
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.18em] ${dark ? "text-mute-2" : "text-mute"}`}
                >
                  {t.project}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
