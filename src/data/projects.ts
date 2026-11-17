export type ProjectCategory =
  | "Mobile Applications"
  | "Web Development"
  | "E-commerce"
  | "Business Platforms";

export type CaseStudyProject = {
  id: string;
  slug: string;
  name: string;
  category?: ProjectCategory;
  categories: ProjectCategory[];
  industry?: string;
  headline?: string;
  portfolioDescription?: string;
  overview?: string;
  responsibility?: string;
  challenge?: string;
  approach?: string;
  solutions?: { title: string; text: string }[];
  features?: { title: string; text: string }[];
  technicalImplementation?: string;
  businessValue?: string;
  technologies?: string[];
  platforms: string[];
  websiteUrl?: string;
  playStorePackage?: string;
  accent?: string;
  deliverables?: string[];
};

export const caseStudyProjects: CaseStudyProject[] = [
  {
    id: "book-my-mechanik",
    slug: "book-my-mechanik",
    name: "Book My Mechanik",
    category: "Mobile Applications",
    categories: ["Mobile Applications", "Web Development", "Business Platforms"],
    industry: "Automotive Technology · On-Demand Services",
    headline: "Connecting Vehicle Owners With Automotive Services Through One Digital Ecosystem.",
    portfolioDescription: "An on-demand automotive service ecosystem connecting vehicle owners with mechanic partners through dedicated mobile applications and a supporting web experience.",
    overview: "Book My Mechanik is a digital automotive service ecosystem designed to simplify how customers access mechanic services. The platform connects vehicle owners and service professionals through dedicated customer and mechanic-partner applications, supported by a web-based experience.",
    responsibility: "The solution focuses on digitising service discovery and booking journeys while creating connected workflows for both sides of the automotive service network.",
    challenge: "Vehicle owners and service professionals need a coordinated way to discover services, request bookings and manage service delivery.",
    approach: "Dedicated experiences for customers and service partners support a more organised approach to service requests, booking coordination and service delivery.",
    solutions: [
      { title: "Customer app", text: "A dedicated mobile experience for customers accessing mechanic services." },
      { title: "Partner app", text: "A separate application for mechanic and service partners." },
      { title: "Connected service experience", text: "A supporting web platform brings the service journey beyond the mobile apps." },
    ],
    features: [
      { title: "Service booking", text: "A digital mechanic-service booking experience." },
      { title: "Partner workflows", text: "Connected customer and partner workflows support service coordination." },
      { title: "Mobile-first access", text: "Dedicated mobile applications serve customers and mechanic partners." },
    ],
    businessValue: "Brings vehicle owners and service professionals into a connected digital environment, helping organise service discovery, booking and coordination.",
    platforms: ["Customer Mobile App", "Mechanic Partner App", "Web Platform"],
    websiteUrl: "https://bookmymechanik.com",
  },
  {
    id: "velvet-chat",
    slug: "velvet-chat",
    name: "Velvet Chat",
    category: "Mobile Applications",
    categories: ["Mobile Applications"],
    industry: "Communication Technology · Social Networking",
    headline: "A Private Digital Communication Experience Built Around Secure Conversations.",
    portfolioDescription: "A private communication platform combining encrypted messaging, group conversations and real-time audio and video communication.",
    overview: "Velvet Chat is a digital communication platform designed to bring private conversations and social interaction into one mobile experience. The application combines individual messaging, group communication and audio/video calling capabilities to support different forms of digital interaction.",
    responsibility: "With an emphasis on communication privacy, the platform incorporates end-to-end encrypted messaging alongside an interface designed for everyday conversations and group engagement.",
    challenge: "People use different forms of communication for one-to-one and group interactions; Velvet Chat brings those experiences together in one mobile application.",
    approach: "The mobile communication experience combines private messaging, group conversations and audio/video calling.",
    solutions: [
      { title: "Private conversations", text: "One-to-one messaging with end-to-end encrypted communication." },
      { title: "Group communication", text: "Group conversations support shared communication within the application." },
      { title: "Audio and video calls", text: "Calling capabilities complement text-based conversations." },
    ],
    features: [
      { title: "Encrypted messaging", text: "Private one-to-one conversations with end-to-end encryption." },
      { title: "Group conversations", text: "A mobile experience for group communication." },
      { title: "Audio and video", text: "Audio and video calling within the communication platform." },
    ],
    businessValue: "Combines multiple communication methods within one application, offering users a unified environment for private and group interactions.",
    platforms: ["Android App"],
    playStorePackage: "com.chat.velvet",
  },
  {
    id: "swachh-railways",
    slug: "swachh-railways",
    name: "Indian Railways / Swachh Railways",
    category: "Business Platforms",
    categories: ["Mobile Applications", "Business Platforms"],
    industry: "Transportation Operations · Rail",
    headline: "Digitising Field Operations and Cleaning Management Through Connected Software.",
    portfolioDescription: "An operational management solution combining internal management software and an Android application to support railway cleaning-management workflows.",
    overview: "The Swachh Railways project focuses on bringing cleaning-management operations into a digital environment. The solution combines internal management software with an Android application designed to support field-level cleaning-management activities.",
    responsibility: "The system is positioned around operational coordination, digital workflows and a connected management experience, bringing field operations and management processes into a common digital framework.",
    challenge: "Cleaning-management activities involve field-level work and management processes that benefit from connected operational coordination.",
    approach: "The project brings internal management software and an Android application together to support cleaning-management workflows.",
    solutions: [
      { title: "Internal management software", text: "Management software supports cleaning-management operations." },
      { title: "Android application", text: "A mobile application supports field-level cleaning-management activities." },
      { title: "Connected operations", text: "The mobile and management experiences support a common operational framework." },
    ],
    features: [
      { title: "Field-level workflows", text: "Digital workflows support cleaning-management activities in the field." },
      { title: "Operational management", text: "Internal software supports cleaning-management processes." },
    ],
    businessValue: "Supports the digitisation and organisation of cleaning-management operations through dedicated mobile and management software.",
    platforms: ["Internal Management Software", "Android App"],
  },
  {
    id: "swap-street",
    slug: "swap-street",
    name: "Swap Street",
    category: "E-commerce",
    categories: ["Mobile Applications", "Web Development", "E-commerce"],
    industry: "Digital Marketplace · UAE",
    headline: "Building a Digital Marketplace Experience for the UAE Market.",
    portfolioDescription: "A UAE-focused digital marketplace designed to bring marketplace discovery and user interactions into a unified web experience.",
    overview: "Swap Street is a digital marketplace platform developed for the UAE market. The platform is positioned around an online marketplace experience, bringing users into a digital environment where marketplace offerings can be presented and explored.",
    responsibility: "The project focuses on building a structured web experience that supports marketplace discovery, digital presentation and user interaction.",
    challenge: "Marketplace offerings need a structured online experience where users can discover and explore them.",
    approach: "A dedicated digital marketplace experience brings marketplace discovery and user interactions into one web environment.",
    solutions: [
      { title: "Marketplace experience", text: "A structured online environment for presenting and exploring marketplace offerings." },
      { title: "Digital discovery", text: "The web experience supports marketplace discovery and user interaction." },
    ],
    businessValue: "Creates a dedicated digital marketplace presence and provides a structured online experience for marketplace users.",
    platforms: ["Mobile App", "Web Platform"],
    websiteUrl: "https://swapstreet.ae",
  },
  {
    id: "orange-air",
    slug: "orange-air",
    name: "Orange Air",
    category: "Business Platforms",
    categories: ["Web Development", "Business Platforms"],
    industry: "Logistics · Cargo Technology",
    headline: "Creating a Digital Cargo Enquiry and Booking Experience.",
    portfolioDescription: "A cargo-focused digital platform designed to simplify how customers explore services, submit enquiries and engage with logistics operations.",
    overview: "Orange Air is a cargo-focused digital platform built to support the company's online service experience. The website provides a digital destination for cargo-related enquiries and booking interactions.",
    responsibility: "The project focuses on presenting cargo services through a structured web interface and creating a convenient digital communication channel between prospective customers and the business.",
    challenge: "Customers need an accessible online channel to understand cargo services and make enquiries or booking-related requests.",
    approach: "A structured web interface presents cargo services and supports digital communication with the business.",
    solutions: [
      { title: "Cargo service presentation", text: "A web experience presents the company's cargo services." },
      { title: "Enquiry and booking interactions", text: "Customers can engage through cargo enquiry and booking-related workflows." },
      { title: "Digital communication", text: "The platform provides a channel between prospective customers and the business." },
    ],
    features: [
      { title: "Service information", text: "Cargo services are presented through a structured web interface." },
      { title: "Customer enquiries", text: "Digital enquiry workflows support customer engagement." },
    ],
    businessValue: "Helps bring cargo-related customer enquiries and service interactions into a more accessible digital channel.",
    platforms: ["Web Platform"],
    websiteUrl: "https://orangeair.kz",
  },
  {
    id: "mediforce",
    slug: "mediforce",
    name: "Mediforce",
    category: "Business Platforms",
    categories: ["Web Development", "Business Platforms"],
    industry: "Healthcare Technology · Workforce Management",
    headline: "A Connected Workforce Management Platform for Healthcare Operations.",
    portfolioDescription: "A healthcare workforce platform bringing credentialing, scheduling, timesheets and pay-related workflows into a connected digital environment.",
    overview: "Mediforce is a healthcare workforce management platform designed to support the operational requirements of healthcare staffing and workforce coordination. The platform brings together professional credentialing, scheduling, timesheet management and pay-related workflows.",
    responsibility: "By organising these activities within a connected digital platform, Mediforce supports a more structured approach to managing workforce information and operational processes.",
    challenge: "Healthcare staffing and workforce coordination involve connected credentialing, scheduling, timesheet and pay-related processes.",
    approach: "The platform brings these workforce processes together in a connected digital environment.",
    solutions: [
      { title: "Credentialing", text: "Healthcare workforce credentialing is part of the platform's workflow scope." },
      { title: "Scheduling and timesheets", text: "The platform supports workforce scheduling and timesheet management." },
      { title: "Pay-related workflows", text: "Pay-related processes are included in the workforce platform." },
    ],
    features: [
      { title: "Workforce coordination", text: "Connected workflows support healthcare workforce coordination." },
      { title: "Operational processes", text: "Credentialing, scheduling, timesheets and pay-related workflows are brought together." },
    ],
    businessValue: "Helps organise important healthcare workforce processes through a centralised digital platform, supporting operational visibility and more structured coordination.",
    platforms: ["Web Platform"],
    websiteUrl: "https://mediforcehealth.com",
  },
  {
    id: "exam-neeti",
    slug: "exam-neeti",
    name: "Exam Neeti",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Education Technology · Digital Learning",
    headline: "Creating a Focused Digital Experience for the Education and Examination Ecosystem.",
    portfolioDescription: "An education-focused digital platform designed around Exam Neeti's examination-related services, information architecture and online user experience.",
    overview: "Exam Neeti is an education-oriented digital experience built to communicate examination-related information and services through a structured web platform. The project focuses on presenting information clearly, organising content into accessible sections and creating an intuitive experience for visitors exploring the platform's educational offerings.",
    challenge: "Visitors need to find and understand examination-related information and services through a clear online experience.",
    approach: "The web platform organises educational information into accessible sections and presents it through a structured user experience.",
    businessValue: "Establishes a dedicated digital presence for education-related services and makes important information easier for visitors to explore.",
    platforms: ["Website"],
    websiteUrl: "https://examneeti.in",
  },
  {
    id: "oggy-holidays",
    slug: "oggy-holidays",
    name: "Oggy Holidays",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Travel Technology · Tourism",
    headline: "Building a Digital Travel Experience That Brings Holiday Offerings Closer to Customers.",
    portfolioDescription: "A travel-focused digital platform designed to present holiday offerings and create an accessible online experience for prospective travellers.",
    overview: "Oggy Holidays is a digital travel presence developed to showcase the company's holiday and travel-related offerings through an organised website experience. The platform focuses on presenting travel information, communicating available offerings and helping prospective customers explore travel opportunities through a structured digital interface.",
    challenge: "Prospective travellers need a clear online destination to explore travel information and holiday offerings.",
    approach: "An organised website experience presents the business's travel information and available offerings.",
    businessValue: "Provides a dedicated digital destination for the travel business, supporting online discovery and customer enquiries.",
    platforms: ["Website"],
    websiteUrl: "https://oggyholidays.com",
  },
  {
    id: "taso",
    slug: "taso",
    name: "Taso",
    category: "Mobile Applications",
    categories: ["Mobile Applications"],
    industry: "Digital Platform · Mobile Application",
    headline: "A Dedicated Mobile Product Experience Built Around Its Core User Journey.",
    portfolioDescription: "A mobile-first digital product developed to deliver its core application experience through structured user journeys and an accessible interface.",
    overview: "Taso is a dedicated mobile application developed as a digital product. Its portfolio presentation focuses on the application experience and structured user journeys; specific implemented functionality is not documented in the approved project information.",
    businessValue: "Provides users with a focused mobile product experience built around the application's intended purpose.",
    platforms: ["Android App"],
    playStorePackage: "com.taso.main",
  },
  {
    id: "collably",
    slug: "collably",
    name: "Collably",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Digital Platform · Web Experience",
    headline: "A Purpose-Built Digital Experience Designed Around the Collably Platform.",
    portfolioDescription: "A dedicated web experience developed to present Collably's product offering through a structured, user-focused digital interface.",
    overview: "Collably is a digital platform with a dedicated web presence designed around its product identity and user experience. Specific platform functionality is not documented in the approved project information.",
    responsibility: "The project provides a dedicated digital experience that communicates the platform's offering and supports its intended user journeys.",
    businessValue: "Creates a dedicated digital experience that communicates the platform's offering and supports its intended user journeys.",
    platforms: ["Website"],
    websiteUrl: "https://collably.in",
  },
  {
    id: "sports-wizards",
    slug: "sports-wizards",
    name: "Sports Wizards",
    category: "Mobile Applications",
    categories: ["Mobile Applications"],
    industry: "Sports Technology",
    headline: "Bringing Sports Experiences Into a Dedicated Digital Application.",
    portfolioDescription: "A sports-focused mobile application designed to deliver its actual sports-related product experience through a dedicated digital platform.",
    overview: "Sports Wizards represents a mobile product built around sports-related user requirements. The project is presented as a dedicated sports technology application; specific implemented features are not documented in the approved project information.",
    businessValue: "A purpose-built mobile experience bringing the project's sports-related services into a structured digital environment.",
    platforms: ["iOS App"],
  },
  {
    id: "sapiens-group",
    slug: "sapiens-group",
    name: "Sapiens Group",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Corporate Digital Experience",
    headline: "A Professional Digital Presence Built to Communicate Business Capabilities.",
    portfolioDescription: "A corporate web experience designed to present Sapiens Group's identity, services and business information through a structured digital presence.",
    overview: "The Sapiens Group project focuses on delivering a professional digital experience for the organisation. The website acts as a central online destination for presenting the company's business identity, capabilities and information, with an emphasis on content organisation and a structured visitor experience.",
    challenge: "The organisation needs a central online destination to communicate its business identity, capabilities and information.",
    approach: "A structured corporate web experience organises business information and presents it professionally.",
    businessValue: "Strengthens the organisation's digital presence and provides a structured channel for communicating its business identity and services.",
    platforms: ["Website"],
    websiteUrl: "https://sapiensgroup.in",
  },
];

export type PortfolioOnlyProject = {
  id: string;
  name: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  industry: string;
  headline: string;
  portfolioDescription: string;
  platforms: string[];
  websiteUrl?: string;
  status?: "in-development";
};

export const portfolioOnlyProjects: PortfolioOnlyProject[] = [
  {
    id: "gift-easy",
    name: "GiftEasy",
    category: "E-commerce",
    categories: ["Web Development", "E-commerce"],
    industry: "E-commerce · Digital Commerce",
    headline: "A Digital Commerce Experience for Gift Discovery.",
    portfolioDescription: "GiftEasy is an online gifting-focused digital experience developed to present gift-related offerings through a dedicated web destination. The project focuses on digital product presentation and an accessible browsing experience.",
    platforms: ["Website"],
    websiteUrl: "https://gift-easy.com",
  },
  {
    id: "hello-mam",
    name: "Hello Mam",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Digital Platform · Web Experience",
    headline: "A Dedicated Digital Experience for the Hello Mam Brand.",
    portfolioDescription: "Hello Mam is a brand-focused digital project developed to establish a structured online presence and communicate its offering through a dedicated website experience.",
    platforms: ["Website"],
    websiteUrl: "https://hellomam.co.in",
  },
  {
    id: "vidyamalika",
    name: "Vidyamalika",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Education · Digital Presence",
    headline: "Bringing an Education-Focused Brand Into the Digital Space.",
    portfolioDescription: "Vidyamalika is an education-related digital presence developed to communicate its identity and information through a structured online experience.",
    platforms: ["Website"],
    websiteUrl: "https://vidyamalika.com",
  },
  {
    id: "gear-gains",
    name: "Gear Gains",
    category: "E-commerce",
    categories: ["Web Development", "E-commerce"],
    industry: "E-commerce · Digital Commerce",
    headline: "A Digital Storefront Built Around the Gear Gains Brand.",
    portfolioDescription: "Gear Gains is a digital commerce-oriented website project designed to establish an online presence for the brand and present its product offering through a dedicated web experience.",
    platforms: ["Website"],
    websiteUrl: "https://geargains.in",
  },
  {
    id: "wordcraftier",
    name: "Wordcraftier",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Digital Platform · Web Experience",
    headline: "A Dedicated Online Experience for the Wordcraftier Brand.",
    portfolioDescription: "Wordcraftier is a digital web project developed to communicate the brand's identity and offering through a dedicated online presence.",
    platforms: ["Website"],
    websiteUrl: "https://wordcraftier.com",
  },
  {
    id: "gyaan-grid",
    name: "Gyaan Grid",
    category: "Business Platforms",
    categories: ["Business Platforms"],
    industry: "Education",
    headline: "Building a Dedicated Digital Experience for the Next Generation of Learning.",
    portfolioDescription: "Gyaan Grid is an education-oriented digital project being developed to bring its intended learning-related experience into a structured digital platform.",
    platforms: [],
    status: "in-development",
  },
  {
    id: "behind-trip",
    name: "Behind Trip",
    category: "Business Platforms",
    categories: ["Business Platforms"],
    industry: "Travel",
    headline: "Developing a Dedicated Digital Experience for Travel Discovery.",
    portfolioDescription: "Behind Trip is an upcoming travel-oriented digital project being developed around a dedicated digital experience for its intended users.",
    platforms: [],
    status: "in-development",
  },
];

export const homepageFeaturedProjectIds = [
  "book-my-mechanik",
  "swachh-railways",
  "velvet-chat",
  "swap-street",
  "orange-air",
  "mediforce",
] as const;
