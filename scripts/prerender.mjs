import fs from "node:fs/promises";
import path from "node:path";
const distDir = path.resolve("dist");
const baseHtml = await fs.readFile(path.join(distDir, "index.html"), "utf8");
const { render } = await import(path.resolve("dist-ssr/entry-server.js"));
const routes = ["/", "/what-we-build", "/mobile-app-development", "/android-app-development", "/ios-app-development", "/flutter-app-development", "/react-native-development", "/custom-software-development", "/saas-development", "/mvp-development", "/web-application-development", "/ai-development", "/ai-agent-development", "/solutions", "/capabilities", "/about", "/insights", "/contact", "/careers", "/privacy", "/terms"];

function removeHeadTags(html) {
  html = html.replace(/\s*<title>[^<]*<\/title>/i, "");
  html = html.replace(/\s*<meta[^>]+(?:name="(?:description|robots|twitter:title|twitter:description|twitter:image)"|property="(?:og:title|og:description|og:url|og:type|og:image|og:image:alt|og:locale|og:site_name)")[^>]*>/gi, "");
  html = html.replace(/\s*<link[^>]+rel="canonical"[^>]*>/gi, "");
  html = html.replace(/\s*<script[^>]+id="(?:route|breadcrumb|service)-seo-schema"[^>]*>[\s\S]*?<\/script>/gi, "");
  return html;
}

for (const route of routes) {
  const rendered = render(route);
  const headMarkers = rendered.head.match(/<!--SEO_TITLE-->([\s\S]*?)<!--SEO_TITLE_END-->/);
  const title = headMarkers?.[1] ?? "NavRasa IT Solutions";
  let html = removeHeadTags(baseHtml);
  const headOnly = rendered.head.replace(/<!--SEO_TITLE-->[\s\S]*?<!--SEO_TITLE_END-->/, `<title>${title}</title>`);
  html = html.replace("</head>", `  ${headOnly}\n</head>`).replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`);
  if (route === "/") await fs.writeFile(path.join(distDir, "index.html"), html);
  else {
    const dir = path.join(distDir, route.replace(/^\//, ""));
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, "index.html"), html);
  }
}
console.log(`Prerendered ${routes.length} SEO routes.`);
