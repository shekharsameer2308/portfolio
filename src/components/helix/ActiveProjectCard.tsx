"use client";

import React from "react";
import { projects } from "@/data/projects";
import { useSystem } from "@/components/shell/SystemShell";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";

export function ActiveProjectCard() {
  const { activeProject } = useSystem();
  const router = useRouter();
  
  // Guard against missing project
  const project = projects[activeProject];
  if (!project) return null;

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
      <AnimatePresence mode="wait">
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "pointer-events-auto w-full max-w-lg mx-4 p-8 rounded-panel border border-border surface-active shadow-2xl",
            "hover:shadow-[0_0_40px_rgba(255,107,0,0.08)]",
            "relative overflow-hidden group"
          )}
        >
          {/* Top orange glow accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-flare-start to-transparent opacity-50" />

          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-tech-sm text-text-muted">{project.num}</span>
              <span className="text-text-muted">/</span>
              <span className="font-mono text-tech-sm uppercase tracking-widest text-text-primary">
                {project.title}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-flare animate-pulse-dot flare-glow-sm" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-flare">
                ACTIVE
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
              {project.subtitle}
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="separator-line my-6" />

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge>+{project.technologies.length - 4}</Badge>
              )}
            </div>

            {project.pipelineFlow && (
              <div className="font-mono text-xs text-text-muted tracking-widest flex items-center flex-wrap gap-2">
                {project.pipelineFlow.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className={i === 0 || i === project.pipelineFlow.length - 1 ? "text-text-secondary" : ""}>
                      {step}
                    </span>
                    {i < project.pipelineFlow.length - 1 && <span>→</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => router.push(`/projects/${project.id}`)}
              className="flex-1 bg-flare text-void font-mono text-sm font-semibold py-3 px-4 rounded-technical flex justify-center items-center gap-2 hover:bg-flare-end transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flare focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            >
              <span>[ INSPECT SYSTEM ]</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-distant text-text-secondary border border-border-subtle font-mono text-sm font-medium py-3 px-4 rounded-technical flex justify-center items-center gap-2 hover:bg-surface-hover hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-void"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
