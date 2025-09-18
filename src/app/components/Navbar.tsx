"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/reservation", label: "Réservation" },
  { href: "/notre-carte", label: "Notre Carte" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full pt-5 pb-3">
      <div className="section-shell">
        <div className="relative flex items-center justify-between rounded-[var(--radius-lg)] border border-[rgba(88,28,23,0.12)] bg-[rgba(248,245,240,0.92)] px-7 py-4 shadow-[0_18px_45px_-28px_rgba(24,16,12,0.65)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d9c1a3] to-[#b68263] shadow-inner">
              <Image
                src="/gallery/logo-new.png"
                alt="Aux Délices du Maroc Logo"
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
                priority
              />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-[0.55rem] uppercase tracking-[0.36em] text-[var(--muted)]">
                Maison de Cuisine Marocaine
              </span>
              <span className="text-xl font-serif text-[var(--primary)]">
                Aux Délices du Maroc
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[0.82rem] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative whitespace-nowrap transition-colors duration-200 ${isActive ? "text-primary" : "hover:text-primary"}`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "group-hover:scale-x-100"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-5 pl-2">
            <div className="h-9 w-[1px] translate-x-1 bg-[var(--border)]" aria-hidden="true" />
            <Link href="/reservation" className="btn-cta btn-cta--outline btn-cta--sm">
              Réserver
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden rounded-full border border-[rgba(88,28,23,0.15)] bg-white/70 p-2 text-charcoal shadow-sm backdrop-blur"
            aria-label="Ouvrir le menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M10 18h10" />}
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mt-3 rounded-[var(--radius-md)] border border-[rgba(88,28,23,0.12)] bg-[rgba(248,245,240,0.96)] p-5 shadow-[0_24px_60px_-30px_rgba(27,18,12,0.55)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-3 transition-colors duration-200 whitespace-nowrap ${isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/10 hover:text-primary"}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/reservation"
                className="btn-cta btn-cta--sm justify-center"
                onClick={closeMenu}
              >
                Réserver une table
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
