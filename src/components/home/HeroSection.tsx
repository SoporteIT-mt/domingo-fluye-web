import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kitchen.jpg";
import manualImage from "@/assets/manual-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mesa de cocina con preparaciones del domingo organizadas en tuppers"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative container-wide py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Cocina en Flor</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Si el domingo está resuelto, tu semana también.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed font-light">
              Un sistema mensual para cocinar en 90 minutos y olvidarte del caos el resto de la semana.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "4 domingos planificados por mes",
                "10 recetas prácticas por semana",
                "Lista inteligente + freezer sin estrés",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check size={12} className="text-primary-foreground" />
                  </span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/planes"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-center font-semibold text-lg shadow-cta hover:bg-vino transition-colors"
              >
                Quiero ordenar mi semana
              </Link>
              <Link
                to="/como-funciona"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl text-center font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Ver cómo funciona
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/60">
              <span>✓ Cancelás cuando quieras</span>
              <span>✓ Acceso inmediato</span>
              <span>✓ Sin permanencia</span>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src={manualImage}
              alt="Manual mensual de Cocina en Flor"
              className="w-72 rounded-2xl shadow-warm-lg hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
