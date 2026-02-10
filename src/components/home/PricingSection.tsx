import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Unirte al Club es simple.
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Elegí tu plan y empezá este domingo.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <motion.div
              className="bg-card rounded-2xl p-8 shadow-card border border-border h-full"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">Mensual</div>
              <div className="font-display text-4xl text-foreground mb-1">$7.999</div>
              <div className="text-sm text-muted-foreground mb-6">ARS / mes</div>
              <ul className="space-y-3 text-left mb-8">
                {["Manual mensual completo", "40 recetas + listas", "Grupo privado", "Cancelás cuando quieras"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/planes"
                className="block w-full bg-foreground text-primary-foreground py-3.5 rounded-xl font-semibold hover:bg-deep-brown transition-colors"
              >
                Quiero ser parte del Club
              </Link>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <motion.div
              className="bg-card rounded-2xl p-8 shadow-warm-lg border-2 border-primary relative h-full"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Sparkles size={12} /> Mejor precio
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Anual</div>
              <div className="font-display text-4xl text-foreground mb-1">$79.990</div>
              <div className="text-sm text-muted-foreground mb-1">ARS / año</div>
              <div className="text-xs text-primary font-semibold mb-6">Ahorrás 2 meses</div>
              <ul className="space-y-3 text-left mb-8">
                {["Todo lo del plan mensual", "2 meses bonificados", "Acceso prioritario", "Sin permanencia"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/planes"
                className="block w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-cta hover:bg-vino transition-colors"
              >
                Quiero ser parte del Club
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35}>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
            <span>✓ Sin permanencia</span>
            <span>✓ Cancelás cuando quieras</span>
            <span>✓ Acceso inmediato</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
