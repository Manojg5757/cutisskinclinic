"use client";

import { motion } from "framer-motion";
import { type MouseEvent, useRef } from "react";

interface MagneticButtonProps {
  href: string;
  label: string;
}

export default function MagneticButton({ href, label }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    const strength = 0.14;
    node.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const resetTransform = () => {
    const node = ref.current;
    if (node) node.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      whileHover={{ scale: 1.02 }}
      className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-slate-900/15 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      {label}
    </motion.a>
  );
}
