"use client";

import React from "react";
import Image from "next/image";
import { convexReact, api } from "@/lib/convex";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

const galleryImages = [
  { src: "/gallery/1.webp", alt: "Couscous marocain traditionnel" },
  { src: "/gallery/2.webp", alt: "Table dressée avec des plats marocains" },
  { src: "/gallery/3.webp", alt: "Assortiment de pâtisseries marocaines" },
  { src: "/gallery/4.webp", alt: "Décoration intérieure du restaurant" },
  {
    src: "/gallery/5.webp",
    alt: "Tajine de poulet aux olives et citrons confits",
  },
  { src: "/gallery/6.webp", alt: "Grillades mixtes savoureuses" },
  { src: "/gallery/7.webp", alt: "Détail d'un plat marocain" },
  { src: "/gallery/8.webp", alt: "Détail de la décoration marocaine" },
  { src: "/gallery/couscous.webp", alt: "Gros plan sur un plat de couscous" },
  {
    src: "/gallery/entrees-chaudes.webp",
    alt: "Assortiment d'entrées chaudes",
  },
  { src: "/gallery/entrees-froides.webp", alt: "Plateau d'entrées froides" },
  { src: "/gallery/grillades.webp", alt: "Brochettes de grillades" },
  { src: "/gallery/tajines.webp", alt: "Tajine d'agneau aux pruneaux" },
];

const GaleriePage = () => {
  const list =
    convexReact.useQuery && api?.gallery?.listImages
      ? (convexReact.useQuery(api.gallery.listImages, {}) as any[] | undefined)
      : undefined;
  const items =
    list && list.length > 0
      ? list.map((g, i) => ({
          src: g.url,
          alt: g.caption || `Image ${i + 1}`,
          _id: g._id,
        }))
      : galleryImages;
  return (
    <div className="min-h-screen">
      <PageHero
        title="Notre Galerie"
        subtitle="Un voyage visuel au cœur de la gastronomie et de l'hospitalité marocaines."
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((image, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="relative aspect-square rounded-lg overflow-hidden group shadow-lg cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="absolute inset-0 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        {/* Call to Action */}
        <section className="text-center pt-16 md:pt-24">
          <h2 className="section-title">Envie de nous rendre visite ?</h2>
          <p className="text-large max-w-2xl mx-auto mb-10">
            Réservez votre table dès maintenant et profitez d'une expérience
            marocaine authentique.
          </p>
          <a href="/reservation" className="btn-cta">
            <span>Réserver une Table</span>
          </a>
        </section>
      </main>
    </div>
  );
};

export default GaleriePage;
