import { motion } from "framer-motion";

const phrases = [
  "🍳 Cocinar puede ser simple",
  "🌿 Organización sin estrés",
  "⏱ 90 minutos y listo",
  "❤️ Comida real para familias",
  "📋 Todo planificado por vos",
  "🧊 Sistema freezer inteligente",
  "✨ El domingo resuelve la semana",
  "🛒 Una compra, toda la semana",
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden py-5 bg-gradient-to-r from-primary/5 via-miel/10 to-primary/5 border-y border-border/30">
      <div className="flex">
        {[0, 1].map((set) => (
          <motion.div
            key={set}
            className="flex shrink-0 gap-8 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {phrases.map((phrase, i) => (
              <span
                key={`${set}-${i}`}
                className="whitespace-nowrap text-sm font-medium text-foreground/60 px-4"
              >
                {phrase}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
