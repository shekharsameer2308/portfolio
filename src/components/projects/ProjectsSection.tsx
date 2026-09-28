"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function ProjectsSection() {
  return (
    <section id="work" className="relative bg-void py-32 px-4 sm:px-6 lg:px-8 border-b border-border-subtle overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-50" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-24">
          <h2 className="font-mono text-sm tracking-[0.2em] text-text-secondary uppercase flex items-center gap-4">
            <span className="w-8 h-[1px] bg-flare" />
            SYSTEM LOG / PROJECTS
          </h2>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <ProjectSheet key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSheet({ project, index }: { project: any, index: number }) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect on the whole card
  const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.2]);

  const isLeft = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ y: yOffset, opacity }}
      className={cn(
        "relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group",
      )}
    >
      {/* Background Graphic / Placeholder (Could be an actual image) */}
      <div 
        className={cn(
          "row-start-1 h-[400px] sm:h-[500px] bg-surface-distant border border-border-subtle rounded-card overflow-hidden relative",
          isLeft 
            ? "col-start-1 col-end-13 lg:col-start-1 lg:col-end-9" 
            : "col-start-1 col-end-13 lg:col-start-5 lg:col-end-13"
        )}
      >
        {/* Parallax inner visual */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at center, var(--flare-start) 0%, transparent 70%)",
            y: useTransform(scrollYProgress, [0, 1], [-20, 20])
          }}
        />
        <div className="absolute top-4 left-4 font-mono text-[10px] text-text-muted">FIG. {project.num}</div>
      </div>

      {/* Content Sheet */}
      <div 
        className={cn(
          "relative z-10 p-8 sm:p-12 bg-surface-active backdrop-blur-xl border border-border-subtle shadow-2xl rounded-panel mt-[-100px] lg:mt-0",
          isLeft 
            ? "col-start-1 col-end-13 lg:col-start-7 lg:col-end-13 lg:row-start-1" 
            : "col-start-1 col-end-13 lg:col-start-1 lg:col-end-7 lg:row-start-1"
        )}
      >
        <div className="flex justify-between items-start mb-6">
          <span className="font-mono text-tech-sm text-flare">
            {project.num} / {project.title}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted border border-border-subtle px-2 py-1 rounded-sm bg-surface-distant">
            {project.status}
          </span>
        </div>

        <h3 className="text-3xl font-semibold text-text-primary mb-4">
          {project.subtitle}
        </h3>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 5).map((tech: string) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {project.pipelineFlow && (
            <div className="font-mono text-xs text-text-muted tracking-widest flex items-center flex-wrap gap-2">
              {project.pipelineFlow.map((step: string, i: number) => (
                <React.Fragment key={step}>
                  <span className={i === 0 || i === project.pipelineFlow.length - 1 ? "text-text-secondary" : ""}>
                    {step}
                  </span>
                  {i < project.pipelineFlow.length - 1 && <span className="opacity-50">→</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border-subtle">
          <button
            onClick={() => router.push(`/projects/${project.id}`)}
            className="w-full sm:flex-1 bg-flare text-void font-mono text-sm font-semibold py-3 px-4 rounded-technical flex justify-center items-center gap-2 hover:bg-flare-end transition-colors"
          >
            <span>[ INSPECT SYSTEM ]</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent text-text-secondary border border-border-subtle font-mono text-sm font-medium py-3 px-6 rounded-technical flex justify-center items-center gap-2 hover:bg-surface-hover hover:text-text-primary transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
