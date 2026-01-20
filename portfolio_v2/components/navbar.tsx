"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

type Lang = "en" | "fr";

type NavbarProps = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
};

export function Navbar(props: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const label = (key: string) => {
    const dict: Record<Lang, Record<string, string>> = {
      en: {
        home: "Home",
        experience: "Experience",
        contact: "Contact"
      },
      fr: {
        home: "Accueil",
        experience: "Expériences",
        contact: "Contact"
      }
    };
    return dict[props.lang][key];
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-b-2xl  bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-black/60 dark:text-gray-100">
        <button
          type="button"
          className="font-poppins text-sm font-semibold tracking-tight"
          onClick={() => scrollTo("hero")}
        >
          {/* Marosata<span className="text-accent-primary">.dev</span> */}
          <Image  src = "/assets/pictures/FanoLogo.png" alt="Fano Logo" width={100} height={100}  className="rounded-full object-cover w-20 h-20"/>
        </button>
        <div className="flex items-center gap-6 font-poppins text-sm">
          <div className="hidden items-center gap-4 sm:flex">
            <button
              type="button"
              className="text-slate-700 transition-colors hover:text-accent-primary dark:text-gray-300"
              onClick={() => scrollTo("hero")}
            >
              {label("home")}
            </button>
            <button
              type="button"
              className="text-slate-700 transition-colors hover:text-accent-primary dark:text-gray-300"
              onClick={() => scrollTo("projects")}
            >
              {props.lang === "en" ? "Projects" : "Projets"}
            </button>
            <button
              type="button"
              className="text-slate-700 transition-colors hover:text-accent-primary dark:text-gray-300"
              onClick={() => scrollTo("experience")}
            >
              {label("experience")}
            </button>
            <button
              type="button"
              className="text-slate-700 transition-colors hover:text-accent-primary dark:text-gray-300"
              onClick={() => scrollTo("contact")}
            >
              {label("contact")}
            </button>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-1 py-0.5 font-poppins text-xs font-medium backdrop-blur dark:border-white/10 dark:bg-black/40">
            <button
              type="button"
              className={`px-2 py-1 transition-colors ${
                props.lang === "en"
                  ? "rounded-full bg-accent-primary text-black"
                  : "text-slate-600 dark:text-gray-400"
              }`}
              onClick={() => props.onLangChange("en")}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              className={`px-2 py-1 transition-colors ${
                props.lang === "fr"
                  ? "rounded-full bg-accent-secondary text-black"
                  : "text-slate-600 dark:text-gray-400"
              }`}
              onClick={() => props.onLangChange("fr")}
              aria-label="Basculer en français"
            >
              FR
            </button>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-slate-100 p-1.5 backdrop-blur transition-colors hover:bg-slate-200 dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/60"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-500 dark:text-yellow-300" />
            ) : (
              <Moon className="h-4 w-4 text-sky-600 dark:text-sky-700" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}


