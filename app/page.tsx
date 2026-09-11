import AuroraBackground from "@/components/AuroraBackground";
import CaseStudies from "@/components/CaseStudies";
import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IdeaCTA from "@/components/IdeaCTA";
import Nav from "@/components/Nav";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";
import TrustStrip from "@/components/TrustStrip";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Spotlight />
      <Nav />
      <main className="relative">
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <Services />
        <Products />
        <CatalogSection />
        <ProcessSection />
        <WhyUs />
        <CaseStudies />
        <IdeaCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
