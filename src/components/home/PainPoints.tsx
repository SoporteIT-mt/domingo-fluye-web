import ScrollReveal from "@/components/ScrollReveal";

const PainPoints = () => {
  const pains = [
    "\"¿Qué comemos hoy?\" — todos los días lo mismo.",
    "No tenés tiempo ni para pensar el menú.",
    "Ir al súper todos los días y gastar de más.",
    "Improvisar y terminar pidiendo delivery.",
    "Cansancio mental que se acumula sin parar.",
  ];

  return (
    <section className="section-padding bg-soft-peach">
      <div className="container-tight text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            ¿Te pasa que todos los días es la misma pregunta?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <ul className="space-y-4 max-w-xl mx-auto text-left mb-10">
            {pains.map((pain, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-primary" />
                <span className="text-lg text-foreground/80">{pain}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-xl md:text-2xl font-display text-foreground">
            No es falta de organización.<br />
            <span className="text-primary">Es falta de sistema.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPoints;
