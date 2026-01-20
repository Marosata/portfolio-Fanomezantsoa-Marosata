"use client";

import { useState, type FormEvent } from "react";
import { Mail, Linkedin, FileDown, ArrowUpRight } from "lucide-react";

type Lang = "en" | "fr";

type ContactProps = {
  lang: Lang;
};

export function Contact(props: ContactProps) {
  const isEn = props.lang === "en";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || data.ok !== true) {
        throw new Error(data.error ?? "Request failed");
      }

      setStatus("success");
      formElement.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        isEn
          ? "The message could not be sent. Please try again later or use the direct links."
          : "Le message n’a pas pu être envoyé. Réessayez plus tard ou utilisez les liens directs."
      );
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 pb-24"
      aria-label={isEn ? "Contact" : "Contact"}
    >
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-gray-100">
          {isEn ? "Let’s build something" : "Construisons quelque chose"}
        </h2>
        <p className="font-poppins text-sm text-slate-600 dark:text-gray-400">
          {isEn
            ? "Open to internships, part‑time roles and freelance missions in modern web development."
            : "Ouvert aux stages, postes à temps partiel et missions freelance en développement web moderne."}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-black/40">
          {/* <div className="fx-card-blob" aria-hidden="true" /> */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-2 font-poppins text-sm text-slate-700 dark:text-gray-300">
              <Mail className="mt-0.5 h-4 w-4 text-accent-primary" />
              <span>
                {isEn
                  ? "Send me a short brief and I’ll get back to you."
                  : "Envoyez‑moi un court descriptif et je vous répondrai rapidement."}
              </span>
            </div>
            <div className="space-y-2">
              <label className="block font-poppins text-xs font-medium text-slate-700 dark:text-gray-300">
                {isEn ? "Name" : "Nom"}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 font-poppins text-sm text-slate-900 outline-none ring-accent-primary/50 placeholder:text-slate-400 focus:ring-1 dark:border-white/10 dark:bg-black/40 dark:text-gray-100 dark:placeholder:text-gray-500"
                placeholder={isEn ? "Your name" : "Votre nom"}
              />
            </div>
            <div className="space-y-2">
              <label className="block font-poppins text-xs font-medium text-slate-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 font-poppins text-sm text-slate-900 outline-none ring-accent-primary/50 placeholder:text-slate-400 focus:ring-1 dark:border-white/10 dark:bg-black/40 dark:text-gray-100 dark:placeholder:text-gray-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-poppins text-xs font-medium text-slate-700 dark:text-gray-300">
                {isEn ? "Message" : "Message"}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 font-poppins text-sm text-slate-900 outline-none ring-accent-primary/50 placeholder:text-slate-400 focus:ring-1 dark:border-white/10 dark:bg-black/40 dark:text-gray-100 dark:placeholder:text-gray-500"
                placeholder={
                  isEn
                    ? "Tell me briefly about your project, context and timeline."
                    : "Décrivez brièvement votre projet, le contexte et le délai."
                }
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-accent-primary px-5 py-2.5 font-poppins text-sm font-medium text-black shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              {status === "loading"
                ? isEn
                  ? "Sending..."
                  : "Envoi..."
                : status === "success"
                ? isEn
                  ? "Message sent"
                  : "Message envoyé"
                : isEn
                ? "Send message"
                : "Envoyer le message"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            {status === "success" && (
              <p className="font-poppins text-[11px] text-emerald-400">
                {isEn
                  ? "Your message has been sent successfully."
                  : "Votre message a bien été envoyé."}
              </p>
            )}
            {status === "error" && errorMessage && (
              <p className="font-poppins text-[11px] text-red-400">{errorMessage}</p>
            )}
          </form>
        </div>
        <div className="space-y-4 font-poppins text-sm text-slate-700 dark:text-gray-300">
          <div className="relative rounded-3xl border border-slate-200 bg-slate-100 p-4 backdrop-blur dark:border-white/10 dark:bg-black/50">
            {/* <div className="fx-card-blob" aria-hidden="true" /> */}
            <p className="font-poppins text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-gray-500">
              {isEn ? "Direct contact" : "Contact direct"}
            </p>
            <div className="mt-3 space-y-2 font-poppins text-sm">
              <a
                href="mailto:marosataf@gmail.com"
                className="flex items-center gap-2 text-slate-700 transition-colors hover:text-accent-primary dark:text-gray-300"
              >
                <Mail className="h-4 w-4" />
                <span>marosataf@gmail.com</span>
              </a>
              <a
                href="https://portfolio-marosata.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-700 transition-colors hover:text-accent-primary dark:text-gray-300"
              >
                <ArrowUpRight className="h-4 w-4" />
                <span>portfolio-marosata.vercel.app</span>
              </a>
              <p className="flex items-center gap-2 text-slate-600 dark:text-gray-400">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
                <span>Madagascar · +261 34 59 737 65</span>
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl border border-slate-200 bg-slate-100 p-4 backdrop-blur dark:border-white/10 dark:bg-black/60">
            {/* <div className="fx-card-blob" aria-hidden="true" /> */}
            <p className="font-poppins text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-gray-500">
              {isEn ? "Links" : "Liens"}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1.5 font-poppins text-xs text-slate-700 transition-colors hover:bg-slate-300 hover:text-slate-900 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-gray-100"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="/CV-Fano-a-jour.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1.5 font-poppins text-xs text-slate-700 transition-colors hover:bg-slate-300 hover:text-slate-900 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-gray-100"
              >
                <FileDown className="h-4 w-4" />
                <span>{isEn ? "Download CV" : "Télécharger le CV"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


