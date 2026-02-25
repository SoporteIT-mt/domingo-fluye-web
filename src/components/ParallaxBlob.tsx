import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBlobProps {
  className: string;
  speed?: number; // negative = moves up on scroll, positive = moves down
}

const ParallaxBlob = ({ className, speed = -0.15 }: ParallaxBlobProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, willChange: "transform" }}
    />
  );
};

export default ParallaxBlob;
