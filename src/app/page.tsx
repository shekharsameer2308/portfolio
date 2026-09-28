import React from "react";
import { NotebookBackground } from "@/components/NotebookBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { BentoGrid } from "@/components/BentoGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { CertificationsSection } from "@/components/CertificationsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 font-sans selection:bg-yellow-300 selection:text-slate-900 relative overflow-x-hidden">
      <NotebookBackground />
      <Navbar />
      
      <div className="relative z-10 pt-8">
        <Hero />
        <AboutSection />
        <BentoGrid />
        <ExperienceTimeline />
        <CertificationsSection />
      </div>
      
      <Footer />
    </main>
  );
}
