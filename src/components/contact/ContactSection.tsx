"use client"

import { personalInfo } from "@/data/personal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SystemStatus } from "@/components/ui/SystemStatus"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-paper text-inverse relative">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <SectionHeader num="06" title="Comms Link / Termination" />
        <div className="mt-12 bg-paper-surface border border-inverse p-8 md:p-16 rounded-panel flex flex-col items-center text-center shadow-lg relative overflow-hidden">
          
          {/* Subtle graphic in the background of the card */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <SystemStatus className="mb-8" />
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-inverse mb-6">Endpoint Reached.</h2>
            <p className="text-inverse-secondary max-w-md mx-auto mb-10 text-lg leading-relaxed">
              The structure is complete. My inbox is open for technical inquiries, architecture discussions, and engineering opportunities.
            </p>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-void text-paper hover:bg-surface-hover font-mono text-sm transition-all rounded-technical shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              INITIATE_HANDSHAKE()
            </a>

            <div className="mt-16 flex gap-8 font-mono text-tech-sm">
              {personalInfo.socials?.map((social: any, i: number) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-inverse-muted hover:text-flare transition-colors uppercase tracking-widest text-[10px]"
                >
                  [{social.name}]
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
