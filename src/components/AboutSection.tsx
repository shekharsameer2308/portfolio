"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-20 max-w-7xl mx-auto px-8 py-24 md:py-32 md:pl-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="inline-block px-3 py-1 mb-4 bg-green-300 border-2 border-slate-900 text-slate-900 font-mono text-sm font-bold transform -rotate-2 shadow-[4px_4px_0px_#0f172a]">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">Systematic Problem Solving.</h3>
            
            <div className="p-6 bg-white border-2 border-slate-900 rounded-lg shadow-[8px_8px_0px_#0f172a] transform rotate-1">
              <p className="text-lg text-slate-700 font-medium leading-relaxed font-mono">
                 {portfolioData.about.bio}
              </p>
            </div>
         </div>
         <div className="grid grid-cols-2 gap-6">
            {portfolioData.about.metrics.map((metric, i) => {
               const colors = ['bg-pink-100', 'bg-blue-100', 'bg-yellow-100'];
               const color = colors[i % colors.length];
               return (
                 <motion.div 
                   key={metric.label}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   className={`p-6 rounded-xl border-2 border-slate-900 ${color} shadow-[4px_4px_0px_#0f172a] transform ${i % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}
                 >
                    <div className="text-3xl font-black text-slate-900 mb-2">{metric.value}</div>
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-widest">{metric.label}</div>
                 </motion.div>
               )
            })}
         </div>
      </div>
    </section>
  );
};
