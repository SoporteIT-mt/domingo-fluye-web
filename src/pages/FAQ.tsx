import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/home/FAQSection";

const FAQ = () => {
  return (
    <Layout>
      <SEOHead
        title="Preguntas frecuentes — Cocina en Flor"
        description="Respuestas a todas tus preguntas sobre Cocina en Flor. Cancelación, recetas, freezer y más."
        path="/faq"
      />
      <div className="pt-16 md:pt-20">
        <FAQSection />
      </div>
    </Layout>
  );
};

export default FAQ;
