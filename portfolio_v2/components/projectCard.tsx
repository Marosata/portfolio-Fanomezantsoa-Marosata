"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getTechIcon } from "./tech-icons";

export interface Project {
  id: string | number;
  year: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  stack: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  isEn: boolean;
}

export function ProjectCard({ project, index = 0, isEn }: ProjectCardProps) {
  const open = () =>
    window.open(project.link, "_blank", "noopener,noreferrer");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      onClick={open}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") open();
      }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-4 shadow-lg shadow-slate-300/30 backdrop-blur transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 dark:border-white/10 dark:from-white/5 dark:via-black/70 dark:to-black/90 dark:shadow-black/50 dark:focus-visible:outline-white/40"
    >
      <div className="fx-card-blob" aria-hidden="true" />

      {/* Header: year + stack badges, always on one row */}
      <div className="mb-3 flex items-start justify-between gap-3 font-poppins text-xs text-slate-600 dark:text-gray-400">
        <span className="shrink-0 pt-0.5">{project.year}</span>
        <div className="flex flex-wrap justify-end gap-1">
          {project.stack.map((tech) => {
            const { icon: Icon, className } = getTechIcon(tech);
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1 rounded-full bg-slate-200 px-2 py-0.5 font-poppins text-[11px] text-slate-700 dark:bg-white/5 dark:text-gray-200"
              >
                <Icon className={`h-3 w-3 ${className}`} aria-hidden="true" />
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Title + description grow to fill available space */}
      <div className="flex-1">
        <h3 className="font-poppins text-sm font-semibold text-slate-800 dark:text-gray-50">
          {isEn ? project.title : project.titleFr}
        </h3>
        <p className="mt-2 font-poppins text-xs text-slate-600 dark:text-gray-400">
          {isEn ? project.description : project.descriptionFr}
        </p>
      </div>

      {/* Footer pinned to the bottom of every card, regardless of description length */}
      <p className="mt-3 flex items-center gap-1 text-xs text-slate-500 transition-colors group-hover:text-slate-700 dark:text-gray-500 dark:group-hover:text-gray-300">
        {isEn ? "Click to view project" : "Cliquez pour voir le projet"}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </p>
    </motion.article>
  );
}