import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Download } from "lucide-react";

const Muestras = () => {
  return (
    <Layout>
      <SEOHead
        title="Muestras gratis — El Club de los Domingos"
        description="Descargá una muestra gratuita del manual mensual del Club de los Domingos. Probá el sistema antes de suscribirte."
        path="/muestras"
      />
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-tight text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Probá antes de sumarte
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Descargá una muestra gratuita con recetas, lista de compras y calendario de una semana.
          </p>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Download className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl text-foreground mb-2">Muestra gratuita</h2>
            <p className="text-muted-foreground mb-6">
              Una semana del Club: 10 recetas, lista de compras y calendario.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-cta hover:bg-terracotta-dark transition-colors">
              Descargar muestra gratis
            </button>
            <p className="text-xs text-muted-foreground mt-3">Sin compromiso. Sin tarjeta.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Muestras;
