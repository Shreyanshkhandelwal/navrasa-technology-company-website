import { AboutBody, Leadership } from "@/components/About";
import { FinalCTA } from "@/components/Contact";
import { Credentials } from "@/components/Industries";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export function AboutPage() {
  useSEO({
    title: "About NavRasa — Building the Future of Technology from Jaipur, India",
    description:
      "NavRasa IT Solutions is a founder-led technology company building digital products, AI solutions and scalable software systems. Our mission: make powerful technology accessible to ambitious businesses and founders.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        label="About"
        size="md"
        lines={["Building the company", "we want to see in the", "future of technology."]}
        intro="A technology company with a product mindset — founded to help ambitious ideas become real, scalable products."
        meta={
          <>
            <span>{company.location}</span>
            <span className="hidden sm:inline">Founder-led</span>
            <span>Digital products · AI · Scalable systems</span>
          </>
        }
      />
      <Credentials tone="dark" />
      <AboutBody headless />
      <Leadership index="02" />
      <FinalCTA index="03" />
    </>
  );
}
