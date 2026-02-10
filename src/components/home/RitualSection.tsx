import { Clock, CalendarCheck, Utensils } from "lucide-react";

const RitualSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight text-center">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          El ritual que cambia tu semana
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          El domingo deja de ser caos y pasa a ser tu mejor estrategia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              number: "90",
              unit: "minutos",
              desc: "Una sola sesión de cocina.",
            },
            {
              icon: CalendarCheck,
              number: "1",
              unit: "vez",
              desc: "Cocinás una vez por semana.",
            },
            {
              icon: Utensils,
              number: "5",
              unit: "días",
              desc: "Resueltos sin pensar.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-5xl text-primary mb-1">{item.number}</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-3">{item.unit}</div>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualSection;
