"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Terminal, Database, Cpu, Activity } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";

const BentoBox = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-6 overflow-hidden relative group hover:border-zinc-700 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

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
    <main className="min-h-screen bg-black text-zinc-300 font-sans p-4 md:p-8 selection:bg-white selection:text-black">
      <div className="max-w-6xl mx-auto space-y-4">
        
        {/* Top Header / Status Row */}
        <header className="flex justify-between items-center py-4 mb-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">{personalInfo.systemStatus.pipelines}</span>
          </div>
          <div className="text-xs font-mono text-zinc-500">{time} IST</div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[200px]">
          
          {/* Hero Bento */}
          <BentoBox className="md:col-span-4 lg:col-span-8 row-span-2 flex flex-col justify-end p-8" delay={0.1}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Terminal size={120} strokeWidth={0.5} />
            </div>
            <div className="relative z-20">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-zinc-400 max-w-lg mb-6">
                {personalInfo.tagline}
              </p>
              <div className="flex gap-4">
                <a href={personalInfo.github} target="_blank" className="p-3 bg-zinc-800/50 rounded-full hover:bg-white hover:text-black transition-all">
                  <Github size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" className="p-3 bg-zinc-800/50 rounded-full hover:bg-white hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="p-3 bg-zinc-800/50 rounded-full hover:bg-white hover:text-black transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </BentoBox>

          {/* Location/Bio Bento */}
          <BentoBox className="md:col-span-4 lg:col-span-4 row-span-1 p-6" delay={0.2}>
            <h3 className="text-sm font-mono text-zinc-500 mb-2 uppercase">Location</h3>
            <p className="text-white text-lg">{personalInfo.location}</p>
            <div className="mt-4 pt-4 border-t border-zinc-800">
               <h3 className="text-sm font-mono text-zinc-500 mb-2 uppercase">Focus</h3>
               <p className="text-zinc-400 text-sm">{personalInfo.title}</p>
            </div>
          </BentoBox>

          {/* Education Bento */}
          <BentoBox className="md:col-span-2 lg:col-span-4 row-span-1" delay={0.3}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-sm font-mono text-zinc-500 mb-2 uppercase">Education</h3>
                <p className="text-white">{personalInfo.education.degree}</p>
                <p className="text-zinc-400 text-sm">{personalInfo.education.institution}</p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-xs text-zinc-500">{personalInfo.education.period}</span>
                <span className="font-mono text-white text-sm bg-zinc-800 px-2 py-1 rounded">CGPA {personalInfo.education.cgpa}</span>
              </div>
            </div>
          </BentoBox>

          {/* Projects Heading Bento */}
          <BentoBox className="md:col-span-4 lg:col-span-4 row-span-1 bg-white text-black group flex flex-col justify-between cursor-pointer" delay={0.4}>
             <div>
                <h3 className="text-sm font-mono text-black/50 mb-2 uppercase">Selected Work</h3>
                <h2 className="text-3xl font-medium">Projects & Systems</h2>
             </div>
             <div className="self-end">
                <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </div>
          </BentoBox>

          {/* Project Cards in Grid */}
          {featuredProjects.map((project, i) => (
            <BentoBox key={project.id} className="md:col-span-2 lg:col-span-4 row-span-1 flex flex-col justify-between group cursor-pointer hover:bg-zinc-800/80" delay={0.5 + (i * 0.1)}>
               <div>
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-mono text-zinc-500">{project.num}</span>
                     <div className="flex gap-2">
                        {project.technologies.slice(0,2).map(tech => (
                           <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-zinc-800 rounded-full">{tech}</span>
                        ))}
                     </div>
                  </div>
                  <h3 className="text-xl text-white font-medium mb-1">{project.title}</h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">{project.subtitle}</p>
               </div>
               <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-zinc-400" />
               </div>
            </BentoBox>
          ))}
          
        </div>
        
        {/* Footer */}
        <footer className="py-12 text-center text-zinc-600 text-sm">
           <p>© {new Date().getFullYear()} {personalInfo.name}. Built with minimal precision.</p>
        </footer>
      </div>
    </main>
  );
}
