type Lang = "en" | "fr";

type SkillsProps = {
  lang: Lang;
};

const groups = [
  {
    key: "languages",
    labelEn: "Languages",
    labelFr: "Langages",
    items: ["JavaScript / TypeScript", "Java", "C#", "Python"]
  },
  {
    key: "frontend",
    labelEn: "Frontend",
    labelFr: "Frontend",
    items: ["React.js", "Next.js", "Angular"]
  },
  {
    key: "backend",
    labelEn: "Backend & APIs",
    labelFr: "Backend & APIs",
    items: ["Node.js", "Express.js", "Laravel", "Golang", "REST APIs", "JWT"]
  },
  {
    key: "mobile",
    labelEn: "Mobile",
    labelFr: "Mobile",
    items: ["Flutter"]
  },
  {
    key: "databases",
    labelEn: "Databases",
    labelFr: "Bases de données",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]
  },
  {
    key: "tools",
    labelEn: "Tools & DevOps",
    labelFr: "Outils & DevOps",
    items: ["Git / GitHub / GitLab", "AWS basics", "CI/CD fundamentals", "Trello"]
  }
];

export function Skills(props: SkillsProps) {
  const isEn = props.lang === "en";

  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-4 pb-20"
      aria-label={isEn ? "Technical skills" : "Compétences techniques"}
    >
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-gray-100">
          {isEn ? "Tech stack" : "Stack technique"}
        </h2>
        <p className="font-poppins text-sm text-slate-600 dark:text-gray-400">
          {isEn
            ? "A balanced skill set across frontend, backend and mobile to ship full products."
            : "Un ensemble de compétences équilibré entre frontend, backend et mobile pour livrer des produits complets."}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.key}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-4 backdrop-blur dark:border-white/10 dark:from-white/5 dark:to-black/70"
          >
            <div className="mb-2 flex items-center justify-between font-poppins text-xs text-slate-700 dark:text-gray-300">
              <span className="font-medium">
                {isEn ? group.labelEn : group.labelFr}
              </span>
              <span className="font-poppins text-[11px] text-slate-500 dark:text-gray-500">
                {group.items.length}{" "}
                {isEn ? "skills" : "compétences"}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-200 px-2 py-1 font-poppins text-[11px] text-slate-700 dark:bg-white/5 dark:text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


