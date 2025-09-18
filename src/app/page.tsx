import Link from "next/link";
import Image from "next/image";
import NotreHistoire from "./components/NotreHistoire";
import PlatsPopulaires from "./components/PlatsPopulaires";
import FadeIn from "./components/FadeIn";
import Temoignages from "./components/Temoignages";
import GalerieApercu from "./components/GalerieApercu";
import ActiveHeroBanner from "./components/ActiveHeroBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch text-charcoal font-sans w-full">
      {/* Admin-configured Event Banner */}
      <ActiveHeroBanner />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="blur-accent" style={{ top: "-140px", left: "-80px", background: "rgba(207, 175, 125, 0.4)" }} />
        <div className="blur-accent" style={{ bottom: "-160px", right: "-120px", background: "rgba(140, 47, 42, 0.25)" }} />
        <div className="section-shell relative z-10 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="text-left space-y-7">
              <span className="eyebrow">
                <span className="divider" aria-hidden="true"></span>
                Maison de Gastronomie Marocaine
              </span>
              <h1 className="font-serif text-4xl sm:text-[3.6rem] leading-[1.05] text-[var(--primary)]">
                Aux Délices du Maroc
              </h1>
              <p className="text-large max-w-xl text-[var(--muted)] space-y-3">
                <span className="block">
                  Reconnue première cuisine au monde pour sa saveur, sa variété et son équilibre,
                  la gastronomie marocaine est bien plus qu’un art culinaire : c’est un voyage à
                  travers les épices, les couleurs et les traditions d’un pays millénaire.
                </span>
                <span className="block">
                  Aux Délices du Maroc, chaque plat est préparé avec passion, pour vous offrir
                  l’authenticité et la noblesse d’une cuisine qui a conquis le cœur du monde.
                </span>
                <span className="block">
                  …Bienvenue dans notre maison, bienvenue au Maroc.
                </span>
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/reservation" className="btn-cta">
                  <span>Réservez votre table</span>
                </Link>
                <Link href="/notre-carte" className="btn-cta btn-cta--outline">
                  <span>Explorer la carte</span>
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-3 pt-6 text-sm text-[var(--muted)]">
                <div>
                  <span className="font-semibold text-charcoal">Horaires</span>
                  <p className="mt-1 leading-relaxed">
                    Mardi – Dimanche<br />12:00–14:30 · 19:00–22:30
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-charcoal">Adresse</span>
                  <p className="mt-1 leading-relaxed">
                    268 Bd Henri Barbusse<br />91210 Draveil
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-charcoal">Expérience</span>
                  <p className="mt-1 leading-relaxed">
                    Savoir-faire familial, produits d’exception, service attentionné.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="surface-card overflow-hidden">
                <div className="absolute right-6 top-6 z-20 rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
                  Depuis 2004
                </div>
                <Image
                  src="/gallery/tajines.webp"
                  alt="Tajine gastronomique dressé avec élégance"
                  width={760}
                  height={640}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -left-8 bottom-8 hidden md:flex items-center gap-3 rounded-[var(--radius-md)] bg-[rgba(255,255,255,0.92)] px-5 py-4 shadow-[0_16px_40px_-28px_rgba(24,16,12,0.6)] backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d9c1a3] to-[#b68263] text-white font-semibold">
                  20+
                </div>
                <div className="text-sm text-[var(--muted)]">
                  <p className="font-semibold text-charcoal">Années de tradition</p>
                  <p>Famille Rafiki au service des saveurs marocaines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maison Section */}
      <FadeIn>
        <section className="py-20 md:py-28">
          <div className="section-shell space-y-12">
            <div className="text-center space-y-4">
              <span className="eyebrow">
                <span className="divider" aria-hidden="true"></span>
                Notre maison
              </span>
              <h2 className="text-4xl md:text-[3rem] text-[var(--primary)]">
                L’art de recevoir à la marocaine, revisité avec audace
              </h2>
              <p className="text-large mx-auto max-w-3xl text-[var(--muted)]">
                Dans notre demeure draveilloise, l’héritage culinaire de Fès dialogue avec les codes
                des grandes tables internationales. Service cérémonial, produits sourcés auprès de
                partenaires d’exception, accords mets-thés ou mets-vins : chaque détail respire le
                raffinement.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="surface-card space-y-4 p-7 text-left">
                <span className="eyebrow">Atelier des épices</span>
                <p className="text-lg font-serif text-charcoal">
                  Des mélanges signature, torréfiés et assemblés sur place.
                </p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Safran de Taliouine, cumin d’Essaouira et fleur d’oranger de Marrakech composent
                  des bases aromatiques subtiles qui signent nos tajines et couscous.
                </p>
              </div>
              <div className="surface-card space-y-4 p-7 text-left">
                <span className="eyebrow">Salon privé</span>
                <p className="text-lg font-serif text-charcoal">
                  Une table confidentielle pour vos instants précieux.
                </p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Dîners d’affaires, célébrations intimistes ou menus dégustation sur-mesure : nous
                  dessinons une expérience ajustée à chacun de vos événements.
                </p>
              </div>
              <div className="surface-card space-y-4 p-7 text-left">
                <span className="eyebrow">Expérience sensorielle</span>
                <p className="text-lg font-serif text-charcoal">
                  Mise en scène contemporaine de l’hospitalité marocaine.
                </p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Textiles brodés, luminaire artisanal et playlists exclusives composent un cocon
                  chaleureux où l’on savoure le temps long.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>


      {/* Notre Histoire Section */}
      <FadeIn delay={0.4}>
        <NotreHistoire />
      </FadeIn>

      {/* Plats Populaires Section */}
      <FadeIn delay={0.5}>
        <PlatsPopulaires />
      </FadeIn>

      {/* Temoignages Section */}
      <FadeIn delay={0.6}>
        <Temoignages />
      </FadeIn>

      {/* Galerie Apercu Section */}
      <FadeIn delay={0.7}>
        <GalerieApercu />
      </FadeIn>

      {/* Ordering Section */}
      <section className="relative w-full py-20 md:py-28">
        <div className="section-shell">
          <div className="surface-card flex flex-col gap-10 px-8 py-12 md:px-12 md:py-14 text-center">
            <div className="space-y-4">
              <span className="eyebrow">
                <span className="divider" aria-hidden="true"></span>
                Livraison premium
              </span>
              <h3 className="text-4xl md:text-[2.75rem] text-[var(--primary)]">
                Savourez nos créations chez vous
              </h3>
              <p className="text-large mx-auto max-w-2xl text-[var(--muted)]">
                Nos partenaires sélectionnés assurent la même exigence de qualité du restaurant à
                votre table. Dîner intimiste, réception privée ou soirée conviviale : laissez-nous
                voyager jusqu’à vous.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
              <a
                href="https://deliveroo.fr/fr/menu/paris/draveil/aux-delices-du-maroc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border-2 border-green-500 bg-green-500 py-3 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-green-600"
              >
                Deliveroo
              </a>
              <a
                href="https://www.ubereats.com/fr/store/aux-delices-du-maroc/IRzYO8SXXVOa75_CceRnKA?diningMode=DELIVERY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border-2 border-black bg-black py-3 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Uber Eats
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
