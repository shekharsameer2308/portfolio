"use client";

import React from "react";
import { projects } from "@/data/projects";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-border-subtle overflow-hidden"
    >
      {/* Background Coordinate Grid */}
      <div className="absolute inset-0 coordinate-grid pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-[1600px] w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-12">
        
        {/* Left Col: Titles & Metadata */}
        <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-technical bg-surface-card border border-border-subtle mb-8 shadow-sm">
            <span className="font-mono text-tech-xs text-flare uppercase tracking-widest">
              CHEMICAL ENGINEERING × DATA × AI
            </span>
          </div>

          <h1 className="text-hero-sm sm:text-hero-md lg:text-hero-lg font-bold tracking-tight text-text-primary uppercase leading-[0.95] mb-2">
            SAMEER <br />
            SHEKHAR
          </h1>
          
          <p className="mt-8 text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed text-balance font-sans">
            I build intelligent systems, analytical platforms, and computational tools. Engineer working at the intersection of data architecture, machine learning, and industrial problem-solving.
          </p>
        </div>

        {/* Right Col / Telemetry / HUD */}
        <div className="md:col-span-4 lg:col-span-5 hidden md:flex flex-col items-end justify-between h-full animate-fade-in-delayed">
          
          {/* Top Right System Label */}
          <div className="font-mono text-tech-sm text-text-muted text-right uppercase tracking-[0.15em] border-b border-border-subtle pb-2 mb-12">
            SYS / 001 <br />
            STATUS: <span className="text-status-online">ONLINE</span>
          </div>

          {/* Faint Helix Preview / Graphic */}
          <div className="relative w-full aspect-square max-w-xs opacity-20 pointer-events-none select-none">
            <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0">
              <path 
                d="M 100,0 V 200" 
                stroke="var(--text-primary)" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
              />
              <path 
                d="M 100,0 Q 180,50 100,100 T 100,200" 
                fill="none" 
                stroke="var(--text-primary)" 
                strokeWidth="1" 
              />
              <path 
                d="M 100,0 Q 20,50 100,100 T 100,200" 
                fill="none" 
                stroke="var(--text-primary)" 
                strokeWidth="0.5" 
              />
              {/* Nodes */}
              <circle cx="140" cy="50" r="3" fill="var(--flare-start)" />
              <circle cx="100" cy="100" r="2" fill="var(--text-primary)" />
              <circle cx="60" cy="150" r="2" fill="var(--text-primary)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Bar: System Stats & Scroll Indicator */}
      <div className="absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 flex justify-between items-end max-w-[1600px] mx-auto z-10 animate-fade-in-delayed">
        <div className="font-mono text-tech-xs text-text-muted tracking-widest uppercase">
          SYSTEMS / {projects.length.toString().padStart(2, '0')}
        </div>
        
        <a 
          href="#work"
          className="group font-mono text-tech-xs text-text-secondary hover:text-flare transition-colors tracking-widest flex flex-col items-center gap-2"
        >
          <span>SCROLL</span>
          <div className="w-px h-8 bg-border-subtle relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-flare animate-slide-down group-hover:bg-flare" />
          </div>
        </a>
      </div>
    </section>
  );
}
