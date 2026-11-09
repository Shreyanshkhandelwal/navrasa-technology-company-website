import { company, finalCta } from "@/data/site";
import { SocialList } from "./Social";
import { Button, Eyebrow, Lines, Reveal } from "./ui";
import { Ecosystem } from "./Ecosystem";
import { EnquiryForm } from "./EnquiryForm";

/* ------------------------------- FINAL CTA -------------------------------- */
export function FinalCTA({
  tone = "dark",
  index = "16",
  compact = false,
}: {
  tone?: "dark" | "light";
  index?: string;
  compact?: boolean;
}) {
  if (tone === "light") {
    return (
      <section id="cta" className="relative bg-paper text-ink">
        <div
          className="lines-light absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,transparent,#000_40%,#000_60%,transparent)]"
          aria-hidden="true"
        />
        <div className="container-x section-y relative grid grid-cols-12 items-end gap-x-4 gap-y-10 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow index={index} label="Let's Build" tone="light" />
            <Lines
              lines={compact ? ["Have a big idea?"] : ["Have a", "big idea?"]}
              className={`display ${compact ? "display-md" : "display-lg"} mt-8 uppercase text-ink`}
            />
          </div>
          <Reveal delay={0.15} className="col-span-12 lg:col-span-5 lg:pl-8">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-4xl">{finalCta.text}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Button href={finalCta.primary.href} tone="light" size="lg">
                {finalCta.primary.label}
              </Button>
              {!compact && (
                <Button href={finalCta.secondary.href} tone="light" variant="text">
                  {finalCta.secondary.label}
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden="true">
        <Ecosystem dim className="mx-auto h-full w-full max-w-[1100px]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,transparent_30%,rgba(10,10,11,0.9)_75%)]" aria-hidden="true" />
      <div className="container-x relative flex min-h-[72svh] flex-col items-center justify-center py-24 text-center">
        <Reveal>
          <Eyebrow index={index} label="Let's Build" className="justify-center" />
        </Reveal>
        <Lines lines={["Have a", "big idea?"]} className="display display-lg mt-10 uppercase text-paper" lineClassName="text-center" />
        <Reveal delay={0.15} className="mt-10">
          <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-paper/90 md:text-4xl">{finalCta.text}</p>
        </Reveal>
        <Reveal delay={0.25} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          <Button href={finalCta.primary.href} tone="dark" size="lg">
            {finalCta.primary.label}
          </Button>
          <Button href={finalCta.secondary.href} tone="dark" variant="text">
            {finalCta.secondary.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- FORM ----------------------------------- */
export function Contact() {
  return (
    <section id="contact" className="relative bg-paper text-ink">
      <div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow label="Project Inquiry" tone="light" />
            <Lines lines={["Start the", "conversation."]} className="display display-sm mt-8 uppercase text-ink" />
            <Reveal className="mt-8"><p className="max-w-[40ch] text-lg leading-relaxed text-ink/70">Tell us what you're building and where you are. Founders, operators and teams — every enquiry is read by the people who would actually build it.</p></Reveal>
            <Reveal delay={0.1} className="mt-12">
              <dl className="border-t border-ink/10">
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4"><dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Email</dt><dd className="col-span-8 xl:col-span-9"><a href={`mailto:${company.email}`} className="text-[15px] text-ink underline-offset-4 hover:underline">{company.email}</a></dd></div>
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4"><dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Phone</dt><dd className="col-span-8 flex flex-col gap-1 xl:col-span-9">{company.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="text-[15px] text-ink underline-offset-4 hover:underline">{p}</a>)}</dd></div>
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4"><dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Office</dt><dd className="col-span-8 text-[15px] text-ink xl:col-span-9">{company.location}</dd></div>
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4"><dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Hours</dt><dd className="col-span-8 text-[15px] text-ink xl:col-span-9">{company.hours}</dd></div>
              </dl>
              <p className="mt-8 flex items-start gap-3 border border-ink/12 bg-paper-2 p-4 text-[14px] leading-relaxed text-ink/70"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />{company.responseTime}. Every enquiry is treated as confidential, and we sign an NDA on request.</p>
              <div className="mt-10"><p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">Elsewhere</p><SocialList tone="light" className="mt-4" /></div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:pl-8"><Reveal><EnquiryForm mode="contact" /></Reveal></div>
        </div>
      </div>
    </section>
  );
}
