"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { projects } from "@/data/projects";
import { useSystem } from "@/components/shell/SystemShell";
import { ProjectNode } from "./ProjectNode";
import { ActiveProjectCard } from "./ActiveProjectCard";
import { useViewport } from "@/lib/use-viewport";
import { MobileTimeline } from "./MobileTimeline";

export function HelixScene() {
  const { isMobile } = useViewport();
  const { activeProject, setActiveProject } = useSystem();
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Get raw scroll position (0 to 1) based on the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Pipe the raw scroll through a spring to create momentum/inertia
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,  // How responsive it is to the wheel
    damping: 14,    // How smoothly it brakes
    mass: 0.5,      // Light enough to spin easily
    restDelta: 0.001
  });

  const totalProjects = projects.length;
  const deltaAngle = 72; // Angular spacing between nodes in degrees
  const verticalSpacing = 220; // Vertical spacing between nodes in px

  const maxAngle = (totalProjects - 1) * deltaAngle;
  const maxY = (totalProjects - 1) * verticalSpacing;

  // 3. Map the smooth spring value to the Helix's rotation and vertical translation
  // As we scroll down, we rotate negatively to bring the next node to the front (0 deg)
  // and we translate up negatively to bring the next node to the center (0 px)
  const helixRotationY = useTransform(smoothScroll, [0, 1], [0, -maxAngle]);
  const helixTranslateY = useTransform(smoothScroll, [0, 1], [0, -maxY]);

  // 4. Update the active project based on the raw scroll to update the HUD instantly
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const activeIdx = Math.round(latest * (totalProjects - 1));
    if (activeIdx !== activeProject) {
      setActiveProject(activeIdx);
    }
  });

  if (isMobile) {
    const heading = projects[activeProject]?.prominent ? "SELECTED SYSTEMS" : "ENGINEERING WORK";
    return (
      <section id="work" className="relative py-24 px-4 border-b border-border-subtle bg-void">
        <div className="max-w-xl mx-auto">
          <h2 className="font-mono text-sm tracking-[0.2em] text-text-secondary uppercase mb-16 border-l-2 border-flare pl-4">
            {heading}
          </h2>
          <MobileTimeline />
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={containerRef} className="h-[400vh] relative bg-void">
      
      {/* The sticky viewport that holds the 3D scene */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden preserve-3d">
        
        {/* Background Grid */}
        <div className="absolute inset-0 grid-background pointer-events-none opacity-50" />

        {/* Section Header */}
        <div className="absolute top-12 left-8 lg:left-12 z-20 pointer-events-none">
          <h2 className="font-mono text-sm tracking-[0.2em] text-text-secondary uppercase flex items-center gap-4">
            <span className="w-8 h-[1px] bg-flare" />
            SYSTEM LOG
          </h2>
        </div>

        {/* The Rotating System */}
        <motion.div 
          style={{ 
            rotateY: helixRotationY,
            y: helixTranslateY
          }}
          className="relative w-full h-full preserve-3d flex items-center justify-center pointer-events-none"
        >
          {/* Central Technical Spine */}
          <div className="absolute w-[1px] h-[3000px] bg-border-subtle -translate-y-1/2" />
          
          {/* Central Active Indicator Ring (moves with the container so it stays aligned) */}
          <div className="absolute w-[200px] h-[200px] border border-border-subtle rounded-full -translate-x-1/2 -translate-y-1/2 rotate-x-90 opacity-20" />

          {projects.map((project, index) => (
            <ProjectNode 
              key={project.id} 
              project={project} 
              index={index} 
              deltaAngle={deltaAngle}
              verticalSpacing={verticalSpacing}
              radius={400}
            />
          ))}
        </motion.div>

        {/* The 2D Overlay HUD / Active Card */}
        <ActiveProjectCard />

        {/* Navigation Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] pointer-events-none">
          [ SCROLL TO EXPLORE ]
        </div>
      </div>
    </section>
  );
}
