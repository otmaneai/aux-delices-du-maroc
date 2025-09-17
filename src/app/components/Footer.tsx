import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-charcoal pt-2 pb-12">
      <div className="h-2 w-full bg-moroccan-pattern bg-[length:36px_36px] opacity-60" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/gallery/logo-new.png"
                alt="Aux Délices du Maroc logo"
                width={40}
                height={40}
                className="mix-blend-multiply"
              />
              <h3 className="subsection-title">Aux Délices du Maroc</h3>
            </div>
            <p className="text-body mb-2">
              268 Bd Henri Barbusse, 91210 Draveil, France
            </p>
            <p className="text-body mb-2">
              Tél:{" "}
              <a
                href="tel:0169487948"
                className="hover:text-primary transition-colors duration-300"
              >
                01 69 48 79 48
              </a>
            </p>
            <p className="text-body">
              <a
                href="mailto:restaurantauxdelicesdumaroc@gmail.com"
                className="hover:text-primary transition-colors duration-300"
              >
                restaurantauxdelicesdumaroc@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="subsection-title">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="nav-link relative group pb-1">
                  <span>Accueil</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="relative group pb-1">
                  <span>Réservation</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/notre-carte" className="relative group pb-1">
                  <span>Notre Carte</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="relative group pb-1">
                  <span>Galerie</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative group pb-1">
                  <span>Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="subsection-title">Horaires</h3>
            <ul className="space-y-2">
              <li className="text-body">Mardi - Dimanche:</li>
              <li className="text-body pl-4">12:00–14:30</li>
              <li className="text-body pl-4">19:00–22:30</li>
              <li className="text-body mt-2">
                Lundi: <span className="text-primary">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="http://instagram.com/auxdelicesdumaroc_draveil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-charcoal hover:text-primary transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.tripadvisor.fr/Restaurant_Review-g608773-d8076838-Reviews-Aux_Delices_du_Maroc-Draveil_Essonne_Ile_de_France.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tripadvisor"
              className="text-charcoal hover:text-primary transition-colors duration-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 .5C7.444.5.5 7.444.5 16S7.444 31.5 16 31.5 31.5 24.556 31.5 16 24.556.5 16 .5zm0 29.25c-7.59 0-13.75-6.16-13.75-13.75S8.41 2.25 16 2.25s13.75 6.16 13.75 13.75-6.16 13.75-13.75 13.75z" />
                <path d="M16.125 10.125c-3.25 0-5.875 2.625-5.875 5.875s2.625 5.875 5.875 5.875 5.875-2.625 5.875-5.875-2.625-5.875-5.875-5.875zm-1.5 9.75a3.875 3.875 0 110-7.75 3.875 3.875 0 010 7.75zm8.375-10.5a1.625 1.625 0 11-3.25 0 1.625 1.625 0 013.25 0z" />
              </svg>
            </a>
          </div>
          <p className="text-small text-gray-600">
            {currentYear} Aux Délices du Maroc. Tous droits réservés.{" "}
            <span className="mx-2">|</span>{" "}
            <Link
              href="/mention-legales"
              className="hover:text-primary transition-colors duration-300"
            >
              Mentions Légales
            </Link>
          </p>
          <p className="text-small text-gray-500 mt-4">
            Site web réalisé avec ❤ par{" "}
            <a
              href="https://otmaneaiboud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors duration-300"
            >
              Otmane Aiboud
            </a>
          </p>
        </div>
      </div>
      <div className="h-2 w-full bg-moroccan-pattern bg-[length:36px_36px] opacity-60 mt-6" />
    </footer>
  );
};

export default Footer;
