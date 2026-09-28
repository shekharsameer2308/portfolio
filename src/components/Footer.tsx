import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-20 border-t-4 border-slate-900 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-300 border-2 border-slate-900 rounded font-bold text-slate-900 text-xs shadow-[2px_2px_0px_#0f172a] transform -rotate-1">
            <div className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
            AVAILABLE FOR SELECT OPPORTUNITIES
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Let's build the future.</h2>
          <a href={`mailto:${portfolioData.socials.email}`} className="inline-flex items-center gap-2 text-slate-700 font-bold hover:text-blue-600 transition-colors text-lg">
            {portfolioData.socials.email} <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-6 text-base font-black text-slate-900">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4">GitHub</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors underline decoration-2 underline-offset-4">LinkedIn</a>
          </div>
          <div className="text-sm font-bold text-slate-500 flex items-center gap-1 mt-4">
             Made with <Heart size={14} className="text-red-500 fill-red-500" /> & Coffee
          </div>
        </div>

      </div>
    </footer>
  );
};
