import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";
import manualImage from "@/assets/manual-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
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
          <div className="animate-fade-up">
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
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-center font-semibold text-lg shadow-cta hover:bg-terracotta-dark transition-colors"
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
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={manualImage}
              alt="Manual mensual del Club de los Domingos"
              className="w-72 rounded-2xl shadow-warm-lg rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
