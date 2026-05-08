import { MessageSquare } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-slate-950/95 px-5 py-4 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:bg-teal-600/95"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-white shadow-lg shadow-teal-500/20">
        <MessageSquare size={20} />
      </span>
      <span className="text-sm font-semibold text-white">WhatsApp enquiry</span>
    </a>
  );
}
