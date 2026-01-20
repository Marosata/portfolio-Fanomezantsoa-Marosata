"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Lang = "en" | "fr";

type HeroProps = {
  lang: Lang;
};

const stats = [
  {
    key: "experience",
    value: "1.5+",
    labelEn: "years of experience",
    labelFr: "années d'expérience"
  },
  {
    key: "clients",
    value: "4+",
    labelEn: "clients & partners",
    labelFr: "clients & partenaires"
  },
  {
    key: "projects",
    value: "6+",
    labelEn: "real‑world projects",
    labelFr: "projets réels livrés"
  },
  {
    key: "stack",
    value: "10+",
    labelEn: "technologies mastered",
    labelFr: "technologies maîtrisées"
  }
];

export function Hero(props: HeroProps) {
  const isEn = props.lang === "en";

  const title = isEn
    ? "Web & Mobile Application Developer"
    : "Développeur d'applications Web & Mobile";

  const subtitle = isEn
    ? "I design and build scalable web & mobile experiences, from polished frontends to robust backends."
    : "Je conçois et développe des expériences web & mobile scalables, du frontend soigné au backend robuste.";

  const tagline = isEn
    ? "Tech‑driven developer focused on modern, product‑oriented solutions."
    : "Développeur orienté produit, passionné par les technologies modernes et les solutions concrètes.";

  const ctaProjects = isEn ? "View my projects" : "Voir mes projets";
  const ctaContact = isEn ? "Contact me" : "Me contacter";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-4 pt-24"
      aria-label={isEn ? "Introduction" : "Introduction"}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid w-full gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-center"
      >
        <div className="space-y-6">
          <p className="font-poppins text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            {isEn ? "Portfolio 2026" : "Portfolio 2026"}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
            Marosata{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Fanomezantsoa
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg font-medium text-slate-700 dark:text-gray-200 md:text-xl"
          >
            {title}
          </motion.p>
          <p className="font-poppins max-w-xl text-sm text-slate-600 dark:text-gray-400 md:text-base">
            {subtitle}
          </p>
          <p className="font-poppins max-w-xl text-xs text-slate-500 dark:text-gray-500 md:text-sm">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="font-poppins rounded-full bg-accent-primary px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              {ctaProjects}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="font-poppins rounded-full border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-accent-secondary hover:text-accent-secondary dark:border-white/15 dark:bg-white/5 dark:text-gray-100"
            >
              {ctaContact}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 md:items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative h-48 w-48 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-100 to-slate-300 shadow-2xl shadow-slate-400/30 md:h-56 md:w-56 dark:border-white/10 dark:from-white/10 dark:to-black/60 dark:shadow-black/60"
          >
            <Image
              src="/assets/pictures/profile.jpg"
              alt="Portrait de Marosata Fanomezantsoa"
              fill
              priority
              sizes="224px"
              className="object-cover"
            />
          </motion.div>
          <div className="grid w-full grid-cols-2 gap-3 font-poppins text-xs text-slate-600 dark:text-gray-300 sm:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <div className="font-poppins text-sm font-semibold text-slate-800 dark:text-white">
                  {item.value}
                </div>
                <div className="font-poppins mt-1 text-[11px] text-slate-600 dark:text-gray-400">
                  {isEn ? item.labelEn : item.labelFr}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


