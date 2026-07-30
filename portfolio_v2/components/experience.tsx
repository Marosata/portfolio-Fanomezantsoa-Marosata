import { ExperienceCard } from "./experienceCard";

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
  },
  {
    id: "t-ikaly",
    company: "Projet personnel",
    roleEn: "Intelligent Recipe App – .NET MAUI & ASP.NET Core",
    roleFr: "Application de recettes intelligente – .NET MAUI & ASP.NET Core",
    periodEn: "Aug 2025 – Sep 2025",
    periodFr: "Août 2025 – Septembre 2025",
    tech: [".NET MAUI", "ASP.NET Core", "C#", "Entity Framework", "Gemini API"],
    bulletsEn: [
      "Built a cross-platform mobile app with .NET MAUI, connected to an ASP.NET Core backend.",
      "Designed the backend following a layered architecture (business, data access, services).",
      "Implemented recipe suggestions based on budget, with revisited or traditional recipe options.",
      "Integrated the Gemini AI API to enrich application features and generate recipe proposals.",
      "Managed communication between the mobile app and backend services through REST APIs.",
      "Implemented business logic in C# using object-oriented programming.",
      "Handled data persistence with Entity Framework and a relational database."
    ],
    bulletsFr: [
      "Développement d'une application mobile multiplateforme avec .NET MAUI, connectée à un backend ASP.NET Core.",
      "Conception du backend selon une architecture en couches (métier, accès aux données, services).",
      "Implémentation de la proposition de recettes en fonction du budget, avec recettes revisitées ou traditionnelles.",
      "Intégration de l'API IA Gemini pour enrichir les fonctionnalités applicatives et générer des propositions de recettes.",
      "Gestion des échanges entre l'application mobile et les services backend via API REST.",
      "Implémentation de la logique métier en C# avec programmation orientée objet.",
      "Gestion des données avec Entity Framework et une base de données relationnelle."
    ]
  },
  {
    id: "garage-management",
    company: "Projet personnel – Travail en binôme",
    roleEn: "Garage Management Web App – MEAN Stack (Pair Project)",
    roleFr: "Application web de gestion de garage – Stack MEAN (Projet en binôme)",
    periodEn: "Mar 2025 – Apr 2025",
    periodFr: "Mars 2025 – Avril 2025",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    bulletsEn: [
      "Designed and developed, as a pair, a business web app for garage management with three user roles: client, mechanic and manager.",
      "Built a full-stack application based on the MEAN architecture.",
      "Developed the frontend interface and components with Angular and JavaScript.",
      "Implemented the backend API with Node.js and Express.js, with data managed in MongoDB.",
      "Delivered core business features: vehicle management, repair tracking, intervention management and client information lookup."
    ],
    bulletsFr: [
      "Conception et développement en binôme d'une application web métier de gestion de garage avec trois profils utilisateurs : client, mécanicien et manager.",
      "Développement d'une application Full Stack basée sur l'architecture MEAN.",
      "Développement de l'interface utilisateur et des composants frontend avec Angular et JavaScript.",
      "Implémentation de l'API backend avec Node.js et Express.js, gestion des données avec MongoDB.",
      "Développement des fonctionnalités métier : gestion des véhicules, suivi des réparations, gestion des interventions et consultation des informations clients."
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
        <ExperienceCard key={exp.id} exp={exp} index={index} isEn={isEn} />
      ))}      </div>
    </section>
  );
}


