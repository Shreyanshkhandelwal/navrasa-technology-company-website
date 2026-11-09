import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useEnquiry } from "@/components/EnquiryContext";
import { Eyebrow, Lines, Reveal } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";

export type ServiceConfig = {
  path: string;
  title: string;
  description: string;
  heroLines: string[];
  intro: string;
  audience: string;
  useCases: string[];
  capabilities: string[];
  process: string[];
  technologies: string[];
  related: { label: string; path: string }[];
};

export function ServiceTemplate({ service }: { service: ServiceConfig }) {
  const { openEnquiry } = useEnquiry();
  useSEO({ title: service.title, description: service.description, path: service.path });
  return (
    <>
      <PageHero label={service.title.replace(/ \|.*$/, "")} lines={service.heroLines} intro={service.intro} />

      <section className="bg-paper text-ink"><div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <Reveal className="col-span-12 lg:col-span-7"><Eyebrow index="01" label="Built Around Your Product" tone="light"/><Lines lines={["Purposeful engineering", "for practical outcomes."]} className="display display-md mt-8 uppercase"/></Reveal>
          <Reveal className="col-span-12 lg:col-span-5 lg:pl-8"><p className="text-lg leading-relaxed text-ink/65">{service.audience}</p></Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 border-t border-l border-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {service.useCases.map((item, index) => <Reveal key={item} className="min-h-[160px] border-b border-r border-ink/12 p-6"><span className="font-mono text-[10px] tracking-[0.18em] text-signal">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-6 font-display text-xl font-semibold">{item}</h2></Reveal>)}
        </div>
      </div></section>

      <section className="grain bg-ink text-paper"><div className="container-x section-y">
        <Eyebrow index="02" label="Capabilities"/><Lines lines={["What we can build"]} className="display display-md mt-8 uppercase"/>
        <ul className="mt-14 grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((item, index) => <Reveal as="li" key={item} className="flex min-h-[96px] items-start gap-4 border-b border-r border-white/10 p-5"><Check className="mt-1 h-4 w-4 shrink-0 text-signal"/><div><span className="font-mono text-[9px] tracking-[0.16em] text-paper/40">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-[15px] leading-snug text-paper/90">{item}</h3></div></Reveal>)}
        </ul>
      </div></section>

      <section className="bg-paper text-ink"><div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8"><div className="col-span-12 lg:col-span-7"><Eyebrow index="03" label="Delivery Approach" tone="light"/><Lines lines={["A focused,", "transparent process."]} className="display display-md mt-8 uppercase"/></div><p className="col-span-12 max-w-[48ch] text-lg leading-relaxed text-ink/65 lg:col-span-5">Our work moves from product understanding and planning through design, engineering, validation and ongoing improvement.</p></div>
        <ol className="mt-10 border-t border-ink/12 md:mt-12">{service.process.map((step, index) => <Reveal as="li" key={step} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/12 py-5 md:grid-cols-[5rem_1fr] md:py-6"><span className="font-mono text-[10px] tracking-[0.16em] text-signal">{String(index + 1).padStart(2, "0")}</span><h3 className="font-display text-lg font-semibold md:text-xl">{step}</h3></Reveal>)}</ol>
      </div></section>

      <section className="border-t border-ink/10 bg-[#f0ede5] text-ink"><div className="container-x section-y">
        <Eyebrow index="04" label="Technology & Next Steps" tone="light"/><div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><Lines lines={["Explore the right", "technology approach."]} className="display display-md uppercase"/><p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink/65">Technology choices are shaped by product requirements, team context, integrations, performance needs and the roadmap ahead.</p><div className="mt-7 flex flex-wrap gap-2">{service.technologies.map((tech) => <span key={tech} className="border border-ink/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em]">{tech}</span>)}</div></div><button type="button" onClick={openEnquiry} className="inline-flex h-12 shrink-0 items-center gap-3 bg-ink px-6 text-sm text-paper">Discuss Your Project <ArrowRight className="h-4 w-4"/></button></div>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/12 pt-7">{service.related.map((item) => <Link key={item.path} to={item.path} className="border-b border-transparent text-sm font-medium transition-colors hover:border-signal hover:text-signal">{item.label} <span aria-hidden="true">↗</span></Link>)}</div>
      </div></section>
    </>
  );
}
