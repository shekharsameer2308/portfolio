"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-12 md:px-32 z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div 
          whileHover={{ rotate: 2 }}
          className="inline-block px-4 py-2 mb-8 bg-blue-200 border-2 border-slate-900 rounded-md font-mono text-slate-900 font-bold shadow-[4px_4px_0px_#0f172a] transform -rotate-2"
        >
          {portfolioData.hero.role}
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight mb-8">
          Hi, I'm <br className="md:hidden" />
          <span className="relative inline-block mt-2">
            <span className="relative z-10">{portfolioData.hero.name}</span>
            <span className="absolute bottom-2 left-0 w-full h-6 md:h-10 bg-yellow-300 -z-10 transform -rotate-1"></span>
          </span>
        </h1>

        <div className="relative inline-block">
          <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-2xl leading-relaxed">
            {portfolioData.hero.tagline}
          </p>
          {/* Decorative scribble/underline */}
          <svg className="absolute -bottom-4 left-0 w-full h-4 text-red-400" viewBox="0 0 100 10" preserveAspectRatio="none">
             <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
          </svg>
        </div>

        <div className="pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a href="#projects" className="px-8 py-4 bg-red-400 border-2 border-slate-900 text-white font-black text-lg rounded-xl shadow-[4px_4px_0px_#0f172a] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#0f172a] transition-all transform rotate-1 flex items-center gap-2">
            Open Notebook <ArrowDownRight size={20} />
          </a>
          <div className="flex gap-4 text-base font-bold text-slate-900">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors underline decoration-wavy decoration-blue-400 underline-offset-4">GitHub</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors underline decoration-wavy decoration-pink-400 underline-offset-4">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
