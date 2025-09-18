"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/providers/cookie-consent-provider";

const toggleClasses =
  "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const thumbClasses =
  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200";

const CookieBanner = () => {
  const {
    status,
    decision,
    preferencesOpen,
    acceptAll,
    rejectAll,
    openPreferences,
    closePreferences,
    saveCustom,
  } = useCookieConsent();
  const [customChoice, setCustomChoice] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (preferencesOpen) {
      setCustomChoice({
        analytics: decision?.categories.analytics ?? false,
        marketing: decision?.categories.marketing ?? false,
      });
    }
  }, [preferencesOpen, decision]);

  useEffect(() => {
    if (!preferencesOpen) return;
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreferences();
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [preferencesOpen, closePreferences]);

  if (status === "loading") return null;

  const showBanner = status === "undecided" && !preferencesOpen;
  const showModal = preferencesOpen;

  return (
    <>
      {showBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4">
          <div className="w-full max-w-4xl rounded-2xl bg-white/95 p-6 shadow-xl border border-primary/20">
            <h2 className="text-xl font-serif text-primary mb-2">
              Gestion des cookies
            </h2>
            <p className="text-sm text-charcoal/80">
              Nous utilisons des cookies pour sécuriser votre navigation,
              mesurer l’audience et améliorer nos services. Vous pouvez accepter
              l’ensemble des cookies, refuser ceux qui ne sont pas essentiels ou
              personnaliser vos choix. Pour en savoir plus, consultez notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-primary hover:text-accent underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-charcoal px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
              >
                Refuser tout
              </button>
              <button
                type="button"
                onClick={openPreferences}
                className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Personnaliser
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Accepter tout
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif text-primary">
                  Préférences cookies
                </h2>
                <p className="mt-2 text-sm text-charcoal/70">
                  Réglez l’utilisation des cookies facultatifs. Les cookies
                  strictement nécessaires sont toujours activés afin d’assurer
                  le bon fonctionnement du site.
                </p>
              </div>
              <button
                type="button"
                onClick={closePreferences}
                className="text-sm text-charcoal/60 hover:text-charcoal"
              >
                Fermer
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50/60 p-4">
                <div>
                  <p className="font-semibold text-charcoal">Nécessaires</p>
                  <p className="text-sm text-charcoal/70">
                    Indispensables au fonctionnement du site (sécurité, stockage
                    de vos choix).
                  </p>
                </div>
                <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-charcoal/60">
                  Toujours actifs
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                <div>
                  <p className="font-semibold text-charcoal">
                    Mesure d’audience
                  </p>
                  <p className="text-sm text-charcoal/70">
                    Nous aide à comprendre l’utilisation du site pour améliorer
                    l’expérience.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={customChoice.analytics}
                  className={`${toggleClasses} ${customChoice.analytics ? "bg-primary" : "bg-gray-300"}`}
                  onClick={() =>
                    setCustomChoice((c) => ({
                      ...c,
                      analytics: !c.analytics,
                    }))
                  }
                >
                  <span
                    className={`${thumbClasses} ${customChoice.analytics ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                <div>
                  <p className="font-semibold text-charcoal">Marketing</p>
                  <p className="text-sm text-charcoal/70">
                    Permet de vous proposer des contenus personnalisés sur nos
                    offres et événements.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={customChoice.marketing}
                  className={`${toggleClasses} ${customChoice.marketing ? "bg-primary" : "bg-gray-300"}`}
                  onClick={() =>
                    setCustomChoice((c) => ({
                      ...c,
                      marketing: !c.marketing,
                    }))
                  }
                >
                  <span
                    className={`${thumbClasses} ${customChoice.marketing ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-charcoal px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-[#F9F5ED]"
              >
                Refuser tout
              </button>
              <button
                type="button"
                onClick={() => saveCustom(customChoice)}
                className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Enregistrer mes choix
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CookieBanner;
