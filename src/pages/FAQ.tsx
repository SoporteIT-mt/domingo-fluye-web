import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/home/FAQSection";

const FAQ = () => {
  return (
    <Layout>
      <SEOHead
        title="Preguntas frecuentes — El Club de los Domingos"
        description="Respuestas a todas tus preguntas sobre el Club de los Domingos. Cancelación, recetas, freezer y más."
        path="/faq"
      />
      <div className="pt-16 md:pt-20">
        <FAQSection />
      </div>
    </Layout>
  );
};

export default FAQ;
