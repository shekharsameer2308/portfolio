"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code, Mail, Terminal, Target, Cpu, Activity, Globe } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import { MesmerizingBackground } from "@/components/MesmerizingBackground";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [time, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#030305] text-zinc-300 font-sans selection:bg-[#ff6b00] selection:text-white relative">
      
      {/* Mesmerizing Neural / Chemical Net Background */}
      <MesmerizingBackground />
      
      {/* Global Grain & Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#ff6b00]/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Navbar / Status */}
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 mix-blend-difference">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping" />
            <span className="text-xs font-mono text-white tracking-widest uppercase">SYS.{personalInfo.systemStatus.pipelines}</span>
         </div>
         <div className="text-xs font-mono text-white/50">{time} IST</div>
      </nav>

      {/* Huge Immersive Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="space-y-6 max-w-5xl">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
             className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#ff6b00] font-mono text-sm backdrop-blur-md mb-8"
           >
             <Terminal size={14} /> {personalInfo.title}
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl"
           >
             {personalInfo.name.toUpperCase()}
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
             className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed"
           >
             {personalInfo.tagline}
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
             className="pt-12 flex justify-center gap-6"
           >
             <a href={personalInfo.github} target="_blank" className="flex items-center gap-2 text-white/50 hover:text-[#ff6b00] transition-colors font-mono text-sm uppercase tracking-widest">
               <Code size={16} /> GitHub
             </a>
             <a href={personalInfo.linkedin} target="_blank" className="flex items-center gap-2 text-white/50 hover:text-[#ff6b00] transition-colors font-mono text-sm uppercase tracking-widest">
               <Globe size={16} /> LinkedIn
             </a>
           </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
           <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Descend</span>
           <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Core Systems / Projects Section */}
      <section className="relative z-20 bg-[#050507] py-32 px-4 md:px-12 rounded-t-[4rem] border-t border-white/5 shadow-[0_-20px_50px_rgba(255,107,0,0.05)]">
         <div className="max-w-7xl mx-auto">
            
            <div className="mb-20">
               <h2 className="text-sm font-mono text-[#ff6b00] mb-4 uppercase tracking-widest">01 / Deployed Systems</h2>
               <h3 className="text-4xl md:text-6xl font-medium text-white tracking-tight">Industrial Intelligence.</h3>
            </div>

            <div className="space-y-32">
               {projects.map((project, i) => (
                 <motion.div 
                   key={project.id}
                   initial={{ opacity: 0, y: 100 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                   className="group flex flex-col md:flex-row gap-12 items-center"
                 >
                   {/* Massive Number */}
                   <div className="hidden md:block w-32 text-8xl font-black text-white/5 group-hover:text-[#ff6b00]/20 transition-colors duration-500 font-mono">
                     {project.num}
                   </div>
                   
                   {/* Content */}
                   <div className="flex-1 space-y-6 relative">
                     <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-[#ff6b00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="flex items-center gap-4">
                        <h4 className="text-3xl md:text-5xl font-medium text-white">{project.title}</h4>
                        <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10 text-zinc-400 uppercase">
                          {project.status}
                        </span>
                     </div>
                     
                     <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                       {project.description}
                     </p>
                     
                     <div className="flex flex-wrap gap-2 pt-2">
                       {project.technologies.map(tech => (
                          <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-black border border-white/10 rounded-full text-zinc-500 group-hover:border-[#ff6b00]/30 transition-colors">
                            {tech}
                          </span>
                       ))}
                     </div>
                     
                     <div className="pt-6">
                        <a href={`/projects/${project.id}`} className="inline-flex items-center gap-3 text-white hover:text-[#ff6b00] transition-colors text-lg font-medium">
                          Explore System Architecture <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
      
      {/* Abstract Footer */}
      <footer className="relative z-20 bg-black py-24 border-t border-white/5 overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-8">
            <Activity size={48} className="text-[#ff6b00] mx-auto opacity-50" />
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight">Initiate Sequence.</h2>
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-wider rounded-full hover:bg-[#ff6b00] hover:text-white transition-all duration-300">
               <Mail size={20} /> INITIATE CONTACT
            </a>
            <p className="pt-12 text-zinc-600 font-mono text-xs uppercase tracking-widest">
               © {new Date().getFullYear()} {personalInfo.name}. All systems operational.
            </p>
         </div>
      </footer>
    </main>
  );
}
