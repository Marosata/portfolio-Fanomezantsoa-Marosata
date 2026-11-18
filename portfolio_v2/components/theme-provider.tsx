"use client";

import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyThemeToDom(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    window.localStorage.setItem("theme", next);
  } catch {
    // localStorage indisponible (mode privé, etc.)
  }
}

export function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    const initial: Theme = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = (event?: ReactMouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    const supportsViewTransition =
      typeof document.startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Lire la position du bouton IMMÉDIATEMENT, avant la fin du handler
    const target = event?.currentTarget;

    if (!supportsViewTransition || !target) {
      setTheme(next);
      applyThemeToDom(next);
      return;
    }

    const rect = target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      // flushSync force React à mettre à jour le DOM pendant la transition
      flushSync(() => {
        setTheme(next);
      });
      applyThemeToDom(next);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        } as KeyframeEffectOptions
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "dark"
            ? "bg-background-dark text-gray-100"
            : "bg-background-light text-gray-900"
        }
      >
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}