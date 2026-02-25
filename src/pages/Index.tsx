import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import PainPoints from "@/components/home/PainPoints";
import RitualSection from "@/components/home/RitualSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhatIncludes from "@/components/home/WhatIncludes";
import BeforeAfter from "@/components/home/BeforeAfter";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CreatorStory from "@/components/home/CreatorStory";
import PriceContrast from "@/components/home/PriceContrast";
import WhoIsItFor from "@/components/home/WhoIsItFor";
import SEOHead from "@/components/SEOHead";
import Marquee from "@/components/Marquee";
import SectionConnector from "@/components/SectionConnector";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Cocina en Flor — Organizá tu semana cocinando en 90 minutos"
        description="Sistema mensual de planificación de comidas para familias. 40 recetas, listas de compras inteligentes, sistema freezer. Cocinás el domingo, resolvés la semana."
      />
      <HeroSection />
      <Marquee />
      <PainPoints />
      <SectionConnector variant="arrow" color="coral" />
      <BeforeAfter />
      <SectionConnector variant="dots" color="miel" />
      <RitualSection />
      <HowItWorks />
      <WhatIncludes />
      <CreatorStory />
      <PriceContrast />
      <SectionConnector variant="wave" color="terracota" />
      <PricingSection />
      <WhoIsItFor />
      <Testimonials />
      <SectionConnector variant="dots" color="verde-pizarra" />
      <FAQSection />
    </Layout>
  );
};

export default Index;
