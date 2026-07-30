"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { getTechIcon } from "./tech-icons";

export interface Experience {
  id: string | number;
  company: string;
  roleEn: string;
  roleFr: string;
  periodEn: string;
  periodFr: string;
  bulletsEn: string[];
  bulletsFr: string[];
  tech: string[];
}

interface ExperienceCardProps {
  exp: Experience;
  index?: number;
  isEn: boolean;
}

export function ExperienceCard({ exp, index = 0, isEn }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-5 shadow-lg shadow-slate-300/30 backdrop-blur dark:border-white/10 dark:from-white/5 dark:via-black/60 dark:to-black/80 dark:shadow-black/40"
    >
      <div className="fx-card-blob" aria-hidden="true" />

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2 md:flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 font-poppins text-[11px] font-medium text-slate-700 dark:bg-black/40 dark:text-gray-300">
            <Briefcase className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
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

        <div className="flex shrink-0 flex-wrap justify-end gap-1.5 md:max-w-[220px]">
          {exp.tech.map((tech) => {
            const { icon: Icon, className } = getTechIcon(tech);
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-2 py-1 font-poppins text-[11px] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
              >
                <Icon className={`h-3 w-3 ${className}`} aria-hidden="true" />
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}