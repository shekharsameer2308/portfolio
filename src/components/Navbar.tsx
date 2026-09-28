"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full border border-white/[0.08] transition-all duration-500 w-[90%] max-w-4xl ${
        isScrolled ? "bg-[#050507]/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/5" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        <span className="text-xs font-mono text-zinc-300 tracking-widest uppercase">SYS.OPERATIONAL</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
        <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
      </div>
      <div className="text-xs font-mono text-zinc-500">
        {time} IST
      </div>
    </motion.nav>
  );
};
