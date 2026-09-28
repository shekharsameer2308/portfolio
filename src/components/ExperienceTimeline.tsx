"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative z-20 max-w-4xl mx-auto px-8 py-24 md:py-32 md:pl-32">
      <div className="mb-16">
        <h2 className="inline-block px-3 py-1 mb-4 bg-yellow-300 border-2 border-slate-900 text-slate-900 font-mono text-sm font-bold transform rotate-2 shadow-[4px_4px_0px_#0f172a]">
          Career & Education
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Timeline.</h3>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-900">
        {portfolioData.experience.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Center Doodle Node */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-slate-900 bg-white shadow-[2px_2px_0px_#0f172a] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 rounded-full bg-red-400" />
            </div>

            {/* Content Note */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border-2 border-slate-900 rounded-xl shadow-[6px_6px_0px_#0f172a] transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0f172a] transition-all">
              <div className="flex flex-col gap-2 mb-4 border-b-2 border-slate-100 pb-4">
                <span className="inline-block self-start px-2 py-0.5 bg-blue-100 border border-slate-900 text-xs font-bold text-slate-900 rounded transform -rotate-1">{exp.dates}</span>
                <h4 className="text-xl font-black text-slate-900">{exp.role}</h4>
                <span className="text-sm font-bold text-slate-600">{exp.company}</span>
              </div>
              <ul className="text-slate-700 text-sm font-medium leading-relaxed space-y-2 list-none">
                {exp.bulletPoints.map((bp, idx) => (
                   <li key={idx} className="flex gap-2 items-start">
                     <span className="text-red-400 font-bold mt-0.5">→</span>
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
