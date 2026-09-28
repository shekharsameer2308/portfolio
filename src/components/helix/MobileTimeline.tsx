"use client";

import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function MobileTimeline() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Trigger when card is near the middle of the screen
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll(".mobile-project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative pl-6" ref={containerRef}>
      {/* Vertical Spine */}
      <div className="absolute top-0 bottom-0 left-[11px] w-[2px] bg-border-subtle" />

      <div className="flex flex-col gap-16 pb-24">
        {projects.map((project, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div 
              key={project.id} 
              className="relative mobile-project-card"
              data-index={idx}
            >
              {/* Node Dot */}
              <div 
                className={cn(
                  "absolute -left-[30px] top-1 w-[10px] h-[10px] rounded-full transition-colors duration-300 z-10",
                  isActive ? "bg-flare flare-glow-sm" : "bg-text-muted"
                )}
              />

              <div 
                className={cn(
                  "p-6 rounded-card border transition-all duration-300",
                  isActive 
                    ? "border-border surface-active shadow-xl" 
                    : "border-border-subtle bg-surface-distant opacity-60"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={cn("font-mono text-xs", isActive ? "text-flare" : "text-text-muted")}>
                    {project.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted border border-border-subtle px-1.5 py-0.5 rounded-sm">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                
                {isActive && (
                  <div className="animate-fade-in">
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    <button
                      onClick={() => router.push(`/projects/${project.id}`)}
                      className="w-full bg-surface-hover text-text-primary border border-border-subtle font-mono text-xs font-semibold py-3 px-4 rounded flex justify-center items-center gap-2 hover:bg-border transition-colors"
                    >
                      <span>INSPECT SYSTEM</span>
                      <ArrowRight className="w-3 h-3 text-flare" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
