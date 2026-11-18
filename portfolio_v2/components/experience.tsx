import { ExperienceCard } from "./experienceCard";

type Lang = "en" | "fr";

type ExperienceProps = {
  lang: Lang;
};

const experiences = [
  {
    id: "havet-digital",
    company: "Havet Digital",
    roleEn: "Full Stack Developer - React.js / Next.js & Supabase (Freelance)",
    roleFr: "Développeur Full Stack - React.js / Next.js et React.js / Supabase (Freelance)",
    periodEn: "Sept. 2025 - Aug. 2026",
    periodFr: "Septembre 2025 - Août 2026",
    tech: ["Next.js", "React.js", "Supabase", "PostgreSQL"],
    bulletsEn: [
      "Built a web content creation platform and integrated AI to automate content creation processes.",
      "Designed and evolved the platform in direct collaboration with the CEO (Next.js, React.js, Supabase, PostgreSQL), translating business needs into application features.",
      "Developed reusable components to strengthen product consistency, maintainability and scalability.",
      "Integrated a secure payment system and wallet/balance management for subscription handling.",
      "Optimized performance (loading time improved from 65 % to 99 %) and UX (SEO, i18n).",
      "Implemented secure JWT authentication with identity verification and participated in end-of-sprint deployments."
    ],
    bulletsFr: [
      "Mise en place d'une plateforme web de création de contenus et intégration d'une intelligence artificielle pour automatiser les processus de création.",
      "Conception et évolution de la plateforme en collaboration directe avec le CEO (Next.js, React.js, Supabase, PostgreSQL) en traduisant les besoins métier en fonctionnalités applicatives.",
      "Développement de composants réutilisables pour renforcer la cohérence, la maintenabilité et l'évolutivité du produit.",
      "Intégration d'un système de paiement sécurisé et gestion de portefeuille/solde pour la gestion des abonnements.",
      "Optimisation des performances (amélioration du temps de chargement de 65 % à 99 %) et de l'UX (SEO, i18n).",
      "Mise en place d'une authentification sécurisée par JWT avec vérification d'identité et participation aux déploiements en fin de sprint."
    ]
  },
  {
    id: "les-piscines-de-romains",
    company: "Les Piscines de Romains",
    roleEn: "Full Stack Web & Mobile Developer - Laravel / React.js / Flutter (Freelance)",
    roleFr: "Développeur Full Stack Web et Mobile - Laravel / React.js / Flutter (Freelance)",
    periodEn: "Feb. 2025 - Sept. 2025",
    periodFr: "Février 2025 - Septembre 2025",
    tech: ["Laravel", "React.js", "Flutter", "Stripe", "AWS"],
    bulletsEn: [
      "Took over and developed a complete web and mobile platform for selling pool accessories.",
      "Analyzed functional requirements and developed adapted web and mobile features.",
      "Designed and integrated secure REST APIs and third-party service interconnection such as the Stripe payment API.",
      "Advanced SQL query optimization (loading time improved from 70 % then optimized to 96 %) and UI/UX redesign to improve application speed and user experience.",
      "Close collaboration with business teams, version control with GitLab (Gitflow) and participation in deployment pipeline implementation on AWS."
    ],
    bulletsFr: [
      "Prise en main et développement d'une plateforme web et mobile complète de vente d'accessoires de piscine.",
      "Analyse des besoins fonctionnels et développement de fonctionnalités web et mobiles adaptées.",
      "Conception et intégration d'API REST sécurisées et interconnexion de services tiers comme l'API de paiement Stripe.",
      "Optimisation avancée des requêtes SQL (amélioration du temps de chargement de 70 % puis optimisé à 96 %) et refonte UI/UX pour améliorer la rapidité de l'application et faciliter l'expérience utilisateur.",
      "Collaboration étroite avec les équipes métier, gestion du versionnement sous GitLab (Gitflow) et participation à la mise en œuvre du pipeline utile aux déploiements sur AWS."
    ]
  },
  {
    id: "smmec",
    company: "SMMEC - Microfinance",
    roleEn: "Full Stack Developer - Mobile Application (Full-time)",
    roleFr: "Développeur Full Stack - Application mobile (Temps plein)",
    periodEn: "Nov. 2024 - Feb. 2025",
    periodFr: "Novembre 2024 - Février 2025",
    tech: ["Laravel", "React.js", "MySQL", "Golang"],
    bulletsEn: [
      "Implemented a mobile application for managing clients' financial accounts (Laravel, React.js, MySQL).",
      "Secured requests and access to sensitive data.",
      "Secured authentication using two-factor (2FA) connections, identity verification and secure REST APIs for sensitive data protection (RIB, Session Token, check Balance…).",
      "Backend performance optimization with GoLang for processing time-consuming requests: 50 % reduction in response time during load spikes.",
      "Designed secure REST APIs with JWT authentication, object-oriented programming, unit and integration testing, bug fixing and technical documentation writing."
    ],
    bulletsFr: [
      "Mise en place d'une application mobile de gestion des comptes financiers des clients (Laravel, React.js, MySQL).",
      "Sécurisation des requêtes et des accès aux données sensibles.",
      "Sécurisation d'authentification utilisant des connexions à double facteur (2FA), vérification d'identité et API REST sécurisées pour la protection des données sensibles (RIB, Token de Session, consulter Solde…).",
      "Optimisation des performances backend avec GoLang pour le traitement des requêtes chronophages : réduction de 50 % du temps de réponse lors des montées en charge.",
      "Conception d'API REST sécurisées avec authentification JWT, programmation orientée objet, tests unitaires et d'intégration, correction d'anomalies et rédaction de la documentation technique."
    ]
  },
  {
    id: "customs-douanes",
    company: "Direction Générale des Douanes",
    roleEn: "Java / React.js / Oracle DB Developer",
    roleFr: "Développeur Java / React.js / Oracle DB",
    periodEn: "Dec. 2023 - Sept. 2024",
    periodFr: "Décembre 2023 - Septembre 2024",
    tech: ["Java", "React.js", "Oracle DB", "Docker", "UML"],
    bulletsEn: [
      "Developed a business web application for Annual Work Plan management (Java, React.js, Oracle Database).",
      "Participated in technical design, development, compliance tracking and bug resolution.",
      "Formalized architecture and design with UML; containerized the Oracle environment with Docker.",
      "Continuous and secure deployment at the end of each sprint to the directorate's local server."
    ],
    bulletsFr: [
      "Développement d'une application web métier de gestion du Plan de Travail Annuel (Java, React.js, Oracle Database).",
      "Participation à la conception technique, au développement, au suivi de conformité et à la résolution d'anomalies.",
      "Formalisation de l'architecture et de la conception avec UML ; conteneurisation de l'environnement Oracle avec Docker.",
      "Déploiement continu et sécurisé à chaque fin de sprint sur le serveur local de la direction."
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
              ? "Professional experiences as a Full Stack developer."
              : "Expériences professionnelles en tant que développeur Full Stack."}
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
