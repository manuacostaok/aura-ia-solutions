import AuroraBackground from "@/components/AuroraBackground";
import CaseStudies from "@/components/CaseStudies";
import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IdeaCTA from "@/components/IdeaCTA";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Spotlight />
      <Nav />
      <main className="relative">
        <Hero />
        <Services />
        <Products />
        <CatalogSection />
        <CaseStudies />
        <IdeaCTA />
      </main>
      <Footer />
    </>
  );
}
