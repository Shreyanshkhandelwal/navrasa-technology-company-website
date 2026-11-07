import { manifesto } from "@/data/site";
import { Button, Eyebrow, Lines, Reveal } from "./ui";

export function Manifesto({ index = "01" }: { index?: string }) {
  return (
    <section id="manifesto" className="relative bg-paper text-ink">
      <div
        className="lines-light absolute inset-0 opacity-50 [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]"
        aria-hidden="true"
      />

      <div className="container-x section-y relative">
        <Eyebrow index={index} label="The Idea" tone="light" />

        <div className="mt-8 md:mt-10">
          <Lines
            as="h2"
            lines={["Technology should", "create possibilities."]}
            className="display display-md max-w-[16ch] text-ink"
          />
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8 md:mt-12 md:gap-x-8">
          <Reveal className="col-span-12 md:col-span-5 md:col-start-2">
            <p className="text-xl leading-snug tracking-[-0.01em] text-ink md:text-2xl">
              {manifesto.belief}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-4 md:col-start-8">
            <p className="text-base leading-relaxed text-ink/70 md:text-lg">
              {manifesto.intro}
            </p>

            <div className="mt-6">
              <Button href="/about" tone="light" variant="text">
                About NavRasa
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 flex items-center gap-4 md:mt-16 md:gap-6">
          <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
          <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-mute sm:text-[10.5px] sm:tracking-[0.22em]">
            Idea → Product → Launch → Scale
          </span>
          <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
