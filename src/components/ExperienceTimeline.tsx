"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative z-20 py-24 md:py-32">
      <div className="mb-16">
        <h2 className="inline-block px-4 py-1 mb-4 bg-white border-2 border-ink text-ink font-handwriting text-2xl font-bold transform rotate-2 shadow-ink">
          Career & Education
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-ink tracking-tight relative inline-block">
          <span className="relative z-10">Timeline.</span>
          <span className="absolute bottom-2 left-0 w-full h-6 bg-pastel-pink mix-blend-multiply opacity-80 -z-10 transform -rotate-1"></span>
        </h3>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-300 before:border-r before:border-white">
        {portfolioData.experience.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-ink bg-white shadow-ink shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-3 h-3 rounded-full bg-pastel-green" />
            </div>

            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border-2 border-ink rounded-sm shadow-ink hover:-translate-y-1 hover:shadow-ink-hover transition-all">
              <div className="flex flex-col gap-2 mb-4 border-b-2 border-slate-200 border-dashed pb-4">
                <span className="inline-block self-start font-handwriting text-xl text-slate-500 transform -rotate-1">{exp.dates}</span>
                <h4 className="text-xl font-black text-ink">{exp.role}</h4>
                <span className="text-sm font-bold text-slate-500">{exp.company}</span>
              </div>
              <ul className="text-slate-700 text-sm font-medium leading-relaxed space-y-2 list-none">
                {exp.bulletPoints.map((bp, idx) => (
                   <li key={idx} className="flex gap-2 items-start">
                     <span className="text-pastel-purple font-black mt-0.5">»</span>
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
