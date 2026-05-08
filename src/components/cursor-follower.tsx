"use client";

import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleEnter = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, input, textarea, label")) {
        setActive(true);
      }
    };

    const handleLeave = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, input, textarea, label")) {
        setActive(false);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerenter", handleEnter, true);
    window.addEventListener("pointerleave", handleLeave, true);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerenter", handleEnter, true);
      window.removeEventListener("pointerleave", handleLeave, true);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-50 hidden md:block ${active ? "cursor-active" : "cursor-base"}`}
      style={{ transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0)` }}
    >
      <div className="h-9 w-9 rounded-full border border-white/70 bg-white/10 shadow-[0_0_40px_rgba(14,165,233,0.18)] transition-all duration-200" />
    </div>
  );
}
