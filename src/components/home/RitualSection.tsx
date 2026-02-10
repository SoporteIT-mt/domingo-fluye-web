import { Clock, CalendarCheck, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ritualImg from "@/assets/ritual-cooking.jpg";

const ritualItems = [
  {
    icon: Clock,
    number: 90,
    unit: "minutos",
    desc: "Una sola sesión de cocina.",
    gradient: "from-coral to-terracota",
    bg: "bg-primary/5",
  },
  {
    icon: CalendarCheck,
    number: 1,
    unit: "vez por semana",
    desc: "Cocinás una vez y listo.",
    gradient: "from-miel to-terracota",
    bg: "bg-miel/5",
  },
  {
    icon: Utensils,
    number: 5,
    unit: "días resueltos",
    desc: "Sin pensar, sin estrés.",
    gradient: "from-verde-pizarra to-secondary",
    bg: "bg-secondary/5",
  },
];

const RitualSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-background to-soft-peach/40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-miel/20 to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-miel/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight text-center relative">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4 bg-secondary/5 px-4 py-1.5 rounded-full">
            Tu nuevo ritual
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            El ritual que cambia tu semana
          </h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
            El domingo deja de ser caos y pasa a ser tu mejor estrategia.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-10 rounded-2xl overflow-hidden shadow-card border border-border max-w-2xl mx-auto">
            <img src={ritualImg} alt="Sesión de cocina dominical con ingredientes frescos" className="w-full h-48 md:h-64 object-cover" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ritualItems.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 0.15}>
              <motion.div
                className="relative bg-card rounded-2xl p-8 shadow-card border border-border overflow-hidden group"
                whileHover={{ y: -6, boxShadow: "var(--shadow-warm-lg)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <div className="font-display text-5xl md:text-6xl text-foreground mb-2">
                  <AnimatedCounter target={item.number} />
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">{item.unit}</div>
                <p className="text-foreground/65 text-sm">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualSection;
