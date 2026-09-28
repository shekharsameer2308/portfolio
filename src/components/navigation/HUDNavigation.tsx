"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "work", label: "01 WORK", href: "/#work" },
  { id: "systems", label: "02 SYSTEMS", href: "/#systems" },
  { id: "experience", label: "03 EXPERIENCE", href: "/#experience" },
  { id: "about", label: "04 ABOUT", href: "/#about" },
  { id: "contact", label: "05 CONTACT", href: "/#contact" },
];

export function HUDNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled 
          ? "bg-void/90 backdrop-blur-md border-b border-border-subtle shadow-sm" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Logo */}
        <Link 
          href="/" 
          className="font-mono font-bold text-text-primary tracking-widest hover:text-flare transition-colors select-none"
        >
          {personalInfo.initials}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary hover:text-text-primary transition-colors select-none"
            >
              {item.label}
            </Link>
          ))}
          <button 
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted hover:text-flare transition-colors border border-border-subtle rounded px-2 py-1 flex items-center gap-2"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <span>CMD K</span>
          </button>
        </nav>

        {/* Mobile Navigation (Minimalist Menu) */}
        <div className="md:hidden flex items-center">
           <button 
            className="font-mono text-[11px] text-text-secondary border border-border-subtle rounded px-2 py-1 mr-4"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            ⌘K
          </button>
          <a 
            href="#work" 
            className="text-xs font-mono text-text-primary uppercase tracking-widest"
          >
            Menu ↓
          </a>
        </div>
      </div>
    </header>
  );
}
