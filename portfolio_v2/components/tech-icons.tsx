import {
  Blocks,
  Database,
  Server,
  Smartphone,
  Cloud,
  Palette,
  Code2,
  Boxes,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps a tech-stack label to a representative Lucide icon + tailwind color
 * classes. Matching is keyword-based and case-insensitive so new stack
 */
type TechIconEntry = {
  icon: LucideIcon;
  className: string;
};

const TECH_ICON_RULES: Array<{ test: RegExp; entry: TechIconEntry }> = [
  {
    test: /next\.?js|react|flutter|vue|svelte/i,
    entry: { icon: Blocks, className: "text-sky-500 dark:text-sky-400" },
  },
  {
    test: /tailwind|css|figma|design/i,
    entry: { icon: Palette, className: "text-pink-500 dark:text-pink-400" },
  },
  {
    test: /postgres|mysql|supabase|sql|mongo|oracle/i,
    entry: { icon: Database, className: "text-emerald-500 dark:text-emerald-400" },
  },
  {
    test: /laravel|golang|go\b|node|django|api|java\b/i,
    entry: { icon: Server, className: "text-violet-500 dark:text-violet-400" },
  },
  {
    test: /aws|azure|gcp|cloud|docker|kubernetes/i,
    entry: { icon: Cloud, className: "text-orange-500 dark:text-orange-400" },
  },
  {
    test: /mobile|ios|android|expo/i,
    entry: { icon: Smartphone, className: "text-indigo-500 dark:text-indigo-400" },
  },
  {
    test: /typescript|javascript|python|golang|uml/i,
    entry: { icon: Code2, className: "text-amber-500 dark:text-amber-400" },
  },
];

const DEFAULT_ENTRY: TechIconEntry = {
  icon: Boxes,
  className: "text-slate-500 dark:text-gray-400",
};

export function getTechIcon(tech: string): TechIconEntry {
  const match = TECH_ICON_RULES.find(({ test }) => test.test(tech));
  return match ? match.entry : DEFAULT_ENTRY;
}