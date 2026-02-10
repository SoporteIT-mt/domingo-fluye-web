import { X, Check } from "lucide-react";

const BeforeAfter = () => {
  const before = [
    "Estrés diario por las comidas",
    "Improvisación constante",
    "Gasto extra en delivery y compras",
    "Cansancio mental acumulado",
  ];

  const after = [
    "Semana organizada de entrada",
    "Cocina sin caos ni sorpresas",
    "Más tiempo para lo que importa",
    "Más calma, menos decisiones",
  ];

  return (
    <section className="section-padding bg-soft-peach">
      <div className="container-tight">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
          El cambio que sentís desde la primera semana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">Sin el Club</div>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X size={14} className="text-destructive" />
                  </span>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary shadow-warm">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Con el Club</div>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
