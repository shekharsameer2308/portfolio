"use client";
import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, Network } from 'lucide-react';
import { projects } from '@/data/projects';

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative group rounded-3xl border border-white/[0.04] bg-[#0c0c0e]/40 p-8 overflow-hidden backdrop-blur-md hover:border-white/[0.12] transition-colors duration-500 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export const BentoGrid = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  
  return (
    <section id="work" className="relative z-20 max-w-7xl mx-auto px-4 py-32">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-widest">Selected Works</h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Engineering Architecture.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
        {featuredProjects.map((project, i) => {
          // Asymmetric spanning logic
          const spanClass = i === 0 
            ? "md:col-span-12 row-span-2" 
            : i === 1 
              ? "md:col-span-7 row-span-1" 
              : "md:col-span-5 row-span-1";
              
          return (
            <BentoCard key={project.id} className={`${spanClass} flex flex-col justify-between`} delay={i * 0.1}>
              <a href={`/projects/${project.id}`} className="absolute inset-0 z-20" />
              
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-full text-zinc-500 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
                  <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <div>
                <h4 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">{project.title}</h4>
                <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl">
                  {project.subtitle}
                </p>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
};
