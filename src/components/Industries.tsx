import { credentials, industries } from "@/data/site";
import { Eyebrow, Lines, Reveal } from "./ui";

/** Compact proof strip — figures are kept conservative and verifiable. */
export function Credentials({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section
      className={dark ? "relative border-y border-white/10 bg-ink text-paper" : "relative border-y border-ink/12 bg-paper text-ink"}
    >
      <div className="container-x">
        <dl className={`grid grid-cols-2 border-l lg:grid-cols-4 ${dark ? "border-white/10" : "border-ink/12"}`}>
          {credentials.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 0.06}
              className={`border-b border-r py-8 pl-5 pr-5 last:border-b-0 md:py-10 lg:border-b-0 lg:pl-7 ${
                i < 2 ? "" : "border-b-0"
              } ${dark ? "border-white/10" : "border-ink/12"}`}
            >
              <dt className="sr-only">{c.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                  {c.value}
                </span>
                <span className={`mt-3 block text-[14px] font-medium ${dark ? "text-paper/85" : "text-ink/85"}`}>
                  {c.label}
                </span>
                <span
                  className={`mt-1.5 block max-w-[24ch] text-[12.5px] leading-relaxed ${
                    dark ? "text-paper/45" : "text-ink/50"
                  }`}
                >
                  {c.note}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Industries({ index = "04" }: { index?: string }) {
  return (
    <section id="industries" className="relative bg-paper-2 text-ink">
      <div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="Industries" tone="light" />
            <Lines lines={["Sectors we", "build for."]} className="display display-md mt-10 uppercase text-ink" />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className="max-w-[38ch] text-base leading-relaxed text-ink/65 md:text-lg">
              We work across industries. What stays constant is the approach: understand the operation first, then
              build the software around it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 border-l border-t border-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((s, i) => (
            <Reveal
              as="li"
              key={s.name}
              delay={(i % 3) * 0.05}
              className="group border-b border-r border-ink/12 p-6 transition-colors duration-500 hover:bg-paper md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.2em] text-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 bg-ink/15 transition-colors duration-500 group-hover:bg-signal" />
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl">{s.name}</h3>
              <p className="mt-2.5 max-w-[32ch] text-[14.5px] leading-relaxed text-ink/60">{s.note}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
