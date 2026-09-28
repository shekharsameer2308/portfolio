"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Mail, Terminal, Sparkles, Layers, Activity } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";

// Dynamic Glowing Bento Box
const GlowingBentoBox = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`relative group rounded-3xl border border-white/10 bg-zinc-950/50 p-6 overflow-hidden backdrop-blur-xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,107,0,0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#050507] text-zinc-300 font-sans p-4 md:p-8 selection:bg-[#ff6b00] selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#ff6b00]/20 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#ffa800]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto space-y-6 relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center py-4 mb-4">
          <motion.div 
             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping" />
            <div className="w-2 h-2 rounded-full bg-[#ff6b00] absolute" />
            <span className="text-xs font-mono text-zinc-300 tracking-wider uppercase">SYSTEMS {personalInfo.systemStatus.pipelines}</span>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
             className="text-xs font-mono text-zinc-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
          >
            {time} IST
          </motion.div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[220px]">
          
          {/* Main Hero Bento */}
          <GlowingBentoBox className="md:col-span-4 lg:col-span-8 row-span-2 flex flex-col justify-between" delay={0.1}>
            <div className="flex justify-between items-start">
               <div className="p-3 bg-[#ff6b00]/10 text-[#ff6b00] rounded-2xl border border-[#ff6b00]/20">
                  <Terminal size={24} />
               </div>
               <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-white backdrop-blur-md">
                  AVAILABLE FOR WORK
               </div>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500">
                {personalInfo.name}.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed mb-8">
                {personalInfo.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={personalInfo.github} target="_blank" className="px-6 py-3 text-sm font-bold tracking-wider text-black bg-white rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  GITHUB
                </a>
                <a href={personalInfo.linkedin} target="_blank" className="px-6 py-3 text-sm font-bold tracking-wider text-white bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10">
                  LINKEDIN
                </a>
              </div>
            </div>
          </GlowingBentoBox>

          {/* Education / Focus Bento */}
          <GlowingBentoBox className="md:col-span-2 lg:col-span-4 row-span-1" delay={0.2}>
            <div className="h-full flex flex-col justify-between">
               <div className="flex items-center gap-3 mb-4 text-[#ffa800]">
                  <Sparkles size={20} />
                  <h3 className="text-sm font-bold tracking-widest uppercase">Expertise</h3>
               </div>
               <div>
                  <h4 className="text-2xl font-medium text-white mb-2">{personalInfo.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                     {personalInfo.bio}
                  </p>
               </div>
            </div>
          </GlowingBentoBox>

          {/* Location Bento */}
          <GlowingBentoBox className="md:col-span-2 lg:col-span-4 row-span-1" delay={0.3}>
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
             <div className="h-full flex flex-col justify-between relative z-10">
               <h3 className="text-sm font-mono text-zinc-500 uppercase">Base</h3>
               <div>
                  <div className="text-4xl font-light text-white mb-1">{personalInfo.location.split(',')[0]}</div>
                  <div className="text-zinc-400 font-mono">{personalInfo.location.split(',').slice(1).join(', ')}</div>
               </div>
               <div className="text-xs font-mono px-3 py-1.5 bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 rounded-full inline-block w-max">
                  {personalInfo.education.institution}
               </div>
             </div>
          </GlowingBentoBox>

          {/* Projects CTA Bento */}
          <GlowingBentoBox className="md:col-span-4 lg:col-span-4 row-span-1 bg-gradient-to-br from-[#ff6b00] to-[#ffa800] text-black group cursor-pointer border-none" delay={0.4}>
             <div className="h-full flex flex-col justify-between">
                <div>
                   <h3 className="text-sm font-bold tracking-widest mb-2 uppercase text-black/60">Selected Work</h3>
                   <h2 className="text-4xl font-bold tracking-tight">Deployments</h2>
                </div>
                <div className="self-end bg-black text-white p-4 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                   <ArrowUpRight size={32} />
                </div>
             </div>
          </GlowingBentoBox>

          {/* Project Cards */}
          {featuredProjects.map((project, i) => (
            <GlowingBentoBox key={project.id} className="md:col-span-2 lg:col-span-4 row-span-1 flex flex-col justify-between group cursor-pointer" delay={0.5 + (i * 0.1)}>
               <a href={`/projects/${project.id}`} className="absolute inset-0 z-20"></a>
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-3xl font-light text-white/20 group-hover:text-[#ff6b00]/50 transition-colors">{project.num}</span>
                     <Layers size={20} className="text-zinc-500 group-hover:text-[#ff6b00] transition-colors" />
                  </div>
                  <h3 className="text-2xl text-white font-medium mb-2">{project.title}</h3>
                  <div className="flex gap-2 flex-wrap">
                     {project.technologies.slice(0,3).map(tech => (
                        <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-300">{tech}</span>
                     ))}
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-20 group-hover:bottom-0 group-hover:right-0 transition-all duration-500 rotate-12 z-0">
                  <Activity size={120} strokeWidth={0.5} className="text-[#ff6b00]" />
               </div>
            </GlowingBentoBox>
          ))}
          
        </div>
        
      </div>
    </main>
  );
}
