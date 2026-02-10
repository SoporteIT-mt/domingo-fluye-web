import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Es para principiantes en la cocina?",
    a: "¡Sí! Las recetas son simples, con ingredientes comunes y pasos claros. No necesitás experiencia previa.",
  },
  {
    q: "¿Necesito un freezer grande?",
    a: "No. Con el freezer de una heladera común alcanza. El sistema está pensado para espacios reales.",
  },
  {
    q: "¿Puedo adaptar las recetas si alguien no come algo?",
    a: "Sí. Cada receta incluye sustituciones para los ingredientes más comunes.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Cancelás desde tu cuenta, sin preguntas ni trámites. Sin permanencia.",
  },
  {
    q: "¿Cuánto tiempo lleva cocinar todo el domingo?",
    a: "Aproximadamente 90 minutos. El sistema está diseñado para ser eficiente y no ocuparte toda la mañana.",
  },
  {
    q: "¿La comida es apta para chicos?",
    a: "Totalmente. Son recetas de comida de familia real: milanesas, guisos, pastas, tartas, estofados. Comida que les gusta.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12">
          Todo lo que necesitás saber antes de sumarte.
        </p>

        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
