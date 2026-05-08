"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TrustSlider() {
  const [position, setPosition] = useState(50);

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-700">Before & After</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Trust built through visible results.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            A high-impact comparison experience that lets clinic owners show prospective patients the transformation their treatments deliver.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950/5 p-6 shadow-2xl shadow-slate-200/30 backdrop-blur-xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-inner shadow-slate-200/50">
            <Image src="/beforeafter.png" alt="Before and after skin comparison" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-6 text-sm uppercase tracking-[0.24em] text-white">
              <span className="rounded-full bg-slate-950/70 px-4 py-2">Before</span>
              <span className="rounded-full bg-slate-950/70 px-4 py-2">After</span>
            </div>
            <div className="absolute inset-y-0 left-0 right-0">
              <div className="absolute inset-y-0 left-0 rounded-l-[1.75rem] bg-slate-50/70" style={{ width: `${position}%` }} />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-6 rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/40 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Swipe to see how care becomes confidence.</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">This comparison slider is the conversion centerpiece for Cutis clients: high-end, tactile, and immediately persuasive.</p>
            </div>
            <div className="flex flex-col gap-4 sm:w-[380px]">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-slate-500">
                <span>Before</span>
                <span>After</span>
              </div>
              <div className="relative h-4 rounded-full bg-slate-200/70">
                <div className="absolute inset-y-0 left-0 rounded-full bg-teal-600" style={{ width: `${position}%` }} />
              </div>
              <input
                type="range"
                aria-label="Before after slider"
                min={0}
                max={100}
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                className="touch-none h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-teal-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
