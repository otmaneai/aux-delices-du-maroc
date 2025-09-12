"use client";

import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <header className="relative w-full bg-primary/5">
      {/* Decorative zellij strip */}
      <div className="h-3 w-full bg-moroccan-pattern bg-[length:40px_40px] opacity-60" />
      <div className="text-center py-14 md:py-18">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Image
              src="/gallery/logo.webp"
              alt="Logo Aux Délices du Maroc"
              width={288}
              height={288}
              className="mix-blend-multiply"
              priority
            />
          </div>
          <h1 className="page-title">{title}</h1>
          {subtitle ? (
            <p className="text-large text-charcoal/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <div className="h-3 w-full bg-moroccan-pattern bg-[length:40px_40px] opacity-60" />
    </header>
  );
}
