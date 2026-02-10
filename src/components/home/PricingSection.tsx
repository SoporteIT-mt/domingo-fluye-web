import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const PricingSection = () => {
  return (
    <section className="section-padding bg-mesh relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container-tight text-center relative">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Planes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Unirte al Club es simple.
          </h2>
          <p className="text-muted-foreground text-lg mb-14">
            Elegí tu plan y empezá este domingo.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Monthly */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="bg-card rounded-2xl p-8 shadow-card border border-border h-full flex flex-col"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Mensual</div>
              <div className="font-display text-5xl text-foreground mb-1">$7.999</div>
              <div className="text-sm text-muted-foreground mb-8">ARS / mes</div>
              <ul className="space-y-3 text-left mb-8 flex-1">
                {["Manual mensual completo", "40 recetas + listas", "Grupo privado", "Cancelás cuando quieras"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/75">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/planes"
                className="block w-full bg-foreground text-primary-foreground py-3.5 rounded-xl font-semibold hover:bg-deep-brown transition-colors text-center"
              >
                Quiero ser parte del Club
              </Link>
            </motion.div>
          </ScrollReveal>

          {/* Annual */}
          <ScrollReveal delay={0.25}>
            <motion.div
              className="relative bg-card rounded-2xl p-8 border-2 border-primary/30 h-full flex flex-col animate-pulse-glow"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Best price badge */}
              <motion.div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-terracota text-primary-foreground px-5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={12} /> Mejor precio
              </motion.div>

              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Anual</div>
              <div className="font-display text-5xl text-foreground mb-1">$79.990</div>
              <div className="text-sm text-muted-foreground mb-1">ARS / año</div>
              <div className="inline-block text-xs text-primary font-bold mb-8 bg-primary/5 px-3 py-1 rounded-full">Ahorrás 2 meses</div>
              <ul className="space-y-3 text-left mb-8 flex-1">
                {["Todo lo del plan mensual", "2 meses bonificados", "Acceso prioritario", "Sin permanencia"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/75">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/planes"
                className="group block w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-cta hover:shadow-glow transition-all duration-300 text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Quiero ser parte del Club
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-vino to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-5 mt-10 text-sm text-muted-foreground">
            {["Sin permanencia", "Cancelás cuando quieras", "Acceso inmediato"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
