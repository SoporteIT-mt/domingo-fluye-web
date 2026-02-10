import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PricingSection from "@/components/home/PricingSection";

const Planes = () => {
  return (
    <Layout>
      <SEOHead
        title="Planes — Cocina en Flor"
        description="Elegí tu plan para organizar tu cocina semanal. Desde $7.999 ARS/mes. Sin permanencia, cancelás cuando quieras."
        path="/planes"
      />
      <div className="pt-16 md:pt-20">
        <PricingSection />
      </div>
    </Layout>
  );
};

export default Planes;
