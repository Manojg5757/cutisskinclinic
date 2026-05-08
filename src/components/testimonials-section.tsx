"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Cutis gave us a website that feels like the clinic itself — refined, trustworthy, and conversion-ready.",
    name: "Dr. Nalini, Dermatologist",
    location: "Tiruchirappalli",
  },
  {
    quote: "Patients book consults faster because the page communicates premium care and visible results.",
    name: "Dr. Priya, Cosmetic Physician",
    location: "Madurai",
  },
  {
    quote: "The Before & After section is the hero of the site — it’s exactly what clinic owners need.",
    name: "Arun, Clinic Founder",
    location: "Coimbatore",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="results" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-teal-700">Testimonials</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Designed to inspire confidence from clinic owners and patients alike.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Strategic storytelling through testimonials reinforces the premium positioning and proves the site is built to sell skin treatments.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" as any }}
            className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 text-teal-700">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star key={starIndex} size={16} className="text-teal-500" />
              ))}
            </div>
            <p className="text-lg leading-8 text-slate-700">"{item.quote}"</p>
            <div className="mt-8 border-t border-slate-200/70 pt-6 text-sm text-slate-500">
              <p className="font-semibold text-slate-950">{item.name}</p>
              <p>{item.location}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
