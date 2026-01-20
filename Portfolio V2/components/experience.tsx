import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Lang = "en" | "fr";

type ExperienceProps = {
  lang: Lang;
};

const experiences = [
  {
    id: "content-platform",
    company: "Havet Digital & OnirTech Madagascar",
    roleEn: "Content Creation Platform – Freelance",
    roleFr: "Plateforme de création de contenu – Freelance",
    periodEn: "Oct 2025 – Jan 2026 (ongoing)",
    periodFr: "Octobre 2025 – Janvier 2026 (en cours)",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
    bulletsEn: [
      "Built a content creation and publishing platform with reusable UI components.",
      "Improved performance, responsiveness and overall user experience.",
      "Contributed to internationalization (i18n) and SEO optimization."
    ],
    bulletsFr: [
      "Développement d'une plateforme de création et publication de contenu avec des composants UI réutilisables.",
      "Amélioration des performances, de la réactivité et de l'expérience utilisateur globale.",
      "Contribution à l'internationalisation (i18n) et à l'optimisation SEO."
    ]
  },
  {
    id: "ecommerce-pool",
    company: "Les piscines de Romain",
    roleEn: "E‑commerce & Services – Freelance",
    roleFr: "Plateforme e‑commerce & services – Freelance",
    periodEn: "Mar 2025 – Oct 2025",
    periodFr: "Mars 2025 – Octobre 2025",
    tech: ["Laravel", "MySQL", "Flutter", "AWS"],
    bulletsEn: [
      "Designed and delivered a custom e‑commerce platform for pool equipment and services.",
      "Developed web and mobile apps and integrated third‑party APIs for payments and services.",
      "Optimized UI/UX and SEO to increase engagement and conversions, deployed on AWS with CI/CD."
    ],
    bulletsFr: [
      "Analyse des besoins et conception d'une plateforme e‑commerce sur mesure pour les équipements et services de piscine.",
      "Développement des applications web et mobile avec intégration d'APIs tierces (paiements et services).",
      "Optimisation de l'UI/UX et du SEO pour augmenter l'engagement et les conversions, déploiement sur AWS avec CI/CD."
    ]
  },
  {
    id: "microfinance",
    company: "SMMEC – Microfinance",
    roleEn: "Microfinance Client Support – Full‑time",
    roleFr: "Support clients microfinance – Temps plein",
    periodEn: "Nov 2024 – Feb 2025",
    periodFr: "Novembre 2024 – Février 2025",
    tech: ["Laravel", "Golang", "Flutter", "MySQL"],
    bulletsEn: [
      "Gathered business requirements in the microfinance domain and translated them into features.",
      "Developed and maintained mobile applications and optimized REST APIs for performance.",
      "Improved SQL queries, database structure and UI/UX for end‑users."
    ],
    bulletsFr: [
      "Collecte et analyse des besoins métier dans le domaine de la microfinance.",
      "Développement et maintenance d'applications mobiles et optimisation d'APIs REST pour la performance.",
      "Amélioration des requêtes SQL, de la structure de base de données et de l'UI/UX pour les clients."
    ]
  }
];

export function Experience(props: ExperienceProps) {
  const isEn = props.lang === "en";

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-4 py-20"
      aria-label={isEn ? "Professional experience" : "Expériences professionnelles"}
    >
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-gray-100">
            {isEn ? "Selected experience" : "Expériences sélectionnées"}
          </h2>
          <p className="mt-2 font-poppins text-sm text-slate-600 dark:text-gray-400">
            {isEn
              ? "Real‑world projects for startups, SMEs and public institutions."
              : "Projets concrets pour startups, PME et institutions publiques."}
          </p>
        </div>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-5 shadow-lg shadow-slate-300/30 backdrop-blur dark:border-white/10 dark:from-white/5 dark:via-black/60 dark:to-black/80 dark:shadow-black/40"
          >
            <div className="fx-card-blob" aria-hidden="true" />
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 font-poppins text-[11px] font-medium text-slate-700 dark:bg-black/40 dark:text-gray-300">
                  <Briefcase className="h-3.5 w-3.5 text-accent-primary" />
                  <span>{exp.company}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-800 dark:text-gray-50">
                  {isEn ? exp.roleEn : exp.roleFr}
                </h3>
                <p className="font-poppins text-xs text-slate-600 dark:text-gray-400">
                  {isEn ? exp.periodEn : exp.periodFr}
                </p>
                <ul className="mt-2 space-y-1 font-poppins text-sm text-slate-700 dark:text-gray-300">
                  {(isEn ? exp.bulletsEn : exp.bulletsFr).map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-primary" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-end gap-2 md:items-end">
                <div className="flex flex-wrap justify-end gap-1.5">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-300 bg-slate-100 px-2 py-1 font-poppins text-[11px] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


