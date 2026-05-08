"use client";

import { motion } from "framer-motion";

export default function LocationContactSection() {

  return (
    <section id="book" className="relative px-6 pb-24 pt-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-slate-200/70 bg-slate-950/5 p-8 shadow-2xl shadow-slate-200/30 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-sm uppercase tracking-[0.35em] text-teal-700">Location</span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Designed for patients in Tiruchirappalli and beyond.</h2>
            </div>
            <div className="rounded-3xl bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm shadow-slate-200/50">
              4.9 ⭐ Client feedback
            </div>
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-slate-200/40">
            <div className="mb-6 h-[360px] overflow-hidden rounded-[1.5rem] border border-slate-200/80">
              <iframe
                src="https://maps.google.com/maps?q=10.8199858,78.6841149&z=16&output=embed"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cutis Skin Clinic Location"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-700 shadow-sm shadow-slate-200/30">
                <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Opening hours</p>
                <p className="mt-2 text-lg font-semibold">Open · closes 8 PM</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-700 shadow-sm shadow-slate-200/30">
                <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Contact</p>
                <p className="mt-2 text-lg font-semibold">+91 88706 76014</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/30 backdrop-blur-xl"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact & directions</span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Visit Cutis Skin Clinic in Tennur.</h2>
          <p className="mt-4 text-slate-600">
            A premium dermatology destination in Tiruchirappalli, offering medical skin treatments, laser care, and consultative skin health plans for every patient.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-700 shadow-sm shadow-slate-200/30">
              <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Address</p>
              <p className="mt-2 text-lg font-semibold">B25, Thillai Nagar East, Tennur</p>
              <p className="mt-2 text-sm text-slate-500">Tiruchirappalli, Tamil Nadu 620018</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-700 shadow-sm shadow-slate-200/30">
              <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Phone</p>
              <p className="mt-2 text-lg font-semibold">+91 88706 76014</p>
              <p className="mt-3 text-xs text-slate-500">Google Plus Code: RM9M+XJ</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/918870676014"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Cutis+Skin+Clinic/data=!4m7!3m6!1s0x3baaf5cd387a8737:0xfb0fd19a5639d1bb!8m2!3d10.8199858!4d78.6841149!16s%2Fg%2F11trlnrfdl!19sChIJN4d6OM31qjsRu9E5VprRD_s?authuser=0&hl=en&rclk=1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
