import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-display text-xl mb-3">El Club de los Domingos</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Un sistema mensual para organizar tu cocina, reducir el estrés y recuperar tu tiempo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-60">Navegación</h4>
            <div className="flex flex-col gap-2">
              <Link to="/como-funciona" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Cómo funciona</Link>
              <Link to="/planes" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Planes</Link>
              <Link to="/muestras" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Muestras</Link>
              <Link to="/faq" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Preguntas frecuentes</Link>
              <Link to="/contacto" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contacto</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-60">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/legal" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Términos y condiciones</Link>
              <Link to="/legal" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Política de privacidad</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} El Club de los Domingos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
