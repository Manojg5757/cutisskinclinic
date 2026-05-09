"use client";

import { motion } from "framer-motion";
import MagneticButton from "./magnetic-button";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
} as any;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Mobile-first: Image first, then content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Image Section - Full width on mobile, half on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" as any }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/20 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100/5">
                <img
                  src="/hero.png"
                  alt="Cutis Skin Clinic - Professional dermatology services"
                  className="h-full w-full object-cover object-center"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl shadow-slate-950/20 backdrop-blur-xl sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-white">5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-slate-300">272 reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={heroVariants}
            className="relative z-10 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white/90 backdrop-blur-xl">
              🏥 Cutis Skin Clinic · Medical Dermatology
            </div>

            {/* Location */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300 lg:justify-start">
              <span className="rounded-full bg-teal-500/20 px-3 py-1 text-teal-200">📍 Tennur, Tiruchirappalli</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Transform Your Skin with
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Expert Care
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0 lg:max-w-xl">
              Experience premium dermatological treatments at Tiruchirappalli's leading skin clinic.
              Our medical experts combine advanced technology with personalized care to reveal your
              healthiest, most radiant skin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <MagneticButton href="#book" label="Book Consultation" />
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
              >
                View Treatments
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400"></span>
                <span>Board-certified dermatologists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400"></span>
                <span>Advanced medical technology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400"></span>
                <span>Personalized treatment plans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>
    </section>
  );
}
