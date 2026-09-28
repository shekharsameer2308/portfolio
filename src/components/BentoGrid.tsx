"use client";
import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { PastelHighlightCard } from './notebook/PastelHighlightCard';
import { ArrowUpRight } from 'lucide-react';
import { MarginAnnotation } from './notebook/MarginAnnotation';

const highlightColors = [
  'bg-pastel-pink', 'bg-pastel-purple', 'bg-pastel-green'
];

export const BentoGrid = () => {
  return (
    <section id="projects" className="relative z-20 py-24 md:py-32">
      <MarginAnnotation text="Key Projects" className="-left-16 top-10 text-pastel-purple" />
      
      <div className="mb-16">
        <h2 className="inline-block px-4 py-1 mb-4 bg-white border-2 border-ink font-handwriting text-2xl font-bold transform -rotate-2 shadow-ink">
          Systems & Architecture
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-ink tracking-tight relative inline-block">
          <span className="relative z-10">My Scrapbook.</span>
          <span className="absolute bottom-2 left-0 w-full h-6 bg-pastel-green mix-blend-multiply opacity-80 -z-10 transform rotate-1"></span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, i) => {
          const colorClass = highlightColors[i % highlightColors.length];
          const rotate = i % 2 === 0 ? 'rotate-1' : '-rotate-1';
          
          return (
            <a key={project.id} href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer" className="block h-full">
               <PastelHighlightCard title={project.title} colorClass={colorClass} delay={(i % 3) * 0.1} rotate={rotate}>
                 <div className="flex justify-between items-start mb-4 mt-2">
                   <p className="text-slate-700 font-medium text-sm leading-relaxed">
                     {project.description}
                   </p>
                 </div>
   
                 <div className="flex flex-col gap-4 mt-auto border-t-2 border-slate-200 border-dashed pt-4">
                   <div className="flex gap-2 flex-wrap">
                     {project.techStack.map(tech => (
                       <span key={tech} className="text-xs font-bold px-2 py-1 bg-white border border-slate-300 rounded text-slate-600">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               </PastelHighlightCard>
            </a>
          );
        })}
      </div>
    </section>
  );
};
