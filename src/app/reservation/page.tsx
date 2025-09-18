"use client";

import React, { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { convexReact, api as convexApi } from "@/lib/convex";
import { POLICY_VERSION } from "@/providers/cookie-consent-provider";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
  consent: boolean;
  hp?: string; // honeypot
}

const ReservationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    message: "",
    consent: false,
    hp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const createMessage =
    convexReact.useMutation && convexApi?.contact?.createMessage
      ? convexReact.useMutation(convexApi.contact.createMessage)
      : undefined;
  const convexReady = useMemo(() => Boolean(createMessage), [createMessage]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name } = e.target;
    const value =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }) as FormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    if (!formData.consent) {
      setErrorMessage(
        "Veuillez accepter le traitement de vos données pour finaliser la réservation."
      );
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      if (convexReady) {
        const subject = `Réservation: ${formData.date} ${formData.time} (${formData.guests} pers)`;
        const composed = `Demande de réservation\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nDate: ${formData.date}\nHeure: ${formData.time}\nPersonnes: ${formData.guests}\nConsentement: oui (version ${POLICY_VERSION})\n\nMessage:\n${formData.message || "—"}`;
        try {
          await createMessage!({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject,
            message: composed,
            hp: formData.hp,
            consent: formData.consent,
            consentVersion: POLICY_VERSION,
          } as any);
          setSubmitStatus("success");
          setShowSuccessModal(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "1",
            message: "",
            consent: false,
            hp: "",
          });
        } catch (e) {
          // If Convex fails, fallback to Next API
          const response = await fetch("/api/reservations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              date: formData.date,
              time: formData.time,
              guests: Number(formData.guests),
              message: formData.message,
              consent: formData.consent,
              consentVersion: POLICY_VERSION,
            }),
          });
          if (response.ok) {
            setSubmitStatus("success");
            setShowSuccessModal(true);
            setFormData({
              name: "",
              email: "",
              phone: "",
              date: "",
              time: "",
              guests: "1",
              message: "",
              consent: false,
              hp: "",
            });
          } else {
            setSubmitStatus("error");
          }
        }
      } else {
        const response = await fetch("/api/reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            guests: Number(formData.guests),
            message: formData.message,
            consent: formData.consent,
            consentVersion: POLICY_VERSION,
          }),
        });
        if (response.ok) {
          setSubmitStatus("success");
          setShowSuccessModal(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "1",
            message: "",
            consent: false,
            hp: "",
          });
        } else {
          setSubmitStatus("error");
        }
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle =
    "w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-white/80 p-4 text-charcoal placeholder:text-[var(--muted)] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/60 transition-all";

  return (
    <div className="min-h-screen font-sans text-charcoal">
      <PageHero
        title="Réservez Votre Table"
        subtitle="Garantissez votre place pour une expérience culinaire inoubliable. Nous sommes impatients de vous accueillir."
      />

      <main className="section-shell pb-24">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="surface-card space-y-8 p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-charcoal mb-2"
                >
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-charcoal mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-charcoal mb-2"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="01 23 45 67 89"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label
                  htmlFor="date"
                  className="block text-lg font-semibold text-charcoal mb-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-lg font-semibold text-charcoal mb-2"
                >
                  Heure
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-lg font-semibold text-charcoal mb-2"
                >
                  Personnes
                </label>
                <select
                  name="guests"
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-charcoal mb-2"
              >
                Demande Particulière (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Allergies, occasion spéciale, etc."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={inputStyle}
              ></textarea>
            </div>

            {/* Honeypot anti-spam field (hidden) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp">Votre site web</label>
              <input
                id="hp"
                name="hp"
                value={formData.hp}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex items-start gap-2 rounded-md border border-gray-200/70 bg-white/40 p-3 text-sm text-charcoal/80">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4"
                aria-describedby="reservation-consent-desc"
              />
              <div>
                <label
                  htmlFor="consent"
                  className="font-medium text-sm text-charcoal"
                >
                  J’accepte que mes données soient utilisées pour gérer ma réservation
                </label>
                <p
                  id="reservation-consent-desc"
                  className="mt-1 text-xs leading-relaxed text-charcoal/70"
                >
                  Vos informations servent uniquement à traiter votre demande et pourront être
                  conservées jusqu’à 3 ans. Aucune prospection ne sera envoyée sans votre accord.
                  Consultez notre{' '}
                  <Link
                    href="/politique-de-confidentialite"
                    className="text-primary hover:text-accent underline"
                  >
                    politique de confidentialité
                  </Link>{' '}
                  pour connaître vos droits.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn-cta w-full md:w-auto justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Envoi en cours..."
                  : "Confirmer la Réservation"}
              </button>
            </div>

            {submitStatus === "success" && (
              <p className="text-center text-green-600 mt-4 text-lg">
                Merci ! Votre demande de réservation a bien été envoyée. Nous
                vous recontacterons bientôt.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-red-600 mt-4 text-lg">
                {errorMessage ||
                  "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."}
              </p>
            )}
          </form>
        </div>
      </main>

      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white to-accent/10" />
            <div className="relative bg-background rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4">
                <Image
                  src="/gallery/logo-new.png"
                  alt="Logo Aux Délices du Maroc"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-3">
                Merci pour votre réservation !
              </h3>
              <p className="text-charcoal mb-8 text-lg md:text-xl leading-relaxed">
                Merci ! Votre demande de réservation a bien été envoyée. Nous
                vous recontacterons bientôt.
              </p>
              <Link
                href="/"
                className="btn-cta justify-center"
              >
                <span>Retour à l’accueil</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
