import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEnquiry } from "@/components/EnquiryContext";
import { Eyebrow, Reveal } from "@/components/ui";
import { caseStudyProjects } from "@/data/projects";
import { startupPackages } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const challenges = [
  {
    title: "Unclear product direction",
    text: "You have an idea but need help defining the features, user journeys and technical roadmap.",
  },
  {
    title: "Limited development resources",
    text: "Hiring a complete in-house engineering team before product validation can be expensive.",
  },
  {
    title: "Slow time to market",
    text: "Long development cycles can delay feedback and product validation.",
  },
  {
    title: "Technology that cannot scale",
    text: "A quick build without proper architecture can create expensive problems later.",
  },
  {
    title: "Disconnected execution",
    text: "Design, development, backend, testing and deployment need to work together.",
  },
];

const comparisonRows = [
  ["Product discovery", "Included", "Detailed", "Advanced"],
  ["UI/UX design", "Agreed product scope", "Complete design system", "Comprehensive design system"],
  ["Web application", "Responsive MVP OR one mobile platform", "Web app + cross-platform mobile OR equivalent scope", "Multi-module web and mobile, agreed scope"],
  ["Mobile application", "One mobile platform, if selected", "Cross-platform mobile, or equivalent scope", "Multi-module mobile, agreed scope"],
  ["Backend development", "Backend and database setup", "Frontend and backend", "Advanced backend and database"],
  ["Admin dashboard", "One basic admin panel", "Custom admin dashboard", "Advanced operational dashboards"],
  ["Authentication", "Registration and authentication", "Authentication and role-based access", "Role-based access and permissions"],
  ["Payment integration", "Not specified", "Where applicable", "Where applicable"],
  ["Third-party integrations", "1 standard integration", "Up to 3 standard integrations", "Up to 4 standard integrations"],
  ["Analytics", "Not specified", "Basic product tracking", "Not specified"],
  ["Deployment", "Basic testing and deployment", "Testing and deployment", "Production configuration and deployment"],
  ["Documentation", "Source code handover", "Documentation and source code", "Technical documentation and source code"],
  ["Post-launch bug-fix support", "30 days", "60 days", "90 days"],
];

const capabilities = [
  {
    title: "MVP Development",
    text: "Transform an idea into a working first version with the essential features needed to validate your product.",
  },
  {
    title: "Mobile App Development",
    text: "Build Android and iOS applications using Flutter or React Native, with user-focused experiences and connected backend systems.",
  },
  {
    title: "Web Application Development",
    text: "Develop responsive, high-performance web products, dashboards, SaaS platforms and customer portals.",
  },
  {
    title: "SaaS Product Development",
    text: "Build subscription-ready digital products with authentication, dashboards, billing workflows and scalable backend architecture.",
  },
  {
    title: "AI-Powered Product Development",
    text: "Integrate AI-powered capabilities, LLM workflows, intelligent automation and product-specific AI features where they provide real value.",
  },
  {
    title: "Custom Software Development",
    text: "Develop business platforms, management systems, workflow applications and custom software tailored to operational needs.",
  },
  {
    title: "UI/UX & Product Design",
    text: "Define user journeys, wireframes, prototypes and production-ready interfaces before development.",
  },
  {
    title: "Backend & API Engineering",
    text: "Build databases, secure APIs, business logic, integrations and the technical foundation behind digital products.",
  },
];

const processSteps = [
  {
    title: "Discovery & Product Understanding",
    text: "We understand your idea, target users, business model, goals and technical requirements.",
  },
  {
    title: "Product Scope & Roadmap",
    text: "We define the MVP scope, core features, priorities, architecture and development milestones.",
  },
  {
    title: "UI/UX & Prototyping",
    text: "We create wireframes, user journeys and high-fidelity designs so you can see the product before development.",
  },
  {
    title: "Engineering & Development",
    text: "Our team builds the frontend, backend, database, APIs and integrations through structured development cycles.",
  },
  {
    title: "Testing & Launch",
    text: "We test the agreed functionality, resolve bugs, configure production deployment and prepare your product for launch.",
  },
  {
    title: "Post-Launch Support",
    text: "We provide the agreed support period and help you identify the next product improvements.",
  },
];

const reasons = [
  {
    title: "Founder-Focused Execution",
    text: "We understand that startup resources are limited. We prioritise the essential features that move your product forward.",
  },
  {
    title: "One Team, Complete Execution",
    text: "Product planning, UI/UX, frontend, backend, integrations, testing and deployment under one development partnership.",
  },
  {
    title: "Technology That Can Evolve",
    text: "We focus on maintainable architecture and sensible technical decisions so the product can evolve as requirements grow.",
  },
  {
    title: "Transparent Development",
    text: "Clear scope, milestones, communication and deliverables. You know what is being built and what comes next.",
  },
];

const technologyGroups = [
  { label: "Frontend", technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", technologies: ["Node.js", "Python", "FastAPI", "Django"] },
  { label: "Mobile", technologies: ["Flutter", "React Native"] },
  { label: "Database", technologies: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "AI", technologies: ["OpenAI APIs", "LangChain", "AI integrations"] },
  { label: "Cloud & Deployment", technologies: ["AWS", "Vercel", "Railway", "Docker", "Cloudflare"] },
];

const showcaseIds = [
  "book-my-mechanik",
  "velvet-chat",
  "mediforce",
  "swap-street",
  "orange-air",
  "taso",
  "sports-wizards",
  "swachh-railways",
];

const showcaseProjects = showcaseIds.map((id) => {
  const project = caseStudyProjects.find((item) => item.id === id);
  if (!project) throw new Error(`Startup showcase project "${id}" is missing from portfolio data.`);
  return project;
});

const questions = [
  {
    question: "I only have an idea. Can NavRasa help me build it?",
    answer:
      "Yes. We can help you define the initial product scope, prioritise essential features, design user journeys and turn your idea into a functional MVP.",
  },
  {
    question: "What is included in the ₹1.5 lakh package?",
    answer:
      "The Launch package includes product discovery, UI/UX, a web MVP or one mobile application platform, backend, database, basic admin panel, one standard integration, deployment and 30-day post-launch bug-fix support, within the agreed scope.",
  },
  {
    question: "Can I build both a website and mobile app?",
    answer:
      "Yes. The Growth and Scale packages can accommodate broader web and mobile product requirements. The exact scope is finalised based on the product's complexity and requirements.",
  },
  {
    question: "How long does MVP development take?",
    answer:
      "A typical Launch engagement may take 4–6 weeks. Growth may take 8–10 weeks and Scale 10–14 weeks. Actual timelines depend on scope, integrations, feedback and external dependencies.",
  },
  {
    question: "Will I own the source code?",
    answer:
      "The project agreement will define intellectual property ownership and handover. The agreed deliverable source code will be handed over according to the contract and payment terms. Third-party libraries and services remain subject to their respective licences.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. The packages include 30, 60 and 90 days of post-launch bug-fix support respectively. New features, additional scope, hosting and third-party service charges are handled separately.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. We can plan additional features, modules and product improvements through a separate scope and estimate.",
  },
  {
    question: "Do you work with international founders?",
    answer:
      "Yes. We can work with founders and businesses across India and international markets, subject to project requirements and delivery arrangements.",
  },
  {
    question: "Are hosting and third-party API costs included?",
    answer:
      "Cloud hosting, domain registration, paid API usage, third-party licences, app-store accounts and other external service fees are not included unless explicitly stated in the proposal.",
  },
  {
    question: "Do you take equity instead of payment?",
    answer:
      "Our standard engagement is project-based. Any alternative commercial arrangement would need separate discussion and written agreement.",
  },
];

const actionClass =
  "inline-flex min-h-12 items-center justify-center gap-3 bg-signal px-6 text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#d94d1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

function ProductEcosystemVisual() {
  return (
    <div
      role="img"
      aria-label="Illustrative product ecosystem showing mobile, web, dashboard and backend layers; not a client screenshot"
      className="relative mx-auto aspect-[1.05] w-full max-w-[620px] overflow-hidden border border-white/10 bg-[#151517] p-4 sm:aspect-[1.25] sm:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_36%,rgba(255,106,53,0.12),transparent_55%)]" aria-hidden="true" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/70">Product ecosystem</span>
        <span className="border border-white/10 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-paper/40">Illustrative</span>
      </div>

      <div className="absolute bottom-[18%] left-[5%] top-[23%] w-[25%] max-w-[132px] rounded-[22px] border-[5px] border-[#36363a] bg-[#080809] p-1.5 shadow-2xl">
        <div className="flex h-full flex-col rounded-[15px] bg-[#f5f2ec] p-2.5">
          <div className="mx-auto h-1 w-8 rounded-full bg-ink/25" />
          <span className="mt-4 font-mono text-[6px] uppercase tracking-[0.1em] text-ink/45">Mobile product</span>
          <div className="mt-3 h-12 rounded-sm bg-signal/15" />
          <div className="mt-2 h-2 w-3/4 bg-ink/15" />
          <div className="mt-1.5 h-2 w-1/2 bg-ink/10" />
          <div className="mt-auto h-6 rounded-sm bg-ink" />
        </div>
      </div>

      <div className="absolute bottom-[26%] left-[23%] right-[4%] top-[19%] overflow-hidden rounded-md border border-white/15 bg-[#f5f2ec] shadow-2xl sm:left-[26%]">
        <div className="flex h-7 items-center gap-1.5 border-b border-ink/10 px-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e6a49a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#e6c987]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#a8c9ae]" />
          <span className="ml-2 h-2 w-1/3 rounded-full bg-ink/10" />
        </div>
        <div className="grid h-[calc(100%-28px)] grid-cols-[25%_1fr]">
          <div className="space-y-2 border-r border-ink/10 p-2">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className={`block h-1.5 ${item === 0 ? "w-4/5 bg-signal/60" : "w-3/5 bg-ink/10"}`} />
            ))}
          </div>
          <div className="p-3 sm:p-4">
            <span className="block h-2 w-2/5 bg-ink/50" />
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((item) => (
                <span key={item} className="h-8 border border-ink/10 bg-white sm:h-12" />
              ))}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <span className="h-9 bg-ink/5 sm:h-14" />
              <span className="h-9 bg-signal/10 sm:h-14" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[6%] right-[4%] w-[53%] rounded-sm border border-white/15 bg-[#222225] p-3 shadow-xl sm:w-[48%]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-paper/55">Backend + APIs</span>
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((item) => (
            <span key={item} className="h-5 border border-white/10 bg-white/[0.04] sm:h-7" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[11%] left-[8%] hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.1em] text-paper/40 sm:flex">
        <span className="h-px w-8 bg-signal/70" />
        Product layers, connected
      </div>
    </div>
  );
}

function PackageCard({ packageInfo, index }: { packageInfo: (typeof startupPackages)[number]; index: number }) {
  const { openEnquiry } = useEnquiry();
  const featured = packageInfo.id === "growth";

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <article
        className={`relative flex h-full flex-col border p-6 sm:p-8 ${
          featured
            ? "border-signal bg-[#201916] shadow-[0_20px_70px_rgba(255,106,53,0.09)]"
            : "border-white/12 bg-[#171719]"
        }`}
      >
        {packageInfo.badge && (
          <span className="absolute right-5 top-5 bg-signal px-3 py-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
            {packageInfo.badge}
          </span>
        )}
        <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-paper/45">{packageInfo.audience}</p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-paper">{packageInfo.label}</h3>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">{packageInfo.price}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/45">/ one-time</span>
        </div>
        <h4 className="mt-6 font-display text-xl font-semibold leading-tight tracking-[-0.025em] text-paper">{packageInfo.headline}</h4>
        <p className="mt-3 min-h-[6rem] text-sm leading-relaxed text-paper/60">{packageInfo.description}</p>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/45">Included deliverables</p>
          <ul className="mt-4 space-y-3">
            {packageInfo.deliverables.map((item) => (
              <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-paper/75">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/45">Ideal for</p>
          <p className="mt-2 text-[13px] leading-relaxed text-paper/65">{packageInfo.idealFor}</p>
        </div>
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-[11px] text-paper/50">
          <span>Indicative timeline</span>
          <span className="font-mono text-paper/80">{packageInfo.timeline}</span>
        </div>
        <button
          type="button"
          onClick={() =>
            openEnquiry({
              selectedPackage: packageInfo.enquiryLabel,
              source: "/solutions#packages",
            })
          }
          className={`${actionClass} mt-7 w-full`}
        >
          {packageInfo.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </article>
    </Reveal>
  );
}

function ProjectPreview({ name }: { name: string }) {
  return (
    <div
      role="img"
      aria-label={`Neutral illustrative preview for ${name}; no authentic project screenshot is available`}
      className="relative aspect-[1.7] overflow-hidden border border-white/10 bg-[#171719] p-4"
    >
      <span className="absolute right-3 top-3 border border-white/10 bg-ink/70 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-paper/50">
        Neutral preview
      </span>
      <div className="mt-7 flex h-[calc(100%-1.75rem)] gap-2">
        <div className="w-[18%] space-y-2 border border-white/10 p-2">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className={`block h-1.5 ${item === 0 ? "w-4/5 bg-signal/70" : "w-3/5 bg-white/10"}`} />
          ))}
        </div>
        <div className="flex-1 border border-white/10 bg-white/[0.025] p-3">
          <span className="block h-2 w-2/5 bg-white/20" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <span key={item} className="aspect-[1.5] border border-white/10 bg-white/[0.035]" />
            ))}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <span className="h-7 bg-white/[0.04]" />
            <span className="h-7 bg-signal/10" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-2 left-4 font-mono text-[7px] uppercase tracking-[0.1em] text-paper/35">
        Conceptual interface · not a client screenshot
      </span>
    </div>
  );
}

export function SolutionsPage() {
  const { openEnquiry } = useEnquiry();
  const reduceMotion = useReducedMotion();

  useSEO({
    title: "Startup MVP Development Company | Build Your Product with NavRasa",
    description:
      "Turn your startup idea into a market-ready digital product. NavRasa builds MVPs, mobile apps, SaaS platforms and custom software with transparent startup packages.",
    path: "/solutions",
  });

  return (
    <>
      <section id="startups" className="grain relative isolate overflow-hidden bg-ink text-paper">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_78%_10%,rgba(255,106,53,0.12),transparent_72%)]"
          aria-hidden="true"
        />
        <div className="container-x relative pb-20 pt-32 md:pb-28 md:pt-40">
          <nav aria-label="Breadcrumb" className="mb-9 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/45">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="transition-colors hover:text-paper">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-paper/75">For Startups</li>
            </ol>
          </nav>
          <div className="grid grid-cols-12 items-center gap-x-6 gap-y-12 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-6">
              <Eyebrow label="BUILT FOR FOUNDERS. ENGINEERED FOR GROWTH." />
              <h1 className="mt-7 max-w-[12ch] font-display text-[clamp(3.2rem,7vw,6.6rem)] font-semibold leading-[0.91] tracking-[-0.065em]">
                From Startup Idea <span className="text-paper/55">to Scalable Product.</span>
              </h1>
              <p className="mt-7 font-display text-xl font-semibold tracking-[-0.025em] text-paper/90 sm:text-2xl">
                You bring the vision. We bring the product engineering.
              </p>
              <p className="mt-4 max-w-[57ch] text-sm leading-relaxed text-paper/60 sm:text-base">
                Whether you&apos;re validating an idea, launching your first MVP or building a product ready for growth,
                NavRasa helps turn your vision into a working digital product — with the right strategy, design and technology.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openEnquiry({ source: "/solutions#hero" })}
                  className={actionClass}
                >
                  BUILD MY MVP <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href="#packages"
                  className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 px-6 text-xs font-semibold tracking-[0.08em] text-paper transition-colors hover:border-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  EXPLORE STARTUP PACKAGES <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <ul className="mt-9 grid gap-x-5 gap-y-3 text-xs text-paper/65 sm:grid-cols-2">
                {[
                  "Transparent project pricing",
                  "Dedicated product development team",
                  "UI/UX, frontend, backend and deployment",
                  "Built with scalability in mind",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <ProductEcosystemVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20 text-ink md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow index="01" label="THE STARTUP CHALLENGE" tone="light" />
            <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Great Ideas Deserve More Than Just a Prototype.
            </h2>
            <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-ink/65 md:text-base">
              Every startup begins with an idea. Turning that idea into a reliable product takes the right team,
              technology and execution. Founders often face the same challenges:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={index * 0.04}>
                <article className="h-full border border-ink/10 bg-paper p-5 sm:p-6">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-signal">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight tracking-[-0.03em]">{challenge.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink/60">{challenge.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-signal pl-4 font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl">
            NavRasa brings these capabilities together under one product development partnership.
          </p>
        </div>
      </section>

      <section id="packages" className="scroll-mt-20 bg-[#101012] py-20 text-paper md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow index="02" label="STARTUP DEVELOPMENT PACKAGES" />
            <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-[13ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                Clear Scope. One-Time Project Pricing.
              </h2>
              <p className="max-w-[42ch] text-sm leading-relaxed text-paper/55 md:text-base">
                Choose a practical starting point for the product you&apos;re building. Every package is defined by an agreed scope.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
            {startupPackages.map((packageInfo, index) => (
              <PackageCard key={packageInfo.id} packageInfo={packageInfo} index={index} />
            ))}
          </div>
          <p className="mt-7 border border-white/10 bg-white/[0.025] p-4 text-xs leading-relaxed text-paper/60 sm:p-5">
            Every product is different. Final scope, deliverables and timeline are confirmed before development begins.
            Hosting and cloud consumption, domains, paid third-party APIs, external licences, app-store accounts,
            major scope changes, features beyond the agreed deliverables and ongoing maintenance after included support
            are excluded unless explicitly included in the signed scope.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow index="03" label="PACKAGE COMPARISON" tone="light" />
            <h2 className="mt-5 max-w-[17ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Choose the Right Starting Point for Your Product.
            </h2>
          </Reveal>
          <div className="mt-9 overflow-x-auto border border-ink/10">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of Launch, Growth and Scale startup development packages</caption>
              <thead className="bg-ink text-paper">
                <tr>
                  <th scope="col" className="w-[28%] px-4 py-4 font-mono text-[9px] uppercase tracking-[0.13em]">Capability</th>
                  {startupPackages.map((packageInfo) => (
                    <th key={packageInfo.id} scope="col" className="px-4 py-4 font-mono text-[9px] uppercase tracking-[0.13em]">
                      {packageInfo.label}
                      <span className="mt-1 block font-sans text-xs font-medium normal-case tracking-normal text-paper/60">{packageInfo.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, ...values], rowIndex) => (
                  <tr key={feature} className={rowIndex % 2 === 0 ? "bg-paper" : "bg-paper-2"}>
                    <th scope="row" className="border-t border-ink/10 px-4 py-3.5 font-medium text-ink">{feature}</th>
                    {values.map((value, valueIndex) => (
                      <td key={`${feature}-${valueIndex}`} className="border-t border-ink/10 px-4 py-3.5 leading-relaxed text-ink/65">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink/50">“Not specified” means the item is not listed as a package deliverable. Final inclusions are confirmed in the written scope.</p>
        </div>
      </section>

      <section className="bg-[#efeee9] py-20 text-ink md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow index="04" label="PRODUCT ENGINEERING CAPABILITIES" tone="light" />
            <h2 className="mt-5 max-w-[15ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Everything You Need to Build Your Digital Product.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={(index % 4) * 0.035}>
                <article className="h-full bg-paper-2 p-5 sm:p-6">
                  <span className="font-mono text-[9px] tracking-[0.16em] text-signal">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight tracking-[-0.03em]">{capability.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink/60">{capability.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow index="05" label="OUR PRODUCT DEVELOPMENT PROCESS" />
            <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              From First Conversation to Product Launch.
            </h2>
          </Reveal>
          <div className="relative mt-12">
            <div className="absolute left-[8.33%] right-[8.33%] top-[15px] hidden h-px bg-white/10 lg:block" aria-hidden="true">
              <motion.div
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-full origin-left bg-signal"
              />
            </div>
            <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.045}>
                  <li className="relative h-full border-t border-white/10 pt-5 lg:border-0 lg:pt-0">
                    <span className="relative z-10 hidden h-[31px] w-[31px] items-center justify-center border border-signal bg-ink font-mono text-[9px] text-paper lg:flex">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.16em] text-signal lg:mt-5 lg:block">STEP 0{index + 1}</span>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-paper/55">{step.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20 text-ink md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow index="06" label="WHY STARTUPS CHOOSE NAVRASA" tone="light" />
            <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Your Technology Team, Without Building One From Scratch.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={(index % 2) * 0.06}>
                <article className="flex h-full gap-5 border border-ink/10 bg-paper p-5 sm:p-7">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-signal">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{reason.title}</h3>
                    <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-ink/60">{reason.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101012] py-20 text-paper md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="07" label="OUR TECHNOLOGY STACK" />
              <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-5xl">
                Built With Modern, Production-Ready Technologies.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {technologyGroups.map((group, index) => (
              <Reveal key={group.label} delay={(index % 2) * 0.04}>
                <article className="h-full border border-white/10 bg-white/[0.025] p-5">
                  <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/45">{group.label}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <li key={technology} className="border border-white/10 px-2.5 py-1.5 text-[11px] text-paper/75">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <Eyebrow index="08" label="STARTUP PRODUCT SHOWCASE" tone="light" />
              <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                Products We&apos;ve Helped Bring to Life.
              </h2>
            </Reveal>
            <Link
              to="/work"
              className="inline-flex w-fit items-center gap-2 border-b border-ink/25 pb-2 text-xs font-semibold tracking-[0.08em] transition-colors hover:border-signal hover:text-signal"
            >
              EXPLORE OUR WORK <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-5 max-w-[65ch] text-xs leading-relaxed text-ink/55">
            Selected projects across industries demonstrate relevant product engineering experience; this showcase does not imply that every project was a funded startup.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProjects.map((project, index) => (
              <Reveal key={project.id} delay={(index % 4) * 0.035}>
                <article className="group h-full overflow-hidden border border-ink/10 bg-paper-2 transition-shadow hover:shadow-[0_14px_38px_rgba(17,17,17,0.09)]">
                  <ProjectPreview name={project.name} />
                  <div className="p-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-ink/45">
                      {project.industry ?? project.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em]">
                      <Link to={`/work/${project.slug}`} className="outline-offset-4 transition-colors group-hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal">
                        {project.name}
                      </Link>
                    </h3>
                    <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-ink/60">
                      {project.portfolioDescription ?? project.overview ?? project.headline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.platforms.map((platform) => (
                        <span key={platform} className="border border-ink/10 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.07em] text-ink/55">
                          {platform}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-ink/10 pt-4 text-[10px] font-semibold">
                      <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 hover:text-signal">
                        CASE STUDY <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                      {project.websiteUrl && (
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink/55 hover:text-ink">
                          LIVE PRODUCT <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efeee9] py-20 text-ink md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow index="09" label="FREQUENTLY ASKED QUESTIONS" tone="light" />
            <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Common Questions.
            </h2>
          </Reveal>
          <div className="mt-9 border-t border-ink/15">
            {questions.map((item, index) => (
              <details key={item.question} className="group border-b border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-lg font-semibold tracking-[-0.025em] marker:hidden sm:py-6 sm:text-xl">
                  <span className="flex items-start gap-4">
                    <span className="pt-1 font-mono text-[9px] tracking-[0.12em] text-signal">0{index + 1}</span>
                    {item.question}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-ink/45 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-[72ch] pb-6 pl-9 text-sm leading-relaxed text-ink/65 sm:pl-10">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(48%_50%_at_82%_50%,rgba(255,106,53,0.12),transparent_72%)]" aria-hidden="true" />
        <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow index="10" label="YOUR IDEA. OUR ENGINEERING." />
              <h2 className="mt-6 max-w-[12ch] font-display text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-7xl">
                Your Next Big Product Starts Here.
              </h2>
              <p className="mt-6 max-w-[59ch] text-base leading-relaxed text-paper/65 md:text-lg">
                You don&apos;t need a complete technical team to get started. You need the right product partner, a clear roadmap and a team that knows how to execute.
              </p>
              <p className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-paper/90">Let&apos;s discuss what you&apos;re building.</p>
              <p className="mt-4 max-w-[58ch] text-xs leading-relaxed text-paper/45">
                Tell us your idea, target users and goals. We&apos;ll help you identify the right starting point.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <button
              type="button"
              onClick={() => openEnquiry({ source: "/solutions#final-cta" })}
              className={actionClass}
            >
              LET&apos;S BUILD YOUR MVP <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-xs font-semibold tracking-[0.08em] text-paper transition-colors hover:border-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              BOOK A STRATEGY CALL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
