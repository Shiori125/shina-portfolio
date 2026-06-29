"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-light tracking-widest text-slate-800">
          shina
        </span>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#solutions"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            できること
          </a>
          <a
            href="#flow"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            ご相談の流れ
          </a>
          <a
            href="#profile"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            プロフィール
          </a>
          <a
            href="#contact"
            className="text-sm bg-slate-800 text-white px-5 py-2 rounded-full hover:bg-slate-700 transition-colors"
          >
            ご相談はこちら
          </a>
        </nav>
        <a
          href="#contact"
          className="md:hidden text-sm bg-slate-800 text-white px-4 py-2 rounded-full"
        >
          相談する
        </a>
      </div>
    </header>
  );
}
