import React from "react";
import { AntiGravityBackground } from "@/components/AntiGravityBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050507] text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-50 relative overflow-hidden">
      <AntiGravityBackground />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <BentoGrid />
        <ExperienceTimeline />
      </div>
      
      <Footer />
    </main>
  );
}
