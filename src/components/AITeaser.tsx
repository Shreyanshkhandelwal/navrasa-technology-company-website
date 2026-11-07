import { ai } from "@/data/site";
import { SignalField } from "./AISection";
import { Button, Eyebrow, Lines, Reveal } from "./ui";

/* Home teaser for the AI practice — the full section lives on /what-we-build#ai. */
export function AITeaser({ index = "04" }: { index?: string }) {
  return (
    <section id="ai-teaser" className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div
        className="absolute inset-y-0 right-0 -z-10 w-full opacity-[0.22] [mask-image:linear-gradient(90deg,transparent_25%,#000_70%)] lg:w-[70%]"
        aria-hidden="true"
      >
        <SignalField />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_10%_20%,rgba(255,77,18,0.07),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-x relative pb-14 pt-14 md:pb-18 md:pt-18 lg:pb-24 lg:pt-24">
        <Eyebrow index={index} label="Applied Intelligence" />
        <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Lines
              lines={["Intelligence,", "built into the product."]}
              className="display display-md uppercase text-paper"
            />
          </div>
          <Reveal className="col-span-12 flex flex-col justify-end lg:col-span-4">
            <p className="text-lg leading-snug tracking-[-0.01em] text-paper md:text-xl">{ai.lead}</p>
            <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-paper/55">{ai.text}</p>
            <div className="mt-8">
              <Button href="/what-we-build#ai" tone="dark" variant="outline">
                Explore AI systems
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mask-fade-x relative overflow-hidden border-t border-white/10 py-5">
        <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: "42s" }}>
          {[0, 1].map((half) => (
            <div key={half} className="flex gap-3 pr-3" aria-hidden={half === 1}>
              {ai.capabilities.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-3 border border-white/10 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/70"
                >
                  <span className="h-1 w-1 bg-signal" aria-hidden="true" />
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
