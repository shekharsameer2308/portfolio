"use client";

import React from "react";
import { ProjectCaseStudy } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FlowDiagram } from "@/components/ui/FlowDiagram";

interface TechnicalSectionProps {
  caseStudy: ProjectCaseStudy;
}

export function TechnicalSection({ caseStudy }: TechnicalSectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle bg-surface-distant/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader num="02" title="Architecture & Decisions" />

        {/* Architecture Flow */}
        <div className="mt-12 mb-16">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-text-primary mb-2">
              {caseStudy.architecture.title}
            </h3>
            <p className="text-text-secondary text-sm max-w-2xl">
              {caseStudy.architecture.description}
            </p>
          </div>
          
          <div className="bg-surface-active border border-border-subtle rounded-panel p-6 sm:p-8 overflow-x-auto">
            <FlowDiagram 
              nodes={caseStudy.architecture.nodes} 
              asciiDiagram={caseStudy.architecture.asciiDiagram} 
            />
          </div>
        </div>

        {/* Engineering Decisions */}
        <div className="mt-16">
          <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-8 pb-4 border-b border-border-subtle">
            Key Engineering Decisions
          </div>
          
          <div className="space-y-12">
            {caseStudy.engineeringDecisions.map((decision, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
                <div>
                  <h4 className="text-text-primary font-medium flex items-center gap-2">
                    <span className="font-mono text-flare text-xs">{`D${idx + 1}`}</span>
                    {decision.title}
                  </h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-mono text-[10px] text-text-muted uppercase mb-1">Decision</div>
                    <p className="text-text-secondary text-sm leading-relaxed">{decision.decision}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-text-muted uppercase mb-1">Trade-offs</div>
                    <p className="text-text-secondary text-sm leading-relaxed">{decision.tradeoffs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
