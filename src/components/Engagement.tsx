import { Check } from "lucide-react";
import { assurances, engagements, process } from "@/data/site";
import { Button, Eyebrow, Lines, Reveal } from "./ui";

/* ---------------------------- ENGAGEMENT MODELS --------------------------- */
export function Engagement({ index = "01" }: { index?: string }) {
  return (
    <section id="engagement" className="relative bg-paper text-ink">
      <div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="How We Engage" tone="light" />
            <Lines lines={["Three ways", "to work with us."]} className="display display-md mt-10 uppercase text-ink" />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className="max-w-[38ch] text-base leading-relaxed text-ink/65 md:text-lg">
              Pick the arrangement that matches how settled your requirements are. We will tell you honestly which one
              fits your project.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px border border-ink/12 bg-ink/12 md:mt-16 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal as="li" key={e.name} delay={i * 0.07} className="flex flex-col justify-between bg-paper p-7 md:p-9">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-mute">0{i + 1}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">{e.best}</span>
                </div>
                <h3 className="mt-7 font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{e.name}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">{e.text}</p>
              </div>
              <ul className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-6">
                {e.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-[14.5px] text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={2} />
                    {inc}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        {/* assurances */}
        <div className="mt-14 md:mt-18">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              What every engagement includes
            </h3>
            <p className="max-w-[40ch] text-[15px] leading-relaxed text-ink/60">
              The commercial basics, agreed in writing before work starts.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 border-l border-t border-ink/12 sm:grid-cols-2 lg:grid-cols-3">
            {assurances.map((a, i) => (
              <Reveal as="li" key={a.title} delay={(i % 3) * 0.05} className="border-b border-r border-ink/12 p-6 md:p-7">
                <Check className="h-4 w-4 text-signal" strokeWidth={2} />
                <h4 className="mt-5 text-[17px] font-semibold tracking-[-0.01em]">{a.title}</h4>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/60">{a.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- PROCESS -------------------------------- */
export function Process({ index = "02" }: { index?: string }) {
  return (
    <section id="process" className="grain relative bg-ink text-paper">
      <div className="container-x section-y relative">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="How We Work" />
            <Lines
              lines={["From first call", "to live product."]}
              className="display display-md mt-10 uppercase text-paper"
            />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className="max-w-[38ch] text-base leading-relaxed text-paper/60 md:text-lg">
              A predictable process, so you always know what is happening, what comes next and what you will receive.
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 border-t border-white/10 md:mt-16">
          {process.map((s) => (
            <Reveal as="li" key={s.n} className="group grid grid-cols-12 gap-x-4 border-b border-white/10 py-7 md:gap-x-8 md:py-9">
              <span className="col-span-2 font-mono text-[11px] tracking-[0.2em] text-mute-2 sm:col-span-1">{s.n}</span>
              <h3 className="col-span-10 font-display text-2xl font-semibold tracking-[-0.03em] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-2 sm:col-span-4 md:text-3xl">
                {s.title}
              </h3>
              <p className="col-span-12 mt-3 text-[15px] leading-relaxed text-paper/60 sm:col-span-4 sm:mt-0 lg:col-span-4">
                {s.text}
              </p>
              <span className="col-span-12 mt-3 flex items-start gap-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-mute-2 sm:col-span-3 sm:mt-0 sm:justify-end sm:text-right">
                <span className="mt-1 h-1 w-1 shrink-0 bg-signal sm:order-2 sm:ml-2" aria-hidden="true" />
                <span className="sm:order-1">{s.out}</span>
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[52ch] text-base text-paper/55">
            Every stage has a named owner on our side and a clear deliverable on yours.
          </p>
          <Button href="/contact" tone="dark" variant="outline">
            Book a discovery call
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
