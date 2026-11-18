"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParticleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ParticleText({ text, className, style }: ParticleTextProps) {
  const [chars, setChars] = useState<{ id: number; char: string }[]>([]);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const prevText = useRef(text);
  const randomOffsets = useRef<{ dx: number; dy: number; rot: number }[]>([]);

  // Pré-calcule des offsets aléatoires pour l'animation de particules
  useEffect(() => {
    randomOffsets.current = text.split("").map(() => ({
      dx: (Math.random() - 0.5) * 180,
      dy: (Math.random() - 0.5) * 180,
      rot: (Math.random() - 0.5) * 720
    }));
  }, [text]);

  useEffect(() => {
    if (text !== prevText.current && text.length > 0) {
      // Phase de sortie : les particules s'envolent
      setChars(prevText.current.split("").map((c, i) => ({ id: i, char: c })));
      setPhase("exit");

      setTimeout(() => {
        // Phase d'entrée : les nouvelles particules se réassemblent
        setChars(text.split("").map((c, i) => ({ id: i, char: c })));
        setPhase("enter");

        // Retour à l'état idle après l'animation
        setTimeout(() => setPhase("idle"), 800);
      }, 400);

      prevText.current = text;
    } else if (chars.length === 0 && text.length > 0) {
      // Montage initial
      setChars(text.split("").map((c, i) => ({ id: i, char: c })));
      setPhase("enter");
      setTimeout(() => setPhase("idle"), 800);
    }
  }, [text]);

  if (chars.length === 0) return null;

  return (
    <span
      className={`inline-block ${className || ""} particle-text-container`}
      style={style}
      aria-hidden="true"
    >
      {chars.map((c) => {
        const offset = randomOffsets.current[c.id] ?? { dx: 0, dy: 0, rot: 0 };
        const isSpace = c.char === " ";

        let initial: any;
        let animate: any;
        let transition: any;

        if (phase === "exit") {
          initial = { x: 0, y: 0, rotate: 0, opacity: 1 };
          animate = {
            x: offset.dx,
            y: offset.dy,
            rotate: offset.rot,
            opacity: 0
          };
          transition = { duration: 0.4, ease: "easeIn" };
        } else if (phase === "enter") {
          initial = {
            x: offset.dx,
            y: offset.dy,
            rotate: offset.rot,
            opacity: 0
          };
          animate = { x: 0, y: 0, rotate: 0, opacity: 1 };
          transition = {
            duration: 0.6,
            ease: "easeOut",
            delay: c.id * 0.025
          };
        } else {
          // idle
          initial = { x: 0, y: 0, rotate: 0, opacity: 1 };
          animate = { x: 0, y: 0, rotate: 0, opacity: 1 };
          transition = { duration: 0 };
        }

        if (isSpace) {
          return (
            <span key={c.id} style={{ display: "inline-block", width: "0.4em" }} />
          );
        }

        return (
          <motion.span
            key={c.id}
            className="particle-char"
            initial={initial}
            animate={animate}
            transition={transition}
            style={{ display: "inline-block" }}
          >
            {c.char}
          </motion.span>
        );
      })}
    </span>
  );
}
