import React from "react";
import Image from "next/image";

const NotreHistoire = () => {
  return (
    <section className="py-16 md:py-24 bg-background bg-moroccan-pattern">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              L'histoire d'Aux Délices du Maroc n'est pas celle d'un simple
              restaurant, mais celle d'un voyage. Un voyage qui commence dans
              les ruelles embaumées de Fès, où les secrets du safran et de la
              cannelle se murmurent de mère en fille. C'est là, dans la chaleur
              d'une cuisine familiale, qu'est née la promesse de partager un
              jour ces trésors culinaires, bien au-delà des frontières du Maroc.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Aujourd'hui, cette promesse vit dans chacun de nos plats. Nous
              choisissons nos épices avec le soin d'un orfèvre et nos
              ingrédients pour leur noblesse, car chaque tajine est une
              célébration. C'est une parcelle de notre âme que nous vous
              offrons, une invitation à un festin où la générosité marocaine est
              reine. Bienvenue chez vous.
            </p>
          </div>
          <div className="order-1 md:order-2 h-80 md:h-full w-full relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gallery/4.webp"
              alt="Ambiance élégante et chaleureuse du restaurant"
              fill
              className="transition-transform duration-500 hover:scale-110 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotreHistoire;
