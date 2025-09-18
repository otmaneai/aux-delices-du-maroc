"use client";

import Link from "next/link";
import Image from "next/image";
import { useCookieConsent } from "@/providers/cookie-consent-provider";

const Footer = () => {
  const { openPreferences } = useCookieConsent();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/reservation", label: "Réservation" },
    { href: "/notre-carte", label: "Notre Carte" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" },
    { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  ];

  return (
    <footer className="relative mt-24 bg-transparent text-charcoal">
      <div className="section-shell">
        <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[rgba(255,255,255,0.82)] px-8 py-12 md:px-12 md:py-16 shadow-[0_30px_80px_-50px_rgba(24,16,12,0.65)] backdrop-blur-xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d9c1a3] to-[#b68263] shadow-inner">
                  <Image
                    src="/gallery/logo-new.png"
                    alt="Logo Aux Délices du Maroc"
                    width={32}
                    height={32}
                    className="h-9 w-9 object-contain"
                  />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                    Maison gastronomique
                  </p>
                  <p className="text-xl font-serif text-[var(--primary)]">
                    Aux Délices du Maroc
                  </p>
                </div>
              </div>
              <p className="text-large text-[var(--muted)]">
                Un voyage sensoriel entre tradition marocaine et élégance contemporaine. Nous
                orchestrons des moments privilégiés autour d’une cuisine sincère et généreuse.
              </p>
              <div className="space-y-2 text-sm text-[var(--muted)]">
                <p>
                  268 Bd Henri Barbusse · 91210 Draveil<br />
                  <a href="tel:0169487948" className="hover:text-primary">
                    +33 (0)1 69 48 79 48
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:restaurantauxdelicesdumaroc@gmail.com"
                    className="hover:text-primary"
                  >
                    restaurantauxdelicesdumaroc@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Navigation
              </h3>
              <ul className="mt-5 space-y-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-sm text-[var(--muted)]">
              <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Informations
              </h3>
              <div>
                <p className="font-semibold text-charcoal">Horaires</p>
                <p className="mt-1 leading-relaxed">
                  Mardi – Dimanche : 12:00–14:30 · 19:00–22:30<br />
                  Lundi : fermé
                </p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Suivez-nous</p>
                <div className="mt-2 flex items-center gap-4 text-charcoal">
                  <a
                    href="http://instagram.com/auxdelicesdumaroc_draveil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tripadvisor.fr/Restaurant_Review-g608773-d8076838-Reviews-Aux_Delices_du_Maroc-Draveil_Essonne_Ile_de_France.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                    aria-label="Tripadvisor"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M16 .5C7.444.5.5 7.444.5 16S7.444 31.5 16 31.5 31.5 24.556 31.5 16 24.556.5 16 .5zm0 29.25c-7.59 0-13.75-6.16-13.75-13.75S8.41 2.25 16 2.25s13.75 6.16 13.75 13.75-6.16 13.75-13.75 13.75z" />
                      <path d="M16.125 10.125c-3.25 0-5.875 2.625-5.875 5.875s2.625 5.875 5.875 5.875 5.875-2.625 5.875-5.875-2.625-5.875-5.875-5.875zm-1.5 9.75a3.875 3.875 0 110-7.75 3.875 3.875 0 010 7.75zm8.375-10.5a1.625 1.625 0 11-3.25 0 1.625 1.625 0 013.25 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Réservation téléphonique</p>
                <p className="mt-1 leading-relaxed">
                  Du mardi au dimanche · 11:00 – 22:00
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs uppercase tracking-[0.28em] text-[var(--muted)] md:flex-row md:text-[0.7rem]">
            <span>© {currentYear} Aux Délices du Maroc — Tous droits réservés</span>
            <div className="flex items-center gap-4">
              <Link href="/mention-legales" className="hover:text-primary">
                Mentions légales
              </Link>
              <button
                type="button"
                onClick={openPreferences}
                className="hover:text-primary"
              >
                Préférences cookies
              </button>
            </div>
            <span>
              Création{' '}
              <a
                href="https://otmaneaiboud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Otmane Aiboud
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
