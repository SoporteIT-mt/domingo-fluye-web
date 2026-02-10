import { Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Carolina M.",
    role: "Mamá de 2, Córdoba",
    text: "Antes llegaba al domingo agotada solo de pensar en la semana. Ahora en 90 minutos tengo todo resuelto. Es un alivio enorme.",
    stars: 5,
  },
  {
    name: "Lucía R.",
    role: "Mamá de 3, Buenos Aires",
    text: "Lo que más me cambió fue no tener que decidir todos los días qué cocinar. Esa carga mental desapareció.",
    stars: 5,
  },
  {
    name: "Valentina G.",
    role: "Trabaja full-time, Rosario",
    text: "No soy gran cocinera pero las recetas son simples y riquísimas. Mi familia ni nota que cocino todo el domingo.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-soft-peach">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
            Lo que dicen las familias del Club
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Historias reales de mamás que recuperaron su semana.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <motion.div
                className="bg-card rounded-2xl p-7 shadow-card h-full"
                whileHover={{ y: -4, boxShadow: "var(--shadow-warm)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-5 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
