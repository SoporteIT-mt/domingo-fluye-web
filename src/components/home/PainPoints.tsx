import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const pains = [
  { emoji: "😩", text: "\"¿Qué comemos hoy?\" — todos los días lo mismo." },
  { emoji: "⏰", text: "No tenés tiempo ni para pensar el menú." },
  { emoji: "🛒", text: "Ir al súper todos los días y gastar de más." },
  { emoji: "🍕", text: "Improvisar y terminar pidiendo delivery." },
  { emoji: "🧠", text: "Cansancio mental que se acumula sin parar." },
];

const PainPoints = () => {
  return (
    <section className="section-padding bg-mesh relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute top-10 right-10 opacity-[0.04] pointer-events-none">
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-foreground" />
          ))}
        </div>
      </div>

      <div className="container-tight relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
              ¿Te suena familiar?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              ¿Te pasa que todos los días<br />
              <span className="text-gradient-coral">es la misma pregunta?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {pains.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="card-premium p-5 flex items-start gap-3 cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{pain.emoji}</span>
                <span className="text-sm text-foreground/75 leading-relaxed">{pain.text}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center">
            <div className="inline-block bg-card rounded-2xl px-8 py-6 shadow-warm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-terracota rounded-full" />
              <p className="text-xl md:text-2xl font-display text-foreground">
                No es falta de organización.
              </p>
              <p className="text-xl md:text-2xl font-display text-gradient-coral mt-1">
                Es falta de sistema.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPoints;
