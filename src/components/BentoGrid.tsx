"use client";
import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const BentoCard = ({ children, className = "", delay = 0, href = "#" }: { children: React.ReactNode, className?: string, delay?: number, href?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay % 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative group block rounded-3xl border border-white/[0.04] bg-[#0c0c0e]/40 p-8 overflow-hidden backdrop-blur-md hover:border-white/[0.12] transition-colors duration-500 ${className}`}
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
    </motion.a>
  );
};

export const BentoGrid = () => {
  return (
    <section id="projects" className="relative z-20 max-w-7xl mx-auto px-4 py-32">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-widest">System Architecture</h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Project Deployments.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
        {portfolioData.projects.map((project, i) => {
          // Dynamic asymmetric spanning logic for N items
          let spanClass = "md:col-span-4 row-span-1"; // default small block
          if (i % 5 === 0) spanClass = "md:col-span-12 row-span-1 md:row-span-2"; // Featured huge block
          else if (i % 5 === 1 || i % 5 === 2) spanClass = "md:col-span-6 row-span-1"; // Half blocks
          else if (i % 5 === 3) spanClass = "md:col-span-8 row-span-1"; // Wide block
          else spanClass = "md:col-span-4 row-span-1"; // Narrow block
              
          return (
            <BentoCard key={project.id} className={`${spanClass} flex flex-col justify-between`} delay={i * 0.1} href={project.liveUrl || project.githubUrl}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2 flex-wrap max-w-[80%]">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-full text-zinc-500 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-colors shrink-0">
                  <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <div>
                <h4 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">{project.title}</h4>
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-3xl mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex gap-4 flex-wrap mt-auto">
                   {project.metrics.map(metric => (
                      <span key={metric} className="text-xs font-mono text-cyan-400/80 uppercase tracking-widest">+ {metric}</span>
                   ))}
                </div>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
};
