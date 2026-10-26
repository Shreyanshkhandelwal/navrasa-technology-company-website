/* ------------------------------------------------------------------
   NAVRASA — SITE CONTENT
   Single source of truth for copy. Facts are sourced from
   navrasaitsolutions.com. Anything marked EDIT is a placeholder
   awaiting verified information — nothing here is invented.
------------------------------------------------------------------- */

export const company = {
  name: "NavRasa IT Solutions",
  short: "NavRasa",
  tagline: "Build what's next.",
  url: "https://www.navrasaitsolutions.com",
  email: "info@navrasaitsolutions.com",
  phones: ["+91 63770 67867", "+91 70146 86805"],
  location: "Shyam Nagar, Jaipur, Rajasthan, India",
  city: "Jaipur, India",
  // Optional: paste a form endpoint (e.g. Formspree / your API). Empty = email fallback.
  formEndpoint: "",
  hours: "Mon–Sat, 10:00–19:00 IST",
  responseTime: "Enquiries answered within one business day",
  /* Social profiles. `icon` maps to src/components/icons.tsx.
     Set `show: false` to hide a channel until its handle is confirmed. */
  social: [
    {
      label: "LinkedIn",
      handle: "navrasa-it-solutions",
      href: "https://www.linkedin.com/company/navrasa-it-solutions/",
      icon: "linkedin",
      show: true,
    },
    { label: "X", handle: "@NavrasaIT", href: "https://x.com/NavrasaIT", icon: "x", show: true },
    {
      label: "WhatsApp",
      handle: "+91 63770 67867",
      href: "https://wa.me/916377067867",
      icon: "whatsapp",
      show: true,
    },
    {
      label: "Email",
      handle: "info@navrasaitsolutions.com",
      href: "mailto:info@navrasaitsolutions.com",
      icon: "mail",
      show: true,
    },
    {
      // EDIT: the Instagram link on the current site is malformed. Replace the
      // href/handle with the correct profile, then set show: true.
      label: "Instagram",
      handle: "",
      href: "",
      icon: "instagram",
      show: false,
    },
  ],
};

/* Figures below are drawn from information published on navrasaitsolutions.com.
   EDIT the values as the business grows — keep every number defensible. */
export const credentials = [
  { value: "4+", label: "Client products shipped", note: "Named on our site with client feedback" },
  { value: "4–8", label: "Weeks to a typical MVP", note: "Depending on scope and integrations" },
  { value: "2", label: "Co-founders leading delivery", note: "Direct access, no account layer" },
  { value: "Jaipur", label: "Engineering base, India", note: "Working with clients remotely" },
];

export const industries = [
  { name: "Fintech", note: "Payments, onboarding and compliance-aware workflows." },
  { name: "E-commerce & Retail", note: "Storefronts, catalogues, vendor and order systems." },
  { name: "Healthcare", note: "Patient-facing apps and clinical operations tooling." },
  { name: "Education", note: "Learning platforms, assessments and student portals." },
  { name: "Energy & Industrial", note: "Service booking, field operations and lead capture." },
  { name: "Professional Services", note: "Internal systems, dashboards and client portals." },
];

export const engagements = [
  {
    name: "Fixed Scope",
    best: "Best for a clearly defined build",
    text: "An agreed scope, timeline and price. Suits websites, defined platforms and well-specified modules where requirements are stable.",
    includes: ["Written scope & estimate", "Milestone billing", "Fixed delivery date", "Post-launch warranty"],
  },
  {
    name: "Dedicated Team",
    best: "Best for evolving products",
    text: "Engineers, designers and QA allocated to you on a monthly basis. You set priorities sprint by sprint as the product takes shape.",
    includes: ["Monthly rolling contract", "Sprint planning & demos", "Scale the team up or down", "Direct access to the team"],
  },
  {
    name: "Product Partnership",
    best: "Best for founders building from zero",
    text: "We act as your technology team from idea through launch and growth — strategy, architecture and delivery under one roof.",
    includes: ["Discovery & product strategy", "MVP build and launch", "Ongoing roadmap", "Scaling and support"],
  },
];

export const assurances = [
  { title: "NDA on request", text: "We sign a mutual NDA before discovery whenever you need one." },
  { title: "You own the IP", text: "On final payment, all source code, designs and assets transfer to you in writing." },
  { title: "Code in your repository", text: "Work is committed to a repository you control, with clear history from day one." },
  { title: "Tested before release", text: "Functional and device testing on every release, with defects fixed before sign-off." },
  { title: "Warranty after launch", text: "A defined warranty window after go-live covers defects in delivered work at no cost." },
  { title: "Documented handover", text: "Architecture notes, environment setup and credentials handed over on completion." },
];

export const process = [
  {
    n: "01",
    title: "Discovery call",
    text: "A 30–45 minute conversation about the problem, users and constraints. No cost, no obligation.",
    out: "Shared understanding of the goal",
  },
  {
    n: "02",
    title: "Proposal & estimate",
    text: "Written scope, approach, timeline and commercials. We flag risks and assumptions in plain language.",
    out: "Scope document and estimate",
  },
  {
    n: "03",
    title: "Design & architecture",
    text: "Interface design and system architecture agreed before build, so decisions are deliberate.",
    out: "Prototypes and technical plan",
  },
  {
    n: "04",
    title: "Build in sprints",
    text: "Development in two-week sprints with working demos, so you see progress rather than status reports.",
    out: "Working software every sprint",
  },
  {
    n: "05",
    title: "Test & launch",
    text: "QA across devices, performance checks, deployment and the handover of everything we built.",
    out: "Live product and full handover",
  },
  {
    n: "06",
    title: "Support & improve",
    text: "Warranty cover, then an ongoing arrangement for maintenance, features and scale if you want one.",
    out: "A team that stays available",
  },
];

/* Verbatim client feedback published on navrasaitsolutions.com. Do not edit the
   wording — these are quotes. Add new entries only with written client consent. */
export const testimonials = [
  {
    quote:
      "The app turned out fantastic! Smooth interface, vendor panel, real-time coupon tracking — they built exactly what we needed. Can't recommend them enough.",
    name: "Keshavendra Singh Raghav",
    role: "Founder, EzyFix",
    project: "Coupon-selling app",
  },
  {
    quote:
      "Our perfume brand needed elegance, speed, and trust — they delivered all three. The website looks stunning and works beautifully on mobile. Customers love it.",
    name: "Harsh",
    role: "Founder, Richony",
    project: "E-commerce website",
  },
  {
    quote:
      "We finally have a website that brings us leads. They made it user-friendly, added service booking, and kept it SEO-ready. It's driving results.",
    name: "Suresh Kumar Yadav",
    role: "Suntech Power Corporation",
    project: "Solar services website",
  },
  {
    quote:
      "They understood our brand instantly and built a clean, modern website that speaks to our audience. Everything's on point — layout, speed, and responsiveness.",
    name: "CRID Innovations",
    role: "Business website",
    project: "Corporate website",
  },
];

export const faqs = [
  {
    q: "How do we start working together?",
    a: "Start with a discovery call. We discuss the problem, your users and your constraints, then send a written proposal with scope, timeline and cost. If it fits, we schedule a start date.",
  },
  {
    q: "How long does an MVP take to build?",
    a: "Most MVPs are delivered in four to eight weeks, depending on complexity, features and integrations. We work in agile sprints so you see working software throughout, not just at the end.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed scope work is quoted as a fixed price against a written specification. Dedicated team and product partnership engagements are billed monthly. You will always have the commercials in writing before work begins.",
  },
  {
    q: "Who owns the code and the intellectual property?",
    a: "You do. On final payment, all source code, designs and assets transfer to you in writing. Work is committed to a repository you control throughout the project.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes. We sign a mutual NDA before discovery whenever you need one, and we treat every enquiry as confidential by default.",
  },
  {
    q: "How will we communicate during the project?",
    a: "You get a named point of contact, a shared channel for day-to-day questions, and a sprint demo so you can see progress. You deal directly with the people building your product.",
  },
  {
    q: "What happens after launch?",
    a: "A defined warranty window covers defects in delivered work at no cost. After that, you can continue with us for maintenance, new features and scaling, or take the handover and run it in-house.",
  },
  {
    q: "Can you work with our existing team or system?",
    a: "Yes. We regularly extend in-house teams and integrate with existing systems and databases. We will review what you have before recommending changes.",
  },
  {
    q: "Can you add AI to an existing product?",
    a: "Yes, where it creates real value. We start from the workflow you want to improve, then choose the approach — from an integration with an existing model to a custom pipeline.",
  },
];

export const nav = [
  { label: "What We Build", href: "/what-we-build" },
  { label: "Solutions", href: "/solutions" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const hero = {
  eyebrow: "Technology & Product Engineering",
  lines: ["BUILD", "WHAT'S", "NEXT."],
  statement:
    "We design, engineer and scale digital products, AI systems and technology platforms for ambitious businesses.",
  secondary:
    "From the first idea to millions of users, NavRasa builds the technology behind ambitious products.",
  primaryCta: { label: "Start Building", href: "/contact" },
  secondaryCta: { label: "Explore What We Build", href: "/what-we-build" },
  strip: ["Idea", "Product", "Launch", "Scale"],
  nodes: ["AI", "Mobile", "Web", "Cloud", "Data", "APIs", "Automation", "SaaS", "Infrastructure"],
};

export const manifesto = {
  headline: "Technology should create possibilities.",
  belief:
    "We believe great technology doesn't simply automate what already exists. It creates entirely new ways to build, operate and grow.",
  intro:
    "NavRasa works with ambitious founders, businesses and organizations to turn complex ideas into scalable digital products.",
  principles: [
    { title: "Build With Purpose", text: "Technology should solve meaningful problems." },
    { title: "Think Beyond Today", text: "Products are designed for where the business is going, not only where it is." },
    { title: "Engineering Matters", text: "Strong architecture creates the foundation for scale." },
    { title: "AI Is an Advantage", text: "Integrated where it creates real business value — never as a buzzword." },
    { title: "Product Over Projects", text: "We don't just deliver software. We help build products." },
    { title: "Long-Term Thinking", text: "Technology relationships that grow with the business." },
  ],
};

export const builds = [
  {
    id: "ai",
    title: "AI Systems",
    text: "Intelligent applications, AI assistants, automation systems and AI-powered workflows.",
    tags: ["LLM apps", "Agents", "Automation"],
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    text: "Scalable software products designed for recurring users, businesses and large-scale operations.",
    tags: ["Multi-tenant", "Billing", "Analytics"],
  },
  {
    id: "mobile",
    title: "Mobile Products",
    text: "High-performance mobile applications designed around real user experiences.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    id: "web",
    title: "Web Platforms",
    text: "Modern web applications, dashboards, marketplaces and digital platforms.",
    tags: ["Marketplaces", "Dashboards", "Portals"],
  },
  {
    id: "enterprise",
    title: "Enterprise Systems",
    text: "Custom technology platforms that solve complex operational and business problems.",
    tags: ["Operations", "Integrations", "Internal tools"],
  },
  {
    id: "infra",
    title: "Digital Infrastructure",
    text: "Backend systems, APIs, cloud architecture, databases and technology foundations designed for scale.",
    tags: ["APIs", "Cloud", "Data"],
  },
];

export const journey = {
  headline: "From zero to scale.",
  support: "A great product requires more than development. It requires the right decisions at every stage.",
  note: "NavRasa can join at any stage of the product lifecycle — and stay through all of them.",
  stages: [
    {
      n: "01",
      title: "Idea",
      text: "Every product begins as a hypothesis. We help sharpen it: the problem, the user and the reason it should exist.",
      we: ["Discovery", "Problem framing", "Feasibility"],
    },
    {
      n: "02",
      title: "Strategy",
      text: "The decisions that shape everything downstream — scope, business model, architecture and sequencing.",
      we: ["Product roadmap", "Technical strategy", "MVP scope"],
    },
    {
      n: "03",
      title: "Design",
      text: "Interfaces, flows and systems designed around how people actually behave, not how we wish they would.",
      we: ["UX research", "Product design", "Design systems"],
    },
    {
      n: "04",
      title: "Engineering",
      text: "Clean architecture and solid foundations. Code written to be extended, not rewritten.",
      we: ["Frontend & mobile", "Backend & APIs", "AI integration"],
    },
    {
      n: "05",
      title: "Launch",
      text: "Shipping is a discipline. Infrastructure, quality, monitoring and release handled properly.",
      we: ["Cloud setup", "CI/CD & QA", "Release management"],
    },
    {
      n: "06",
      title: "Scale",
      text: "Growth changes everything — load, teams, features, expectations. The system has to keep up.",
      we: ["Performance", "New capabilities", "Long-term partnership"],
    },
  ],
};

export const ai = {
  headline: "Intelligence, built into the product.",
  lead: "AI is changing how products are built, how businesses operate and how people interact with technology.",
  text: "NavRasa builds practical AI systems that become part of real products and workflows — measured by the value they create, not the noise they make.",
  capabilities: [
    "Generative AI",
    "LLM Applications",
    "AI Agents",
    "AI Assistants",
    "Workflow Automation",
    "Intelligent Search",
    "Document Intelligence",
    "Recommendation Systems",
    "AI APIs & Integrations",
    "Machine Learning",
  ],
  grounded: [
    { k: "Practical", v: "Built for real workflows, real data and real users." },
    { k: "Integrated", v: "Part of the product, not a bolt-on demo." },
    { k: "Measured", v: "Justified by business value, not hype." },
  ],
};

export const engineering = {
  headline: "Engineered for what comes next.",
  lead: "Products need foundations that can evolve. The architecture decided on day one determines what is possible in year three.",
  message: "We build systems that are designed not only to launch, but to evolve.",
  layers: [
    { name: "Frontend", modules: ["Web app", "Mobile app", "Admin"] },
    { name: "APIs", modules: ["REST", "GraphQL", "Webhooks"] },
    { name: "Backend", modules: ["Services", "Auth", "Jobs"] },
    { name: "Data", modules: ["PostgreSQL", "MongoDB", "Cache"] },
    { name: "AI", modules: ["LLM", "Embeddings", "Agents"] },
    { name: "Cloud", modules: ["AWS", "Google Cloud", "Firebase"] },
    { name: "Infrastructure", modules: ["CI/CD", "Monitoring", "Security"] },
  ],
  qualities: [
    { title: "Performance", text: "Fast by default. Measured, not assumed." },
    { title: "Security", text: "Secure foundations, sensible defaults, least privilege." },
    { title: "Scalability", text: "Architecture that grows with users, data and teams." },
    { title: "Maintainability", text: "Code your future team will thank you for." },
    { title: "Reliability", text: "Systems that stay up when it matters most." },
  ],
};

export const startups = {
  headline: "Have an idea?",
  statement: "Let's turn it into something people can use.",
  text: "NavRasa helps founders transform an idea into a real product. Not a demo, not a deck — a working product built to validate, launch and grow.",
  positioning: ["Product validation", "Engineering", "Strategic execution"],
  pipeline: ["Idea", "Product Strategy", "Prototype", "MVP", "Launch", "Growth", "Scale"],
  // Sourced from the existing site's MVP FAQ.
  facts: [
    { k: "Typical MVP build", v: "4–8 weeks, depending on scope" },
    { k: "Approach", v: "Validate → Prototype → Build → Iterate → Scale" },
    { k: "After launch", v: "Feature expansion and infrastructure that grows without a rebuild" },
  ],
  cta: { label: "Build My MVP", href: "/contact" },
};

export const businesses = {
  headline: "Technology for businesses ready to move.",
  text: "For established businesses, the question is rarely whether to build — it's what to build first, and how to do it without disrupting what already works.",
  items: [
    { title: "Digitize operations", text: "Replace spreadsheets, paperwork and manual handoffs with systems built for how you work." },
    { title: "Automate workflows", text: "Remove repetitive work from your team's day and reduce operational error." },
    { title: "Build customer-facing platforms", text: "Portals, apps and platforms your customers actually want to use." },
    { title: "Integrate AI", text: "Assistants, document intelligence and decision support inside real workflows." },
    { title: "Modernize legacy processes", text: "Evolve what works. Retire what doesn't. Keep the business running throughout." },
    { title: "Build internal systems", text: "Dashboards, tooling and back-office systems tailored to your operation." },
    { title: "Create new digital revenue channels", text: "Turn existing capabilities into products, marketplaces and services." },
  ],
  cta: { label: "Explore Business Solutions", href: "/contact" },
};

export const capabilities = [
  {
    id: "product",
    title: "Product",
    text: "Turning ambiguity into a roadmap, and a roadmap into something people can use.",
    items: ["Product Strategy", "MVP Development", "SaaS", "Marketplace", "Platforms"],
  },
  {
    id: "engineering",
    title: "Engineering",
    text: "The foundations: fast interfaces, robust services, resilient infrastructure.",
    items: ["Frontend", "Backend", "Mobile", "APIs", "Cloud", "DevOps", "Database Architecture"],
  },
  {
    id: "intelligence",
    title: "Intelligence",
    text: "Applied AI that lives inside the product and earns its place there.",
    items: ["AI", "Generative AI", "Machine Learning", "AI Agents", "Automation", "Data"],
  },
  {
    id: "experience",
    title: "Experience",
    text: "Design that makes complex systems feel simple, and simple things feel considered.",
    items: ["UI/UX", "Product Design", "Design Systems", "Prototyping"],
  },
];

// EDIT: keep this list honest — only technologies genuinely in use.
export const technology = [
  { layer: "Web", items: ["React", "Next.js", "Node.js"] },
  { layer: "Mobile", items: ["Flutter", "React Native", "Swift · iOS", "Kotlin · Android"] },
  { layer: "Backend", items: ["Node.js", "Python", "Golang"] },
  { layer: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
  { layer: "Cloud", items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Firebase"] },
  { layer: "AI / LLM", items: ["LLM APIs", "RAG pipelines", "Vector search", "AI agents", "ML models"] },
];

/* Selected work — sourced from client feedback published on the existing site.
   Figures are intentionally absent; EDIT fields when verified metrics are available. */
export const work = {
  headline: "Built to make an impact.",
  projects: [
    {
      id: "ezyfix",
      name: "EzyFix",
      industry: "Consumer · Local commerce",
      problem: "A coupon-selling model needed a smooth consumer experience and a vendor side that could manage offers in real time.",
      product: "Coupon-selling app with a vendor panel and real-time coupon tracking.",
      technology: "Mobile application · Vendor panel · Real-time tracking",
      impact:
        "“Smooth interface, vendor panel, real-time coupon tracking — they built exactly what we needed.”",
      attribution: "Keshavendra Singh Raghav, Founder, EzyFix",
      accent: "#ff4d12",
    },
    {
      id: "richony",
      name: "Richony",
      industry: "E-commerce · Fragrance",
      problem: "A perfume brand needed elegance, speed and trust in a single storefront that performs on mobile.",
      product: "E-commerce website for a premium perfume brand.",
      technology: "E-commerce web platform · Mobile-first",
      impact:
        "“Our perfume brand needed elegance, speed, and trust — they delivered all three. Customers love it.”",
      attribution: "Harsh, Founder, Richony",
      accent: "#c9a96e",
    },
    {
      id: "suntech",
      name: "Suntech Power Corporation",
      industry: "Energy · Solar",
      problem: "A solar business needed a web presence that generates enquiries — not just a brochure.",
      product: "Lead-focused website with service booking, built SEO-ready.",
      technology: "Web platform · Service booking · SEO foundations",
      impact:
        "“We finally have a website that brings us leads. Service booking, SEO-ready — it's driving results.”",
      attribution: "Suresh Kumar Yadav, Suntech Power Corporation",
      accent: "#f5b700",
    },
    {
      id: "crid",
      name: "CRID Innovations",
      industry: "Business · Innovation",
      problem: "A clear, modern digital identity that speaks to the right audience — quickly.",
      product: "Business website with a clean, modern brand presence.",
      technology: "Web platform · Responsive design",
      impact:
        "“They understood our brand instantly and built a clean, modern website that speaks to our audience.”",
      attribution: "CRID Innovations",
      accent: "#4f8cff",
    },
  ],
};

export const why = {
  headline: "Why NavRasa?",
  principles: [
    { title: "Product Thinking", text: "We think about the product, not just the code." },
    { title: "Engineering Depth", text: "Strong technical foundations create long-term advantages." },
    { title: "Speed With Purpose", text: "Move quickly without sacrificing important architectural decisions." },
    { title: "AI-Native Mindset", text: "Use AI where it creates meaningful leverage." },
    { title: "Business Understanding", text: "Technology must connect to measurable business goals." },
    { title: "Long-Term Partnership", text: "Build today with tomorrow in mind." },
  ],
};

export const future = {
  headline: "We're just getting started.",
  lines: [
    "The biggest technology companies are built one product, one problem and one ambitious idea at a time.",
    "NavRasa is building toward that future.",
  ],
  cta: { label: "Build With Us", href: "/contact" },
};

export const about = {
  headline: "Building the company we want to see in the future of technology.",
  intro:
    "NavRasa IT Solutions is a technology company focused on building digital products, AI solutions and scalable software systems.",
  text: "We work with startups and established businesses — from idea validation and product design through engineering, launch and scale. Our work spans web platforms, mobile applications, SaaS products and AI systems, and the strategy that decides what to build first.",
  mission: "Make powerful technology accessible to ambitious businesses and founders.",
  vision: "Build technology that creates meaningful impact at scale.",
  facts: [
    { k: "Based in", v: "Jaipur, Rajasthan, India" },
    { k: "Focus", v: "Digital products · AI · Scalable systems" },
    { k: "Working with", v: "Founders, startups and businesses across industries" },
  ],
  /* Founder portraits are stored in public/images. */
  leadership: [
    {
      name: "Shreyansh Khandelwal",
      role: "Co-Founder & CEO",
      focus: ["Vision", "Product", "Entrepreneurship"],
      href: "https://www.linkedin.com/in/shreyansh-khandelwal",
      photo: "/images/shreyansh_about.png",
      // EDIT: add a verified short bio when available.
      bio: "",
    },
    {
      name: "Sargam Yadav",
      role: "Co-Founder & CMO",
      focus: ["Growth", "Brand", "Partnerships"],
      href: "https://www.linkedin.com/in/sargamyadav",
      photo: "/images/sargam_about.jpg",
      // EDIT: add a verified short bio when available.
      bio: "",
    },
  ],
};

/* Insights are structured but unpublished — no fabricated articles.
   Set `published: true` and add `href` once an article is live. */
export const insights = {
  headline: "Ideas for the next era of technology.",
  topics: ["AI", "Startups", "Product Development", "Technology", "SaaS", "Engineering", "Automation", "Digital Transformation"],
  articles: [
    { title: "Why Every Business Will Become an AI Business", topic: "AI", published: false, href: "" },
    { title: "Building an MVP Without Building Technical Debt", topic: "Startups", published: false, href: "" },
    { title: "From Idea to Product: What Founders Should Know Before Development", topic: "Product Development", published: false, href: "" },
    { title: "AI Agents vs Traditional Automation", topic: "Automation", published: false, href: "" },
    { title: "Designing Software for Scale", topic: "Engineering", published: false, href: "" },
  ],
};

export const finalCta = {
  headline: "Have a big idea?",
  text: "Let's build the technology to make it real.",
  primary: { label: "Start Building", href: "/contact" },
  secondary: { label: "Talk to Our Team", href: `mailto:${company.email}` },
};

export const contactForm = {
  projectTypes: ["AI Product", "SaaS", "Mobile App", "Web Platform", "MVP", "Enterprise Software", "Automation", "Other"],
  budgets: ["Under ₹1L", "₹1–3L", "₹3–5L", "₹5–10L", "₹10–25L", "₹25L+", "Not Sure"],
  timelines: ["As soon as possible", "Within 1 month", "1–3 months", "3–6 months", "Exploring"],
};

export const footer = {
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: `mailto:${company.email}?subject=Careers%20at%20NavRasa` },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  solutions: [
    { label: "AI", href: "/what-we-build#ai" },
    { label: "SaaS", href: "/what-we-build#build-saas" },
    { label: "MVP", href: "/solutions#startups" },
    { label: "Web", href: "/what-we-build#build-web" },
    { label: "Mobile", href: "/what-we-build#build-mobile" },
    { label: "Enterprise", href: "/solutions#businesses" },
  ],
};
