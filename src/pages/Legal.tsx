import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Legal = () => {
  return (
    <Layout>
      <SEOHead
        title="Legal — Cocina en Flor"
        description="Términos y condiciones, política de privacidad de Cocina en Flor."
        path="/legal"
      />
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-tight prose prose-neutral max-w-2xl mx-auto">
          <h1 className="font-display text-4xl text-foreground">Términos y Condiciones</h1>
          <p className="text-muted-foreground">
            Al suscribirte a Cocina en Flor — El Club de los Domingos, aceptás los siguientes términos:
          </p>
          <ul className="text-muted-foreground space-y-2">
            <li>La suscripción se renueva automáticamente cada mes o año según el plan elegido.</li>
            <li>Podés cancelar en cualquier momento desde tu cuenta, sin penalidad.</li>
            <li>Los materiales descargados son para uso personal y familiar únicamente.</li>
            <li>No está permitida la redistribución de los contenidos.</li>
          </ul>

          <h2 className="font-display text-2xl text-foreground mt-10">Política de Privacidad</h2>
          <p className="text-muted-foreground">
            Protegemos tu información personal. Solo recopilamos los datos necesarios para brindarte el servicio: nombre, email y datos de facturación. No compartimos tu información con terceros.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
