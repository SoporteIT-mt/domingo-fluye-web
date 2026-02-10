import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "¿Es para principiantes en la cocina?", a: "¡Sí! Las recetas son simples, con ingredientes comunes y pasos claros. No necesitás experiencia previa." },
  { q: "¿Necesito un freezer grande?", a: "No. Con el freezer de una heladera común alcanza. El sistema está pensado para espacios reales." },
  { q: "¿Puedo adaptar las recetas si alguien no come algo?", a: "Sí. Cada receta incluye sustituciones para los ingredientes más comunes." },
  { q: "¿Puedo cancelar cuando quiera?", a: "Sí. Cancelás desde tu cuenta, sin preguntas ni trámites. Sin permanencia." },
  { q: "¿Cuánto tiempo lleva cocinar todo el domingo?", a: "Aproximadamente 90 minutos. El sistema está diseñado para ser eficiente y no ocuparte toda la mañana." },
  { q: "¿La comida es apta para chicos?", a: "Totalmente. Son recetas de comida de familia real: milanesas, guisos, pastas, tartas, estofados. Comida que les gusta." },
];

const FAQSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-soft-peach/60 via-accent/35 to-soft-peach/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-primary/6 rounded-full blur-[80px] pointer-events-none" />
      {/* Decorative icon */}
      <div className="absolute top-20 right-[8%] opacity-[0.03] pointer-events-none">
        <HelpCircle size={180} />
      </div>

      <div className="container-tight relative">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Todo lo que necesitás saber antes de sumarte.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-card p-2 border border-border">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border/50 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary px-4 py-4 transition-colors [&[data-state=open]]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed px-4 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
