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
    <main className="flex flex-col items-center bg-background text-charcoal font-sans">
      {/* Admin-configured Event Banner */}
      <ActiveHeroBanner />
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-white">
        <Image
          src="/gallery/4.webp"
          alt="Décoration intérieure élégante du restaurant Aux Délices du Maroc"
          fill
          className="z-0 animate-ken-burns object-cover"
          priority // Preload the hero image
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent bg-opacity-60"></div>
        <div className="relative z-10 text-center p-8">
          <div className="flex justify-center mb-3">
            <Image
              src="/gallery/logo.webp"
              alt="Logo"
              width={256}
              height={256}
              className="mix-blend-multiply"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white">
            Bienvenue à Aux Délices du Maroc
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Une saveur authentique du Maroc à Draveil.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <FadeIn>
        <section className="py-16 md:py-24">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              L'Art de la Cuisine Marocaine
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-charcoal leading-relaxed mb-10">
              Plongez dans un voyage culinaire inoubliable. Notre cuisine est
              une célébration des saveurs riches et des traditions ancestrales
              du Maroc, préparée avec passion et des ingrédients frais.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/reservation"
                className="bg-primary text-charcoal font-bold py-3 px-8 rounded-full text-lg hover:bg-primary/90 hover:text-accent transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Réservez une Table
              </Link>
              <Link
                href="/notre-carte"
                className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-primary hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
              >
                Voir Notre Carte
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Ramadan Banner - Restyled */}
      <FadeIn delay={0.3}>
        <section className="w-full bg-primary text-center py-4">
          <h2 className="text-2xl font-bold text-background">
            Ouvert durant tout le mois de Ramadan
          </h2>
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
      <section className="py-16 md:py-24 bg-gray-50 w-full">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-4xl font-serif text-primary mb-8">
            Commandez en Ligne
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-charcoal leading-relaxed mb-10">
            Savourez nos délices chez vous. Commandez facilement via nos
            partenaires de livraison.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://deliveroo.fr/fr/menu/paris/draveil/aux-delices-du-maroc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-300 shadow-md w-full md:w-auto"
            >
              Deliveroo
            </a>
            <a
              href="https://www.ubereats.com/fr/store/aux-delices-du-maroc/IRzYO8SXXVOa75_CceRnKA?diningMode=DELIVERY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300 shadow-md w-full md:w-auto"
            >
              Uber Eats
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
