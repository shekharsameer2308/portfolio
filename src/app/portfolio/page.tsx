'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site, about, projects as myProjects, experience, skills, education, certifications as myCertifications } from "@/data/content";

// --- DATA STRUCTURES ---
const techStacks = {
  simulation: ["Python", "PyTorch", "Taichi", "BoTorch", "SciPy"],
  ml_backend: ["XGBoost", "FastAPI", "Kafka", "PostgreSQL", "Docker"],
  web: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Grafana"]
};

const projects = [
  {
    id: "01",
    title: "Reactor Model (DeepONet)",
    description: "DeepONet surrogate of an e-methanol synthesis reactor, with Bayesian optimization in BoTorch.",
    tags: ["Python", "PyTorch", "BoTorch"],
    metrics: "20.66% higher CO₂ conversion"
  },
  {
    id: "02",
    title: "Analyzer",
    description: "Predicts coal GCV from proximate analysis with XGBoost and optimizes blends using linear programming.",
    tags: ["Next.js", "FastAPI", "XGBoost"],
    metrics: "Optimization + ML"
  },
  {
    id: "03",
    title: "NEXUS Analytics",
    description: "Marketplace event stream on Kafka, PostgreSQL, and Docker with Grafana dashboards.",
    tags: ["Kafka", "Docker", "Grafana"],
    metrics: "10-50 events/sec"
  },
  {
    id: "04",
    title: "Neural PDE Solver",
    description: "FNO surrogates vs classical solvers on Fisher-KPP and phase-field problems in browser.",
    tags: ["React", "PyTorch", "FastAPI"],
    metrics: "100,000× faster inference"
  }
];

const timelineEvents = [
  {
    year: "May — Jun 2026",
    role: "Summer Intern, Quality Management",
    org: "Central Coalfields Limited",
    description: "Ran proximate analysis on coal, cleaned lab assay logs, and checked consignments against specs."
  },
  {
    year: "Jun — Jul 2025",
    role: "Research Intern, R&D",
    org: "Tata Steel",
    description: "Worked on polymer modification experiments using SEM, FTIR, DSC, and TGA. Correlated morphology to thermal degradation."
  },
  {
    year: "2023 — Present",
    role: "Joint President",
    org: "IIChE, BIT Mesra Chapter",
    description: "Leading the chemical engineering student chapter, organizing events, and building community."
  }
];

const certifications = [
  { title: "Summer Analytics 2025", issuer: "IIT Guwahati", date: "2025", image: "/certs/summer-analytics.jpg" },
  { title: "Machine Learning A-Z [2026]", issuer: "Udemy", date: "Sept 2026", image: "/certs/machine-learning-az.png" },
  { title: "Certified Supply Chain Professional", issuer: "Udemy", date: "Aug 2026", image: "/certs/cscp.jpg" },
  { title: "Demand Planning & S&OP", issuer: "Udemy", date: "June 2026", image: "/certs/supply-chain-demand.jpg" },
  { title: "Product Management for AI", issuer: "Udemy", date: "June 2026", image: "/certs/product-management-ai.jpg" }
];

export default function DynamicPortfolio() {
  const [activeTab, setActiveTab] = useState<'simulation' | 'ml_backend' | 'web'>('simulation');
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#090a0f] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#090a0f]/80 border-b border-[#1e2230]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-tight font-semibold text-slate-200">
            sameer.shekhar<span className="text-cyan-400">.dev</span>
          </span>
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
            <a href="#stack" className="hover:text-cyan-400 transition-colors">01. stack</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">02. projects</a>
            <a href="#timeline" className="hover:text-cyan-400 transition-colors">03. timeline</a>
            <a href="#certs" className="hover:text-cyan-400 transition-colors">04. gallery</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-28">

        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-8"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
              <span>⚡ Chemical Engineering & ML Developer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building simulation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">intelligent process tools.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
              Merging deep chemical engineering principles with high-performance machine learning architectures.
            </p>
          </div>
          <div className="bg-[#12141c] border border-[#1e2230] rounded-2xl p-6 shadow-xl font-mono text-xs space-y-3">
            <div className="flex justify-between text-slate-400 border-b border-[#1e2230] pb-2">
              <span>STATUS</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
            <div className="flex justify-between text-slate-500"><span>Location:</span> <span className="text-slate-200">BIT Mesra, India</span></div>
            <div className="flex justify-between text-slate-500"><span>Availability:</span> <span className="text-cyan-400">Class of 2027</span></div>
          </div>
        </motion.section>

        {/* SECTION STACKS (Tech Stack Matrix) */}
        <section id="stack" className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-sm">01.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">Technology Stacks</h2>
            <div className="flex-1 h-px bg-[#1e2230]" />
          </div>

          <div className="flex gap-2 border-b border-[#1e2230] pb-4 font-mono text-xs overflow-x-auto">
            {(['simulation', 'ml_backend', 'web'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === cat 
                    ? 'bg-cyan-500/10 border border-cyan-500/40 text-cyan-400' 
                    : 'text-slate-400 hover:bg-[#12141c]'
                }`}
              >
                / {cat.replace('_', ' ')}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {techStacks[activeTab].map((tech) => (
              <div key={tech} className="bg-[#12141c] border border-[#1e2230] rounded-xl p-4 text-center font-mono text-xs text-slate-300">
                {tech}
              </div>
            ))}
          </motion.div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-sm">02.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">Featured Projects</h2>
            <div className="flex-1 h-px bg-[#1e2230]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-[#12141c] border border-[#1e2230] rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all">
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono text-slate-500">
                    <span>{proj.id}</span>
                    <span className="text-cyan-400">{proj.metrics}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{proj.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1e2230] flex flex-wrap gap-2">
                  {proj.tags.map(t => <span key={t} className="px-2 py-0.5 rounded bg-[#090a0f] text-[10px] font-mono text-slate-400 border border-[#1e2230]">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXTRACURRICULAR TIMELINE */}
        <section id="timeline" className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-sm">03.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">Experience Timeline</h2>
            <div className="flex-1 h-px bg-[#1e2230]" />
          </div>

          <div className="border-l border-[#1e2230] ml-3 space-y-8 pl-6">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative space-y-2">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#090a0f]" />
                <span className="text-xs font-mono text-cyan-400">{item.year}</span>
                <h3 className="text-base font-bold text-white">{item.role} <span className="text-slate-400 font-normal">@ {item.org}</span></h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS & RESUME IMAGE GALLERY */}
        <section id="certs" className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-sm">04.</span>
            <h2 className="text-xl font-bold tracking-tight text-white">Certifications & Credentials Gallery</h2>
            <div className="flex-1 h-px bg-[#1e2230]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveModalImg(cert.title)}
                className="bg-[#12141c] border border-[#1e2230] rounded-2xl p-4 cursor-pointer hover:border-cyan-500/50 transition-all group space-y-3"
              >
                <div className="h-40 rounded-xl bg-slate-900 border border-[#1e2230] overflow-hidden relative">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs group-hover:text-cyan-400 transition-colors">
                      [ {cert.title} ]
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                  <p className="text-xs text-slate-400">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-[#1e2230] py-8 text-center text-xs font-mono text-slate-500">
        Designed & Built by Sameer Shekhar • Next.js & Framer Motion
      </footer>
    </main>
  );
}
