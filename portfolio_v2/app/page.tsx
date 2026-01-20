"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { BackgroundMatrix } from "@/components/background-matrix";
import { useTheme } from "@/components/theme-provider";

type Lang = "en" | "fr";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const mainBackground =
    theme === "dark"
      ? "from-black via-zinc-950 to-black text-gray-100"
      : "from-slate-100 via-slate-50 to-slate-100 text-slate-900";

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent-primary border-t-transparent" />
        </div>
      )}
      <main
        className={`relative min-h-screen bg-gradient-to-b ${mainBackground} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar lang={lang} onLangChange={setLang} />
        <div className="pointer-events-none fixed inset-0 -z-20 opacity-40">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent-primary/25 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-accent-secondary/25 blur-3xl" />
        </div>
        <BackgroundMatrix variant="subtle" />
        <Hero lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
        <footer className="mx-auto max-w-5xl px-4 pb-8 font-poppins text-[11px] text-slate-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Marosata Fanomezantsoa —{" "}
            {lang === "en"
              ? "Designed & coded with Next.js, Tailwind CSS and Framer Motion."
              : "Conçu et développé avec Next.js, Tailwind CSS et Framer Motion."}
          </p>
        </footer>
      </main>
    </>
  );
}

