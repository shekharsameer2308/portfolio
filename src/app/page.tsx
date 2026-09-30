"use client";

import React, { useEffect, useState } from "react";
import { site, about, projects, categories, experience, skills, education, type Category } from "@/data/content";
import { certs } from "@/data/certs";
import LampToggle from "@/components/LampToggle";
import Image from "next/image";

const categoryColors: Record<Category, string> = {
  sim: "bg-mint",
  ml: "bg-lav",
  sys: "bg-pink",
};

const TABS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certs", label: "Certs" },
];

export default function PolishedNotebook() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  
  useEffect(() => setMounted(true), []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen py-4 px-2 sm:py-8 sm:px-4 flex justify-center items-center overflow-x-hidden">
      
      {/* 3.3 Frame */}
      <div className="w-full max-w-[1000px] mx-auto p-4 rounded-[34px] bg-bezel relative">
        
        {/* Index Tabs (Mobile: top, Desktop: right edge of screen) */}
        <div className="
          flex flex-row overflow-x-auto mb-2 no-scrollbar
          sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:flex-col sm:mb-0 sm:w-10 sm:z-10
        ">
          {TABS.map((tab, idx) => {
            const colors = ["bg-pink", "bg-lav", "bg-mint", "bg-yel"];
            const bgClass = colors[idx % colors.length];
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`
                  flex-shrink-0 px-4 py-2 text-sm font-bold text-ink rounded-t-lg border-x border-t border-line transition-all
                  sm:rounded-none sm:rounded-l-lg sm:py-4 sm:px-1 sm:text-base sm:border-y sm:border-l sm:border-r-0 sm:-mr-[2px] hover:pr-4 hover:-ml-3
                  ${bgClass} ${activeTab === tab.id ? "sm:pr-4 sm:-ml-3 shadow-md z-20" : "opacity-80"}
                `}
                style={{
                  writingMode: typeof window !== 'undefined' && window.innerWidth >= 640 ? "vertical-rl" : "horizontal-tb",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Inner Paper (The Notebook Screen) */}
        <div 
          className="relative rounded-[18px] bg-paper overflow-y-auto overflow-x-hidden custom-scrollbar h-[85vh] sm:h-[80vh] w-full"
          style={{
            padding: '26px 62px 30px 26px', 
            backgroundImage: 'radial-gradient(var(--dot) 1.1px, transparent 1.2px)', 
            backgroundSize: '22px 22px'
          }}
        >
          {/* Header Theme Toggle */}
          <div className="absolute top-6 right-16 sm:right-20 z-50">
            <LampToggle />
          </div>

          {/* 3.5 Layout: columns */}
          <div className="columns-1 sm:columns-[320px] gap-[26px] w-full">
            
            {/* Header / Name */}
            <div className="break-inside-avoid mb-8 relative" id="about">
              <div className="inline-block border-2 border-ink rounded-full px-6 py-2 mb-4">
                <h1 className="text-[2.6rem] font-hand font-bold text-ink leading-none m-0">
                  {site.name}
                </h1>
              </div>
              <p className="text-lg font-medium text-soft mb-2">
                {site.tagline}
              </p>
              
              {mounted && (
                <div className="flex flex-wrap gap-3 mt-4 text-sm font-bold">
                  <a href={`mailto:${site.email}`} className="text-soft hover:text-ink transition-colors">Email</a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-soft hover:text-ink transition-colors">GitHub</a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-soft hover:text-ink transition-colors">LinkedIn</a>
                  <a href={site.resume} className="text-soft hover:text-ink transition-colors">Resume</a>
                </div>
              )}
            </div>

            {/* About Box */}
            <div className="break-inside-avoid mb-8 relative">
              <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-4">
                About
              </div>
              <p className="text-ink leading-relaxed">
                {about.text}
              </p>
              {about.note && (
                <div className="mt-4 border-[1.5px] border-dashed border-ink rounded-lg bg-yel p-3 transform rotate-1 inline-block text-ink font-hand text-xl">
                  {about.note}
                </div>
              )}
            </div>

            {/* Experience (Timeline) */}
            <div className="break-inside-avoid mb-8" id="experience">
              <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-4">
                Experience
              </div>
              <div className="space-y-6">
                {experience.map((e, idx) => (
                  <div key={idx} className="border-l-2 border-line pl-[14px] relative">
                    <h3 className="text-lg font-bold text-ink leading-tight">{e.role}</h3>
                    <p className="text-sm font-bold text-soft mb-2">
                      {e.org} &middot; {e.dates}
                    </p>
                    <p className="text-ink leading-relaxed text-sm">
                      {e.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="break-inside-avoid mb-8" id="projects">
              <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-4">
                Projects
              </div>
              <div className="space-y-8">
                {projects.map((p, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded-full border-[1.5px] border-line text-ink ${categoryColors[p.category]}`}>
                        {categories[p.category]}
                      </span>
                    </div>
                    <p className="text-sm text-ink leading-relaxed mb-2">{p.description}</p>
                    {p.metric && (
                      <p className="text-sm font-bold text-soft mb-2">↳ {p.metric}</p>
                    )}
                    <div className="flex gap-3 text-sm font-bold">
                      {p.links.map(l => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-soft hover:text-ink underline decoration-dashed underline-offset-2">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="break-inside-avoid mb-8" id="skills">
              <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-4">
                Skills
              </div>
              <div className="space-y-4">
                {skills.map(([k, v], idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-ink text-sm">{k}</h4>
                    <p className="text-ink text-sm leading-relaxed">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education (Milestone Tree) */}
            <div className="break-inside-avoid mb-8" id="education">
              <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-4">
                Education & Leadership
              </div>
              <div className="ml-[30px] border-l-2 border-dashed border-line space-y-6">
                {education.map((t, idx) => (
                  <div key={idx} className="relative pl-4">
                    <div className="absolute -left-[9px] top-1.5 w-[14px] h-[14px] rounded-full border-2 border-line bg-paper" />
                    <p className="text-ink text-sm leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="break-inside-avoid mb-8" id="certs">
              <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-4">
                Certifications
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-[10px]">
                {certs.map((cert, idx) => (
                  <div key={idx} className="bg-card border border-line rounded-lg overflow-hidden flex flex-col hover:border-ink transition-colors cursor-pointer group">
                    <div className="relative h-24 w-full bg-bar">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-2">
                      <h4 className="text-xs font-bold text-ink leading-tight line-clamp-2">{cert.title}</h4>
                      <p className="text-[10px] text-soft mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Note / Tags */}
            <div className="break-inside-avoid pb-12 flex justify-center gap-4 mt-8">
              <span className="px-4 py-1.5 rounded-full bg-pink border-[1.5px] border-line text-sm font-bold text-ink shadow-sm rotate-[-3deg]">
                Remember
              </span>
              <span className="px-4 py-1.5 rounded-full bg-mint border-[1.5px] border-line text-sm font-bold text-ink shadow-sm rotate-[2deg]">
                Focus
              </span>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
