"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative z-20 max-w-4xl mx-auto px-4 py-32">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-violet-400 mb-4 uppercase tracking-widest">Career & Education</h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Timeline.</h3>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/[0.1] before:to-transparent">
        {portfolioData.experience.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Center Node */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] bg-[#050507] text-zinc-500 group-hover:text-violet-400 group-hover:border-violet-400/50 shadow-[0_0_0_4px_#050507] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 z-10">
              <div className="w-2 h-2 rounded-full bg-current" />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-2xl border border-white/[0.04] bg-[#0c0c0e]/40 backdrop-blur-md hover:border-white/[0.1] transition-colors">
              <div className="flex flex-col gap-2 mb-4">
                <span className="text-xs font-mono text-zinc-500">{exp.dates}</span>
                <h4 className="text-xl font-medium text-white">{exp.role}</h4>
                <span className="text-sm font-mono text-violet-400">{exp.company}</span>
              </div>
              <ul className="text-zinc-400 text-sm leading-relaxed font-light space-y-2 list-none">
                {exp.bulletPoints.map((bp, idx) => (
                   <li key={idx} className="flex gap-2 items-start">
                     <span className="text-violet-400 opacity-50 mt-1.5">•</span>
                     <span>{bp}</span>
                   </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
