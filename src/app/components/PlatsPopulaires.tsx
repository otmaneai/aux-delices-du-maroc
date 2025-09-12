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
    <section className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12">
          Nos Incontournables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-charcoal mb-3">
                  {dish.name}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/notre-carte"
            className="bg-primary text-charcoal font-bold py-3 px-8 rounded-full text-lg hover:bg-primary/90 hover:text-accent transition-all duration-300 shadow-lg"
          >
            Découvrir Toute la Carte
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatsPopulaires;
