import { useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
}

const COLORS = [
  "352, 79%, 65%",  // coral
  "39, 97%, 77%",   // miel
  "15, 71%, 66%",   // terracota
];

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);
  const isMobile = useIsMobile();

  const addParticle = useCallback(() => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    particles.current.push({
      x: mouse.current.x,
      y: mouse.current.y,
      size: Math.random() * 3 + 1.5,
      alpha: 0.4,
      color,
      decay: 0.015 + Math.random() * 0.01,
    });
    if (particles.current.length > 35) {
      particles.current.shift();
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      addParticle();
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => {
        p.alpha -= p.decay;
        if (p.alpha <= 0) return false;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.color}, ${p.alpha})`;
        ctx.fill();
        return true;
      });
      animFrame.current = requestAnimationFrame(animate);
    };
    animFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame.current);
    };
  }, [isMobile, addParticle]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
};

export default CursorTrail;
