import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CircleAlert, Clock, ShoppingCart, Pizza, Brain, HeartCrack } from "lucide-react";

const pains = [
  { icon: CircleAlert, text: "\"¿Qué comemos hoy?\" — todos los días lo mismo.", color: "text-primary" },
  { icon: Clock, text: "No tenés tiempo ni para pensar el menú.", color: "text-terracota" },
  { icon: ShoppingCart, text: "Ir al súper todos los días y gastar de más.", color: "text-secondary" },
  { icon: Pizza, text: "Improvisar y terminar pidiendo delivery.", color: "text-miel" },
  { icon: Brain, text: "Cansancio mental que se acumula sin parar.", color: "text-vino" },
  { icon: HeartCrack, text: "Sentir que nunca llegás a todo.", color: "text-primary" },
];

const PainPoints = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-peach via-soft-peach/80 to-accent/40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-coral/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-miel/15 rounded-full blur-[80px] pointer-events-none" />
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

        {/* 3x2 grid with proper cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {pains.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                className="bg-card rounded-2xl p-6 shadow-card border border-border flex items-start gap-4 cursor-default h-full group hover:border-primary/20 transition-colors"
                whileHover={{ y: -4, boxShadow: "var(--shadow-warm-lg)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <pain.icon className={`w-5 h-5 ${pain.color}`} />
                </div>
                <span className="text-sm text-foreground/75 leading-relaxed pt-2">{pain.text}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center">
            <div className="inline-block bg-card rounded-2xl px-8 py-6 shadow-warm border border-border relative">
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
