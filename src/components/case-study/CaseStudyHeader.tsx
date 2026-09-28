"use client";

import React from "react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyHeaderProps {
  project: Project;
}

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border-subtle relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 coordinate-grid pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-flare transition-colors mb-12 uppercase tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Return to Systems</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="font-mono text-lg text-flare">{project.num}</span>
          <span className="text-text-muted">/</span>
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary border border-border-subtle px-2 py-1 rounded bg-surface-distant">
            {project.status}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
          {project.title}
        </h1>
        
        <p className="text-xl sm:text-2xl text-text-secondary font-light max-w-3xl leading-relaxed mb-12 text-balance">
          {project.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-flare text-void font-mono text-sm font-semibold py-3 px-6 rounded-technical flex justify-center items-center gap-2 hover:bg-flare-end transition-colors"
            >
              <span>ACCESS SYSTEM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-distant text-text-primary border border-border-subtle font-mono text-sm font-medium py-3 px-6 rounded-technical flex justify-center items-center gap-2 hover:bg-surface-hover hover:border-border transition-colors"
            >
              <span>VIEW SOURCE</span>
              <ArrowUpRight className="w-4 h-4 text-text-muted" />
            </a>
          )}
        </div>

        {/* Technologies Grid */}
        <div className="border-t border-border-subtle pt-8">
          <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-4">
            System Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
