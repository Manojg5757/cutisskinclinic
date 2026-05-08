"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Visit", href: "#book" },
];

export default function StickyNav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" as any }}
      className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-3xl bg-white/90 shadow-lg shadow-slate-200/50">
            <Image src="/logo.png" alt="Cutis Skin Clinic" fill className="object-contain p-2" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Cutis Skin Clinic</p>
            <p className="text-sm font-semibold text-slate-950">Luxury medical presence</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-teal-600">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm shadow-slate-200 transition hover:bg-slate-50 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-6 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-3xl px-4 py-3 transition hover:bg-slate-100" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
