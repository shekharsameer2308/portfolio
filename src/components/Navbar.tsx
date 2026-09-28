"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full border border-white/[0.08] transition-all duration-500 w-[90%] max-w-4xl bg-white/[0.02] ${
        isScrolled ? "bg-[#050507]/90 backdrop-blur-xl shadow-2xl" : "backdrop-blur-md"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="font-semibold text-white tracking-widest uppercase">
          {portfolioData.hero.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        <span className="text-xs font-mono text-zinc-300 tracking-widest uppercase hidden sm:block">{portfolioData.hero.status}</span>
      </div>
    </motion.nav>
  );
};
