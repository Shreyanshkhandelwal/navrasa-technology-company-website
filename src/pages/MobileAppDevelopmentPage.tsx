import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEnquiry } from "@/components/EnquiryContext";
import { Eyebrow, Lines, Reveal } from "@/components/ui";
import { work } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

type AppType = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

const appTypes: AppType[] = [
  {
    number: "01",
    title: "Android App Development",
    description: "Build Android applications designed for performance, usability and compatibility across supported Android devices.",
    capabilities: ["Custom Android Applications", "Kotlin-Based Development", "Android UI Engineering", "API Integrations", "Device Compatibility", "Play Store Release Support"],
  },
  {
    number: "02",
    title: "iOS App Development",
    description: "Develop polished iOS applications for Apple's mobile ecosystem, with attention to usability, performance and reliable integrations.",
    capabilities: ["Custom iOS Applications", "Swift-Based Development", "iPhone Application Development", "iOS UI Engineering", "API Integrations", "App Store Release Support"],
  },
  {
    number: "03",
    title: "Flutter App Development",
    description: "Build cross-platform mobile applications using Flutter from a shared codebase where it is appropriate for the product.",
    capabilities: ["Flutter App Development", "Cross-Platform Engineering", "Custom UI Development", "Firebase Integrations", "Backend & API Connectivity", "Application Maintenance"],
  },
  {
    number: "04",
    title: "React Native Development",
    description: "Develop cross-platform experiences using React Native and an efficient shared JavaScript and React development approach.",
    capabilities: ["React Native Applications", "Cross-Platform Development", "React Native UI Engineering", "API Integrations", "Authentication Systems", "Performance Optimisation"],
  },
];

const features = ["User Registration & Authentication", "User Profiles & Account Management", "Push Notifications", "Payment Gateway Integration", "Real-Time Features", "Location & Maps Integration", "Chat & Messaging", "Admin Panels & Dashboards", "API & Third-Party Integrations", "Analytics & Reporting", "Media Uploads & Management", "AI-Powered Features"];

const process = [
  ["Discovery", "We understand your idea, target audience, objectives, feature requirements and technical constraints.", "Product understanding and initial requirements."],
  ["Strategy & Planning", "We define the product scope, development approach, architecture and delivery roadmap.", "Project scope and development plan."],
  ["UI/UX Design", "We plan user journeys and design interfaces around usability, consistency and audience needs.", "User flows and approved interface designs."],
  ["Development", "We build the application, backend systems and integrations through structured development cycles.", "Working builds and progress demonstrations."],
  ["Testing & Launch", "We test functionality, device compatibility, performance and release requirements.", "Tested application and release preparation."],
  ["Support & Improvement", "After launch, we can support maintenance, fixes, features and product improvements.", "Continued product support."],
];

const faqs = [
  ["How much does it cost to develop a mobile application?", "The cost depends on the application's features, design complexity, backend requirements, integrations and development approach. A focused MVP generally requires less investment than a large application with multiple user roles and advanced functionality. We first understand your requirements and then provide a project-specific estimate."],
  ["How long does it take to develop a mobile application?", "The timeline depends on the product scope, number of features, integrations, platform requirements and testing needs. A focused MVP may take around 6–10 weeks, while more complex applications can require longer. We define a realistic timeline after understanding the requirements."],
  ["Should I build a native app or use Flutter or React Native?", "The right approach depends on your product. Native development can be suitable when platform-specific functionality or specialised performance requirements are important. Flutter and React Native can be effective when building for both Android and iOS with a shared codebase is appropriate. We help evaluate the trade-offs before recommending an approach."],
  ["Can you build applications for both Android and iOS?", "Yes. We work with native and cross-platform development approaches. Depending on the requirements, we can plan separate Android and iOS applications or a shared cross-platform codebase."],
  ["Can you build an MVP for my startup?", "Yes. We help founders turn ideas into functional mobile products by identifying essential features, planning the technical architecture and developing an initial version suitable for real-world testing and feedback."],
  ["Can you integrate payment gateways and third-party APIs?", "Yes. We can integrate supported payment gateways, authentication services, backend APIs, maps, notifications and other third-party services based on your product requirements and provider availability."],
  ["Will I own the application source code?", "Our project arrangements define ownership and handover clearly. As stated in our company terms, source code, designs and assets transfer to the client upon final payment, subject to the agreed contract."],
  ["Can you improve or maintain an existing mobile application?", "Yes. We can review existing applications, understand their technical structure and help with bug fixes, performance improvements, feature additions, integrations and ongoing maintenance."],
  ["Do you provide backend development along with mobile applications?", "Yes. Mobile applications often require backend services, databases, APIs, authentication and integrations. We can develop these supporting systems as part of the project scope."],
  ["How do we get started?", "Start by sharing your application idea and requirements through our project enquiry form. Our team will review the information and get in touch to discuss the product, scope and potential next steps."],
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return <div className="border-t border-ink/12">{faqs.map(([question, answer], index) => {
    const active = open === index;
    return <div key={question} className="border-b border-ink/12">
      <h3><button type="button" onClick={() => setOpen(active ? null : index)} aria-expanded={active} aria-controls={`mobile-faq-${index}`} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-[-0.01em] text-ink md:text-xl"><span>{question}</span><span className="relative h-4 w-4 shrink-0" aria-hidden="true"><span className="absolute left-0 top-1/2 h-px w-full bg-current"/><span className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform ${active ? "scale-y-0" : "scale-y-100"}`}/></span></button></h3>
      <AnimatePresence initial={false}>{active && <motion.div id={`mobile-faq-${index}`} initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }} exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-[65ch] pb-7 pr-10 text-[15px] leading-relaxed text-ink/65">{answer}</p></motion.div>}</AnimatePresence>
    </div>;
  })}</div>;
}

export function MobileAppDevelopmentPage() {
  const { openEnquiry } = useEnquiry();
  useSEO({
    title: "Mobile App Development Company in Jaipur | Android & iOS Apps | NavRasa",
    description: "NavRasa IT Solutions develops custom Android and iOS mobile applications using Flutter and React Native. We help startups and businesses build scalable mobile apps in Jaipur, India.",
    path: "/mobile-app-development",
  });

  useEffect(() => {
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.dataset.mobileFaq = "true";
    faqSchema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) });
    document.head.append(faqSchema);
    return () => { faqSchema.remove(); };
  }, []);

  const mobileProject = work.projects.find((project) => project.id === "ezyfix");

  return <>
    <section className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-[radial-gradient(45%_55%_at_78%_30%,rgba(255,77,18,0.09),transparent_70%)]" aria-hidden="true" />
      <div className="container-x relative grid min-h-[65svh] grid-cols-12 items-end gap-x-4 gap-y-8 pb-12 pt-28 md:gap-x-8 md:pb-16 md:pt-36">
        <div className="col-span-12 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex items-center gap-3 text-mute-2"><span className="h-1.5 w-1.5 bg-signal"/><Link to="/">NavRasa</Link><span>/</span><span className="text-paper" aria-current="page">Mobile App Development</span></nav>
          <Eyebrow label="NAVRASA / MOBILE APP DEVELOPMENT" />
          <Lines as="h1" lines={["Mobile applications.", "Built for what's next."]} reveal={false} className="display display-lg mt-8 uppercase text-paper" />
        </div>
        <Reveal className="col-span-12 lg:col-span-5 lg:pl-8">
          <p className="font-display text-xl font-semibold leading-snug tracking-[-0.02em] md:text-2xl">Turn your idea into a powerful mobile experience.</p>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-paper/70">We design and develop custom Android and iOS applications that help startups launch digital products and businesses deliver better customer experiences.</p>
          <div className="mt-8 flex flex-wrap gap-5"><button type="button" onClick={openEnquiry} className="inline-flex h-12 items-center gap-3 bg-paper px-6 text-[14px] font-medium text-ink">Discuss Your App Idea <ArrowRight className="h-4 w-4"/></button><Link to="/work" className="inline-flex h-12 items-center border-b border-paper/30 px-1 text-[14px] text-paper">Explore Our Work</Link></div>
        </Reveal>
        <div className="col-span-12 mt-8 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-mute-2 md:text-[10px]"><span>Android · iOS · Flutter · React Native</span><span>Product Strategy · Engineering · Delivery</span></div>
      </div>
    </section>

    <section className="grain relative bg-ink text-paper"><div className="container-x section-y"><div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8"><div className="col-span-12 lg:col-span-8"><Eyebrow index="01" label="Application Development"/><Lines lines={["The right application", "for your business."]} className="display display-md mt-10 uppercase"/></div><p className="col-span-12 max-w-[45ch] text-lg leading-relaxed text-paper/65 lg:col-span-4">Different products need different engineering approaches. We help choose the right strategy based on your users, requirements and roadmap.</p></div><div className="mt-8 grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-2">{appTypes.map((app) => <Reveal key={app.title} className="border-b border-r border-white/10 p-6 md:p-8"><div className="flex items-start justify-between"><span className="font-mono text-[10px] tracking-[0.2em] text-signal">{app.number}</span><Smartphone className="h-7 w-7 text-paper/40" strokeWidth={1}/></div><h3 className="mt-5 max-w-[16ch] font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{app.title}</h3><p className="mt-3 max-w-[50ch] text-[15px] leading-relaxed text-paper/60">{app.description}</p><ul className="mt-5 flex flex-wrap gap-2">{app.capabilities.map((capability) => <li key={capability} className="border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/60">{capability}</li>)}</ul></Reveal>)}</div><nav aria-label="Explore mobile app development services" className="mt-6 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6"><Link to="/android-app-development" className="text-sm text-paper/75 underline decoration-paper/20 underline-offset-4 hover:text-paper">Android development</Link><Link to="/ios-app-development" className="text-sm text-paper/75 underline decoration-paper/20 underline-offset-4 hover:text-paper">iOS development</Link><Link to="/flutter-app-development" className="text-sm text-paper/75 underline decoration-paper/20 underline-offset-4 hover:text-paper">Flutter development</Link><Link to="/react-native-development" className="text-sm text-paper/75 underline decoration-paper/20 underline-offset-4 hover:text-paper">React Native development</Link></nav></div></section>

    <section className="relative bg-[#151515] text-paper"><div className="container-x section-y"><Eyebrow index="04" label="Product Capabilities"/><Lines lines={["Every feature should", "serve a purpose."]} className="display display-md mt-10 uppercase"/><p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-paper/60">We engineer features around your users and business, then define how they work as part of a reliable application architecture.</p><ul className="mt-14 grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3">{features.map((feature,i)=><Reveal as="li" key={feature} className="grid min-h-[100px] grid-cols-[2rem_1fr] items-start gap-4 border-b border-r border-white/10 p-6"><span className="font-mono text-[10px] text-signal">{String(i+1).padStart(2,"0")}</span><span className="text-[15px] leading-snug">{feature}</span></Reveal>)}</ul><p className="mt-6 text-[13px] text-paper/45">Feature availability depends on product requirements, platform capabilities and technical scope.</p></div></section>

    <section className="relative bg-paper text-ink"><div className="container-x section-y"><Eyebrow index="05" label="How We Build" tone="light"/><Lines lines={["From idea", "to app store."]} className="display display-md mt-10 uppercase"/><p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-ink/65">A structured development process keeps product decisions clear, engineering focused and delivery practical.</p><ol className="mt-14 border-t border-ink/12">{process.map(([title, text, output], i) => <Reveal as="li" key={title} className="grid grid-cols-12 gap-x-4 gap-y-5 border-b border-ink/12 py-7 md:gap-x-8 md:py-9"><span className="col-span-12 font-mono text-[10px] tracking-[0.2em] text-signal sm:col-span-2">0{i+1}</span><h3 className="col-span-12 font-display text-2xl font-semibold tracking-[-0.03em] sm:col-span-3">{title}</h3><p className="col-span-12 text-[15px] leading-relaxed text-ink/65 sm:col-span-4">{text}</p><p className="col-span-12 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-ink/50 sm:col-span-3">Output<br/><span className="mt-2 block text-ink/75">{output}</span></p></Reveal>)}</ol><button type="button" onClick={openEnquiry} className="mt-10 inline-flex items-center gap-3 bg-ink px-6 py-4 text-sm text-paper">Plan Your App Project <ArrowRight className="h-4 w-4"/></button></div></section>

    <section className="relative bg-ink text-paper"><div className="container-x section-y"><Eyebrow index="05" label="Selected Work"/><Lines lines={["Products built", "for real problems."]} className="display display-md mt-10 uppercase"/><p className="mt-7 max-w-[55ch] text-lg leading-relaxed text-paper/60">Explore selected digital products and engineering work from NavRasa.</p>{mobileProject && <Reveal className="mt-10 grid grid-cols-12 border border-white/10 bg-white/[0.02]"><div className="col-span-12 flex min-h-[220px] items-center justify-center border-b border-white/10 bg-paper-2 p-8 text-ink lg:col-span-6 lg:border-b-0 lg:border-r"><div className="relative h-[220px] w-[105px] rounded-[22px] border-[5px] border-ink bg-[#111] p-2 shadow-2xl"><div className="h-full rounded-[14px] bg-paper p-3"><div className="h-1 w-8 rounded-full bg-ink/20 mx-auto"/><div className="mt-7 border-b border-ink/10 pb-3 text-center font-display text-sm font-semibold">EZYFIX</div><div className="mt-4 grid grid-cols-2 gap-2"><span className="h-12 bg-signal/10"/><span className="h-12 bg-signal/10"/><span className="col-span-2 h-14 bg-ink/5"/></div></div></div></div><div className="col-span-12 p-7 md:p-10 lg:col-span-6"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{mobileProject.industry}</span><h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em]">{mobileProject.name}</h3><p className="mt-6 text-base leading-relaxed text-paper/65"><strong className="text-paper">Product:</strong> {mobileProject.product}</p></div></Reveal>}<Link to="/work" className="mt-6 inline-flex items-center gap-3 border-b border-paper/30 pb-2 text-sm">Explore All Projects <ArrowRight className="h-4 w-4"/></Link></div></section>

    <section className="relative bg-paper text-ink"><div className="container-x section-y"><div className="grid grid-cols-12 gap-x-10 gap-y-8 md:gap-x-8"><div className="col-span-12 lg:col-span-4"><Eyebrow index="06" label="Frequently Asked Questions" tone="light"/><Lines lines={["What you should", "know before building."]} className="display display-sm mt-8 uppercase"/></div><div className="col-span-12 lg:col-span-7 lg:col-start-6"><FAQAccordion/></div></div></div></section>

    <section className="grain relative bg-ink text-paper"><div className="container-x section-y grid grid-cols-12 items-end gap-x-4 gap-y-8 md:gap-x-8"><div className="col-span-12 lg:col-span-7"><Eyebrow index="07" label="Start Your Project"/><Lines lines={["Have an app idea?"]} className="display display-md mt-8 uppercase"/><p className="mt-5 max-w-[48ch] text-lg font-medium">Let's turn it into a product people can use.</p></div><div className="col-span-12 lg:col-span-5 lg:pl-8"><p className="text-base leading-relaxed text-paper/65">Whether you are starting from an idea, building an MVP or expanding an existing business into mobile, let's discuss what you want to build.</p><button type="button" onClick={openEnquiry} className="mt-6 inline-flex h-12 items-center gap-3 bg-paper px-6 text-sm font-medium text-ink">Discuss Your Mobile App <ArrowRight className="h-4 w-4"/></button></div></div></section>
  </>;
}
