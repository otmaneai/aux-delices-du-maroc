"use client";

import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <header className="relative w-full py-16 md:py-20">
      <div className="section-shell">
        <div className="surface-card flex flex-col items-center gap-5 px-8 py-12 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#d9c1a3] to-[#b68263] shadow-inner">
            <Image
              src="/gallery/logo-new.png"
              alt="Logo Aux Délices du Maroc"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
          </span>
          <h1 className="text-[2.75rem] md:text-[3.1rem] font-serif leading-tight text-[var(--primary)]">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-2xl text-large text-[var(--muted)]">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
