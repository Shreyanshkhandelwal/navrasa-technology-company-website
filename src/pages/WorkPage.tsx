import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Button, Eyebrow, Reveal } from "@/components/ui";
import { Testimonials } from "@/components/Testimonials";
import { caseStudyProjects, portfolioOnlyProjects, type ProjectCategory } from "@/data/projects";
import { useSEO } from "@/hooks/useSEO";
import { trackEvent } from "@/utils/analytics";

type PortfolioProject = {
  id: string;
  name: string;
  categories: ProjectCategory[];
  sector?: string;
  industry?: string;
  description?: string;
  headline?: string;
  overview?: string;
  challenge?: string;
  technologies?: string[];
  platforms: string[];
  websiteUrl?: string;
  liveProductLabel?: string;
  playStorePackage?: string;
  slug?: string;
  status?: "in-development";
};

const allProjects: PortfolioProject[] = [
  ...caseStudyProjects.map((project) => ({
    id: project.id,
    name: project.name,
    categories: project.categories,
    sector: project.industry ?? project.category,
    industry: project.industry,
    description: project.portfolioDescription,
    headline: project.headline,
    overview: project.overview,
    challenge: project.challenge,
    technologies: project.technologies,
    platforms: project.platforms,
    websiteUrl: project.websiteUrl,
    playStorePackage: project.playStorePackage,
    slug: project.slug,
  })),
  ...portfolioOnlyProjects.map((project) => ({
    ...project,
    description: project.portfolioDescription,
    websiteUrl: project.websiteUrl,
    status: project.status,
  })),
];

const mobileProjects = allProjects.filter((project) =>
  project.categories.includes("Mobile Applications")
);
const websiteProjects = allProjects.filter(
  (project) =>
    project.categories.includes("Web Development") ||
    (project.categories.includes("E-commerce") && Boolean(project.websiteUrl))
);
const softwareProjects = allProjects.filter((project) =>
  project.categories.includes("Business Platforms")
);

const mobileAccents: Record<string, string> = {
  "book-my-mechanik": "#F28B42",
  "swachh-railways": "#D6AA54",
  "velvet-chat": "#B98BDA",
  "swap-street": "#72B898",
  taso: "#75A8D8",
  "sports-wizards": "#D47D7D",
};

function getDescription(project: PortfolioProject) {
  return (
    project.description ??
    project.headline ??
    project.overview ??
    "Project details are not documented in the approved portfolio data."
  );
}

function getWebsiteHost(project: PortfolioProject) {
  return project.websiteUrl
    ?.replace(/^https?:\/\//i, "")
    .split(/[/?#]/)[0]
    .replace(/^www\./i, "");
}

function trackProjectOpen(project: PortfolioProject, destination: "case_study" | "live_product") {
  trackEvent("portfolio_project_open", { project: project.id, destination });
}

function ProjectTextLink({
  project,
  children,
  className,
}: {
  project: PortfolioProject;
  children: ReactNode;
  className?: string;
}) {
  if (project.slug) {
    return (
      <Link
        to={`/work/${project.slug}`}
        onClick={() => trackProjectOpen(project, "case_study")}
        className={className}
      >
        {children}
      </Link>
    );
  }

  if (project.websiteUrl) {
    return (
      <a
        href={project.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackProjectOpen(project, "live_product")}
        className={className}
      >
        {children}
      </a>
    );
  }

  return <span className={className}>{children}</span>;
}

function ProjectLinks({
  project,
  tone,
}: {
  project: PortfolioProject;
  tone: "dark" | "light";
}) {
  const linkClass =
    tone === "dark"
      ? "inline-flex items-center gap-2 text-xs font-semibold text-paper/80 transition-colors hover:text-paper"
      : "inline-flex items-center gap-2 text-xs font-semibold text-ink/75 transition-colors hover:text-ink";

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
      {project.slug && (
        <Link
          to={`/work/${project.slug}`}
          onClick={() => trackProjectOpen(project, "case_study")}
          className={linkClass}
        >
          View case study <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      )}
      {project.websiteUrl && (
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProjectOpen(project, "live_product")}
          className={linkClass}
        >
          {project.liveProductLabel ?? (project.logoOnly ? "View project" : "Visit website")}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function SectionHeading({
  index,
  label,
  title,
  description,
  tone,
  id,
}: {
  index: string;
  label: string;
  title: string;
  description: string;
  tone: "dark" | "light";
  id: string;
}) {
  const dark = tone === "dark";
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <Reveal>
        <Eyebrow index={index} label={label} tone={tone} />
      </Reveal>
      <h2
        id={id}
        className={`mt-5 max-w-[19ch] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 max-w-[62ch] text-sm leading-relaxed md:text-base ${dark ? "text-paper/60" : "text-ink/65"}`}>
        {description}
      </p>
    </div>
  );
}

function PhonePreview({ project, accent }: { project: PortfolioProject; accent: string }) {
  return (
    <div
      role="img"
      aria-label={`${project.name} phone mockup; no authentic product screenshot is available`}
      className="relative mx-auto aspect-[9/18] w-[88px] shrink-0 rounded-[27px] border-[5px] border-[#29292d] bg-[#080809] p-[5px] shadow-xl sm:w-[104px] md:w-[112px] xl:w-[124px]"
      style={{ boxShadow: `0 18px 48px ${accent}22` }}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#171719]">
        <div className="mx-auto mt-1.5 h-2 w-11 rounded-b-md bg-black/90" aria-hidden="true" />
        <div className="mx-3 mt-4 h-px bg-white/10" aria-hidden="true" />
        <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
          <div
            className="mb-3 grid h-9 w-9 place-items-center rounded-full border border-white/10"
            style={{ backgroundColor: `${accent}20`, color: accent }}
            aria-hidden="true"
          >
            <Smartphone size={16} strokeWidth={1.5} />
          </div>
          <span className="font-mono text-[6px] uppercase leading-relaxed tracking-[0.12em] text-white/55">
            Product preview
          </span>
          <span className="mt-1 font-mono text-[5px] uppercase tracking-[0.1em] text-white/30">
            Not available
          </span>
        </div>
        <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-white/30" aria-hidden="true" />
      </div>
      <span
        className="absolute -right-1 top-[22%] h-8 w-1 rounded-full bg-[#3c3c40]"
        aria-hidden="true"
      />
    </div>
  );
}

function MobileProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const accent = mobileAccents[project.id] ?? "#FF6A35";
  return (
    <Reveal delay={(index % 2) * 0.06}>
      <article
        className="group relative grid min-h-[330px] grid-cols-[100px_minmax(0,1fr)] items-center gap-4 overflow-hidden rounded-[26px] border border-white/10 bg-[#141416] p-4 transition-colors duration-300 hover:border-white/20 sm:grid-cols-[118px_minmax(0,1fr)] sm:gap-6 sm:p-6 xl:grid-cols-[138px_minmax(0,1fr)]"
        style={{ borderColor: `${accent}30` }}
      >
        <div
          className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
          style={{ background: `radial-gradient(circle, ${accent}22, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex justify-center">
          <PhonePreview project={project} accent={accent} />
        </div>

        <div className="relative z-10 min-w-0 py-2">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em]"
              style={{ borderColor: `${accent}55`, backgroundColor: `${accent}15`, color: accent }}
            >
              Mobile application
            </span>
            {project.status === "in-development" && (
              <span className="rounded-full border border-amber-300/35 bg-amber-300/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-amber-200">
                In development
              </span>
            )}
            <span className="font-mono text-[9px] text-paper/35">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold leading-tight tracking-[-0.04em] text-paper sm:text-2xl">
            <ProjectTextLink
              project={project}
              className="outline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
            >
              {project.name}
            </ProjectTextLink>
          </h3>
          <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-paper/60 sm:text-sm">
            {getDescription(project)}
          </p>

          {project.platforms.length > 0 && <div className="mt-4 flex flex-wrap gap-1.5">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-paper/60"
              >
                {platform}
              </span>
            ))}
          </div>}
          {project.playStorePackage && (
            <p className="mt-3 break-all font-mono text-[9px] text-paper/40">
              Google Play package: {project.playStorePackage}
            </p>
          )}
          <ProjectLinks project={project} tone="dark" />
        </div>
      </article>
    </Reveal>
  );
}

function MobileApplicationsSection() {
  return (
    <section aria-labelledby="mobile-applications-heading" className="bg-[#0d0d0f] py-20 text-paper md:py-28">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="MOBILE APPLICATIONS"
          title="Apps Built to Scale & Delight"
          description="Mobile products shaped around real customer and operational needs, with supported platforms shown for each project."
          tone="dark"
          id="mobile-applications-heading"
        />
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {mobileProjects.map((project, index) => (
            <MobileProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowserPreview({ project }: { project: PortfolioProject }) {
  const host = getWebsiteHost(project);
  return (
    <div
      role="img"
      aria-label={`${project.name} browser preview; no authentic website screenshot is available`}
      className="aspect-[1.72] bg-[#f0efec] p-4 sm:p-5"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#d9d7d1] bg-white shadow-sm">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-[#e9e7e2] px-3">
          <span className="h-2 w-2 rounded-full bg-[#e6a49a]" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-[#e6c987]" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-[#a8c9ae]" aria-hidden="true" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-[#f3f2ef] px-3 py-1 font-mono text-[8px] text-ink/45">
            {host ?? "Website"}
          </span>
          {project.websiteUrl && (
            <ExternalLink size={12} className="shrink-0 text-ink/35" aria-hidden="true" />
          )}
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,#f8f7f4,white_70%)] px-4 text-center">
          <Monitor size={24} strokeWidth={1.25} className="text-ink/25" aria-hidden="true" />
          <p className="mt-3 font-display text-sm font-medium text-ink/55">{project.name}</p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ink/35">
            Website preview unavailable
          </p>
        </div>
      </div>
    </div>
  );
}

function WebsiteProjectCard({ project }: { project: PortfolioProject }) {
  const displayedCategories = project.categories.filter(
    (category) => category === "Web Development" || category === "E-commerce"
  );
  return (
    <article
      data-carousel-card
      className="w-[min(84vw,440px)] shrink-0 snap-start overflow-hidden rounded-[24px] border border-black/[0.06] bg-white text-ink shadow-[0_12px_42px_rgba(18,18,18,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_56px_rgba(18,18,18,0.12)] md:w-[min(46vw,430px)] lg:w-[min(32vw,420px)]"
    >
      <BrowserPreview project={project} />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {displayedCategories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-[#f0efec] px-3 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-ink/60"
            >
              {category}
            </span>
          ))}
          {project.status === "in-development" && (
            <span className="rounded-full bg-amber-100 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-amber-900">
              In development
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.04em]">
            <ProjectTextLink
              project={project}
              className="outline-offset-4 transition-colors hover:text-[#bd3a13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
            >
              {project.name}
            </ProjectTextLink>
          </h3>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} website`}
              onClick={() => trackProjectOpen(project, "live_product")}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-ink hover:text-ink"
            >
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-ink/65">
          {getDescription(project)}
        </p>
        {project.platforms.length > 0 && <div className="mt-4">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink/40">Platforms</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-ink/55"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-[#f0efec] px-2.5 py-1 font-mono text-[8px] text-ink/60"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        <ProjectLinks project={project} tone="light" />
      </div>
    </article>
  );
}

function WebsitesSection({ reduceMotion }: { reduceMotion: boolean }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>("[data-carousel-card]");
    const distance = card ? card.offsetWidth + 20 : carousel.clientWidth * 0.8;
    carousel.scrollBy({ left: direction * distance, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section
      aria-labelledby="websites-heading"
      className="overflow-hidden bg-[#eeede9] py-20 text-ink md:py-28"
    >
      <div className="container-x">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              index="02"
              label="WEBSITES & WEB APPS"
              title="Digital Experiences That Convert"
              description="From marketing websites to full-stack web applications — every experience built for performance, usability and growth."
              tone="light"
              id="websites-heading"
            />
          </div>
          <div className="-mt-5 mb-10 flex shrink-0 items-center gap-2 md:mb-14 md:mt-0">
            <button
              type="button"
              aria-label="Previous websites"
              onClick={() => scroll(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next websites"
              onClick={() => scroll(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={carouselRef}
        role="region"
        aria-label="Website and web application projects"
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12 xl:px-16"
      >
        {websiteProjects.map((project) => (
          <WebsiteProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function SoftwarePreview({ project }: { project: PortfolioProject }) {
  return (
    <div
      role="img"
      aria-label={`${project.name} software preview; no authentic product interface screenshot is available`}
      className="aspect-[1.9] overflow-hidden rounded-[18px] border border-white/10 bg-[#171719] p-3 sm:p-4"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101012]">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-white/10 px-3">
          <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden="true" />
          <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.12em] text-paper/30">
            Product interface
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035),transparent_65%)] px-4 text-center">
          <Monitor size={27} strokeWidth={1.2} className="text-signal/70" aria-hidden="true" />
          <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/45">
            Interface preview unavailable
          </p>
        </div>
      </div>
    </div>
  );
}

function SoftwareProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const summary = project.overview ?? project.description ?? project.headline;
  return (
    <Reveal delay={(index % 2) * 0.06}>
      <article className="group h-full overflow-hidden rounded-[26px] border border-white/10 bg-[#151517] p-4 transition-colors duration-300 hover:border-white/20 sm:p-6">
        <SoftwarePreview project={project} />
        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-signal">
              {project.status === "in-development"
                ? project.industry
                : project.categories.includes("Business Platforms")
                ? "Business platform"
                : "Digital platform"}
            </span>
            {project.status === "in-development" && (
              <span className="mt-2 inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-amber-200">
                In development
              </span>
            )}
            <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-paper">
              <ProjectTextLink
                project={project}
                className="outline-offset-4 transition-colors group-hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
              >
                {project.name}
              </ProjectTextLink>
            </h3>
          </div>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} product`}
              onClick={() => trackProjectOpen(project, "live_product")}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-paper/65 transition-colors hover:border-signal hover:text-paper"
            >
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>
        {project.challenge && <div className="mt-5 border-l border-signal/60 pl-3">
          <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-paper/40">
            Business problem
          </p>
          <p className="mt-1 text-xs leading-relaxed text-paper/60">
            {project.challenge}
          </p>
        </div>}
        <div className="mt-5">
          <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-paper/40">
            Solution summary
          </p>
          <p className="mt-2 text-sm leading-relaxed text-paper/65">
            {summary ?? "Project details are not documented in the approved portfolio data."}
          </p>
        </div>
        {project.platforms.length > 0 && <div className="mt-5">
          <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-paper/40">
            Platform type
          </p>
          {project.platforms.length > 0 && <div className="mt-2 flex flex-wrap gap-1.5">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-paper/55"
              >
                {platform}
              </span>
            ))}
          </div>}
        </div>}
        {project.technologies && project.technologies.length > 0 && <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[8px] text-paper/55"
            >
              {technology}
            </span>
          ))}
        </div>}
        <ProjectLinks project={project} tone="dark" />
      </article>
    </Reveal>
  );
}

function SoftwarePlatformsSection() {
  return (
    <section
      aria-labelledby="software-platforms-heading"
      className="bg-[#111113] py-20 text-paper md:py-28"
    >
      <div className="container-x">
        <SectionHeading
          index="03"
          label="SOFTWARE & DIGITAL PLATFORMS"
          title="Powering Businesses With Intelligent Software"
          description="From operational management systems to connected digital platforms, we engineer software that transforms business workflows into structured, scalable digital experiences."
          tone="dark"
          id="software-platforms-heading"
        />
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {softwareProjects.map((project, index) => (
            <SoftwareProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkPage() {
  const reduceMotion = Boolean(useReducedMotion());

  useSEO({
    title: "App & Software Development Portfolio | NavRasa",
    description:
      "Explore NavRasa's mobile apps, custom software, web platforms and digital products built for businesses and startups.",
    path: "/work",
  });

  return (
    <>
      <section className="grain relative overflow-hidden bg-ink text-paper">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_78%_10%,rgba(255,77,18,0.1),transparent_72%)]"
          aria-hidden="true"
        />
        <div className="container-x relative py-28 md:py-36">
          <Reveal>
            <Eyebrow label="OUR WORK" />
          </Reveal>
          <div className="mt-8 grid grid-cols-12 items-end gap-x-4 gap-y-6 md:gap-x-8">
            <h1 className="col-span-12 max-w-[15ch] font-display text-[clamp(3.2rem,7.5vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em] lg:col-span-8">
              Work That Moves <span className="text-paper/55">Business Forward.</span>
            </h1>
            <p className="col-span-12 max-w-[45ch] text-[15px] leading-relaxed text-paper/65 md:text-lg lg:col-span-4 lg:pb-2">
              As a product engineering and digital transformation partner, NavRasa builds mobile apps, web experiences and operational software for evolving business needs.
            </p>
          </div>
        </div>
      </section>

      <MobileApplicationsSection />
      <WebsitesSection reduceMotion={reduceMotion} />
      <SoftwarePlatformsSection />
      <Testimonials index="04" tone="dark" />

      <section className="grain relative overflow-hidden bg-ink text-paper">
        <div
          className="absolute inset-0 bg-[radial-gradient(45%_60%_at_80%_50%,rgba(255,77,18,0.11),transparent_70%)]"
          aria-hidden="true"
        />
        <div className="container-x relative grid grid-cols-12 items-end gap-x-4 gap-y-8 py-20 md:gap-x-8 md:py-28">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow index="05" label="LET'S BUILD" />
            <h2 className="mt-7 max-w-[14ch] font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Have a Project in Mind<span className="text-signal">?</span>
            </h2>
            <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-paper/65 md:text-lg">
              Let&apos;s turn your idea into a scalable digital product.
            </p>
          </div>
          <div className="col-span-12 flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button href="/contact" tone="dark" size="lg">
              START A PROJECT
            </Button>
            <Button href="/contact" tone="dark" variant="outline" size="lg" navigate>
              TALK TO OUR TEAM
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
