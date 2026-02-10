import { BookOpen, UtensilsCrossed, ShoppingCart, Snowflake, Repeat, CalendarDays, Users, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: BookOpen, title: "Manual mensual completo", desc: "Todo organizado en un solo documento descargable.", color: "from-coral to-vino" },
  { icon: UtensilsCrossed, title: "40 recetas reales", desc: "Comida de familia, práctica y riquísima.", color: "from-terracota to-coral" },
  { icon: ShoppingCart, title: "Lista de compras inteligente", desc: "Comprás una vez, cocinás toda la semana.", color: "from-miel to-terracota" },
  { icon: Snowflake, title: "Sistema freezer paso a paso", desc: "Qué freezar, cómo y cuándo descongelar.", color: "from-verde-pizarra to-secondary" },
  { icon: Repeat, title: "Sustituciones prácticas", desc: "Si no conseguís algo, siempre hay alternativa.", color: "from-coral to-terracota" },
  { icon: CalendarDays, title: "Calendario semanal", desc: "Día por día, sabés qué vas a cocinar.", color: "from-miel to-coral" },
  { icon: Users, title: "Grupo privado", desc: "Comunidad de familias que cocinan con sistema.", color: "from-verde-pizarra to-coral" },
  { icon: Mail, title: "Email recordatorio", desc: "Cada semana te avisamos qué preparar.", color: "from-terracota to-vino" },
];

const WhatIncludes = () => {
  return (
    <section className="section-padding bg-mesh relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-[5%] w-48 h-48 bg-miel/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-36 h-36 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4 bg-secondary/5 px-4 py-1.5 rounded-full">
              Todo incluido
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Qué incluye cada mes
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Todo lo que necesitás para que la semana fluya sin caos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.08}>
              <motion.div
                className="relative bg-card rounded-2xl p-6 shadow-card group overflow-hidden h-full"
                whileHover={{ y: -6, boxShadow: "var(--shadow-warm-lg)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${f.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5 text-sm">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIncludes;
