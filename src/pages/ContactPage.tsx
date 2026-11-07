import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { company, finalCta } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

export function ContactPage() {
  useEffect(() => trackEvent("contact_page_view"), []);
  useSEO({
    title: "Start Building — Contact NavRasa IT Solutions",
    description:
      "Tell us what you're building. Project enquiries for AI products, SaaS, mobile apps, web platforms, MVPs, enterprise software and automation — answered by the people who build them.",
    path: "/contact",
  });

  return (
    <>
      <PageHero
        label="Start Your Project"
        lines={["Have a", "big idea?"]}
        intro={`${finalCta.text} Tell us where you are — we'll reply with honest thoughts on scope, approach and fit.`}
        meta={
          <>
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-paper">
              {company.email}
            </a>
            <span className="hidden sm:inline">{company.city}</span>
            <span>Replies from the people who build</span>
          </>
        }
      />
      <Contact />
    </>
  );
}
