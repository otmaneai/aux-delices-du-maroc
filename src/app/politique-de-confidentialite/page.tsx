"use client";

import PageHero from "../components/PageHero";

const triggerPreferences = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  }
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen font-sans text-charcoal">
      <PageHero
        title="Politique de Confidentialité"
        subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles."
      />

      <main className="container mx-auto px-4 pb-16 md:pb-24">
        <article className="max-w-4xl mx-auto bg-white/60 p-8 md:p-12 rounded-lg shadow-sm prose prose-lg max-w-none">
          <section>
            <h2>Qui est responsable du traitement ?</h2>
            <p>
              Le responsable de traitement est la société <strong>SARL LA COMMERCIALE D’ALIMENTATION</strong>,
              exploitant le restaurant Aux Délices du Maroc, située au 268 Bd Henri Barbusse,
              91210 Draveil, France. Vous pouvez contacter le référent protection des données à
              l’adresse suivante : <a href="mailto:dpo@auxdelicesdumaroc.com">dpo@auxdelicesdumaroc.com</a>.
            </p>
          </section>

          <section>
            <h2>Données collectées</h2>
            <ul>
              <li>
                <strong>Formulaires de réservation et de contact :</strong> identité, coordonnées,
                date et détails de réservation, message.
              </li>
              <li>
                <strong>Communications :</strong> les échanges nécessaires à la gestion de votre
                demande (email, réponses).
              </li>
              <li>
                <strong>Cookies et traceurs :</strong> uniquement après consentement pour les
                cookies de mesure d’audience et marketing. Les cookies strictement nécessaires
                restent activés en permanence.
              </li>
            </ul>
          </section>

          <section>
            <h2>Finalités et bases légales</h2>
            <ul>
              <li>
                Gestion des demandes et réservations (mesures précontractuelles/intérêt légitime).
              </li>
              <li>
                Envoi de confirmations et d’informations pratiques (intérêt légitime).
              </li>
              <li>
                Prospection commerciale (consentement explicite, collecté séparément).
              </li>
              <li>
                Mesure d’audience et personnalisation marketing (consentement via le bandeau
                cookies).
              </li>
            </ul>
          </section>

          <section>
            <h2>Durée de conservation</h2>
            <ul>
              <li>Données de réservation et contact : 3 ans après le dernier échange.</li>
              <li>Données comptables liées à la facturation : 10 ans (obligation légale).</li>
              <li>Cookies de mesure d’audience : 13 mois ; préférences de consentement : 6 mois.</li>
            </ul>
          </section>

          <section>
            <h2>Destinataires et sous-traitants</h2>
            <p>
              L’accès est limité aux équipes internes d’Aux Délices du Maroc et à nos
              prestataires techniques strictement nécessaires (hébergeur, Convex, Resend,
              plateformes de livraison/prise de commandes). Chaque sous-traitant est encadré par
              un contrat de traitement conforme au RGPD.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation,
              d’opposition, de portabilité et du droit de définir des directives concernant le
              sort de vos données après votre décès. Pour exercer vos droits, contactez
              <a href="mailto:dpo@auxdelicesdumaroc.com"> dpo@auxdelicesdumaroc.com</a> en
              précisant l’objet de votre demande. Une pièce justificative pourra vous être
              demandée. Nous répondrons sous un mois maximum.
            </p>
            <p>
              Vous pouvez également saisir la CNIL :
              <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer"> www.cnil.fr</a>.
            </p>
          </section>

          <section>
            <h2>Cookies et consentements</h2>
            <p>
              Pour modifier vos choix, cliquez sur le bouton « Préférences cookies » présent en
              pied de page ou utilisez ce lien :
            </p>
            <p>
              <button
                type="button"
                onClick={triggerPreferences}
                className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Gérer mes cookies
              </button>
            </p>
            <p>
              Nous conservons un journal de vos consentements (date, choix effectués, version de
              la politique) afin de pouvoir justifier de leur obtention.
            </p>
          </section>

          <section>
            <h2>Transferts hors UE</h2>
            <p>
              Lorsque nos prestataires sont situés hors de l’Union européenne, nous veillons à ce
              que des mécanismes de protection adéquats soient en place (clauses contractuelles
              types, décisions d’adéquation, etc.).
            </p>
          </section>

          <section>
            <h2>Mise à jour</h2>
            <p>
              Cette politique pourra évoluer. La dernière mise à jour date du 17 septembre 2025.
              Nous vous invitons à la consulter régulièrement.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Pour toute question relative à la protection des données, écrivez-nous à
              <a href="mailto:contact@auxdelicesdumaroc.com"> contact@auxdelicesdumaroc.com</a>
              ou par courrier à l’adresse du restaurant.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
