"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8 max-w-5xl w-full flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          <span className="text-xs font-mono text-zinc-300 tracking-wider uppercase">{portfolioData.hero.role}</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 pb-4">
          {portfolioData.hero.name.split(' ')[0]} <br className="md:hidden" />
          {portfolioData.hero.name.split(' ')[1]}
        </h1>

        <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          {portfolioData.hero.tagline}
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
          <a href="#projects" className="group relative px-8 py-4 bg-white text-[#050507] rounded-full font-medium tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Explore Systems <ArrowDownRight size={18} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
          <div className="flex gap-6 text-sm font-mono tracking-widest text-zinc-500">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors uppercase">GitHub</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors uppercase">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
