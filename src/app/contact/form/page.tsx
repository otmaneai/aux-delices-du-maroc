"use client";

import React, { useMemo, useState } from "react";
import PageHero from "../../components/PageHero";
import { convexReact, api } from "@/lib/convex";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
  hp: string; // honeypot
};

export default function ContactFormPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
    hp: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const createMessage = convexReact.useMutation
    ? convexReact.useMutation(api?.contact?.createMessage)
    : undefined;

  const convexReady = Boolean(createMessage);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm(
      (f) => ({ ...f, [name]: type === "checkbox" ? checked : value }) as any
    );
  };

  const validate = useMemo(() => {
    // Basic validation without external dependencies
    return (f: FormState) => {
      if (!f.name || f.name.length < 2)
        return { ok: false as const, msg: "Nom invalide" };
      if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
        return { ok: false as const, msg: "Email invalide" };
      if (!f.subject || f.subject.length < 2)
        return { ok: false as const, msg: "Sujet invalide" };
      if (!f.message || f.message.length < 5)
        return { ok: false as const, msg: "Message trop court" };
      if (!f.consent)
        return {
          ok: false as const,
          msg: "Veuillez accepter la politique de confidentialité",
        };
      return { ok: true as const };
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const v = validate(form);
    if (!v.ok) {
      setError(v.msg);
      setStatus("error");
      return;
    }
    try {
      await createMessage!({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: form.subject,
        message: form.message,
        hp: form.hp,
      } as any);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
        hp: "",
      });
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'envoi. Réessayez plus tard.");
      setStatus("error");
    }
  };

  const input =
    "w-full p-4 bg-transparent border-2 border-gray-300 rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen font-sans text-charcoal">
      <PageHero
        title="Nous Contacter"
        subtitle="Envoyez-nous un message. Nous vous répondrons rapidement."
      />

      <main className="container mx-auto px-4 pb-16 md:pb-24 max-w-3xl">
        {!convexReady && (
          <div className="mb-6 p-4 border rounded text-sm text-gray-700 bg-white/70">
            Convex n'est pas initialisé (NEXT_PUBLIC_CONVEX_URL manquant). Le
            formulaire affichera une erreur à l'envoi.
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/70 p-6 rounded-lg shadow-sm"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block item-title mb-2">
                Nom
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className={input}
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block item-title mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className={input}
                autoComplete="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block item-title mb-2">
                Téléphone (optionnel)
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className={input}
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block item-title mb-2">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={onChange}
                required
                className={input}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block item-title mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={6}
              className={input}
            />
          </div>
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp">Votre site web</label>
            <input
              id="hp"
              name="hp"
              value={form.hp}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={onChange}
              className="mt-1"
              aria-describedby="consent-desc"
            />
            <div>
              <label htmlFor="consent" className="font-semibold">
                J'accepte la politique de confidentialité
              </label>
              <p id="consent-desc" className="text-sm text-gray-600">
                Nous utilisons vos informations pour répondre à votre demande.
              </p>
            </div>
          </div>
          {status === "error" && (
            <div role="alert" className="p-3 rounded bg-red-100 text-red-700">
              {error || "Une erreur est survenue."}
            </div>
          )}
          {status === "success" && (
            <div
              role="status"
              className="p-3 rounded bg-green-100 text-green-700"
            >
              Message envoyé avec succès. Merci !
            </div>
          )}
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary/90 hover:text-accent transition-all duration-300 shadow-lg disabled:opacity-70 hover:-translate-y-1 hover:shadow-xl"
            >
              {status === "submitting" ? "Envoi..." : "Envoyer le message"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
