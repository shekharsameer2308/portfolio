"use client";

import React from "react";
import { ProjectCaseStudy } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProblemSectionProps {
  caseStudy: ProjectCaseStudy;
}

export function ProblemSection({ caseStudy }: ProblemSectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
      <div className="max-w-4xl mx-auto">
        <SectionHeader num="01" title="Problem & Context" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-flare mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-flare rounded-full" />
              The Problem
            </div>
            <p className="text-text-secondary leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>
          
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-text-muted rounded-full" />
              The Context
            </div>
            <p className="text-text-secondary leading-relaxed">
              {caseStudy.context}
            </p>
          </div>
        </div>

        <div className="mt-16 p-6 sm:p-8 rounded-panel border border-border-subtle bg-surface-distant relative overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-border-focus" />
          
          <div className="font-mono text-[10px] uppercase tracking-widest text-text-primary mb-4">
            Engineered Approach
          </div>
          <p className="text-text-secondary leading-relaxed sm:text-lg text-balance">
            {caseStudy.approach}
          </p>
        </div>
      </div>
    </section>
  );
}
