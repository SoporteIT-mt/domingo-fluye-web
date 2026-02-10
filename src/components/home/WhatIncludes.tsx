import { BookOpen, UtensilsCrossed, ShoppingCart, Snowflake, Repeat, CalendarDays, Users, Mail } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Manual mensual completo", desc: "Todo organizado en un solo documento descargable." },
  { icon: UtensilsCrossed, title: "40 recetas reales", desc: "Comida de familia, práctica y riquísima." },
  { icon: ShoppingCart, title: "Lista de compras inteligente", desc: "Comprás una vez, cocinás toda la semana." },
  { icon: Snowflake, title: "Sistema freezer paso a paso", desc: "Qué freezar, cómo y cuándo descongelar." },
  { icon: Repeat, title: "Sustituciones prácticas", desc: "Si no conseguís algo, siempre hay alternativa." },
  { icon: CalendarDays, title: "Calendario semanal", desc: "Día por día, sabés qué vas a cocinar." },
  { icon: Users, title: "Grupo privado", desc: "Comunidad de familias que cocinan con sistema." },
  { icon: Mail, title: "Email recordatorio", desc: "Cada semana te avisamos qué preparar." },
];

const WhatIncludes = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
          Qué incluye cada mes
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
          Todo lo que necesitás para que la semana fluya sin caos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-shadow duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5 text-sm">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIncludes;
