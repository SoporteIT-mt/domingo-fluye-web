import { Link } from "react-router-dom";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-warm-lg">
      <Link
        to="/planes"
        className="block w-full bg-primary text-primary-foreground text-center py-3.5 rounded-lg font-semibold text-base shadow-cta"
      >
        Quiero ordenar mi semana
      </Link>
    </div>
  );
};

export default StickyCTA;
