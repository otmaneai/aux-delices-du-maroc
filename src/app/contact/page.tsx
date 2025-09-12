import React from "react";
import PageHero from "../components/PageHero";

const ContactPage = () => {
  return (
    <div className="min-h-screen font-sans text-charcoal">
      <PageHero
        title="Nous Contacter"
        subtitle="Nous sommes à votre disposition pour toute question. N'hésitez pas à nous appeler ou à nous rendre visite."
      />

      <main className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="bg-white/50 p-8 md:p-10 rounded-lg shadow-sm">
            <h2 className="subsection-title">Informations</h2>

            <div className="space-y-6">
              <div>
                <h3 className="item-title mb-2">Adresse</h3>
                <p className="text-body">
                  268 Bd Henri Barbusse, 91210 Draveil
                </p>
              </div>
              <div>
                <h3 className="item-title mb-2">Téléphone</h3>
                <a
                  href="tel:0169487948"
                  className="text-body text-primary hover:text-accent transition-colors"
                >
                  01 69 48 79 48
                </a>
              </div>
              <div>
                <h3 className="item-title mb-2">E-mail</h3>
                <a
                  href="mailto:restaurantauxdelicesdumaroc@gmail.com"
                  className="text-body text-primary hover:text-accent transition-colors"
                >
                  restaurantauxdelicesdumaroc@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="subsection-title">Horaires d'ouverture</h2>
            <div className="space-y-2">
              <p className="text-body">
                <strong>Mardi - Dimanche:</strong> 12:00–14:30, 19:00–22:30
              </p>
              <p className="text-body">
                <strong>Lundi:</strong> Fermé
              </p>
            </div>

            <a href="/reservation" className="mt-10 btn-cta">
              Réserver une Table
            </a>
          </div>

          <div className="h-96 md:h-full w-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.593442475424!2d2.408283677448273!3d48.69234001225549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5df5049c9e573%3A0x44b93a2a31451926!2sAux%20D%C3%A9lices%20du%20Maroc!5e0!3m2!1sfr!2sfr!4v1673883731189!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
