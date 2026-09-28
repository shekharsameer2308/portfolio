"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-20 max-w-7xl mx-auto px-4 py-32 border-t border-white/[0.04]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-widest">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Systematic Problem Solving.</h3>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
               {portfolioData.about.bio}
            </p>
         </div>
         <div className="grid grid-cols-2 gap-4">
            {portfolioData.about.metrics.map((metric, i) => (
               <motion.div 
                 key={metric.label}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-md"
               >
                  <div className="text-3xl font-medium text-white mb-2">{metric.value}</div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{metric.label}</div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
