import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBlob from "@/components/ParallaxBlob";

const yesItems = [
  "Querés comer casero y rico",
  "No tenés tiempo en la semana",
  "Querés dejar de pensar qué cocinar",
  "Buscás paz mental",
];

const noItems = [
  "Buscás dietas estrictas para bajar de peso",
  "Te sobra el tiempo y amás cocinar cada noche",
  "No te importa gastar de más en delivery",
];

const WhoIsItFor = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/15 to-soft-peach/30 pointer-events-none" />
      <ParallaxBlob className="absolute -bottom-16 left-1/4 w-56 h-56 bg-verde-pizarra/10 rounded-full blur-[90px] pointer-events-none" speed={-0.12} />

      <div className="container-tight relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
              Filtro psicológico
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              ¿Esto es para vos?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Yes */}
          <ScrollReveal delay={0.1}>
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/15 h-full">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Sí, es para vos si… ✅</div>
              <ul className="space-y-4">
                {yesItems.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={13} className="text-primary" />
                    </span>
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* No */}
          <ScrollReveal delay={0.2}>
            <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/15 h-full">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-destructive/60 mb-6">No es para vos si… ❌</div>
              <ul className="space-y-4">
                {noItems.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="w-6 h-6 rounded-full bg-destructive/8 flex items-center justify-center flex-shrink-0">
                      <X size={13} className="text-destructive/60" />
                    </span>
                    <span className="text-foreground/60 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
