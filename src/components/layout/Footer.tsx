"use client";

import React from "react";
import { personalInfo } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-void py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
          <span className="font-mono text-sm text-text-primary font-bold tracking-widest">
            {personalInfo.initials}
          </span>
          <span className="hidden md:inline text-border-subtle">|</span>
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
            {personalInfo.name} — {personalInfo.title}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-text-muted">
            <span className="w-1.5 h-1.5 bg-status-online rounded-full animate-pulse-dot" />
            System Online
          </div>
          
          <div className="font-mono text-[10px] text-text-muted">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
        
      </div>
    </footer>
  );
}
