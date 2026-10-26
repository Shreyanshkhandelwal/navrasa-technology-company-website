import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { company } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

/* Policy copy adapted from the statements published on navrasaitsolutions.com.
   EDIT: have these reviewed by your legal adviser before launch. */

const LAST_UPDATED = "February 2026";

type Clause = { h: string; p: string[] };

const privacy: Clause[] = [
  {
    h: "Information we collect",
    p: [
      "We may collect personal information such as your name, email address, phone number, organisation details and project requirements when you contact us, submit an enquiry form or use our services.",
      "We also collect limited technical information, such as browser type and pages visited, to understand how the website is used and to improve it.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "Information is used to respond to enquiries, prepare proposals, deliver and support agreed services, and keep you informed about the work we are doing for you.",
      "We do not sell your personal information. We do not share it with third parties except where it is necessary to deliver a service you have asked for, or where we are required to by law.",
    ],
  },
  {
    h: "Third-party services",
    p: [
      "Some services involve third-party providers, for example payment gateways, cloud hosting and analytics. These providers operate under their own privacy policies, and NavRasa IT Solutions is not responsible for their practices.",
    ],
  },
  {
    h: "Data security",
    p: [
      "We implement industry-standard security measures to protect your personal and project data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute safety.",
    ],
  },
  {
    h: "Confidentiality",
    p: [
      "Project enquiries are treated as confidential. We will sign a mutual non-disclosure agreement on request, and we do not publish client work or results without written permission.",
    ],
  },
  {
    h: "Your rights",
    p: [
      `You may request access to, correction of, or deletion of the personal information we hold about you. Write to ${company.email} and we will respond within a reasonable period.`,
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this Privacy Policy from time to time to reflect changes in technology, law or our practices. Continued use of our services indicates acceptance of the updated policy.",
    ],
  },
];

const terms: Clause[] = [
  {
    h: "Acceptance of terms",
    p: [
      "By accessing or using the NavRasa IT Solutions website and services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
    ],
  },
  {
    h: "Scope of services",
    p: [
      "Services are delivered according to the written proposal, scope document or agreement signed by both parties. Work outside that agreed scope is quoted and approved separately before it begins.",
    ],
  },
  {
    h: "Payments",
    p: [
      "Fees, payment schedules and milestones are set out in the proposal or agreement. Invoices are payable within the period stated on the invoice. Delivery timelines assume payments and client approvals are received on schedule.",
    ],
  },
  {
    h: "Client responsibilities",
    p: [
      "Projects depend on timely feedback, approvals, content and access to any systems we need to integrate with. Delays in these may affect agreed timelines.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "On receipt of final payment, ownership of the source code, designs and assets created specifically for your project transfers to you.",
      "Third-party components, open-source libraries and licensed tools remain subject to their own licences. NavRasa retains ownership of its pre-existing tools, frameworks and internal know-how.",
    ],
  },
  {
    h: "Warranty and support",
    p: [
      "We provide a defined warranty window after launch covering defects in the work we delivered. The warranty does not cover new features, third-party service changes or issues caused by modifications made by others.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "NavRasa IT Solutions is not liable for indirect, incidental or consequential damages arising from the use of our services. Services are provided on an \u201cas is\u201d basis without warranties of any kind beyond those stated in the signed agreement.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These Terms & Conditions are governed by the laws of India. Any disputes will be handled in the jurisdiction of our registered office.",
    ],
  },
];

function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const clauses = isPrivacy ? privacy : terms;
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";

  useSEO({
    title: `${title} — ${company.name}`,
    description: isPrivacy
      ? "How NavRasa IT Solutions collects, uses and protects personal and project information."
      : "The terms that govern the use of the NavRasa IT Solutions website and the delivery of our services.",
    path: isPrivacy ? "/privacy" : "/terms",
  });

  return (
    <>
      <PageHero
        label={title}
        size="md"
        lines={isPrivacy ? ["Privacy", "policy."] : ["Terms &", "conditions."]}
        intro={
          isPrivacy
            ? "How we handle your information, and the commitments we make about confidentiality."
            : "The basis on which we provide our services, including ownership, payment and liability."
        }
        meta={
          <>
            <span>Last updated: {LAST_UPDATED}</span>
            <span className="hidden sm:inline">{company.name}</span>
            <span>{company.location}</span>
          </>
        }
      />

      <section className="relative bg-paper text-ink">
        <div className="container-x section-y">
          <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8">
            {/* contents */}
            <aside className="col-span-12 lg:col-span-3">
              <nav aria-label="On this page" className="lg:sticky lg:top-28">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">Contents</p>
                <ol className="mt-5 flex flex-col gap-2.5">
                  {clauses.map((c, i) => (
                    <li key={c.h}>
                      <a
                        href={`#clause-${i}`}
                        className="flex gap-3 text-[14px] leading-snug text-ink/60 transition-colors hover:text-ink"
                      >
                        <span className="font-mono text-[11px] text-mute">{String(i + 1).padStart(2, "0")}</span>
                        {c.h}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* body */}
            <div className="col-span-12 lg:col-span-8 lg:col-start-5">
              <ol className="border-t border-ink/12">
                {clauses.map((c, i) => (
                  <Reveal as="li" key={c.h} id={`clause-${i}`} className="border-b border-ink/12 py-9 md:py-11">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-mute">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.h}</h2>
                    </div>
                    <div className="mt-5 flex flex-col gap-4 pl-0 sm:pl-10">
                      {c.p.map((para) => (
                        <p key={para.slice(0, 32)} className="max-w-[68ch] text-[15.5px] leading-relaxed text-ink/70">
                          {para}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </ol>

              <Reveal className="mt-12 border border-ink/12 bg-paper-2 p-7 md:p-9">
                <h2 className="font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl">Contact us</h2>
                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink/65">
                  Questions about this {isPrivacy ? "policy" : "agreement"}? Write to us and we will respond.
                </p>
                <dl className="mt-6 flex flex-col gap-2 text-[15px]">
                  <div className="flex gap-3">
                    <dt className="w-20 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute">Email</dt>
                    <dd>
                      <a href={`mailto:${company.email}`} className="underline underline-offset-4">
                        {company.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute">Office</dt>
                    <dd className="text-ink/80">{company.location}</dd>
                  </div>
                </dl>
                <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-mute">
                  EDIT: have this page reviewed by your legal adviser before launch.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PrivacyPage() {
  return <Legal kind="privacy" />;
}

export function TermsPage() {
  return <Legal kind="terms" />;
}
