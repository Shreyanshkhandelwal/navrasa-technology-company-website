import { useEffect } from "react";
import { DEFAULT_IMAGE, getSEO } from "@/config/seo";

type SEO = { title: string; description: string; path: string; noindex?: boolean };

function ensure<T extends HTMLElement>(selector: string, create: () => T): T {
  let el = document.head.querySelector<T>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(key: string, content: string, attr: "name" | "property" = "name") {
  ensure<HTMLMetaElement>(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  }).setAttribute("content", content);
}

/** Per-route metadata: title, description, canonical, Open Graph and Twitter. */
export function useSEO({ title, description, path, noindex = false }: SEO) {
  useEffect(() => {
    const routeSEO = getSEO(path);
    const url = routeSEO.canonical;
    const finalTitle = routeSEO.title;
    const finalDescription = routeSEO.description;
    const finalNoindex = routeSEO.noindex ?? noindex;
    document.title = finalTitle;
    setMeta("description", finalDescription);
    setMeta("robots", finalNoindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta("og:title", finalTitle, "property");
    setMeta("og:description", finalDescription, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:locale", "en_IN", "property");
    setMeta("og:site_name", "NavRasa IT Solutions", "property");
    setMeta("og:image", DEFAULT_IMAGE, "property");
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", finalTitle);
    setMeta("twitter:description", finalDescription);
    setMeta("twitter:image", DEFAULT_IMAGE);
    ensure<HTMLLinkElement>('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    }).href = url;
  }, [title, description, path, noindex]);
}
