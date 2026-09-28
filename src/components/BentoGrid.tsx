"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const colors = [
  'bg-yellow-100', 'bg-pink-100', 'bg-blue-100', 'bg-green-100', 'bg-orange-100', 'bg-purple-100'
];

export const BentoGrid = () => {
  return (
    <section id="projects" className="relative z-20 max-w-7xl mx-auto px-8 py-24 md:py-32 md:pl-32">
      <div className="mb-16">
        <h2 className="inline-block px-3 py-1 mb-4 bg-slate-900 text-white font-mono text-sm font-bold transform -rotate-2 shadow-[4px_4px_0px_#f87171]">
          Systems & Projects
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">My Scrapbook.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {portfolioData.projects.map((project, i) => {
          const color = colors[i % colors.length];
          const rotate = i % 2 === 0 ? 'rotate-1' : '-rotate-2';
          
          return (
            <motion.a
              key={project.id}
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              className={`relative flex flex-col justify-between p-6 ${color} border-2 border-slate-900 rounded-lg shadow-[8px_8px_0px_#0f172a] hover:shadow-[12px_12px_0px_#0f172a] transition-all transform ${rotate} min-h-[300px]`}
            >
              {/* Tape effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/60 border border-slate-200 shadow-sm backdrop-blur-sm transform -rotate-2" />
              
              <div className="mt-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-slate-900 leading-tight">{project.title}</h4>
                  <div className="p-2 bg-white border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_#0f172a]">
                    <ArrowUpRight size={18} className="text-slate-900" />
                  </div>
                </div>
                <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-bold px-2 py-1 bg-white border border-slate-900 rounded text-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap border-t-2 border-slate-900/10 pt-4">
                   {project.metrics.map(metric => (
                      <span key={metric} className="text-xs font-black text-red-500 uppercase">★ {metric}</span>
                   ))}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
