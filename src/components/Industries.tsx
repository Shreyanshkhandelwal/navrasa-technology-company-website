import { Bot, Building2, CalendarClock, CarFront, Store, UsersRound, type LucideIcon } from "lucide-react";
import { credentials, industries } from "@/data/site";
import { Eyebrow, Lines, Reveal } from "./ui";

const industryIcons: LucideIcon[] = [Store, CalendarClock, CarFront, Bot, Building2, UsersRound];

/** Compact proof strip — figures are kept conservative and verifiable. */
export function Credentials({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section
      className={dark ? "relative border-y border-white/10 bg-ink text-paper" : "relative border-y border-ink/12 bg-paper text-ink"}
    >
      <div className="container-x">
        <dl className={`grid auto-rows-fr grid-cols-2 border-l lg:grid-cols-4 ${dark ? "border-white/10" : "border-ink/12"}`}>
          {credentials.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 0.06}
              className={`h-full border-b border-r p-7 md:p-8 lg:border-b-0 ${
                i >= 2 ? "border-b-0" : ""
              } ${dark ? "border-white/10" : "border-ink/12"}`}
            >
              <dt className="sr-only">{c.label}</dt>
              <dd className="flex h-full flex-col">
                <span
                  className="flex min-h-12 items-start whitespace-nowrap text-4xl font-display font-semibold leading-none tracking-[-0.04em] md:min-h-[4.5rem] md:text-6xl"
                >
                  {c.value}
                </span>
                <span className={`mt-2.5 block text-[14px] font-medium ${dark ? "text-paper/85" : "text-ink/85"}`}>
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
    <section id="industries" className="relative scroll-mt-24 bg-paper-2 text-ink">
      <div className="container-x section-y">
        <div className="grid grid-cols-12 items-end gap-x-4 gap-y-7 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="Sectors" tone="light" />
            <Lines lines={["Sectors we", "build for."]} className="display display-md mt-8 uppercase text-ink md:mt-10" />
          </div>
          <Reveal className="col-span-12 lg:col-span-4 lg:pb-1">
            <p className="max-w-[38ch] text-base leading-relaxed text-[#555555] md:text-lg">
              We work across industries. What stays constant is the approach: understand the operation first, then
              build the software around it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {industries.map((sector, i) => {
            const Icon = industryIcons[i];
            return (
              <Reveal
                as="li"
                key={sector.name}
                delay={(i % 3) * 0.05}
                className="group relative flex min-h-[230px] flex-col overflow-hidden border border-ink/12 bg-paper p-7 transition-[border-color,transform,background-color] duration-500 ease-[var(--ease-expo)] hover:-translate-y-1 hover:border-signal/50 hover:bg-[#fffdfa] md:min-h-[260px] md:p-8 lg:min-h-[270px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center border border-ink/10 text-[#555555] transition-colors duration-500 group-hover:border-signal/30 group-hover:bg-signal/[0.06] group-hover:text-signal">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-[26px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[28px] lg:text-[30px]">{sector.name}</h3>
                <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.55] text-[#555555]">{sector.note}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
