import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight, X, Shield, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { text: "Manual mensual completo", monthly: true, annual: true },
  { text: "40 recetas + listas de compras", monthly: true, annual: true },
  { text: "Sistema freezer paso a paso", monthly: true, annual: true },
  { text: "Calendario semanal", monthly: true, annual: true },
  { text: "Grupo privado de la comunidad", monthly: true, annual: true },
  { text: "Email recordatorio semanal", monthly: true, annual: true },
  { text: "Acceso prioritario a novedades", monthly: false, annual: true },
  { text: "2 meses bonificados", monthly: false, annual: true },
];

const guarantees = [
  { icon: Shield, text: "Sin permanencia", desc: "Cancelás cuando quieras, sin preguntas." },
  { icon: Clock, text: "Acceso inmediato", desc: "Empezás a usar el sistema hoy mismo." },
  { icon: Heart, text: "Satisfacción garantizada", desc: "Si no te sirve, te devolvemos el dinero." },
];

const Planes = () => {
  return (
    <Layout>
      <SEOHead
        title="Planes — Cocina en Flor"
        description="Elegí tu plan para organizar tu cocina semanal. Desde $7.999 ARS/mes. Sin permanencia, cancelás cuando quieras."
        path="/planes"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-soft-peach via-background to-background pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-coral/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="container-tight text-center relative">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 bg-primary/5 px-5 py-2 rounded-full">
              <Sparkles size={14} /> Planes
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
              Elegí tu plan y empezá{" "}
              <span className="text-gradient-coral">este domingo</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Un solo pago, acceso completo. Sin sorpresas, sin letra chica.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 md:pb-24 relative">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Monthly */}
            <ScrollReveal delay={0.1}>
              <motion.div
                className="bg-card rounded-2xl p-8 shadow-card border border-border h-full flex flex-col relative overflow-hidden"
                whileHover={{ y: -4, boxShadow: "var(--shadow-warm-lg)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/5" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Mensual</div>
                <div className="font-display text-5xl text-foreground mb-1">$7.999</div>
                <div className="text-sm text-muted-foreground mb-8">ARS / mes</div>

                <ul className="space-y-3 text-left mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-sm">
                      {f.monthly ? (
                        <>
                          <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-primary" />
                          </span>
                          <span className="text-foreground/75">{f.text}</span>
                        </>
                      ) : (
                        <>
                          <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <X size={12} className="text-muted-foreground/40" />
                          </span>
                          <span className="text-muted-foreground/40 line-through">{f.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacto"
                  className="block w-full bg-foreground text-primary-foreground py-4 rounded-xl font-semibold hover:bg-deep-brown transition-colors text-center"
                >
                  Elegir plan mensual
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Annual */}
            <ScrollReveal delay={0.25}>
              <motion.div
                className="relative bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-card h-full flex flex-col overflow-hidden"
                whileHover={{ y: -4, boxShadow: "var(--shadow-warm-lg)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-terracota" />

                <motion.div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-terracota text-primary-foreground px-5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg whitespace-nowrap"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={12} /> Mejor precio
                </motion.div>

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 mt-2">Anual</div>
                <div className="font-display text-5xl text-foreground mb-1">$79.990</div>
                <div className="text-sm text-muted-foreground mb-1">ARS / año</div>
                <div className="inline-block text-xs text-primary font-bold mb-8 bg-primary/5 px-3 py-1 rounded-full w-fit">
                  Ahorrás 2 meses · $6.666/mes
                </div>

                <ul className="space-y-3 text-left mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-sm text-foreground/75">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacto"
                  className="group block w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold shadow-cta hover:shadow-glow transition-all duration-300 text-center relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Elegir plan anual
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-vino to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison table (mobile-friendly) */}
      <section className="pb-16 md:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-soft-peach/30 to-background pointer-events-none" />
        <div className="container-tight relative">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl text-foreground text-center mb-10">
              Compará los planes
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden max-w-2xl mx-auto">
              <div className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_120px_120px] text-sm">
                {/* Header */}
                <div className="p-4 bg-muted/30 font-semibold text-foreground border-b border-border">Característica</div>
                <div className="p-4 bg-muted/30 font-semibold text-foreground text-center border-b border-border">Mensual</div>
                <div className="p-4 bg-primary/5 font-semibold text-primary text-center border-b border-border">Anual</div>

                {features.map((f, i) => (
                  <div key={f.text} className="contents">
                    <div className={`p-4 text-foreground/75 ${i < features.length - 1 ? 'border-b border-border/50' : ''}`}>
                      {f.text}
                    </div>
                    <div className={`p-4 flex justify-center items-center ${i < features.length - 1 ? 'border-b border-border/50' : ''}`}>
                      {f.monthly ? (
                        <Check size={16} className="text-primary" />
                      ) : (
                        <X size={16} className="text-muted-foreground/30" />
                      )}
                    </div>
                    <div className={`p-4 bg-primary/[0.02] flex justify-center items-center ${i < features.length - 1 ? 'border-b border-border/50' : ''}`}>
                      <Check size={16} className="text-primary" />
                    </div>
                  </div>
                ))}

                {/* Price row */}
                <div className="p-4 font-semibold text-foreground border-t border-border">Precio</div>
                <div className="p-4 text-center font-display text-lg text-foreground border-t border-border">$7.999<span className="text-xs text-muted-foreground">/mes</span></div>
                <div className="p-4 bg-primary/5 text-center font-display text-lg text-primary border-t border-border">$6.666<span className="text-xs text-muted-foreground">/mes</span></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Guarantees */}
      <section className="pb-20 md:pb-28 relative">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((g, i) => (
              <ScrollReveal key={g.text} delay={i * 0.1}>
                <div className="text-center bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <g.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{g.text}</h3>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg shadow-cta hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Quiero empezar ahora
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-vino to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Planes;
