import { motion } from "framer-motion";
import { useState } from "react";
type Lang = "en" | "fr";

type Category = "all" | "frontend" | "backend" | "mobile";

type ProjectsProps = {
  lang: Lang;
};

type Project = {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  stack: string[];
  category: Category[];
  year: string;
};

const projects: Project[] = [
  {
    id: "content-platform",
    title: "Content Creation Platform",
    titleFr: "Plateforme de création de contenu",
    description:
      "Content creation & publishing platform for digital agencies with reusable UI and SEO‑ready frontend.",
    descriptionFr:
      "Plateforme de création et publication de contenu pour agences digitales avec UI réutilisable et frontend optimisé SEO.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    category: ["frontend", "backend"],
    year: "2025–2026"
  },
  {
    id: "ecommerce-pools",
    title: "Pool Equipment E‑commerce",
    titleFr: "E‑commerce équipements de piscine",
    description:
      "Custom e‑commerce and service booking system for pool equipment, with payment integrations and AWS deployment.",
    descriptionFr:
      "Plateforme e‑commerce et réservation de services pour équipements de piscine avec paiements intégrés et déploiement AWS.",
    stack: ["Laravel", "MySQL", "Flutter", "AWS"],
    category: ["frontend", "backend", "mobile"],
    year: "2025"
  },
  {
    id: "microfinance-app",
    title: "Microfinance Client Support App",
    titleFr: "Application support clients microfinance",
    description:
      "Mobile app and API layer to manage microfinance customer accounts and improve client experience.",
    descriptionFr:
      "Application mobile et couche API pour gérer les comptes clients microfinance et améliorer l’expérience utilisateur.",
    stack: ["Flutter", "Laravel", "Golang", "MySQL"],
    category: ["backend", "mobile"],
    year: "2024–2025"
  },
  {
    id: "customs-tasks",
    title: "Customs Office Task Manager",
    titleFr: "Gestionnaire de tâches pour douanes",
    description:
      "Internal web tool to track tasks and workflows for a customs office.",
    descriptionFr:
      "Outil web interne pour suivre les tâches et workflows d’un bureau des douanes.",
    stack: ["Laravel", "MySQL"],
    category: ["backend", "frontend"],
    year: "2024"
  },
  {
    id: "personal-portfolio",
    title: "Internationalized Personal Portfolio",
    titleFr: "Portfolio personnel internationalisé",
    description:
      "Modern portfolio with internationalization to showcase full‑stack and mobile projects.",
    descriptionFr:
      "Portfolio moderne avec internationalisation pour présenter les projets full‑stack et mobile.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    category: ["frontend"],
    year: "2023–2024"
  }
];

const filters: { value: Category; labelEn: string; labelFr: string }[] = [
  { value: "all", labelEn: "All", labelFr: "Tous" },
  { value: "frontend", labelEn: "Frontend", labelFr: "Frontend" },
  { value: "backend", labelEn: "Backend", labelFr: "Backend" },
  { value: "mobile", labelEn: "Mobile", labelFr: "Mobile" }
];

export function Projects(props: ProjectsProps) {
  const isEn = props.lang === "en";
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.category.includes(active));

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 pb-16"
      aria-label={isEn ? "Projects" : "Projets"}
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-gray-100">
            {isEn ? "Projects" : "Projets"}
          </h2>
          <p className="mt-2 font-poppins text-sm text-slate-600 dark:text-gray-400">
            {isEn
              ? "A selection of freelance, professional and personal work across frontend, backend and mobile."
              : "Une sélection de travaux freelance, professionnels et personnels sur le frontend, backend et mobile."}
          </p>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 p-1 font-poppins text-xs backdrop-blur dark:border-white/10 dark:bg-black/50">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={`rounded-full px-3 py-1.5 transition ${
                active === filter.value
                  ? "bg-accent-primary text-black"
                  : "text-slate-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-white/5"
              }`}
            >
              {isEn ? filter.labelEn : filter.labelFr}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-4 shadow-lg shadow-slate-300/30 backdrop-blur dark:border-white/10 dark:from-white/5 dark:via-black/70 dark:to-black/90 dark:shadow-black/50"
          >
            <div className="fx-card-blob" aria-hidden="true" />
            <div className="mb-3 flex items-center justify-between gap-3 font-poppins text-xs text-slate-600 dark:text-gray-400">
              <span>{project.year}</span>
              <div className="flex flex-wrap justify-end gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-200 px-2 py-0.5 font-poppins text-[11px] text-slate-700 dark:bg-white/5 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="font-poppins text-sm font-semibold text-slate-800 dark:text-gray-50">
              {isEn ? project.title : project.titleFr}
            </h3>
            <p className="mt-2 font-poppins text-xs text-slate-600 dark:text-gray-400">
              {isEn ? project.description : project.descriptionFr}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

