import { useEffect } from "react";
import { company } from "@/data/site";

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
    const url = new URL(path, company.url).toString();
    document.title = title;
    setMeta("description", description);
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    ensure<HTMLLinkElement>('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    }).href = url;
  }, [title, description, path, noindex]);
}
