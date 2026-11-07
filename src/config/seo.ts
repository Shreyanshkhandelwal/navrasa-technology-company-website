export const SITE_URL = "https://www.navrasaitsolutions.com";
export const DEFAULT_IMAGE = `${SITE_URL}/navrasa-social.jpg`;
export type RouteSEO = { title: string; description: string; noindex?: boolean };

export const seoByPath: Record<string, RouteSEO> = {
  "/": { title: "Mobile App & Software Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions is a Jaipur-based mobile app and software development company building custom Android, iOS, web and AI solutions for startups and businesses. Transform your ideas into scalable digital products." },
  "/what-we-build": { title: "Software Development Services in Jaipur | NavRasa", description: "Explore mobile app, custom software, SaaS, AI, web application, backend and cloud development services from NavRasa IT Solutions in Jaipur." },
  "/mobile-app-development": { title: "Mobile App Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions develops custom Android, iOS, Flutter and React Native mobile apps for startups and businesses in Jaipur and international markets." },
  "/android-app-development": { title: "Android App Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions builds custom Android apps in Jaipur for startups and businesses, including business applications, customer platforms, API integrations and scalable Android products." },
  "/ios-app-development": { title: "iOS App Development Company in Jaipur | NavRasa", description: "Build custom iOS applications for iPhone with NavRasa IT Solutions. We develop business apps, customer platforms and scalable iOS products for startups and businesses in Jaipur." },
  "/flutter-app-development": { title: "Flutter App Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions develops cross-platform Flutter applications for Android and iOS. Build scalable mobile products for your business or startup in Jaipur." },
  "/react-native-development": { title: "React Native App Development in Jaipur | NavRasa", description: "Build Android and iOS applications with React Native. NavRasa IT Solutions develops cross-platform mobile apps for startups and businesses in Jaipur." },
  "/custom-software-development": { title: "Custom Software Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions is a custom software development company in Jaipur building business applications, enterprise software, internal management systems, customer portals and scalable digital platforms." },
  "/saas-development": { title: "SaaS Development Company in Jaipur | NavRasa", description: "Build scalable SaaS products with NavRasa IT Solutions. We develop subscription platforms, multi-user applications and cloud-based software for startups and businesses in Jaipur." },
  "/mvp-development": { title: "MVP Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions helps startups in Jaipur turn ideas into working MVPs through custom mobile app development, web applications, product engineering and scalable software." },
  "/web-application-development": { title: "Web Application Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions develops custom web applications in Jaipur, including business platforms, customer portals, admin dashboards, workflow systems and scalable web products." },
  "/ai-development": { title: "AI Development Company in Jaipur | NavRasa", description: "Build AI-powered applications with NavRasa IT Solutions in Jaipur. We develop AI integrations, intelligent business workflows, knowledge assistants and practical AI solutions." },
  "/ai-agent-development": { title: "AI Agent Development Company in Jaipur | NavRasa", description: "NavRasa IT Solutions develops AI agents for businesses in Jaipur, including workflow automation, AI assistants, API integrations and controlled intelligent business processes." },
  "/solutions": { title: "Digital Product Solutions for Startups & Businesses | NavRasa", description: "Discover NavRasa digital product solutions for startups and businesses, from MVP planning and mobile applications to SaaS platforms, automation and AI-enabled software." },
  "/capabilities": { title: "Software Engineering Capabilities in Jaipur | NavRasa", description: "Explore NavRasa's software engineering capabilities across product strategy, mobile and web development, backend systems, integrations, cloud infrastructure and AI." },
  "/about": { title: "About NavRasa IT Solutions | Software Company in Jaipur", description: "Learn about NavRasa IT Solutions, a founder-led technology team in Jaipur building mobile applications, custom software, SaaS platforms and practical AI products." },
  "/insights": { title: "Software Development Insights | NavRasa IT Solutions", description: "Read practical insights from NavRasa on mobile applications, custom software, SaaS product development, MVP planning, AI and digital product engineering." },
  "/contact": { title: "Contact a Software Development Company in Jaipur | NavRasa", description: "Discuss your mobile app, SaaS, MVP or custom software project with NavRasa IT Solutions in Jaipur. Share requirements and start a project conversation with our team." },
  "/careers": { title: "Careers at NavRasa IT Solutions | Opportunities Coming Soon", description: "Explore future career opportunities at NavRasa IT Solutions. We are building a team of passionate engineers, thinkers and innovators in Jaipur." },
  "/privacy": { title: "Privacy Policy | NavRasa IT Solutions", description: "Read how NavRasa IT Solutions collects, uses and protects personal and project information submitted through our website and enquiry channels.", noindex: true },
  "/terms": { title: "Terms & Conditions | NavRasa IT Solutions", description: "Review the terms governing use of the NavRasa IT Solutions website and the delivery of software development and technology services.", noindex: true },
};

export function normalizePath(pathname: string) { return pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`; }
export function getSEO(pathname: string): RouteSEO & { path: string; canonical: string } {
  const path = normalizePath(pathname);
  const seo = seoByPath[path] ?? { title: "NavRasa IT Solutions", description: "Mobile app and custom software development in Jaipur." };
  return { ...seo, path, canonical: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}` };
}
