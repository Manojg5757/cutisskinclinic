"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Clinical Dermatology",
    description: "Expert medical skin care, acne management, pigmentation correction, and personalized dermal treatment plans.",
    accent: "shadow-teal-200/70",
    image: "/dermetology1.png",
  },
  {
    title: "Laser Dermatology",
    description: "Advanced laser resurfacing, targeted skin rejuvenation, and specialist dermatology treatments for lasting confidence.",
    accent: "shadow-slate-300/70",
    image: "/dermetology2.png",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
} as any;

export default function ServiceBentoGrid() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-teal-700">Bento Grid</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">A clinical services layout made to convert.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
          The Cutis Bento Grid highlights focused dermatology care through polished visuals and a modern, responsive layout.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`group rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-slate-200/40 backdrop-blur-xl ${item.accent}`}
          >
            <div className="relative mb-6 overflow-hidden rounded-[1.8rem] border border-slate-200/70 bg-slate-950/5">
              <Image
                src={item.image}
                alt={`${item.title} treatment`}
                width={900}
                height={600}
                className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <span className="mb-4 inline-flex rounded-2xl bg-slate-950/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-700">
              {item.title}
            </span>
            <p className="text-base leading-7 text-slate-600">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
