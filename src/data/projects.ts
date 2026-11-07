export type ProjectCategory = "Mobile Applications" | "Web Development" | "E-commerce" | "Business Platforms";

export type CaseStudyProject = {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  industry: string;
  headline: string;
  overview: string;
  responsibility: string;
  challenge?: string;
  solutions: { title: string; text: string }[];
  features: { title: string; text: string }[];
  technologies?: string[];
  accent: string;
  deliverables: string[];
};

export const caseStudyProjects: CaseStudyProject[] = [
  {
    id: "ezyfix", slug: "ezyfix", name: "EzyFix",
    category: "Mobile Applications",
    categories: ["Mobile Applications", "Business Platforms"],
    industry: "Consumer · Local commerce",
    headline: "A mobile coupon platform with vendor management and real-time tracking.",
    overview: "EzyFix is a mobile application built around a coupon-selling model. The product connects a consumer experience with a vendor-side management platform.",
    responsibility: "NavRasa developed the mobile application experience, vendor panel and real-time coupon tracking functionality described in the verified project scope.",
    solutions: [
      { title: "Mobile Application", text: "A consumer-facing coupon application designed around a clear mobile experience." },
      { title: "Vendor Panel", text: "A management interface for vendors to handle offers and related activity." },
      { title: "Real-Time Tracking", text: "Coupon activity and status tracking designed to keep product information current." },
    ],
    features: [
      { title: "Coupon Discovery", text: "Consumer access to available coupons through the mobile experience." },
      { title: "Vendor Management", text: "A business-facing panel for managing coupon offers." },
      { title: "Real-Time Coupon Tracking", text: "Visibility into coupon activity and current tracking information." },
    ],
    accent: "#ff4d12",
    deliverables: ["Consumer mobile application", "Vendor management panel", "Real-time coupon tracking"],
  },
  {
    id: "richony", slug: "richony", name: "Richony",
    category: "E-commerce",
    categories: ["Web Development", "E-commerce"],
    industry: "E-commerce · Fragrance",
    headline: "A premium mobile-first storefront for a fragrance brand.",
    overview: "Richony is a premium fragrance brand website built to present products with elegance, speed and trust across desktop and mobile screens.",
    responsibility: "NavRasa developed the responsive e-commerce web experience and product presentation described in the project scope.",
    challenge: "The perfume brand needed a storefront that could communicate its premium identity while remaining fast, clear and easy to use on mobile devices.",
    solutions: [{ title: "Responsive Storefront", text: "A mobile-first web experience for presenting the fragrance brand and its products." }],
    features: [{ title: "Product Presentation", text: "A clear visual shopping experience designed around premium product presentation." }],
    technologies: ["Mobile-first responsive web platform"],
    accent: "#c9a96e",
    deliverables: ["Responsive e-commerce website", "Premium product presentation experience"],
  },
  {
    id: "suntech", slug: "suntech-power", name: "Suntech Power Corporation",
    category: "Web Development",
    categories: ["Web Development", "Business Platforms"],
    industry: "Energy · Solar",
    headline: "A lead-focused solar business website with service booking.",
    overview: "Suntech Power Corporation is a website and service-booking platform designed to present solar services and help potential customers make enquiries.",
    responsibility: "NavRasa developed the lead-focused website, service booking experience and SEO-ready web foundations described by the project.",
    challenge: "The solar business needed a practical online presence that could communicate its services and convert visitors into enquiries rather than operate as a static brochure.",
    solutions: [{ title: "Service Website", text: "A structured website for presenting Suntech's solar services." }, { title: "Service Booking", text: "A customer-facing booking experience for requesting solar services." }, { title: "SEO Foundations", text: "A structured, search-oriented implementation for the business website." }],
    features: [{ title: "Service Presentation", text: "Clear pages and content for communicating available solar services." }, { title: "Service Booking", text: "A customer path for submitting service requests." }, { title: "Enquiry Conversion", text: "Website content and actions focused on generating business enquiries." }],
    technologies: ["Web platform", "Service booking", "SEO foundations"],
    accent: "#f5b700",
    deliverables: ["Lead-focused business website", "Service-booking experience", "SEO-ready foundations"],
  },
  {
    id: "crid", slug: "crid-innovations", name: "CRID Innovations",
    category: "Web Development",
    categories: ["Web Development"],
    industry: "Business · Innovation",
    headline: "A modern business identity for an innovation company.",
    overview: "CRID Innovations is a responsive business website created to communicate the company's modern identity and reach the right audience clearly.",
    responsibility: "NavRasa developed the business website experience and responsive presentation for the brand.",
    solutions: [{ title: "Business Website", text: "A clear, modern web presence for presenting the organisation and its business identity." }, { title: "Responsive Experience", text: "A consistent presentation across common desktop and mobile screen sizes." }],
    features: [{ title: "Brand Presentation", text: "A focused digital identity that communicates the organisation clearly." }, { title: "Responsive Content", text: "Structured website content adapted for desktop and mobile visitors." }],
    technologies: ["Responsive web platform"],
    accent: "#4f8cff",
    deliverables: ["Business website", "Responsive brand presentation"],
  },
];
