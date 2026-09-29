"use client";
import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative z-20 border-t-4 border-slate-900 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10"
      >
        
        <div className="space-y-6">
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-green-300 border-2 border-slate-900 rounded font-bold text-slate-900 text-xs shadow-[2px_2px_0px_#0f172a] transform -rotate-1 hover:rotate-0 transition-transform"
          >
            <div className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
            AVAILABLE FOR SELECT OPPORTUNITIES
          </motion.div>
          
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Let's build the future.
          </motion.h2>
          
          <motion.a 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            href={`mailto:${portfolioData.socials.email}`} 
            className="inline-flex items-center gap-2 text-slate-700 font-bold hover:text-blue-600 transition-colors text-lg md:text-xl group"
          >
            {portfolioData.socials.email} 
            <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
          className="flex flex-col items-start gap-4"
        >
          <div className="flex gap-6 text-lg font-black text-slate-900">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-pastel-purple transition-colors underline decoration-2 underline-offset-4 decoration-slate-300 hover:decoration-pastel-purple">GitHub</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-pastel-pink transition-colors underline decoration-2 underline-offset-4 decoration-slate-300 hover:decoration-pastel-pink">LinkedIn</a>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};
