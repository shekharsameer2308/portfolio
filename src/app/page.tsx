"use client";

import React, { useState, useEffect, useRef } from "react";
import { site, about, projects, categories, experience, skills, education } from "@/data/content";
import { certs } from "@/data/certs";
import LampToggle from "@/components/LampToggle";
import HTMLFlipBook from "react-pageflip";

const categoryColors: Record<string, string> = {
  sim: "bg-mint",
  ml: "bg-lav",
  sys: "bg-pink",
};

// Custom Page component required by react-pageflip
const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div 
      className="page bg-paper shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border-r border-line overflow-hidden" 
      ref={ref} 
      data-density={props.density || "soft"}
    >
      <div 
        className="w-full h-full p-8 relative flex flex-col"
        style={{
          backgroundImage: 'radial-gradient(var(--dot) 1.1px, transparent 1.2px)', 
          backgroundSize: '22px 22px'
        }}
      >
        {props.children}
        
        {/* Page Number */}
        <div className="absolute bottom-4 right-8 font-hand text-soft text-xl">
          {props.number}
        </div>
      </div>
    </div>
  );
});
Page.displayName = "Page";

export default function ParallaxNotebook() {
  const [mounted, setMounted] = useState(false);
  const bookRef = useRef<any>(null);

  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen py-4 px-2 sm:py-8 sm:px-4 flex justify-center items-center overflow-hidden bg-desk">
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <LampToggle />
      </div>

      <div className="w-full max-w-[1200px] mx-auto p-4 rounded-[34px] bg-bezel relative flex justify-center items-center">
        
        <div className="w-full relative rounded-[18px] bg-[#1a1a1a] p-4 flex justify-center items-center shadow-inner">
          
          {mounted && (
            // @ts-ignore
            <HTMLFlipBook 
              width={450} 
              height={650} 
              size="stretch" 
              minWidth={300} 
              maxWidth={550} 
              minHeight={400} 
              maxHeight={800} 
              maxShadowOpacity={0.3} 
              showCover={true} 
              mobileScrollSupport={true}
              className="notebook-flipbook shadow-paper dark:shadow-paper-dark"
              ref={bookRef}
            >
              
              {/* PAGE 1: COVER */}
              <Page number="" density="hard">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="border-2 border-ink rounded-full px-8 py-3 mb-6 bg-paper shadow-sm">
                    <h1 className="text-4xl sm:text-5xl font-hand font-bold text-ink m-0 leading-none">
                      {site.name}
                    </h1>
                  </div>
                  <p className="text-xl font-bold text-soft mb-8 px-4">
                    {site.tagline}
                  </p>
                  <div className="flex flex-col gap-4 text-sm font-bold">
                    <a href={`mailto:${site.email}`} className="px-4 py-2 bg-bar rounded-lg text-ink hover:bg-line transition-colors">Email Me</a>
                    <a href={site.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-bar rounded-lg text-ink hover:bg-line transition-colors">GitHub</a>
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-bar rounded-lg text-ink hover:bg-line transition-colors">LinkedIn</a>
                  </div>
                </div>
              </Page>

              {/* PAGE 2: ABOUT */}
              <Page number="1">
                <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-6 mt-4">
                  About
                </div>
                <p className="text-ink leading-relaxed text-[15px]">
                  {about.text}
                </p>
                {about.note && (
                  <div className="mt-8 border-[1.5px] border-dashed border-ink rounded-lg bg-yel p-4 transform rotate-1 text-ink font-hand text-2xl shadow-sm">
                    {about.note}
                  </div>
                )}
              </Page>

              {/* PAGE 3: EXPERIENCE */}
              <Page number="2">
                <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-6 mt-4">
                  Experience
                </div>
                <div className="space-y-6">
                  {experience.map((e, idx) => (
                    <div key={idx} className="border-l-2 border-line pl-[14px]">
                      <h3 className="text-[16px] font-bold text-ink leading-tight">{e.role}</h3>
                      <p className="text-xs font-bold text-soft mb-2">
                        {e.org} &middot; {e.dates}
                      </p>
                      <p className="text-ink leading-relaxed text-[13px] line-clamp-4">
                        {e.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Page>

              {/* PAGE 4: PROJECTS */}
              <Page number="3">
                <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-6 mt-4">
                  Projects
                </div>
                <div className="space-y-6">
                  {projects.slice(0, 2).map((p, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <h3 className="text-[16px] font-bold text-ink">{p.title}</h3>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border-[1.5px] border-line text-ink ${categoryColors[p.category]}`}>
                          {categories[p.category as keyof typeof categories]}
                        </span>
                      </div>
                      <p className="text-[13px] text-ink leading-relaxed mb-2">{p.description}</p>
                      <div className="flex gap-3 text-xs font-bold">
                        {p.links.map(l => (
                          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-soft hover:text-ink underline decoration-dashed underline-offset-2">
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Page>

              {/* PAGE 5: PROJECTS (CONT) & SKILLS */}
              <Page number="4">
                <div className="space-y-6 mt-2">
                  {projects.slice(2, 4).map((p, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <h3 className="text-[16px] font-bold text-ink">{p.title}</h3>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border-[1.5px] border-line text-ink ${categoryColors[p.category]}`}>
                          {categories[p.category as keyof typeof categories]}
                        </span>
                      </div>
                      <p className="text-[13px] text-ink leading-relaxed mb-2">{p.description}</p>
                    </div>
                  ))}
                </div>

                <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-4 mt-8">
                  Core Skills
                </div>
                <div className="space-y-3">
                  {skills.map(([k, v], idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-ink text-[13px]">{k}</h4>
                      <p className="text-ink text-xs leading-relaxed">{v}</p>
                    </div>
                  ))}
                </div>
              </Page>

              {/* PAGE 6: EDUCATION */}
              <Page number="5">
                <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-6 mt-4">
                  Education & Leadership
                </div>
                <div className="ml-[15px] border-l-2 border-dashed border-line space-y-6">
                  {education.map((t, idx) => (
                    <div key={idx} className="relative pl-4">
                      <div className="absolute -left-[9px] top-1 w-[14px] h-[14px] rounded-full border-2 border-line bg-paper" />
                      <p className="text-ink text-[14px] leading-relaxed font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </Page>

              {/* PAGE 7: CERTIFICATIONS */}
              <Page number="6">
                <div className="w-full bg-bar rounded-[3px] px-[10px] py-[3px] text-center text-sm font-bold tracking-wide uppercase text-ink mb-6 mt-4">
                  Certifications
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {certs.slice(0,4).map((cert, idx) => (
                    <div key={idx} className="bg-card border border-line rounded-lg overflow-hidden flex flex-col hover:border-ink transition-colors">
                      <div className="relative h-20 w-full bg-bar">
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-90" />
                      </div>
                      <div className="p-2">
                        <h4 className="text-[10px] font-bold text-ink leading-tight line-clamp-2">{cert.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </Page>

              {/* PAGE 8: BACK COVER */}
              <Page number="" density="hard">
                <div className="h-full flex flex-col justify-center items-center text-center gap-6">
                  <span className="px-6 py-2 rounded-full bg-pink border-[1.5px] border-line text-lg font-bold text-ink shadow-sm rotate-[-3deg]">
                    Remember
                  </span>
                  <span className="px-6 py-2 rounded-full bg-mint border-[1.5px] border-line text-lg font-bold text-ink shadow-sm rotate-[2deg]">
                    Focus
                  </span>
                  <p className="mt-8 text-soft font-hand text-xl">The End.</p>
                </div>
              </Page>

            </HTMLFlipBook>
          )}

        </div>
      </div>
    </main>
  );
}
