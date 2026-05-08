"use client";

import { motion } from "framer-motion";
import MagneticButton from "./magnetic-button";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
} as any;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={heroVariants}
            className="relative z-10 text-slate-50"
          >
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm tracking-[0.18em] text-white/90 backdrop-blur-xl">
              Cutis Skin Clinic · Dermatologist
            </div>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-200/90">
              <span className="font-semibold text-white">5.0</span>
              <span>· 272 reviews</span>
              <span>· B25, Thillai Nagar East, Tennur</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Cutis Skin Clinic — clinical dermatology that reveals healthy, luminous skin.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100/85 sm:text-lg">
              A premium web presence for Tiruchirappalli’s leading skin clinic, designed to showcase expert skin care, patient transformation, and an effortless booking path.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton href="#book" label="Book appointment" />
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
              >
                Explore treatments
              </a>
            </div>
          </motion.div>

          <div className="relative z-10">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/10 p-4 shadow-2xl shadow-slate-950/20 sm:p-6">
              <div className="relative aspect-[4/3] min-h-[320px] w-full">
                <img
                  src="/hero.png"
                  alt="Hero skin clinic image"
                  className="h-full w-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/15 bg-slate-950/10 p-5">
            <span className="text-sm uppercase tracking-[0.35em] text-teal-200">Trusted dermatology</span>
            <h2 className="mt-3 text-2xl font-semibold text-white">5.0 rating</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Tennur, Tiruchirappalli</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Reviews", value: "272" },
              { label: "Specialization", value: "Medical dermatology" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/15 bg-slate-950/10 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-300">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
