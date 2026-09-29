"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  site,
  about,
  projects,
  categories,
  experience,
  skills,
  education,
  certifications,
  type Category,
} from "@/data/content";


const categoryColors: Record<Category, { bg: string; text: string; darkBg: string; darkText: string }> = {
  sim: { bg: "bg-teal-100", text: "text-teal-800", darkBg: "dark:bg-teal-900/40", darkText: "dark:text-teal-300" },
  ml: { bg: "bg-blue-100", text: "text-blue-800", darkBg: "dark:bg-blue-900/40", darkText: "dark:text-blue-300" },
  sys: { bg: "bg-amber-100", text: "text-amber-800", darkBg: "dark:bg-amber-900/40", darkText: "dark:text-amber-300" },
};

export default function PolishedNotebook() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:px-12 selection:bg-yellow-200 dark:selection:bg-yellow-900/50">
      
      {/* The Notebook Wrapper */}
      <div className="max-w-4xl mx-auto relative bg-[#fdfcf9] dark:bg-[#121212] rounded-r-3xl rounded-l-md shadow-paper dark:shadow-paper-dark border border-stone-200 dark:border-zinc-800 overflow-hidden flex">
        
        {/* Math Grid Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Left Binding / Spine */}
        <div className="w-12 sm:w-16 flex-shrink-0 bg-stone-300 dark:bg-zinc-900 border-r border-stone-400/30 dark:border-zinc-800 relative z-10 flex flex-col items-center py-8 gap-6 shadow-[inset_-2px_0_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_-2px_0_4px_rgba(0,0,0,0.4)]">
          {/* Punched Holes */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-stone-200 dark:bg-zinc-950 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.2)] dark:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.8)]" />
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow relative z-10 py-16 sm:py-20 pr-6 sm:pr-12 md:pr-16 pl-6 sm:pl-12">
          
          {/* Red Margin Line */}
          <div className="absolute left-8 sm:left-14 top-0 bottom-0 w-[2px] bg-red-400/40 dark:bg-red-500/20 pointer-events-none" />

          {/* Actual Content - Pushed past the red margin */}
          <div className="ml-6 sm:ml-12 max-w-2xl space-y-20">
            
            {/* Header */}
            <header className="space-y-6 relative">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-zinc-100">
                {site.name}
              </h1>
              
              <div className="relative inline-block">
                <span className="absolute inset-0 bg-yellow-200/70 dark:bg-yellow-500/20 -skew-y-1 transform scale-y-110 rounded-sm" />
                <p className="relative text-xl sm:text-2xl font-medium text-stone-800 dark:text-zinc-200 leading-snug">
                  {site.tagline}
                </p>
              </div>

              {mounted && (
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {site.email}
                  </a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    GitHub
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    LinkedIn
                  </a>
                  <a href={site.resume} className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Resume
                  </a>
                </div>
              )}
            </header>

            {/* About */}
            <section className="relative">
              <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 mb-4 inline-flex items-center gap-3">
                1. About
              </h2>
              <p className="text-lg text-stone-700 dark:text-zinc-300 leading-relaxed">
                {about.text}
              </p>
              {about.note && (
                <div className="mt-4 sm:absolute sm:-right-8 sm:top-10 sm:mt-0 transform sm:rotate-2">
                  <span className="font-hand text-2xl text-blue-600 dark:text-blue-400 leading-none">
                    <span className="hidden sm:inline-block mr-1">←</span> {about.note}
                  </span>
                </div>
              )}
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 mb-6">
                2. Projects
              </h2>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-8">
                {(Object.keys(categories) as Category[]).map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-zinc-400">
                    <span className={`w-3 h-3 rounded-full ${categoryColors[c].bg} border border-${categoryColors[c].text.replace('text-', 'border-')} dark:border-transparent`} />
                    {categories[c]}
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                {projects.map((p) => {
                  const color = categoryColors[p.category];
                  return (
                    <article key={p.title} className="relative group">
                      {/* Pastel Accent Bar */}
                      <div className={`absolute -left-4 top-0 bottom-0 w-1 rounded-full ${color.bg} ${color.darkBg}`} />
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-stone-900 dark:text-zinc-100">
                          {p.title}
                        </h3>
                        {p.note && (
                          <span className="font-hand text-xl text-blue-600 dark:text-blue-400 -rotate-2">
                            {p.note}
                          </span>
                        )}
                      </div>

                      <p className="text-stone-700 dark:text-zinc-300 mb-3 leading-relaxed">
                        {p.description}
                      </p>

                      {p.metric && (
                        <p className="text-stone-900 dark:text-zinc-100 font-medium mb-3 bg-stone-100 dark:bg-zinc-800/50 inline-block px-2 py-1 rounded">
                          ↳ {p.metric}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                        <p className="text-sm font-mono text-stone-500 dark:text-zinc-400">
                          {p.stack}
                        </p>
                        <div className="flex gap-4">
                          {p.links.map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-stone-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
                            >
                              {l.label} ↗
                            </a>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 mb-8">
                3. Experience
              </h2>
              <div className="space-y-10">
                {experience.map((e) => (
                  <article key={e.org} className="relative">
                    <div className="absolute -left-[1.35rem] top-2 w-2 h-2 rounded-full bg-stone-400 dark:bg-zinc-600 ring-4 ring-[#fdfcf9] dark:ring-[#121212]" />
                    <h3 className="text-lg font-bold text-stone-900 dark:text-zinc-100">{e.org}</h3>
                    <p className="text-sm font-medium text-stone-500 dark:text-zinc-400 mb-3">
                      {e.role} &middot; {e.place} &middot; {e.dates}
                    </p>
                    <p className="text-stone-700 dark:text-zinc-300 leading-relaxed">
                      {e.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 mb-6">
                4. Skills
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-x-4 gap-y-4">
                {skills.map(([k, v]) => (
                  <React.Fragment key={k}>
                    <dt className="font-semibold text-stone-900 dark:text-zinc-100">{k}</dt>
                    <dd className="text-stone-700 dark:text-zinc-300 mb-2 sm:mb-0">{v}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 mb-4">
                5. Education & Leadership
              </h2>
              <ul className="list-disc list-inside space-y-2 text-stone-700 dark:text-zinc-300">
                {education.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-zinc-100 mb-4">
                6. Certifications
              </h2>
              <p className="text-stone-700 dark:text-zinc-300 leading-relaxed">
                {certifications}
              </p>
            </section>

            {/* Footer */}
            <footer className="pt-16 pb-8 text-center text-sm font-medium text-stone-400 dark:text-zinc-600">
              © {new Date().getFullYear()} Sameer Shekhar
            </footer>

          </div>
        </div>
      </div>
    </main>
  );
}
