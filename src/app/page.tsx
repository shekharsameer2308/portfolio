"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  FileText,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Database,
  FlaskConical,
  GraduationCap,
  Award,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import LampToggle from "@/components/LampToggle";
import { site, about, projects as contentProjects, experience, education } from "@/data/content";
import { certs } from "@/data/certs";

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type CategoryFilter = "all" | "sim" | "ml" | "sys";

const categoryNames: Record<CategoryFilter, string> = {
  all: "All Work",
  sim: "Process & SciML",
  ml: "ML & Analytics",
  sys: "Data & Systems"
};

const categoryBadgeStyles: Record<string, string> = {
  sim: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  ml: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  sys: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20"
};

const impactMetrics = [
  {
    value: "100,000×",
    label: "Neural PDE Acceleration",
    detail: "FNO surrogates vs classical PDE solvers on Fisher-KPP dynamics"
  },
  {
    value: "+20.66%",
    label: "CO₂ Conversion Gain",
    detail: "DeepONet surrogate & Bayesian optimization in BoTorch"
  },
  {
    value: "93.3%",
    label: "Attribute Extraction Accuracy",
    detail: "Gemini API + Perceptron NER with deterministic Pydantic validation"
  },
  {
    value: "10–50/s",
    label: "Event Streaming Throughput",
    detail: "Near real-time Kafka & PostgreSQL star schema on Docker"
  }
];

const skillCategories = [
  {
    title: "Scientific ML & Simulation",
    icon: FlaskConical,
    skills: ["Neural Operators (FNO, DeepONet)", "BoTorch & Bayesian Opt", "Computational Fluid Dynamics (CFD)", "Navier-Stokes Solvers", "SciPy Optimize", "Taichi Lang"]
  },
  {
    title: "Machine Learning & AI",
    icon: Cpu,
    skills: ["XGBoost", "PyTorch", "Scikit-Learn", "Google Gemini API", "Named Entity Recognition (NER)", "Isolation Forest Anomaly Detection"]
  },
  {
    title: "Data Systems & Cloud",
    icon: Database,
    skills: ["Apache Kafka", "PostgreSQL", "Docker", "FastAPI", "Grafana", "WebSockets"]
  },
  {
    title: "Languages & Web",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Next.js", "React", "Tailwind CSS"]
  }
];

export default function FluidPortfolio() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{ title: string; issuer: string; image: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const filteredProjects = activeFilter === "all"
    ? contentProjects
    : contentProjects.filter((p) => p.category === activeFilter);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-desk text-ink font-sans relative selection:bg-cyan-500/20 selection:text-ink">
      
      {/* Background Dot Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-30 -z-10"
        style={{
          backgroundImage: "radial-gradient(var(--dot) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Floating Modern Header / Nav */}
      <header className="sticky top-0 z-40 px-4 sm:px-6 py-4">
        <div 
          className={`max-w-5xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
            scrolled 
              ? "bg-card/85 backdrop-blur-md border-line/80 shadow-md dark:shadow-black/20" 
              : "bg-card/60 backdrop-blur-sm border-line/50"
          }`}
        >
          {/* Logo / Name & Status */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-bar border border-line flex items-center justify-center font-bold text-sm tracking-tight text-ink group-hover:border-soft transition-colors">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-ink">
                {site.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available &middot; Class of 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-soft">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full hover:text-ink hover:bg-bar/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools: Theme Toggle & Contact */}
          <div className="flex items-center gap-2">
            <LampToggle />
            
            <a
              href={`mailto:${site.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-ink text-desk hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-line/60 bg-card hover:bg-bar transition-colors text-ink"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 max-w-5xl mx-auto bg-card border border-line/80 rounded-2xl p-4 shadow-xl flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-medium text-sm text-soft hover:text-ink hover:bg-bar transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-line/60 flex items-center justify-between">
                <span className="text-xs text-soft">shekharsameer2308@gmail.com</span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-ink text-desk"
                >
                  Email
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-24 space-y-28">

        {/* 1. HERO SECTION */}
        <section className="pt-8 sm:pt-14 space-y-8">
          
          <div className="space-y-4 max-w-3xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-card/80 text-xs font-medium text-soft shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Chemical Engineering &times; Machine Learning &times; Scientific Computing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
              Building physics-informed neural surrogates & intelligent process tools.
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-lg sm:text-xl text-soft leading-relaxed font-normal pt-2">
              Final-year Chemical Engineering student at <strong className="text-ink font-semibold">BIT Mesra</strong> and Joint President of IIChE. I connect process thermodynamics and materials characterization with modern machine learning—building neural operators, Bayesian optimization loops, and real-time streaming architectures.
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-desk text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
            >
              Explore Projects
              <ChevronRight size={16} />
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-line text-sm font-medium text-ink hover:bg-bar transition-colors"
            >
              <GithubIcon size={16} />
              GitHub
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-line text-sm font-medium text-ink hover:bg-bar transition-colors"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-line text-sm font-medium text-ink hover:bg-bar transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Impact Metrics Grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {impactMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-card border border-line/80 shadow-sm flex flex-col justify-between hover:border-soft/60 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                  {item.value}
                </div>
                <div className="mt-2 space-y-1">
                  <div className="text-xs font-semibold text-ink">{item.label}</div>
                  <div className="text-[11px] text-soft leading-snug">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. ABOUT & PHILOSOPHY */}
        <section id="about" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">01 / Profile</span>
            <div className="h-px bg-line flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Narrative Card */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-card border border-line shadow-sm space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                Engineering at the intersection of physical constraints & machine learning
              </h2>
              <p className="text-soft leading-relaxed text-sm sm:text-base">
                Rather than treating software as abstract syntax, I approach systems through the lens of industrial problem-solving—where physical constraints, noisy sensor streams, and domain thermodynamics meet rigorous computational architecture.
              </p>
              <p className="text-soft leading-relaxed text-sm sm:text-base">
                My hands-on engineering spans industrial coal proximate assays at <strong>Central Coalfields Limited</strong>, polymer characterization (SEM, FTIR, DSC, TGA) at <strong>Tata Steel R&D</strong>, and neural PDE acceleration via DeepONet and Fourier Neural Operators.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-bar text-xs font-medium text-ink">BIT Mesra &bull; B.Tech Chemical Eng</span>
                <span className="px-3 py-1 rounded-full bg-bar text-xs font-medium text-ink">IIChE Joint President</span>
                <span className="px-3 py-1 rounded-full bg-bar text-xs font-medium text-ink">Ranchi & Jamshedpur, India</span>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="p-6 rounded-3xl bg-card border border-line shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-tight uppercase text-soft font-mono">
                  Current Focus
                </h3>
                <ul className="space-y-3 text-xs text-soft">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1 flex-shrink-0" />
                    <span>Neural Operator surrogates for reaction & transport dynamics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1 flex-shrink-0" />
                    <span>Constrained optimization & industrial blending algorithms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                    <span>High-throughput streaming analytics with Kafka & PostgreSQL.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-bar/70 border border-line/60">
                <div className="text-[11px] font-semibold text-ink">Academic Standing</div>
                <div className="text-xs text-soft mt-0.5">B.Tech Chemical Engineering (Class of 2027)</div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. FEATURED PROJECTS */}
        <section id="projects" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">02 / Work</span>
              <h2 className="text-2xl font-bold tracking-tight text-ink">Featured Projects</h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-card border border-line self-start sm:self-auto overflow-x-auto max-w-full">
              {(["all", "sim", "ml", "sys"] as CategoryFilter[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    activeFilter === cat
                      ? "bg-ink text-desk shadow-sm"
                      : "text-soft hover:text-ink hover:bg-bar/50"
                  }`}
                >
                  {categoryNames[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-card border border-line shadow-sm hover:shadow-md hover:border-soft/60 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category badge & Metric */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${categoryBadgeStyles[project.category]}`}>
                      {categoryNames[project.category as CategoryFilter] || project.category}
                    </span>

                    {project.metric && (
                      <span className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {project.metric}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-ink group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-soft leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Stack & Links */}
                <div className="pt-6 mt-4 border-t border-line/60 space-y-3">
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-soft">
                    {project.stack.split(",").map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-bar border border-line/50">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {link.label === "GitHub" ? <GithubIcon size={13} /> : <ExternalLink size={13} />}
                        <span>{link.label}</span>
                        <ArrowUpRight size={12} className="opacity-70" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. WORK EXPERIENCE & RESEARCH */}
        <section id="experience" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">03 / Background</span>
            <div className="h-px bg-line flex-1" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Industrial & Research Experience</h2>

            <div className="relative border-l-2 border-line/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8 pt-2">
              
              {/* CCL Experience */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-card border-2 border-cyan-500 shadow-sm group-hover:scale-125 transition-transform" />
                <div className="p-6 rounded-2xl bg-card border border-line shadow-sm space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-bold text-ink">
                      Central Coalfields Limited (CCL)
                    </h3>
                    <span className="text-xs font-mono text-soft">
                      May – Jun 2026 &middot; Ranchi, India
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    Summer Intern &mdash; Quality Management & Proximate Analytics
                  </div>
                  <p className="text-sm text-soft leading-relaxed pt-1">
                    Ran proximate analysis (moisture, ash, volatile matter, gross calorific value) on coal samples across heterogeneous seams. Cleaned lab assay logs into structured analytical datasets and assisted management in auditing consignments against contractual specifications and billing penalties.
                  </p>
                </div>
              </div>

              {/* Tata Steel Experience */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-card border-2 border-violet-500 shadow-sm group-hover:scale-125 transition-transform" />
                <div className="p-6 rounded-2xl bg-card border border-line shadow-sm space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-bold text-ink">
                      Tata Steel Limited
                    </h3>
                    <span className="text-xs font-mono text-soft">
                      Jun – Jul 2025 &middot; Jamshedpur, India
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                    Research Intern &mdash; R&D Materials Characterization
                  </div>
                  <p className="text-sm text-soft leading-relaxed pt-1">
                    Collaborated with senior research scientists on polymer modification experimental protocols. Operated Scanning Electron Microscopy (SEM), Fourier Transform Infrared Spectroscopy (FTIR), Differential Scanning Calorimetry (DSC), and Thermogravimetric Analysis (TGA) to correlate microstructure changes with thermal degradation curves.
                  </p>
                </div>
              </div>

              {/* IIChE Leadership */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-card border-2 border-emerald-500 shadow-sm group-hover:scale-125 transition-transform" />
                <div className="p-6 rounded-2xl bg-card border border-line shadow-sm space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-bold text-ink">
                      Indian Institute of Chemical Engineers (IIChE)
                    </h3>
                    <span className="text-xs font-mono text-soft">
                      2023 – Present &middot; BIT Mesra
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Joint President &mdash; Student Chapter
                  </div>
                  <p className="text-sm text-soft leading-relaxed pt-1">
                    Leading the chemical engineering student body, organizing technical workshops on process simulation and computational tools, hosting industry guest lectures, and fostering research collaborations.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. CORE SKILLS MATRIX */}
        <section id="skills" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">04 / Capabilities</span>
            <div className="h-px bg-line flex-1" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Technical Stack & Competencies</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div key={cat.title} className="p-5 rounded-2xl bg-card border border-line shadow-sm flex flex-col space-y-3">
                    <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                      <IconComponent size={16} className="text-cyan-500" />
                      <span>{cat.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 rounded-md bg-bar text-xs text-soft border border-line/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. EDUCATION & CERTIFICATIONS GALLERY */}
        <section id="certifications" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">05 / Credentials</span>
            <div className="h-px bg-line flex-1" />
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-ink">Education & Certifications</h2>
              <span className="text-xs text-soft font-mono">Click any certificate to expand</span>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-card border border-line shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-bar border border-line text-ink">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Birla Institute of Technology, Mesra</h3>
                  <div className="text-sm font-medium text-soft">Bachelor of Technology &bull; Chemical Engineering</div>
                  <div className="text-xs text-soft mt-1">Class of 2023 &ndash; 2027 &middot; Ranchi, Jharkhand, India</div>
                </div>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-semibold">
                Class of 2027
              </span>
            </div>

            {/* Certifications Interactive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {certs.map((c) => (
                <div
                  key={c.title}
                  onClick={() => setSelectedCert(c)}
                  className="group cursor-pointer rounded-2xl bg-card border border-line overflow-hidden shadow-sm hover:border-ink hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative h-28 bg-bar overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-2 py-1 rounded bg-card text-[10px] font-bold text-ink shadow">Preview</span>
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-ink leading-tight line-clamp-2">
                        {c.title}
                      </h4>
                      <p className="text-[11px] text-soft mt-1 font-medium">{c.issuer}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-line/60 flex items-center justify-between text-[10px] text-cyan-600 dark:text-cyan-400 font-semibold">
                      <span>View</span>
                      <ArrowRight size={10} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. MINIMAL CONTACT & CONNECT */}
        <section id="contact" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">06 / Connect</span>
            <div className="h-px bg-line flex-1" />
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-card border border-line shadow-sm space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Opportunities
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Let's build intelligent engineering solutions together.
            </h2>

            <p className="text-sm sm:text-base text-soft max-w-xl mx-auto leading-relaxed">
              Whether you are working on process optimization, scientific machine learning, or data streaming infrastructure, I would love to connect.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-desk text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
              >
                <Mail size={16} />
                Send an Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-bar border border-line text-sm font-medium text-ink hover:bg-line/40 transition-colors"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Copied!" : site.email}</span>
              </button>
            </div>

            <div className="pt-6 flex items-center justify-center gap-6 text-sm font-medium text-soft">
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors flex items-center gap-1.5">
                <GithubIcon size={16} /> GitHub
              </a>
              <span>&bull;</span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors flex items-center gap-1.5">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-line/60 py-8 px-4 text-center text-xs text-soft">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Sameer Shekhar &middot; Built with Next.js & Tailwind CSS
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-ink transition-colors">Back to Top &uarr;</a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Certifications */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-line rounded-3xl p-6 max-w-2xl w-full shadow-2xl relative space-y-4"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-bar hover:bg-line/60 text-ink transition-colors"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>

              <div>
                <h3 className="text-lg font-bold text-ink">{selectedCert.title}</h3>
                <p className="text-xs text-soft mt-0.5">{selectedCert.issuer}</p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-bar border border-line max-h-[70vh] flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-full bg-ink text-desk text-xs font-semibold"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
