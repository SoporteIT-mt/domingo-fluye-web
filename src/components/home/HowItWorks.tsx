import { Link } from "react-router-dom";
import { UserPlus, Download, ChefHat } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HowItWorks = () => {
  const steps = [
    { icon: UserPlus, step: "01", title: "Te unís al Club", desc: "Elegís tu plan, te suscribís y accedés al instante." },
    { icon: Download, step: "02", title: "Descargás el manual del mes", desc: "40 recetas, listas de compras, calendario y sistema freezer." },
    { icon: ChefHat, step: "03", title: "Cocinás el domingo", desc: "90 minutos y tu semana queda resuelta." },
  ];

  return (
    <section className="section-padding bg-soft-peach">
      <div className="container-tight">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
            Cómo funciona
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Tres pasos. Sin vueltas.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Paso {s.step}</div>
                <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              to="/planes"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-cta hover:bg-vino transition-colors"
            >
              Quiero empezar ahora
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
