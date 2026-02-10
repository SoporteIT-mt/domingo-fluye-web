import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { UserPlus, Download, ChefHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ComoFunciona = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Te unís al Club",
      desc: "Elegís tu plan (mensual o anual), te suscribís y accedés al instante. Sin esperas, sin trámites.",
    },
    {
      icon: Download,
      title: "2. Descargás el manual del mes",
      desc: "Cada mes recibís un manual completo con 40 recetas, listas de compras, calendario semanal, sistema freezer y sustituciones.",
    },
    {
      icon: ChefHat,
      title: "3. Cocinás el domingo y resolvés la semana",
      desc: "Seguís el paso a paso del manual. En 90 minutos tenés la comida de lunes a viernes lista. Sin improvisar, sin estrés.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Cómo funciona — El Club de los Domingos"
        description="Descubrí cómo funciona el sistema de planificación semanal de comidas. Tres pasos simples para organizar tu cocina."
        path="/como-funciona"
      />
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-tight">
          <h1 className="font-display text-4xl md:text-5xl text-foreground text-center mb-4">
            Cómo funciona el Club
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            Un sistema simple que transforma tu domingo en la mejor inversión de la semana.
          </p>

          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/planes"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-cta hover:bg-terracotta-dark transition-colors"
            >
              Quiero empezar <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComoFunciona;
