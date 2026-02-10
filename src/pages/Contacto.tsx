import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Mail } from "lucide-react";

const Contacto = () => {
  return (
    <Layout>
      <SEOHead
        title="Contacto — El Club de los Domingos"
        description="¿Tenés preguntas? Escribinos y te respondemos a la brevedad."
        path="/contacto"
      />
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-tight text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Hablemos
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            ¿Tenés dudas? Escribinos y te respondemos lo antes posible.
          </p>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-cta hover:bg-terracotta-dark transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
