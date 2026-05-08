export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-950/95 text-slate-200 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-teal-400">Cutis Skin Clinic</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A premium dermatology practice in Tiruchirappalli.</h2>
            <p className="mt-4 max-w-2xl text-slate-400 leading-7">
              Specialized skin care, laser treatments, and clinical dermatology designed for high-value patients who seek visible transformation and confident results.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3 rounded-[1.5rem] bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Contact</p>
              <p className="font-semibold text-white">+91 88706 76014</p>
              <p className="text-sm text-slate-400">B25, Thillai Nagar East, Tennur</p>
              <p className="text-sm text-slate-400">Tiruchirappalli, Tamil Nadu 620018</p>
            </div>
            <div className="space-y-3 rounded-[1.5rem] bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Quick links</p>
              <a href="#services" className="block text-sm text-slate-200 transition hover:text-teal-400">Treatments</a>
              <a href="#results" className="block text-sm text-slate-200 transition hover:text-teal-400">Before & After</a>
              <a href="#book" className="block text-sm text-slate-200 transition hover:text-teal-400">Visit & Contact</a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-500">Designed for premium clinics seeking a modern medical aesthetic that converts visitors into consultations.</p>
      </div>
    </footer>
  );
}
