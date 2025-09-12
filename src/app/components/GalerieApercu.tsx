"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const previewImages = [
  { src: "/gallery/2.webp", alt: "Table dressée avec des plats marocains" },
  { src: "/gallery/6.webp", alt: "Grillades mixtes savoureuses" },
  { src: "/gallery/8.webp", alt: "Détail de la décoration marocaine" },
  { src: "/gallery/3.webp", alt: "Assortiment de pâtisseries marocaines" },
  { src: "/gallery/1.webp", alt: "Couscous royal" },
  { src: "/gallery/5.webp", alt: "Tajine de poulet" },
];

const GalerieApercu = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12">
          Un Aperçu de Notre Ambiance
        </h2>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {previewImages.map((image, index) => (
            <div
              className="relative flex-grow-0 flex-shrink-0 w-full md:w-1/3 h-80 mx-2"
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pt-12">
        <Link
          href="/galerie"
          className="bg-primary text-charcoal font-bold py-3 px-8 rounded-full text-lg hover:bg-primary/90 hover:text-accent transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
        >
          Découvrir la Galerie Complète
        </Link>
      </div>
    </section>
  );
};

export default GalerieApercu;
