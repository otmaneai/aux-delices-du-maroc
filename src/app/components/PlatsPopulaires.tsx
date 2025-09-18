import React from "react";
import Image from "next/image";
import Link from "next/link";

const featuredDishes = [
  {
    name: "Couscous Royal",
    description:
      "Un mélange somptueux de semoule fine, légumes frais, et une sélection de viandes grillées.",
    image: "/gallery/couscous.webp",
  },
  {
    name: "Tajine d'Agneau",
    description:
      "Mijoté à la perfection avec des pruneaux et des amandes, un classique sucré-salé inoubliable.",
    image: "/gallery/tajines.webp",
  },
  {
    name: "Entrées Chaudes",
    description:
      "Une sélection de délices marocains pour bien commencer le repas, comme la pastilla ou les briouates.",
    image: "/gallery/entrees-chaudes.webp",
  },
];

const PlatsPopulaires = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        <div className="text-center space-y-4 mb-14">
          <span className="eyebrow">
            <span className="divider" aria-hidden="true"></span>
            Signatures culinaires
          </span>
          <h2 className="text-4xl md:text-[3rem] text-[var(--primary)]">
            Les incontournables de notre carte
          </h2>
          <p className="text-large mx-auto max-w-3xl text-[var(--muted)]">
            Des classiques intemporels revisités avec modernité : chaque plat révèle un équilibre
            subtil entre raffinement gastronomique et âme marocaine.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <div key={index} className="surface-card overflow-hidden transition-transform duration-500 hover:-translate-y-3">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,8,0.55)] to-transparent" />
                <p className="absolute bottom-4 left-5 text-[0.75rem] uppercase tracking-[0.24em] text-white/80">
                  Plat Signature
                </p>
              </div>
              <div className="space-y-3 p-8 text-left">
                <h3 className="text-2xl font-serif text-charcoal">{dish.name}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link href="/notre-carte" className="btn-cta btn-cta--outline">
            <span>Découvrir toute la carte</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatsPopulaires;
