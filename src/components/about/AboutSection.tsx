"use client"

import { personalInfo } from "@/data/personal"
import { journeyMilestones } from "@/data/journey"
import { SectionHeader } from "@/components/ui/SectionHeader"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-inverse bg-paper text-inverse">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <SectionHeader num="04" title="Initial State / Profile" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 mt-12">
          
          <div className="space-y-6 text-inverse-secondary leading-relaxed max-w-prose">
            {personalInfo.detailedBio?.map((paragraph: string, i: number) => (
              <p key={i} className="text-lg">{paragraph}</p>
            ))}
          </div>

          <div className="space-y-12">
            {/* Metadata Block */}
            <div className="bg-paper-surface border border-inverse p-6 rounded-card font-mono text-sm space-y-4">
              <div className="text-inverse-muted mb-4 uppercase tracking-widest text-[10px]">Telemetry / Metadata</div>
              
              <div className="flex flex-col border-b border-inverse pb-3">
                <span className="text-[10px] text-inverse-muted uppercase mb-1">Education</span>
                <span className="text-inverse text-xs">{personalInfo.education.degree}</span>
                <span className="text-inverse-secondary text-xs">{personalInfo.education.institution}</span>
              </div>
              
              <div className="flex flex-col border-b border-inverse pb-3">
                <span className="text-[10px] text-inverse-muted uppercase mb-1">Location</span>
                <span className="text-inverse text-xs">{personalInfo.location}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-inverse-muted uppercase mb-1">CGPA</span>
                <span className="text-flare text-xs">{personalInfo.education.cgpa}</span>
              </div>
            </div>

            {/* Journey Timeline */}
            <div>
              <div className="text-inverse-muted mb-6 uppercase tracking-widest text-[10px] font-mono">Evolution Sequence</div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-inverse before:to-transparent">
                {journeyMilestones.map((milestone: any, i: number) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-3 h-3 rounded-full border border-flare bg-paper absolute left-0 md:left-1/2 -translate-x-1/2 group-hover:bg-flare transition-colors duration-300"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] pl-4 md:pl-0">
                      <div className="flex flex-col md:group-odd:items-end">
                        <span className="font-mono text-tech-xs text-flare mb-1">PHASE {milestone.stage}</span>
                        <h4 className="text-sm font-medium text-inverse mb-1 md:text-right md:group-even:text-left">{milestone.title}</h4>
                        <p className="text-inverse-secondary text-xs md:text-right md:group-even:text-left">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
