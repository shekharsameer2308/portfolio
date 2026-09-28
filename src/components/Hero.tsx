"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { MarginAnnotation } from './notebook/MarginAnnotation';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-20">
      <MarginAnnotation text="Start here!" className="-left-20 top-40 text-pastel-green" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div 
          whileHover={{ rotate: 2 }}
          className="inline-block px-4 py-1 mb-8 bg-pastel-purple border-2 border-ink rounded font-handwriting text-2xl font-bold text-ink shadow-ink transform -rotate-2"
        >
          {portfolioData.hero.role}
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black text-ink leading-tight mb-8 relative z-10">
          Hi, I'm <br className="md:hidden" />
          <span className="relative inline-block mt-2 group">
            <span className="relative z-10">{portfolioData.hero.name}</span>
            <span className="absolute bottom-1 left-0 w-full h-8 bg-pastel-pink mix-blend-multiply opacity-80 -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform"></span>
          </span>
        </h1>

        <div className="relative inline-block mt-4">
          <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-2xl leading-relaxed">
            {portfolioData.hero.tagline}
          </p>
        </div>

        <div className="pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a href="#projects" className="px-8 py-4 bg-white border-2 border-ink text-ink font-bold text-lg rounded shadow-ink hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all transform rotate-1 flex items-center gap-2">
            Read My Notes <ArrowDownRight size={20} />
          </a>
          <div className="flex gap-4 text-xl font-handwriting font-bold text-ink">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-pastel-purple transition-colors">GitHub</a>
            <span className="text-slate-400">/</span>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-pastel-pink transition-colors">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
