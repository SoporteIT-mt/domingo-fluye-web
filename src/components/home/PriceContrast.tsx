import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBlob from "@/components/ParallaxBlob";

const oldWay = [
  { label: "Delivery (2 veces)", value: "$40.000 ARS" },
  { label: "Compras improvisadas", value: "$30.000 ARS" },
  { label: "Carga mental", value: "Incalculable" },
];

const PriceContrast = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background pointer-events-none" />
      <ParallaxBlob className="absolute top-1/3 -right-24 w-64 h-64 bg-miel/10 rounded-full blur-[100px] pointer-events-none" speed={0.15} />

      <div className="container-tight relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
              Anclaje de precio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              Hagamos las cuentas
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Old way */}
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive/30 to-destructive/10 rounded-t-2xl" />
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-destructive/60 mb-6">
                La vieja forma 😩
              </div>
              <p className="text-sm text-muted-foreground mb-4">Gastos semanales estimados:</p>
              <ul className="space-y-4">
                {oldWay.map((item) => (
                  <li key={item.label} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-sm text-foreground/60">
                      <span className="w-6 h-6 rounded-full bg-destructive/8 flex items-center justify-center flex-shrink-0">
                        <X size={13} className="text-destructive/60" />
                      </span>
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground/50 line-through">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Club way */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="bg-card rounded-2xl p-8 border-2 border-primary/25 shadow-card h-full relative"
              whileHover={{ y: -4, boxShadow: "var(--shadow-warm-lg)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-miel rounded-t-2xl" />
              <div className="absolute top-0 right-0 w-28 h-28 bg-miel/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 relative">
                Con el Club ✨
              </div>
              <p className="text-sm text-muted-foreground mb-4">Todo el mes incluido:</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-primary" />
                </span>
                <span className="text-foreground font-medium">Recetas, listas y organización</span>
              </div>
              <div className="mt-auto">
                <span className="font-display text-4xl text-foreground">$7.999</span>
                <span className="text-sm text-muted-foreground ml-1">ARS / mes</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-muted-foreground mt-10 text-base italic">
            Cuesta menos que una docena de empanadas, pero te resuelve el mes entero.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PriceContrast;
