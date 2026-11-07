import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { DEFAULT_IMAGE, getSEO } from "./config/seo";

export function render(url: string) {
  const seo = getSEO(url);
  const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const serviceRoutes = ["/mobile-app-development", "/android-app-development", "/ios-app-development", "/flutter-app-development", "/react-native-development", "/custom-software-development", "/saas-development", "/mvp-development", "/web-application-development", "/ai-development", "/ai-agent-development"];
  const breadcrumb = seo.path === "/" ? "" : `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.navrasaitsolutions.com/" }, { "@type": "ListItem", position: 2, name: seo.title.replace(/ \\| NavRasa$/, ""), item: seo.canonical }] })}</script>`;
  const service = serviceRoutes.includes(seo.path) ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: seo.title.replace(/ \\| NavRasa$/, ""), description: seo.description, url: seo.canonical, provider: { "@type": "Organization", name: "NavRasa IT Solutions", url: "https://www.navrasaitsolutions.com/" }, areaServed: [{ "@type": "AdministrativeArea", name: "Mansarovar, Jaipur, Rajasthan, India" }, { "@type": "City", name: "Jaipur" }] })}</script>` : "";
  const head = `<!--SEO_TITLE-->${seo.title}<!--SEO_TITLE_END--><meta name="description" content="${seo.description.replace(/"/g, "&quot;")}"><meta name="robots" content="${robots}"><link rel="canonical" href="${seo.canonical}"><meta property="og:title" content="${seo.title.replace(/"/g, "&quot;")}"><meta property="og:description" content="${seo.description.replace(/"/g, "&quot;")}"><meta property="og:url" content="${seo.canonical}"><meta property="og:image" content="${DEFAULT_IMAGE}"><meta name="twitter:title" content="${seo.title.replace(/"/g, "&quot;")}"><meta name="twitter:description" content="${seo.description.replace(/"/g, "&quot;")}"><meta name="twitter:image" content="${DEFAULT_IMAGE}">${breadcrumb}${service}`;

  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  return { html, head };
}