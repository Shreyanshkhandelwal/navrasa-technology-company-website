export type ProjectCategory = "Mobile Applications" | "Web Development" | "E-commerce" | "Business Platforms";

export type CaseStudyProject = {
  id: string;
  slug: string;
  name: string;
  category?: ProjectCategory;
  categories?: ProjectCategory[];
  industry?: string;
  headline?: string;
  overview?: string;
  responsibility?: string;
  challenge?: string;
  solutions?: { title: string; text: string }[];
  features?: { title: string; text: string }[];
  technologies?: string[];
  platforms?: string[];
  websiteUrl?: string;
  playStorePackage?: string;
  accent?: string;
  deliverables?: string[];
};

export const caseStudyProjects: CaseStudyProject[] = [
  {
    id: "exam-neeti", slug: "exam-neeti", name: "Exam Neeti",
    category: "Web Development",
    categories: ["Web Development"],
    platforms: ["Website"],
    websiteUrl: "https://examneeti.in",
  },
  {
    id: "oggy-holidays", slug: "oggy-holidays", name: "Oggy Holidays",
    category: "Web Development",
    categories: ["Web Development"],
    platforms: ["Website"],
    websiteUrl: "https://oggyholidays.com",
  },
  {
    id: "taso", slug: "taso", name: "Taso",
    category: "Mobile Applications",
    categories: ["Mobile Applications"],
    platforms: ["Android app"],
    playStorePackage: "com.taso.main",
  },
  {
    id: "collably", slug: "collably", name: "Collably",
    category: "Web Development",
    categories: ["Web Development"],
    headline: "A practical digital solution shaped through close collaboration.",
    overview: "Collably's existing review describes working closely with NavRasa to turn its ideas into a practical digital solution. Specific features are not documented.",
    platforms: ["Website"],
    websiteUrl: "https://collably.in",
  },
  {
    id: "sports-wizards", slug: "sports-wizards", name: "Sports Wizards",
    category: "Mobile Applications",
    categories: ["Mobile Applications"],
    platforms: ["Apple App Store"],
  },
  {
    id: "sapiens-group", slug: "sapiens-group", name: "Sapiens Group",
    category: "Web Development",
    categories: ["Web Development"],
    platforms: ["Website"],
    websiteUrl: "https://sapiensgroup.in",
  },
];

export type LogoOnlyPortfolioProject = {
  id: string;
  name: string;
  logoOnly: true;
  category: ProjectCategory;
  categories: ProjectCategory[];
  websiteUrl: string;
};

export const logoOnlyPortfolioProjects: LogoOnlyPortfolioProject[] = [
  {
    id: "gift-easy",
    name: "GiftEasy",
    logoOnly: true,
    category: "Web Development",
    categories: ["Web Development"],
    websiteUrl: "https://gift-easy.com",
  },
  {
    id: "hello-mam",
    name: "Hello Mam",
    logoOnly: true,
    category: "Web Development",
    categories: ["Web Development"],
    websiteUrl: "https://hellomam.co.in",
  },
  {
    id: "vidyamalika",
    name: "Vidyamalika",
    logoOnly: true,
    category: "Web Development",
    categories: ["Web Development"],
    websiteUrl: "https://vidyamalika.com",
  },
  {
    id: "gear-gains",
    name: "Gear Gains",
    logoOnly: true,
    category: "Web Development",
    categories: ["Web Development"],
    websiteUrl: "https://geargains.in",
  },
  {
    id: "wordcraftier",
    name: "Wordcraftier",
    logoOnly: true,
    category: "Web Development",
    categories: ["Web Development"],
    websiteUrl: "https://wordcraftier.com",
  },
];
