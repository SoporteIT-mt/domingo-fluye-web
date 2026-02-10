import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    slug: "como-organizar-freezer",
    title: "Cómo organizar tu freezer para la semana en 5 pasos",
    excerpt: "Una guía práctica para aprovechar el espacio de tu freezer y tener comida lista todos los días.",
    date: "5 de febrero, 2026",
    tag: "Organización",
  },
  {
    slug: "meal-prep-principiantes",
    title: "Meal prep para principiantes: todo lo que necesitás saber",
    excerpt: "Si nunca cocinaste todo el domingo, esta guía te va a dar la confianza para empezar.",
    date: "28 de enero, 2026",
    tag: "Guías",
  },
  {
    slug: "reducir-carga-mental-cocina",
    title: "3 formas de reducir la carga mental con la cocina",
    excerpt: "No es solo cocinar. Es dejar de pensar en qué cocinar. Te contamos cómo lograrlo.",
    date: "20 de enero, 2026",
    tag: "Bienestar",
  },
  {
    slug: "lista-compras-inteligente",
    title: "La lista de compras inteligente que te ahorra tiempo y plata",
    excerpt: "Comprá una vez por semana y dejá de improvisar. Así funciona nuestra lista.",
    date: "12 de enero, 2026",
    tag: "Tips",
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog — Cocina en Flor"
        description="Tips, guías y consejos para organizar tu cocina semanal y reducir la carga mental. Meal prep, freezer, planificación."
        path="/blog"
      />
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-wide">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl text-foreground text-center mb-4">
              Blog
            </h1>
            <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
              Ideas, tips y guías para que tu semana fluya sin caos.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <motion.article
                  className="bg-card rounded-2xl p-7 shadow-card h-full flex flex-col"
                  whileHover={{ y: -4, boxShadow: "var(--shadow-warm)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{post.tag}</span>
                  <h2 className="font-display text-xl text-foreground mb-2">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link to={`/blog`} className="text-sm font-semibold text-primary hover:text-vino transition-colors">
                      Leer más →
                    </Link>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
