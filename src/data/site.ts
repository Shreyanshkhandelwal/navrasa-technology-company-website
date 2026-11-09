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
  phones: ["+91 70146 86805"],
  location: "Mansarovar, Jaipur, Rajasthan, India",
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
      handle: "+91 70146 86805",
      href: "https://wa.me/917014686805",
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
  { value: "15+", label: "Products Delivered", note: "Digital solutions built to address real business needs." },
  { value: "6–10", label: "Weeks to Typical MVP", note: "Depends on project scope, complexity, and integrations." },
  { value: "2", label: "Founders Leading Delivery", note: "Direct communication with the people leading your project." },
  { value: "Jaipur", label: "Engineering & Delivery", note: "India-based team serving businesses across markets." },
];

export const industries = [
  { name: "E-commerce & Marketplaces", note: "Buying and selling platforms, multi-vendor marketplaces, coupon platforms and digital commerce experiences." },
  { name: "Service Booking & On-Demand Platforms", note: "Service booking applications, appointment management, vendor platforms and on-demand service experiences." },
  { name: "Mobility & Transportation", note: "Ride-sharing, carpooling, delivery platforms, real-time tracking and smart mobility solutions." },
  { name: "AI-Powered Applications", note: "AI-powered products, intelligent recommendations, image-based AI solutions and automated workflows." },
  { name: "Enterprise & Business Software", note: "ERP systems, financial management platforms, business dashboards and operational software." },
  { name: "Social & Community Platforms", note: "Social networking, communication applications, trader communities, content sharing and digital communities." },
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
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=NavRasa+IT+Solutions";

export const googleReviews = [
  {
    name: "Sanjay Kalyani",
    rating: 5,
    date: "7 days ago",
    quote:
      "Very excellent team.They do exactly what you ask them to do.I had very pleasant experience with my app. With this company.If I had option of 10 stars i would have given all 10.",
  },
  {
    name: "Mani Kandan",
    rating: 5,
    date: "4 weeks ago",
    quote:
      "Hello Navarasa IT Solutions Team,\n\nI'm genuinely so happy to have had the opportunity to work with you guys! ❤️\n\nI came to you with an idea for my project, Velvet Chat, and the entire experience has been amazing. Your services, teamwork, communication, and the way you handle and fix issues throughout the Velvet Chat app development process have really impressed me.\n\nFrom developing the Velvet Chat app to delivering the app and a website, I truly appreciate the dedication and effort your team has put into the project. I feel really lucky to have found such a great IT solutions team to bring my ideas to life.\n\nI'm really happy to work with you guys, and I'm looking forward to continuing this journey together! 👍🔥\n\nIf you're looking for a reliable team for app development, website development, or AI solutions, I would definitely recommend Navarasa IT Solutions.\n\nGreat team. Great people. Superb work. Highly recommended! 🚀🔥",
  },
  {
    name: "Canvade",
    rating: 5,
    date: "13 weeks ago",
    quote:
      "Working with Team NavRasa, especially Shreyansh, has been a great experience. They handled our project with professionalism from the initial concept to a market-ready website. What stood out most was their willingness to understand our vision, actively contribute ideas, and improve the overall product rather than just provide technical solutions.",
  },
  {
    name: "Dilip Sharma",
    rating: 5,
    date: "14 weeks ago",
    quote:
      "Since 30 days working with the team has been exciting to get started on trust in developing final ai tech we need in 2026. Thanks to the whole team for amazing work.",
  },
  {
    name: "Rahul Nagdeve",
    rating: 5,
    date: "13 hours ago",
    quote:
      "Had a great experience with Navrasa IT Solutions. Their team is professional, knowledgeable and supportive. They understand client requirements well and provide effective IT solutions with a strong focus on quality and timely delivery.\n\nReally appreciate their dedication, communication and commitment to customer satisfaction. Highly recommended for anyone looking for reliable IT services and technology solutions.\n\nWishing the entire team continued success!",
  },
  {
    name: "Collably",
    rating: 5,
    date: "13 hours ago",
    quote:
      "We had a great experience working with NavRasa IT Solutions on our project. Their team was professional, responsive, and attentive to our requirements. They understood our vision and worked closely with us to turn our ideas into a practical digital solution. Communication was smooth, and the team was supportive throughout the development process. I would recommend NavRasa IT Solutions to businesses looking for reliable mobile app and software development services. KUDOS to the founders!",
  },
];

export const googleReviewsSummary = {
  rating: "5.0",
  totalReviews: 8,
  featuredReviews: googleReviews.length,
};

export const faqs = [
  {
    q: "How do we start working together?",
    a: "Start with a discovery call. We discuss the problem, your users and your constraints, then send a written proposal with scope, timeline and cost. If it fits, we schedule a start date.",
  },
  {
    q: "How long does an MVP take to build?",
    a: "The timeline depends on the product scope, required integrations, design complexity and decision-making speed. We break the work into clear delivery stages, agree the MVP scope before development starts, and share progress through working builds throughout the engagement."
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
  eyebrow: "Mobile Applications & Custom Software Solutions",
  lines: ["Mobile App & Software", "Development Company in Jaipur"],
  brandTagline: "ENGINEERED FOR BUSINESS. BUILT TO SCALE.",
  statement:
    "NavRasa IT Solutions builds mobile apps and custom software for Jaipur startups and businesses. We create Android, iOS, web and SaaS products, with practical AI where it helps.",
  secondary:
    "From mobile applications to enterprise software, we turn complex requirements into reliable digital products.",
  primaryCta: { label: "Start Your Project", href: "/contact" },
  secondaryCta: { label: "Explore Our Work", href: "/work" },
  strip: ["Strategy", "Engineering", "Delivery", "Growth"],
  nodes: [
    "Android",
    "iOS",
    "Flutter",
    "React Native",
    "Custom Software",
    "SaaS",
    "AI",
    "APIs",
    "Automation",
  ],
};

export const manifesto = {
  headline: "Technology should create possibilities.",
  belief:
    "We turn ambitious ideas into high-performance mobile applications and custom software that help businesses operate smarter, serve customers better, and scale with confidence.",
  intro:
    "NavRasa partners with startups and growing businesses to turn complex requirements into reliable digital products, from mobile applications to scalable business software.",
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
    id: "mobile",
    title: "Mobile Application Development",
    text: "We design and develop high-performance Android and iOS applications that deliver intuitive experiences, support business operations and grow with your users.",
    tags: ["Android", "iOS", "Flutter & React Native"],
    capabilities: ["Android App Development", "iOS App Development", "Flutter Development", "React Native Development", "App UI/UX Engineering", "API & Third-Party Integrations", "App Maintenance & Modernization"],
  },
  {
    id: "enterprise",
    title: "Custom Software Development",
    text: "We engineer software around your business processes, operational requirements and long-term goals, simplifying workflows and solving complex challenges.",
    tags: ["Business Systems", "Integrations", "Automation"],
    capabilities: ["Custom Business Software", "Enterprise Applications", "Business Management Systems", "CRM & ERP Solutions", "Admin Dashboards", "Workflow Automation", "API Development & Integrations"],
  },
  {
    id: "saas",
    title: "SaaS & Digital Product Development",
    text: "From product architecture to launch, we help founders and businesses transform ideas into scalable digital products.",
    tags: ["SaaS", "Digital Products", "Integrations"],
    capabilities: ["SaaS Platform Development", "MVP Development", "Product Engineering", "Multi-Tenant Applications", "Subscription & Payment Systems", "Scalable Product Architecture", "Product Modernization"],
  },
  {
    id: "ai",
    title: "AI-Powered Solutions",
    text: "We integrate practical AI capabilities into applications and business workflows to automate tasks, improve efficiency and create smarter digital experiences.",
    tags: ["AI Integration", "LLM Apps", "Workflows"],
    capabilities: ["Generative AI Integration", "LLM Applications", "AI Agents & Assistants", "Intelligent Automation", "Document Intelligence", "AI APIs & Integrations", "Machine Learning Solutions"],
  },
  {
    id: "web",
    title: "Web Application Development",
    text: "We build responsive web applications, interactive platforms, dashboards and portals tailored to your business requirements and user needs.",
    tags: ["Web Apps", "Dashboards", "Portals"],
  },
  {
    id: "infra",
    title: "Backend, APIs & Cloud Solutions",
    text: "We engineer secure backend systems, APIs, databases and cloud infrastructure that connect applications and support reliable performance as your business grows.",
    tags: ["Backend", "APIs", "Cloud"],
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
  lead: "AI can make digital products smarter, workflows faster and business operations more efficient.",
  text: "NavRasa integrates AI-powered features, intelligent automation and custom AI solutions into applications and business systems to solve practical business challenges.",
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
  lead: "Every digital product needs a reliable foundation. We build the architecture, integrations and infrastructure that keep applications secure, performant and ready to evolve.",
  message: "We build systems that are designed not only to launch, but to evolve.",
  layers: [
    { name: "Frontend", modules: ["React", "Next.js", "Web Applications", "Mobile Interfaces"] },
    { name: "APIs", modules: ["REST APIs", "GraphQL", "Webhooks", "Integrations"] },
    { name: "Backend", modules: ["Node.js", "Python", "FastAPI", "Django"] },
    { name: "Data", modules: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    { name: "AI", modules: ["LLM Applications", "Embeddings", "AI Agents"] },
    { name: "Cloud", modules: ["AWS", "Google Cloud", "Firebase"] },
    { name: "Infrastructure", modules: ["CI/CD", "Monitoring", "Security", "Deployment"] },
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
  cta: { label: "Build Your MVP", href: "/contact" },
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
  cta: { label: "Discuss Custom Software", href: "/contact" },
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
    {
      title: "Product Thinking",
      text: "We understand the problem before writing code, building products around real user needs and business objectives.",
    },
    {
      title: "Engineering Depth",
      text: "Strong technical foundations, scalable architecture and reliable engineering built for the long term.",
    },
    {
      title: "Speed With Purpose",
      text: "We move quickly without compromising quality, maintainability or critical architectural decisions.",
    },
    {
      title: "AI-Native Mindset",
      text: "We integrate AI where it creates meaningful value, smarter workflows and measurable business impact.",
    },
    {
      title: "Business Understanding",
      text: "Every technical decision connects to your goals, customers, operations and growth.",
    },
    {
      title: "Long-Term Partnership",
      text: "We build beyond launch, supporting continuous improvement as your product and business evolve.",
    },
  ],
};

export const future = {
  headline: "We're just getting started.",
  lines: [
    "The biggest technology companies are built one product, one problem and one ambitious idea at a time.",
    "NavRasa is building toward that future.",
  ],
  cta: { label: "Start Your Project", href: "/contact" },
};

export const about = {
  headline: "Building the company we want to see in the future of technology.",
  intro:
    "NavRasa IT Solutions is a technology company focused on building digital products, AI solutions and scalable software systems.",
  text: "We work with startups and established businesses — from idea validation and product design through engineering, launch and scale. Our work spans web platforms, mobile applications, SaaS products and AI systems, and the strategy that decides what to build first.",
  mission: "Make powerful technology accessible to ambitious businesses and founders.",
  vision: "Build technology that creates meaningful impact at scale.",
  facts: [
    { k: "Based in", v: "Mansarovar, Jaipur, Rajasthan, India" },
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
      photo: "/images/shreyansh_about_cutout.webp",
      photoFallback: "/images/shreyansh_about_cutout.png",
      photoWidth: 800,
      photoHeight: 800,
      // EDIT: add a verified short bio when available.
      bio: "",
    },
    {
      name: "Sargam Yadav",
      role: "Co-Founder & CMO",
      focus: ["Growth", "Brand", "Partnerships"],
      href: "https://www.linkedin.com/in/sargamyadav",
      photo: "/images/sargam_about_cutout.webp",
      photoFallback: "/images/sargam_about_cutout.png",
      photoWidth: 685,
      photoHeight: 699,
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
  primary: { label: "Start Your Project", href: "/contact" },
  secondary: { label: "Talk to Our Team", href: "/contact" },
};

export const contactForm = {
  projectTypes: ["AI Product", "SaaS Platform", "Mobile Application", "Web Platform / Website", "MVP Development", "Enterprise Software", "Business Automation", "Other"],
  budgets: ["Under 1 Lakh INR", "1 to 3 Lakhs INR", "3 to 5 Lakhs INR", "5 to 10 Lakhs INR", "10 to 25 Lakhs INR", "25 Lakhs+ INR", "Not Sure Yet"],
  timelines: ["As soon as possible", "Within 1 month", "1 to 3 months", "3 to 6 months", "Just exploring"],
};

export const footer = {
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
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
