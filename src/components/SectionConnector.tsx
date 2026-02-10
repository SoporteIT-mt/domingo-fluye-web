import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionConnectorProps {
  variant?: "wave" | "arrow" | "dots";
  color?: string;
}

const SectionConnector = ({ variant = "wave", color = "primary" }: SectionConnectorProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);

  if (variant === "dots") {
    return (
      <div ref={ref} className="flex justify-center py-4 -my-2 relative z-10">
        <motion.div className="flex flex-col items-center gap-2" style={{ opacity }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full bg-${color}/30`}
              style={{ backgroundColor: `hsl(var(--${color}) / 0.3)` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === "arrow") {
    return (
      <div ref={ref} className="flex justify-center py-6 -my-3 relative z-10">
        <motion.svg
          width="24"
          height="60"
          viewBox="0 0 24 60"
          fill="none"
          style={{ opacity }}
        >
          <motion.path
            d="M12 0 L12 48 M4 40 L12 52 L20 40"
            stroke={`hsl(var(--${color}) / 0.3)`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength }}
          />
        </motion.svg>
      </div>
    );
  }

  // wave
  return (
    <div ref={ref} className="flex justify-center py-4 -my-2 relative z-10 overflow-hidden">
      <motion.svg
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        style={{ opacity }}
      >
        <motion.path
          d="M0 20 Q30 0 60 20 Q90 40 120 20"
          stroke={`hsl(var(--${color}) / 0.2)`}
          strokeWidth="2"
          fill="none"
          style={{ pathLength }}
        />
      </motion.svg>
    </div>
  );
};

export default SectionConnector;
