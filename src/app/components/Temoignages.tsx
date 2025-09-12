import React from 'react';

const testimonials = [
  {
    quote: 'Une expérience culinaire inoubliable. Le meilleur couscous que j\'ai jamais mangé, un service impeccable et une ambiance chaleureuse. Je reviendrai !',
    name: 'Claire L.',
  },
  {
    quote: 'Un véritable voyage au Maroc sans quitter Draveil. Les saveurs sont authentiques, les plats sont généreux et le personnel est adorable. À recommander les yeux fermés.',
    name: 'Julien M.',
  },
  {
    quote: 'Le cadre est magnifique et la cuisine est à la hauteur. Parfait pour un dîner en amoureux. Le tajine aux pruneaux est une pure merveille. Nous avons été conquis.',
    name: 'Sophie & Marc',
  },
];

const Temoignages = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12">
          Ce que nos clients disent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/50 p-8 rounded-lg shadow-sm text-center">
              <p className="text-charcoal italic leading-relaxed mb-6">"{testimonial.quote}"</p>
              <p className="font-bold font-serif text-accent text-lg">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Temoignages;
