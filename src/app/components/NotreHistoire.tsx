import React from "react";
import Image from "next/image";

const NotreHistoire = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        <div className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="eyebrow">
              <span className="divider" aria-hidden="true"></span>
              Notre histoire
            </span>
            <h2 className="text-4xl md:text-[3.1rem] leading-tight text-[var(--primary)]">
              Une maison de tradition, ouverte sur le monde
            </h2>
            <p className="text-large text-[var(--muted)]">
              Née dans les ruelles lumineuses de Fès, notre maison a grandi avec l’ambition de
              sublimer les recettes traditionnelles et de les inscrire dans une expérience haute
              couture. Aux Délices du Maroc, chaque assiette raconte un voyage soigneusement
              orchestré.
            </p>
            <div className="surface-card p-6 md:p-8 space-y-4">
              <p className="text-lg text-charcoal leading-relaxed">
                Aujourd’hui, notre équipe met à l’honneur les épices rares, les produits nobles et
                l’art du service français, tout en préservant la générosité marocaine. Tajines,
                couscous, pâtisseries délicates : tout est réalisé maison, avec le soin d’un
                orfèvre.
              </p>
              <blockquote className="border-l-4 border-[var(--accent)] pl-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                « Nous façonnons des souvenirs, pas seulement des repas. »
              </blockquote>
            </div>
          </div>
          <div className="relative">
            <div className="surface-card overflow-hidden">
              <Image
                src="/gallery/salle%20une.webp"
                alt="Salle principale du restaurant, élégante et lumineuse"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-8 hidden md:block rounded-[var(--radius-md)] bg-[rgba(40,31,27,0.9)] px-6 py-5 text-sm text-[var(--surface)] shadow-[0_20px_45px_-30px_rgba(24,16,12,0.75)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(255,255,255,0.6)]">
                Signature
              </p>
              <p className="mt-2 font-semibold text-lg">Cuisine de partage, esprit palace.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotreHistoire;
