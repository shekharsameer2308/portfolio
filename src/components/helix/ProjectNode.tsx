"use client";

import React from "react";
import { Project } from "@/types";
import { useSystem } from "@/components/shell/SystemShell";
import { cn } from "@/lib/utils";

interface ProjectNodeProps {
  project: Project;
  index: number;
  deltaAngle: number;
  verticalSpacing: number;
  radius: number;
}

export function ProjectNode({ project, index, deltaAngle, verticalSpacing, radius }: ProjectNodeProps) {
  const { activeProject, setActiveProject } = useSystem();
  const isActive = index === activeProject;

  return (
    <>
      {/* Structural Connector Line to Center Spine */}
      <div 
        className="absolute top-1/2 left-1/2 h-[1px] bg-border-subtle"
        style={{
          width: `${radius}px`,
          transformOrigin: "left center",
          transform: `translateY(${index * verticalSpacing}px) rotateY(${index * deltaAngle}deg)`
        }}
      />

      {/* The 3D Project Node */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 w-[320px] -ml-[160px] -mt-[100px] preserve-3d",
          "transition-all duration-300 pointer-events-auto cursor-pointer group"
        )}
        style={{
          transform: `translateY(${index * verticalSpacing}px) rotateY(${index * deltaAngle}deg) translateZ(${radius}px)`,
          // Fade and blur distant nodes based on whether they are active
          opacity: isActive ? 0 : 0.4,
          filter: isActive ? "none" : "blur(2px) grayscale(50%)",
        }}
        onClick={() => {
          // If they click a distant node, they want to focus it. 
          // Note: with pure CSS scrolling, this just highlights it on the context.
          // True auto-scroll requires window.scrollTo, but this provides visual feedback.
          setActiveProject(index);
        }}
      >
        <div 
          className={cn(
            "w-full p-6 rounded-card border border-border-subtle bg-surface-distant transition-colors duration-300",
            "group-hover:border-border-focus group-hover:bg-surface-hover group-hover:opacity-100"
          )}
        >
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-tech-sm text-text-muted group-hover:text-flare transition-colors">
              {project.num}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted border border-border-subtle px-1.5 py-0.5 rounded-sm">
              {project.status}
            </span>
          </div>
          
          <h3 className="font-sans text-xl font-medium text-text-primary mb-1">
            {project.title}
          </h3>
          
          <p className="font-mono text-xs text-text-secondary uppercase tracking-wider truncate">
            {project.category}
          </p>

          <div className="mt-8 pt-4 border-t border-border-subtle flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-text-muted" />
              <div className="w-1 h-1 bg-text-muted" />
            </div>
            <span className="font-mono text-[10px] text-text-muted">FOCUS NODE</span>
          </div>
        </div>
      </div>
    </>
  );
}
