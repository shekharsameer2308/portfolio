import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-white/[0.04] bg-[#030305]">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">Available for select opportunities</span>
          </div>
          <h2 className="text-3xl font-medium text-white tracking-tight">Let's build the future.</h2>
          <a href={`mailto:${portfolioData.socials.email}`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            {portfolioData.socials.email} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex gap-8 text-sm font-mono tracking-widest text-zinc-500">
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase">GitHub</a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
};
