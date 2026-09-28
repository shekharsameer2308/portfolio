"use client"

import { experiences } from "@/data/experience"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 border-b border-inverse bg-paper text-inverse relative">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <SectionHeader num="05" title="Professional Experience" />
        <div className="space-y-16 mt-12 max-w-4xl">
          {experiences.map((exp: any, i: number) => (
            <div key={i} className="relative group">
              <div className="md:grid md:grid-cols-[200px_1fr] md:gap-12 items-baseline">
                {/* Timeline / Metadata */}
                <div className="mb-4 md:mb-0 font-mono text-tech-xs text-inverse-muted flex flex-col gap-1 md:text-right border-l-2 md:border-l-0 md:border-r-2 border-inverse pl-4 md:pl-0 md:pr-4 pt-1">
                  <span className="text-inverse font-medium">{exp.period}</span>
                  {exp.location && <span>{exp.location}</span>}
                  {exp.type && <span className="text-inverse-secondary">{exp.type}</span>}
                </div>
                
                {/* Content Panel */}
                <div className="bg-paper-surface border border-inverse p-8 sm:p-10 rounded-panel transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl text-inverse font-semibold mb-1">{exp.role}</h3>
                  <div className="text-flare font-mono text-xs tracking-widest uppercase mb-6">{exp.company}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {exp.highlights?.map((highlight: string, j: number) => (
                      <li key={j} className="text-inverse-secondary text-sm flex gap-3 leading-relaxed">
                        <span className="text-flare shrink-0 font-mono">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-inverse">
                    {exp.skills?.map((skill: string, j: number) => (
                      <span key={j} className="font-mono text-[10px] uppercase tracking-widest text-inverse-muted border border-inverse px-2 py-1 rounded-sm bg-paper">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
