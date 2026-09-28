"use client";

import React from "react";
import { ProjectCaseStudy } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface OutcomeSectionProps {
  caseStudy: ProjectCaseStudy;
}

export function OutcomeSection({ caseStudy }: OutcomeSectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader num="03" title="Capabilities & Learnings" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Verified Capabilities */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-status-online" />
              Verified Capabilities
            </div>
            
            <ul className="space-y-4">
              {caseStudy.verifiedCapabilities.map((cap, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-[10px] text-text-muted mt-1.5 opacity-50">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-flare" />
              Lessons Learned
            </div>
            
            <ul className="space-y-4">
              {caseStudy.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-technical border border-border-subtle bg-surface-distant">
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {lesson}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
