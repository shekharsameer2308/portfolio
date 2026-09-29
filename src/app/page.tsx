import React from 'react';
import { portfolioData } from '@/data/portfolio';

export default function NotebookPortfolio() {
  return (
    <main className="min-h-screen bg-notePaper bg-[linear-gradient(to_right,#f0ece6_1px,transparent_1px),linear-gradient(to_bottom,#f0ece6_1px,transparent_1px)] bg-[size:28px_28px] text-slate-800 p-6 md:p-12 font-sans">
      
      {/* Notebook Binder Wrapper / iPad Frame Style */}
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-stone-200/80 p-8 md:p-12 relative overflow-hidden">
        
        {/* Top Header / Title Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-stone-200 pb-6 mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Interactive Dossier • {new Date().getFullYear()}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
              {portfolioData.hero.name} <span className="text-pink-400">✦</span> <span className="text-xl md:text-2xl font-medium text-slate-600">{portfolioData.hero.role}</span>
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-pastelPink text-pink-700 border border-pastelPinkBorder">
              Industrial ML
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-pastelLavender text-indigo-700 border border-pastelLavenderBorder">
              Data Engineering
            </span>
          </div>
        </header>

        {/* Grid Layout mimicking Digital Study Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* SECTION 1: FUNCTION / BIO */}
          <section className="md:col-span-1 bg-pastelPink/40 border border-pastelPinkBorder rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              {/* Pill-Shaped Header */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-pink-400 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                01. Core Function
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                {portfolioData.about.bio.split("rather than")[0]}<span className="bg-markerYellow/60 px-1 rounded font-medium">approaching systems through physical constraints</span> and rigorous computational architecture.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-pink-200/60 text-xs text-stone-500 flex justify-between">
              <span>Status: Available</span>
              <span className="text-pink-600 font-semibold">📍 {portfolioData.hero.location}</span>
            </div>
          </section>

          {/* SECTION 2: COMPONENTS / PROJECTS */}
          <section className="md:col-span-2 bg-pastelLavender/40 border border-pastelLavenderBorder rounded-2xl p-6 shadow-sm">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-400 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              02. Selected Works
            </div>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-200">
              {portfolioData.projects.slice(0, 4).map((project) => (
                <a key={project.id} href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer" className="block bg-white/90 p-4 rounded-xl border border-indigo-100 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-800 text-sm">{project.title}</h3>
                    <span className="text-xs text-indigo-600 font-medium">{project.techStack.slice(0, 2).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.metrics.map(metric => (
                      <span key={metric} className="text-[10px] uppercase font-bold text-slate-400 bg-slate-50 px-2 rounded-full border border-slate-100">
                        {metric}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* SECTION 3: TECHNICAL SKILLS / STACK */}
          <section className="md:col-span-2 bg-pastelMint/40 border border-pastelMintBorder rounded-2xl p-6 shadow-sm">
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              03. Tech Stack & Tools
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
              {portfolioData.skills.dataAndAI.slice(0, 8).map(skill => (
                <div key={skill} className="bg-white/80 p-2.5 rounded-lg border border-teal-100 text-center font-medium text-slate-700">{skill}</div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {portfolioData.skills.frameworks.slice(0, 4).map(skill => (
                 <div key={skill} className="bg-white/80 p-2.5 rounded-lg border border-teal-100 text-center font-medium text-slate-700">{skill}</div>
              ))}
            </div>
          </section>

          {/* SECTION 4: CONTACT & LINKS */}
          <section className="md:col-span-1 bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                04. Connect
              </div>
              <p className="text-xs text-slate-700 mb-4">
                Let's collaborate on building rigorous computational architecture and industrial ML systems.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a 
                href={`mailto:${portfolioData.socials.email}`} 
                className="block w-full text-center py-2 px-4 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Send an Email ↗
              </a>
              <div className="flex gap-2">
                 <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 px-4 bg-white text-slate-900 border border-slate-200 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors shadow-sm">GitHub</a>
                 <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 px-4 bg-white text-blue-600 border border-blue-200 rounded-xl text-xs font-semibold hover:bg-blue-50 transition-colors shadow-sm">LinkedIn</a>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <footer className="mt-10 pt-4 border-t border-stone-200 text-center text-xs text-stone-400">
          Handcrafted with care • Inspired by digital stationery aesthetics.
        </footer>

      </div>
    </main>
  );
}
