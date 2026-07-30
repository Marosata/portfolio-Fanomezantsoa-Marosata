import { useState } from "react";
import { ProjectCard } from "./projectCard";
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
  link: string;
};

const projects: Project[] = [
  {
    id: "content-platform",
    title: "Content Creation Platform",
    titleFr: "Plateforme de création de contenu",
    description:
      "Content creation & publishing platform for digital agencies with reusable UI and SEO-ready frontend.",
    descriptionFr:
      "Plateforme de création et publication de contenu pour agences digitales avec UI réutilisable et frontend optimisé SEO.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    category: ["frontend", "backend"],
    year: "2025–2026",
    link: "https://www.myxplace.agency/en"
  },
  {
    id: "ecommerce-pools",
    title: "Pool Equipment E-commerce",
    titleFr: "E-commerce équipements de piscine",
    description:
      "Custom e-commerce and service booking system for pool equipment, with payment integrations and AWS deployment.",
    descriptionFr:
      "Plateforme e-commerce et réservation de services pour équipements de piscine avec paiements intégrés et déploiement AWS.",
    stack: ["Laravel", "MySQL", "Flutter", "AWS"],
    category: ["frontend", "backend", "mobile"],
    year: "2025",
    link: "https://drive.google.com/drive/folders/1ZBXVHY2ZMfX2RzHgtlFgBAz82uI9Kfr3?usp=sharing"
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
    year: "2024–2025",
    link: "https://drive.google.com/drive/folders/1UtB6kxNnmkqCmkS6kt7_s-9oqJatmiDf?usp=sharing"
  },
  {
    id: "customs-tasks",
    title: "Web application for managing Annual Work Plans For General Directorate of Customs",
    titleFr: "Application Web pour gestion de Plan de Travail Annuel chez Direction Générale des Douanes",
    description:
      "Analysis of business processes and identification of operational problems within the General Directorate of Customs. Design of IT solutions adapted to user needs. Modeling of requirements and technical design using UML diagrams. Object-oriented development in Java in accordance with functional specifications. Development of user interfaces with React to improve the user experience. Design and management of Oracle databases. Functional testing and bug fixing.",
    descriptionFr:
      "Analyse des processus métiers et identification des problématiques opérationnelles au sein de la Direction Générale des Douanes. Conception de solutions informatiques adaptées aux besoins des utilisateurs. Modélisation des besoins et conception technique à l’aide de diagrammes UML. Développement Java et interfaces React. Bases de données Oracle. Tests et correction.",
    stack: ["Laravel", "MySQL"],
    category: ["backend", "frontend"],
    year: "2024",
    link: "https://drive.google.com/drive/folders/1PDit-M4C5mIVGBs9T7VMsAu2yOr5rwh7?usp=sharing"
  },
  {
    id: "personal-portfolio",
    title: "Internationalized Personal Portfolio",
    titleFr: "Portfolio personnel internationalisé",
    description:
      "Modern portfolio with internationalization to showcase full-stack and mobile projects.",
    descriptionFr:
      "Portfolio moderne avec internationalisation pour présenter les projets full-stack et mobile.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    category: ["frontend"],
    year: "2023–2024",
    link: "https://www.myxplace.agency/en"
  },
  {
    id: "t-ikaly",
    title: "T-Ikaly – AI-powered Recipe App",
    titleFr: "T-Ikaly – Application de recettes basée sur l'IA",
    description:
      "Cross-platform mobile app (.NET MAUI) with an ASP.NET Core backend, suggesting budget-based recipes (traditional or revisited) using the Gemini AI API.",
    descriptionFr:
      "Application mobile multiplateforme (.NET MAUI) avec backend ASP.NET Core, proposant des recettes selon le budget (traditionnelles ou revisitées) via l'API IA Gemini.",
    stack: [".NET MAUI", "ASP.NET Core", "C#", "Entity Framework", "Gemini API"],
    category: ["backend", "mobile"],
    year: "2025",
    link: "https://github.com/Marosata/T-Ikaly.git"

  },
  {
    id: "garage-management",
    title: "Garage Management Web App",
    titleFr: "Application web de gestion de garage",
    description:
      "Full-stack garage management platform (MEAN stack) built with a partner, supporting client, mechanic and manager roles.",
    descriptionFr:
      "Plateforme full-stack de gestion de garage (stack MEAN) développée en binôme, avec des rôles client, mécanicien et manager.",
    stack: ["Angular", "Node.js", "Express.js", "MongoDB"],
    category: ["frontend", "backend"],
    year: "2025",
    link: "https://m1p12mean-fanomezantsoa-manantsoa.vercel.app/Garage"
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
              className={`rounded-full px-3 py-1.5 transition ${active === filter.value
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
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          isEn={isEn}
        />
      ))}
      </div>
    </section>
  );
}

