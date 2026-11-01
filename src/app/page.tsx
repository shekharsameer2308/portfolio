"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Copy,
  Check,
  X,
  ExternalLink,
  Menu,
  Cpu,
  Layers,
  Database,
  FlaskConical,
  GraduationCap,
  Award,
  Briefcase,
  Terminal,
  Code2,
  LineChart,
  ShieldCheck,
  ChevronRight,
  Zap,
  CheckCircle2
} from "lucide-react";
import LampToggle from "@/components/LampToggle";
import { certs } from "@/data/certs";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
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

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
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

const rotatingRoles = [
  "Chemical Engineer.",
  "SciML Researcher.",
  "Systems Developer.",
  "Process Innovator."
];

const featuresList = [
  {
    icon: FlaskConical,
    title: "Scientific Machine Learning",
    description: "Neural operators (FNO, DeepONet) for solving PDE systems and reaction-transport dynamics orders of magnitude faster than numerical solvers."
  },
  {
    icon: Cpu,
    title: "Process Modeling & CFD",
    description: "Fixed-bed catalytic reactors, GPU-accelerated Navier-Stokes fluid simulations, and continuous thermodynamic boundary modeling."
  },
  {
    icon: LineChart,
    title: "Industrial Quality Analytics",
    description: "XGBoost regression, multivariate isolation-forest anomaly detection, and empirical ASTM proximate laboratory benchmarking."
  },
  {
    icon: Layers,
    title: "Constrained Optimization",
    description: "Simplex linear programming algorithms formulated to minimize raw material costs while strictly obeying non-linear quality limits."
  },
  {
    icon: Database,
    title: "Distributed Data Streaming",
    description: "Near real-time Apache Kafka event ingestion, PostgreSQL star schema architecture, Docker microservices, and Grafana telemetry."
  },
  {
    icon: Code2,
    title: "Multimodal AI & NER",
    description: "Computer vision and NLP attribute extraction combining Google Gemini with custom Perceptron NER and deterministic Pydantic validation."
  }
];

const portfolioProjects = [
  {
    id: "01",
    title: "Neural PDE Solver",
    category: "SCIENTIFIC ML",
    subtitle: "In-Browser Fourier Neural Operator Surrogates",
    metric: "100,000× faster inference",
    description: "Evaluates Fourier Neural Operator (FNO) surrogates against traditional numerical solvers on Fisher-KPP reaction dynamics with real-time canvas heatmaps.",
    stack: ["PyTorch", "React", "FastAPI", "Canvas API"],
    githubUrl: "https://github.com/shekharsameer2308/Prototype-FNO-1D-RxnDynamics-",
    liveUrl: "https://fnoproject.vercel.app"
  },
  {
    id: "02",
    title: "Reactor Model (DeepONet)",
    category: "PROCESS SIMULATION",
    subtitle: "Catalytic E-Methanol Synthesis Surrogate",
    metric: "+20.66% CO₂ conversion gain",
    description: "Surrogate neural operators of a catalytic fixed-bed methanol synthesis reactor paired with BoTorch for multi-objective Bayesian optimization.",
    stack: ["Python", "PyTorch", "BoTorch", "SciML"],
    githubUrl: "https://github.com/shekharsameer2308/exi1"
  },
  {
    id: "03",
    title: "Industrial Analyzer",
    category: "ANALYTICS & OPTIMIZATION",
    subtitle: "Coal Quality Regression & Blend Optimizer",
    metric: "Simplex LP optimizer",
    description: "Predicts Gross Calorific Value via XGBoost, isolates faulty lab assays with Isolation Forest, and optimizes coal blending ratios with linear programming.",
    stack: ["Next.js", "FastAPI", "XGBoost", "SciPy Optimize"],
    githubUrl: "https://github.com/shekharsameer2308/analyzer",
    liveUrl: "https://analyzer-self.vercel.app"
  },
  {
    id: "04",
    title: "NEXUS Analytics",
    category: "DISTRIBUTED SYSTEMS",
    subtitle: "Real-Time Marketplace Streaming Engine",
    metric: "10–50 events/sec throughput",
    description: "Simulates high-throughput marketplace telemetry across 11 containerized Docker microservices, Kafka event streams, and Grafana dashboards.",
    stack: ["Kafka", "PostgreSQL", "Docker", "FastAPI", "Grafana"],
    githubUrl: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-",
    liveUrl: "https://real-time-data-analysis.vercel.app/"
  },
  {
    id: "05",
    title: "Attribute Extraction",
    category: "MULTIMODAL AI",
    subtitle: "Packaging Vision & NER Pipeline",
    metric: "93.3% extraction accuracy",
    description: "Extracts structured attributes from product photos using Google Gemini, EasyOCR, and Averaged Perceptron NER with deterministic Pydantic validation.",
    stack: ["Python", "Google Gemini", "EasyOCR", "Pydantic", "NER"],
    githubUrl: "https://github.com/shekharsameer2308/ecom-attribute-extraction"
  },
  {
    id: "06",
    title: "Flow-simulation (CFD)",
    category: "FLUID DYNAMICS",
    subtitle: "GPU-Accelerated Navier-Stokes Solver",
    metric: "Taichi GPU-parallel",
    description: "GPU-accelerated incompressible fluid dynamics simulation with CNN surrogate integration for instantaneous pressure-field prediction.",
    stack: ["Taichi Lang", "CUDA", "PyTorch", "NumPy"],
    githubUrl: "https://github.com/shekharsameer2308/Flow-simulation-"
  }
];

const educationItems = [
  {
    degree: "B.Tech in Chemical Engineering",
    institution: "Birla Institute of Technology, Mesra",
    period: "2023 - 2027",
    score: "Class of 2027",
    details: "Core training in transport phenomena, process dynamics, reaction engineering, and mathematical modeling of industrial chemical systems."
  },
  {
    degree: "Joint President",
    institution: "IIChE (Indian Institute of Chemical Engineers), BIT Mesra",
    period: "2023 - Present",
    score: "Student Leadership",
    details: "Leading the student chapter, coordinating research talks, chemical engineering hackathons, and technical workshops on scientific modeling."
  }
];

const experienceItems = [
  {
    role: "Summer Intern, Quality Management",
    company: "Central Coalfields Limited (CCL)",
    period: "May - Jun 2026",
    score: "Ranchi, India",
    details: "Conducted ASTM proximate analysis (moisture, ash, volatile matter, gross calorific value) across heterogeneous coal seams. Audited dispatches against billing penalty specs."
  },
  {
    role: "Research Intern, Materials Characterization",
    company: "Tata Steel Limited",
    period: "Jun - Jul 2025",
    score: "Jamshedpur, India",
    details: "Conducted polymer modification experiments utilizing Scanning Electron Microscopy (SEM), FTIR, DSC, and TGA. Correlated morphology with thermal degradation curves."
  }
];

const technicalSkills = [
  { name: "Scientific ML & Neural Operators (FNO, DeepONet)", percentage: 95 },
  { name: "Python, PyTorch & BoTorch Bayesian Opt", percentage: 92 },
  { name: "Industrial Process Thermodynamics & CFD", percentage: 90 },
  { name: "Apache Kafka, PostgreSQL & Docker", percentage: 88 },
  { name: "Linear Programming & Blend Optimization", percentage: 86 },
  { name: "Laboratory Characterization (ASTM, SEM, FTIR, DSC, TGA)", percentage: 88 }
];

export default function InBioPortfolio() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeResumeTab, setActiveResumeTab] = useState<"experience" | "skills" | "certifications">("experience");
  const [activeCert, setActiveCert] = useState<{ title: string; issuer: string; image: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSimulationTab, setActiveSimulationTab] = useState<"fno" | "deeponet" | "analyzer">("deeponet");

  const email = "shekharsameer2308@gmail.com";

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg text-fg font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-card shadow-inbio-btn flex items-center justify-center font-bold text-lg text-fg group-hover:text-primary transition-colors">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-fg group-hover:text-primary transition-colors uppercase">
                SAMEER<span className="text-primary">.</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-fg-subtle">
                BIT Mesra '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-fg-muted">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#resume" className="hover:text-primary transition-colors">Resume</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4">
            <LampToggle />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio text-xs uppercase font-bold tracking-wider text-primary hover:-translate-y-0.5 active:shadow-inbio-active transition-all"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-card shadow-inbio-btn flex items-center justify-center text-fg hover:text-primary transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-bg/95 backdrop-blur-md px-6 py-6 space-y-4">
            <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-fg-muted">
              {["home", "features", "portfolio", "resume", "skills", "contact"].map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-primary transition-colors"
                >
                  {sec}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-border flex justify-between items-center">
              <span className="text-xs text-fg-subtle">{email}</span>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-lg bg-card shadow-inbio-btn text-xs text-primary font-bold"
              >
                {copiedEmail ? "Copied" : "Copy Email"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-32">

        {/* 2. HERO SECTION (Face replaced with High-Tech Simulation Terminal!) */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-4">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-primary font-bold">
              WELCOME TO MY WORLD
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-fg leading-[1.15]">
              Hi, I'm <span className="text-primary">Sameer Shekhar</span>
              <br />
              <span className="text-2xl sm:text-4xl font-bold text-fg-muted">
                a <span className="text-fg border-b-2 border-primary pb-1">{rotatingRoles[roleIndex]}</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-fg-muted leading-relaxed font-normal pt-2 max-w-2xl">
              I am a final-year Chemical Engineering student at <strong>BIT Mesra</strong> and Joint President of IIChE. Rather than treating machine learning as abstract syntax, I build models constrained by domain physics: <strong>neural operators</strong> for continuous PDE dynamics, <strong>Bayesian optimization</strong> for chemical reactors, and <strong>industrial ML pipelines</strong> for raw materials testing.
            </p>

            {/* Two Bottom Sub-sections: FIND WITH ME + BEST SKILL ON */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-border/80">
              
              {/* Find with Me */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-mono tracking-widest font-semibold text-fg-subtle block">
                  FIND WITH ME
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/shekharsameer2308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio flex items-center justify-center text-fg hover:text-primary hover:-translate-y-1 transition-all duration-300"
                    title="GitHub"
                  >
                    <GithubIcon size={20} />
                  </a>

                  <a
                    href="https://linkedin.com/in/sameershekhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio flex items-center justify-center text-fg hover:text-primary hover:-translate-y-1 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={20} />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-14 h-14 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio flex items-center justify-center text-fg hover:text-primary hover:-translate-y-1 transition-all duration-300"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={20} className="text-emerald-500" /> : <Mail size={20} />}
                  </button>
                </div>
              </div>

              {/* Best Skill On */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-mono tracking-widest font-semibold text-fg-subtle block">
                  BEST SKILL ON
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-card shadow-inbio-btn flex flex-col items-center justify-center text-[11px] font-mono font-bold text-fg hover:text-primary transition-colors">
                    <FlaskConical size={18} className="text-primary mb-0.5" />
                    SciML
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-card shadow-inbio-btn flex flex-col items-center justify-center text-[11px] font-mono font-bold text-fg hover:text-primary transition-colors">
                    <Cpu size={18} className="text-primary mb-0.5" />
                    PyTorch
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-card shadow-inbio-btn flex flex-col items-center justify-center text-[11px] font-mono font-bold text-fg hover:text-primary transition-colors">
                    <Database size={18} className="text-primary mb-0.5" />
                    Kafka
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Hero Content: REPLACING THE FACE WITH SCIENTIFIC SIMULATION SHOWCASE! */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-card shadow-inbio p-6 sm:p-8 space-y-6">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-xs font-mono text-fg-subtle ml-2">sciml_engine.py</span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  ● ACTIVE SURROGATE
                </span>
              </div>

              {/* Simulation Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-bg-subtle text-[11px] font-mono">
                <button
                  onClick={() => setActiveSimulationTab("deeponet")}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                    activeSimulationTab === "deeponet"
                      ? "bg-card shadow-inbio-btn text-primary"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  DeepONet
                </button>
                <button
                  onClick={() => setActiveSimulationTab("fno")}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                    activeSimulationTab === "fno"
                      ? "bg-card shadow-inbio-btn text-primary"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  Neural PDE
                </button>
                <button
                  onClick={() => setActiveSimulationTab("analyzer")}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                    activeSimulationTab === "analyzer"
                      ? "bg-card shadow-inbio-btn text-primary"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  Coal LP
                </button>
              </div>

              {/* Simulation Details Box */}
              <div className="p-4 rounded-2xl bg-bg-subtle/80 border border-border space-y-3 font-mono text-xs">
                {activeSimulationTab === "deeponet" && (
                  <>
                    <div className="text-primary font-bold"># Catalytic E-Methanol Reactor Model</div>
                    <div className="text-fg-muted text-[11px] leading-relaxed">
                      &gt; Surrogate neural operator resolving 2D heat/mass transfer &amp; reaction kinetics in &lt;12ms.
                    </div>
                    <div className="pt-2 flex justify-between items-center text-[11px] border-t border-border">
                      <span className="text-fg-subtle">BoTorch Gain:</span>
                      <span className="text-emerald-500 font-bold">+20.66% CO₂ Conversion</span>
                    </div>
                  </>
                )}

                {activeSimulationTab === "fno" && (
                  <>
                    <div className="text-primary font-bold"># Fourier Neural Operator Surrogates</div>
                    <div className="text-fg-muted text-[11px] leading-relaxed">
                      &gt; Fisher-KPP reaction-diffusion continuous operator evaluated in-browser canvas.
                    </div>
                    <div className="pt-2 flex justify-between items-center text-[11px] border-t border-border">
                      <span className="text-fg-subtle">Speedup vs Classical:</span>
                      <span className="text-emerald-500 font-bold">100,000× Acceleration</span>
                    </div>
                  </>
                )}

                {activeSimulationTab === "analyzer" && (
                  <>
                    <div className="text-primary font-bold"># Proximate Analysis &amp; Blend Optimizer</div>
                    <div className="text-fg-muted text-[11px] leading-relaxed">
                      &gt; XGBoost non-linear GCV prediction with constrained Simplex linear programming solver.
                    </div>
                    <div className="pt-2 flex justify-between items-center text-[11px] border-t border-border">
                      <span className="text-fg-subtle">Cost Curve:</span>
                      <span className="text-emerald-500 font-bold">Minimal Penalty Formulations</span>
                    </div>
                  </>
                )}
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-card shadow-inbio-btn flex flex-col">
                  <span className="text-xl font-black text-fg">100,000×</span>
                  <span className="text-[10px] font-mono text-fg-subtle uppercase">Inference Speedup</span>
                </div>
                <div className="p-3.5 rounded-xl bg-card shadow-inbio-btn flex flex-col">
                  <span className="text-xl font-black text-primary">+20.66%</span>
                  <span className="text-[10px] font-mono text-fg-subtle uppercase">Reactor CO₂ Gain</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-between text-xs font-semibold">
                <span className="text-fg">Birla Institute of Technology, Mesra</span>
                <span className="text-primary font-mono text-[11px]">Chemical Eng</span>
              </div>

            </div>
          </div>

        </section>

        {/* 3. FEATURES / WHAT I DO */}
        <section id="features" className="space-y-12 border-t border-border pt-20">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-[0.2em] font-bold text-primary">
              FEATURES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-fg">
              What I Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feat, i) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-8 rounded-3xl bg-card shadow-inbio hover:shadow-inbio-hover hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-card shadow-inbio-btn flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-fg group-hover:text-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. PORTFOLIO / MY PORTFOLIO */}
        <section id="portfolio" className="space-y-12 border-t border-border pt-20">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-[0.2em] font-bold text-primary">
              VISIT MY WORK AND KEEP YOUR FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-fg">
              My Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((proj) => (
              <div
                key={proj.title}
                className="p-7 rounded-3xl bg-card shadow-inbio hover:shadow-inbio-hover hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between space-y-6"
              >
                {/* Visual Header / Banner Box */}
                <div className="h-44 rounded-2xl bg-bg-subtle p-5 border border-border flex flex-col justify-between relative overflow-hidden group-hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-fg-subtle">
                      {proj.id}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-500 block">
                      {proj.metric}
                    </span>
                    <h4 className="text-lg font-bold text-fg group-hover:text-primary transition-colors mt-1">
                      {proj.title}
                    </h4>
                  </div>
                </div>

                {/* Description & Subtitle */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold text-fg-subtle">
                    {proj.subtitle}
                  </span>
                  <p className="text-sm text-fg-muted leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Action Links */}
                <div className="pt-4 border-t border-border space-y-4">
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-fg-subtle">
                    {proj.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-bg-subtle border border-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-fg hover:text-primary transition-colors"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline underline-offset-4"
                      >
                        Live Demo
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. RESUME SECTION */}
        <section id="resume" className="space-y-12 border-t border-border pt-20">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-[0.2em] font-bold text-primary">
              4+ YEARS OF EDUCATION &amp; RESEARCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-fg">
              My Resume
            </h2>
          </div>

          {/* Resume Tab Switcher */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveResumeTab("experience")}
              className={`px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeResumeTab === "experience"
                  ? "bg-card shadow-inbio text-primary -translate-y-1"
                  : "bg-card shadow-inbio-btn text-fg-muted hover:text-fg"
              }`}
            >
              Education &amp; Experience
            </button>

            <button
              onClick={() => setActiveResumeTab("skills")}
              className={`px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeResumeTab === "skills"
                  ? "bg-card shadow-inbio text-primary -translate-y-1"
                  : "bg-card shadow-inbio-btn text-fg-muted hover:text-fg"
              }`}
            >
              Professional Skills
            </button>

            <button
              onClick={() => setActiveResumeTab("certifications")}
              className={`px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeResumeTab === "certifications"
                  ? "bg-card shadow-inbio text-primary -translate-y-1"
                  : "bg-card shadow-inbio-btn text-fg-muted hover:text-fg"
              }`}
            >
              Verified Certifications
            </button>
          </div>

          {/* TAB 1: Education & Experience Dual Timeline */}
          {activeResumeTab === "experience" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6">
              
              {/* Left Column: Education */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">2023 - 2027</span>
                  <h3 className="text-2xl font-bold tracking-tight text-fg mt-1">Education Quality</h3>
                </div>

                <div className="space-y-6">
                  {educationItems.map((edu) => (
                    <div
                      key={edu.degree}
                      className="p-7 rounded-3xl bg-card shadow-inbio hover:shadow-inbio-hover hover:-translate-y-1 transition-all duration-300 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-bold text-fg">{edu.degree}</h4>
                          <span className="text-xs text-fg-muted font-medium">{edu.institution}</span>
                        </div>
                        <span className="self-start sm:self-auto px-3 py-1 rounded-lg bg-card shadow-inbio-btn text-xs font-mono font-bold text-primary">
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-sm text-fg-muted leading-relaxed pt-2 border-t border-border/80">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Experience */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">2025 - 2026</span>
                  <h3 className="text-2xl font-bold tracking-tight text-fg mt-1">Job &amp; Research Experience</h3>
                </div>

                <div className="space-y-6">
                  {experienceItems.map((exp) => (
                    <div
                      key={exp.role}
                      className="p-7 rounded-3xl bg-card shadow-inbio hover:shadow-inbio-hover hover:-translate-y-1 transition-all duration-300 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-bold text-fg">{exp.role}</h4>
                          <span className="text-xs text-fg-muted font-medium">{exp.company}</span>
                        </div>
                        <span className="self-start sm:self-auto px-3 py-1 rounded-lg bg-card shadow-inbio-btn text-xs font-mono font-bold text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-fg-muted leading-relaxed pt-2 border-t border-border/80">
                        {exp.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Professional Skills */}
          {activeResumeTab === "skills" && (
            <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {technicalSkills.map((sk) => (
                <div key={sk.name} className="p-6 rounded-3xl bg-card shadow-inbio space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-fg">
                    <span>{sk.name}</span>
                    <span className="font-mono text-primary">{sk.percentage}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-bg-subtle overflow-hidden p-0.5 border border-border">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-rose-400"
                      style={{ width: `${sk.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Verified Certifications */}
          {activeResumeTab === "certifications" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
              {certs.map((c) => (
                <div
                  key={c.title}
                  onClick={() => setActiveCert(c)}
                  className="p-5 rounded-3xl bg-card shadow-inbio hover:shadow-inbio-hover hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-4"
                >
                  <div className="h-40 rounded-2xl bg-bg-subtle overflow-hidden border border-border relative">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-xl bg-card text-xs font-bold text-primary shadow-inbio">
                        Preview Certificate
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-fg group-hover:text-primary transition-colors">
                      {c.title}
                    </h4>
                    <p className="text-xs text-fg-subtle mt-1">{c.issuer}</p>
                  </div>

                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-primary font-bold">
                    <span>View Full Size</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="space-y-12 border-t border-border pt-20">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-[0.2em] font-bold text-primary">
              CONTACT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-fg">
              Contact With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-card shadow-inbio space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-card shadow-inbio-btn flex items-center justify-center font-black text-xl text-primary">
                SS
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-fg">Sameer Shekhar</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                  Chemical Engineer &times; SciML Developer
                </p>
              </div>

              <p className="text-sm text-fg-muted leading-relaxed">
                I am available for select research, industrial process engineering, and scientific machine learning roles. Feel free to connect directly.
              </p>

              <div className="space-y-2 text-xs font-mono text-fg-muted pt-2 border-t border-border">
                <div>
                  <span className="text-fg-subtle">Location:</span> Ranchi / Jamshedpur, Jharkhand, India
                </div>
                <div>
                  <span className="text-fg-subtle">Institution:</span> Birla Institute of Technology, Mesra
                </div>
                <div>
                  <span className="text-fg-subtle">Email:</span> {email}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <span className="text-xs uppercase font-mono tracking-widest text-fg-subtle font-semibold block">
                  FIND WITH ME
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/shekharsameer2308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio flex items-center justify-center text-fg hover:text-primary hover:-translate-y-1 transition-all"
                    title="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>

                  <a
                    href="https://linkedin.com/in/sameershekhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio flex items-center justify-center text-fg hover:text-primary hover:-translate-y-1 transition-all"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-12 h-12 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio flex items-center justify-center text-fg hover:text-primary hover:-translate-y-1 transition-all"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Contact Card / Message Action */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-card shadow-inbio space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-fg">Direct Inquiries</h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  Have a challenging process modeling, scientific machine learning, or distributed streaming project? Send me an email or copy my address to your clipboard.
                </p>

                <div className="p-6 rounded-2xl bg-bg-subtle border border-border space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-fg-subtle block">
                    Direct Email Address
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-sm sm:text-base font-mono font-bold text-fg select-all">
                      {email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="px-5 py-2.5 rounded-xl bg-card shadow-inbio-btn hover:shadow-inbio text-xs font-bold text-primary hover:-translate-y-0.5 active:shadow-inbio-active transition-all flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      <span>{copiedEmail ? "Address Copied!" : "Copy Email"}</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-xs text-fg-muted leading-relaxed">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Scientific Machine Learning (Neural Operators, BoTorch)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Industrial Coal Quality Assessment &amp; Blending LP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>High-throughput Kafka &amp; Docker Event Streaming</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <a
                  href={`mailto:${email}?subject=Project%20Inquiry%20via%20Portfolio`}
                  className="w-full py-4 rounded-2xl bg-card shadow-inbio-btn hover:shadow-inbio flex items-center justify-center gap-2 text-sm uppercase font-bold tracking-wider text-primary hover:-translate-y-1 active:shadow-inbio-active transition-all"
                >
                  <Mail size={18} />
                  <span>Send Direct Email Now</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 7. FOOTER */}
      <footer className="border-t border-border py-12 px-6 text-center space-y-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-fg-subtle">
          <div className="flex items-center gap-2">
            <span className="font-bold text-fg">SAMEER SHEKHAR</span> &middot; &copy; {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/shekharsameer2308" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/sameershekhar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#home" className="hover:text-primary transition-colors">Back to Top &uarr;</a>
          </div>
        </div>
      </footer>

      {/* CERTIFICATION PREVIEW MODAL */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-card border border-border rounded-3xl p-6 max-w-2xl w-full shadow-inbio relative space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-base font-bold text-fg">{activeCert.title}</h4>
                <p className="text-xs font-mono text-fg-muted mt-0.5">{activeCert.issuer}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="w-9 h-9 rounded-xl bg-card shadow-inbio-btn flex items-center justify-center text-fg hover:text-primary transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden bg-bg-subtle border border-border max-h-[65vh] flex items-center justify-center">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-auto max-h-[62vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
