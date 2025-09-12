"use client";

import React, { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { convexReact, api as convexApi } from "@/lib/convex";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
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
    hp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
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
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (convexReady) {
        const subject = `Réservation: ${formData.date} ${formData.time} (${formData.guests} pers)`;
        const composed = `Demande de réservation\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nDate: ${formData.date}\nHeure: ${formData.time}\nPersonnes: ${formData.guests}\n\nMessage:\n${formData.message || "—"}`;
        try {
          await createMessage!({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject,
            message: composed,
            hp: formData.hp,
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
    "w-full p-4 bg-transparent border-2 border-gray-300 rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen font-sans text-charcoal">
      <PageHero
        title="Réservez Votre Table"
        subtitle="Garantissez votre place pour une expérience culinaire inoubliable. Nous sommes impatients de vous accueillir."
      />

      <main className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
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

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-primary text-charcoal font-bold py-4 px-10 rounded-full text-lg hover:bg-primary/90 hover:text-accent transition-all duration-300 shadow-lg w-full md:w-auto disabled:bg-opacity-70 disabled:cursor-not-allowed hover:-translate-y-1 hover:shadow-xl"
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
                Une erreur est survenue. Veuillez réessayer ou nous contacter
                directement.
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
                  src="/gallery/logo.webp"
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
                className="inline-block bg-primary text-charcoal font-bold py-4 px-10 rounded-full text-lg hover:bg-primary/90 hover:text-accent transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
