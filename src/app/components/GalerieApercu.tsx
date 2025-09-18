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
  const [emblaRef] = useEmblaCarousel({ loop: true, skipSnaps: false }, [
    Autoplay({ delay: 3200 }),
  ]);

  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        <div className="text-center space-y-4 mb-12">
          <span className="eyebrow">
            <span className="divider" aria-hidden="true"></span>
            Atmosphère
          </span>
          <h2 className="text-4xl md:text-[3rem] text-[var(--primary)]">
            Une immersion au cœur de la maison
          </h2>
          <p className="text-large mx-auto max-w-3xl text-[var(--muted)]">
            Lumière tamisée, art de la table raffiné, volumes sculptés : notre galerie capture
            l’élégance d’un dîner aux chandelles dans un riad contemporain.
          </p>
        </div>
        <div className="surface-card overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {previewImages.map((image, index) => (
                <div
                  className="relative flex-shrink-0 flex-grow-0 w-[80%] md:w-[33.333%] h-80 md:h-[420px]"
                  key={index}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,18,12,0.4)] to-transparent" />
                  <p className="absolute bottom-6 left-6 text-white text-lg font-semibold drop-shadow-xl">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center pt-12">
          <Link href="/galerie" className="btn-cta">
            <span>Découvrir la galerie complète</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalerieApercu;
