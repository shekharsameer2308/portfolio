"use client";

import React, { useEffect, useRef } from "react";
import { useCommandPalette } from "@/lib/use-command-palette";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const { isOpen, close, query, setQuery } = useCommandPalette();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const navLinks = [
    { label: "WORK", href: "/#work" },
    { label: "SYSTEMS", href: "/#systems" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "/#contact" },
  ].filter(l => l.label.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (href: string) => {
    router.push(href);
    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-void/80 backdrop-blur-sm transition-opacity" 
        onClick={close}
      />
      
      {/* Palette Container */}
      <div 
        className="relative w-full max-w-xl bg-surface-active border border-border rounded-panel shadow-2xl overflow-hidden animate-fade-in-up"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center px-4 py-3 border-b border-border-subtle">
          <Search className="w-5 h-5 text-text-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent text-text-primary font-mono text-sm placeholder:text-text-muted focus:outline-none"
            placeholder="Search systems, projects, sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={close}
            className="text-[10px] font-mono text-text-muted bg-surface-distant px-2 py-1 rounded border border-border-subtle hover:text-text-primary"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto py-2">
          {/* Projects Section */}
          {filteredProjects.length > 0 && (
            <div className="mb-4">
              <div className="px-4 py-2 text-[10px] font-mono text-text-muted uppercase tracking-widest">
                Systems & Projects
              </div>
              <ul className="flex flex-col">
                {filteredProjects.map((project) => (
                  <li key={project.id}>
                    <button
                      className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-surface-hover hover:text-flare group transition-colors"
                      onClick={() => handleSelect(`/projects/${project.id}`)}
                    >
                      <span className="font-mono text-xs text-text-muted group-hover:text-flare/70">
                        {project.num}
                      </span>
                      <span className="font-medium text-sm text-text-primary group-hover:text-flare">
                        {project.title}
                      </span>
                      <span className="text-xs text-text-secondary ml-auto hidden sm:block">
                        {project.category}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation Section */}
          {navLinks.length > 0 && (
            <div>
              <div className="px-4 py-2 text-[10px] font-mono text-text-muted uppercase tracking-widest">
                Navigation
              </div>
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-surface-hover hover:text-flare group transition-colors"
                      onClick={() => handleSelect(link.href)}
                    >
                      <span className="font-mono text-xs text-text-muted group-hover:text-flare/70">
                        →
                      </span>
                      <span className="font-medium text-sm text-text-primary group-hover:text-flare">
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {filteredProjects.length === 0 && navLinks.length === 0 && (
            <div className="px-4 py-8 text-center text-text-muted font-mono text-sm">
              NO MATCHING SYSTEMS FOUND
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
