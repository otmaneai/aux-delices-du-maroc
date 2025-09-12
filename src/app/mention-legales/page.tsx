import React from 'react';
import PageHero from "../components/PageHero";

const MentionLegalesPage = () => {
  return (
    <div className="min-h-screen font-sans text-charcoal">
      <PageHero title="Mentions Légales" />

      <main className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-sm">
          <div className="space-y-10 prose prose-lg max-w-none text-charcoal">
            <section>
              <h2 className="text-3xl font-serif text-primary mb-4">Informations légales</h2>
              <p className="mt-4"><strong>Raison Sociale :</strong> SARL LA COMMERCIALE D’ALIMENTATION</p>
              <p><strong>Capital social :</strong> 10 000€</p>
              <p><strong>RCS :</strong> 879 419 364</p>
              <p><strong>Siège social :</strong> 268 Bd Henri Barbusse, 91210 Draveil</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-primary mb-4">Hébergement</h2>
              <p className="mt-4"><strong>Hébergeur :</strong> Namecheap, Inc.</p>
              <p><strong>Adresse :</strong> 4600 East Washington Street, Suite 305, Phoenix, AZ 85034, USA</p>
              <p>
                <strong>Site web :</strong>{' '}
                <a href="https://namecheap.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                  https://namecheap.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-primary mb-4">Crédits</h2>
              <p className="mt-4"><strong>Conception et Développement du site :</strong> Cascade by Windsurf</p>
              <p><strong>Photographies :</strong> Aux Délices du Maroc</p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-primary mb-4">Propriété intellectuelle</h2>
              <p className="mt-4">L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentionLegalesPage;
