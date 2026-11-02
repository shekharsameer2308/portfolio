"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Copy,
  Check,
  X,
  ExternalLink,
  ChevronRight,
  Star,
  GitFork,
  RefreshCw,
  Code2,
  Cpu,
  Layers,
  FlaskConical,
  LineChart,
  Briefcase,
  GraduationCap,
  Sparkles
} from "lucide-react";
import LampToggle from "@/components/LampToggle";
import KineticWave from "@/components/KineticWave";
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

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  group: "all" | "sciml" | "systems" | "ai" | "fintech";
  metric: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const portfolioProjects: ProjectItem[] = [
  {
    id: "01",
    title: "Neural PDE Solver",
    category: "Scientific ML",
    group: "sciml",
    metric: "100,000× faster inference",
    description:
      "Fourier Neural Operator (FNO) surrogates trained on Fisher-KPP reaction-diffusion equations, providing orders-of-magnitude faster solution generation than traditional numerical solvers.",
    stack: ["PyTorch", "React", "FastAPI", "Canvas API"],
    githubUrl: "https://github.com/shekharsameer2308/Prototype-FNO-1D-RxnDynamics-",
    liveUrl: "https://prototype-fno-1-d-rxn-dynamics.vercel.app"
  },
  {
    id: "02",
    title: "Catalytic Reactor Model",
    category: "Process Simulation",
    group: "sciml",
    metric: "+20.66% CO₂ conversion gain",
    description:
      "DeepONet neural operator surrogate modeling temperature and concentration profiles in a fixed-bed e-methanol reactor, coupled with BoTorch for multi-objective Bayesian optimization.",
    stack: ["Python", "PyTorch", "BoTorch", "SciML"],
    githubUrl: "https://github.com/shekharsameer2308/exi1"
  },
  {
    id: "03",
    title: "Industrial Coal Quality Analyzer",
    category: "Optimization & Analytics",
    group: "systems",
    metric: "Simplex LP blend optimizer",
    description:
      "Predicts Gross Calorific Value via XGBoost, isolates faulty lab assays with Isolation Forest, and optimizes commercial coal blending formulations using simplex linear programming.",
    stack: ["TypeScript", "Next.js", "FastAPI", "XGBoost", "SciPy"],
    githubUrl: "https://github.com/shekharsameer2308/Analyzer",
    liveUrl: "https://analyzer-ochre.vercel.app"
  },
  {
    id: "04",
    title: "TrackFin Intelligence Platform",
    category: "FinTech & Full-Stack",
    group: "fintech",
    metric: "Fast personal budgeting",
    description:
      "Clean, modern personal finance platform for logging transactions, automated category breakdown, spending analytics, and cashflow charts.",
    stack: ["JavaScript", "React", "Next.js", "Chart.js"],
    githubUrl: "https://github.com/shekharsameer2308/TrackFin",
    liveUrl: "https://track-fin-bay.vercel.app"
  },
  {
    id: "05",
    title: "Project Prism (Attribution Engine)",
    category: "Enterprise Data Systems",
    group: "systems",
    metric: "$40M spend allocation model",
    description:
      "Omnichannel marketing ROI and attribution engine prototype designed for enterprise retail, featuring Markov chain attribution and multi-touch data pipelines.",
    stack: ["Python", "Pandas", "Statsmodels", "SciPy", "SQL"],
    githubUrl: "https://github.com/shekharsameer2308/ProjectPrism"
  },
  {
    id: "06",
    title: "Multimodal Attribute Extraction",
    category: "Multimodal AI & NLP",
    group: "ai",
    metric: "93.3% extraction accuracy",
    description:
      "Automated extraction pipeline for packaging images combining Google Gemini vision models with custom Perceptron Named Entity Recognition (NER) and deterministic Pydantic validation.",
    stack: ["Python", "Google Gemini", "EasyOCR", "Pydantic", "NER"],
    githubUrl: "https://github.com/shekharsameer2308/ecom-attribute-extraction"
  },
  {
    id: "07",
    title: "NEXUS Streaming Analytics",
    category: "Distributed Systems",
    group: "systems",
    metric: "10–50 events/sec throughput",
    description:
      "High-throughput real-time streaming engine simulating marketplace events across 11 containerized Docker services, Apache Kafka event brokers, PostgreSQL, and Grafana telemetry.",
    stack: ["Kafka", "PostgreSQL", "Docker", "FastAPI", "Grafana"],
    githubUrl: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-",
    liveUrl: "https://real-time-data-analysis.vercel.app/"
  },
  {
    id: "08",
    title: "Scout Market Intelligence",
    category: "AI & Competitive Intel",
    group: "ai",
    metric: "Automated research digests",
    description:
      "AI-powered market intelligence and competitor research platform designed to monitor industry trends, track competitor developments, and synthesize structured research summaries.",
    stack: ["Python", "FastAPI", "LLM Orchestration", "BeautifulSoup"],
    githubUrl: "https://github.com/shekharsameer2308/Scout"
  },
  {
    id: "09",
    title: "GPU Fluid Dynamics (CFD)",
    category: "Fluid Simulation & SciML",
    group: "sciml",
    metric: "Taichi GPU-parallel",
    description:
      "Incompressible Navier-Stokes solver accelerated on GPU using Taichi Lang, integrated with convolutional neural networks for instantaneous pressure-field surrogate inference.",
    stack: ["Taichi Lang", "CUDA", "PyTorch", "NumPy"],
    githubUrl: "https://github.com/shekharsameer2308/Flow-simulation-"
  },
  {
    id: "10",
    title: "ParkWay (Pathway & Analytics)",
    category: "Data Analytics & Agents",
    group: "ai",
    metric: "Summer Analytics '25 Capstone",
    description:
      "Agentic AI system architecture and stream processing pipeline for provider data validation and directory management, built for the Consulting & Analytics Club capstone.",
    stack: ["Python", "Pathway", "Jupyter Notebook", "Scikit-Learn"],
    githubUrl: "https://github.com/shekharsameer2308/ParkWay"
  },
  {
    id: "11",
    title: "Provider Directory Validation Agent",
    category: "Healthcare AI & Automation",
    group: "ai",
    metric: "Agentic validation workflow",
    description:
      "Agentic AI system designed for healthcare payer directory management and provider credential validation, integrating automated verification and entity resolution.",
    stack: ["Python", "Jupyter Notebook", "LLMs", "Pandas"],
    githubUrl: "https://github.com/shekharsameer2308/eyprototype"
  },
  {
    id: "12",
    title: "Machine Learning Algorithms Suite",
    category: "Applied Machine Learning",
    group: "ai",
    metric: "Comprehensive ML benchmarks",
    description:
      "Implementations of core supervised and unsupervised learning algorithms from scratch and with Scikit-Learn, with cross-validation pipelines and evaluation metrics.",
    stack: ["Python", "Scikit-Learn", "Matplotlib", "NumPy"],
    githubUrl: "https://github.com/shekharsameer2308/ML-models-"
  },
  {
    id: "13",
    title: "Relational DBMS & Storage Engine",
    category: "Database Systems",
    group: "systems",
    metric: "ACID schema architecture",
    description:
      "Implementation of relational database schemas, query optimization, indexing structures, and transactional data integrity mechanisms.",
    stack: ["SQL", "HTML", "Database Architecture"],
    githubUrl: "https://github.com/shekharsameer2308/Database-Management-System-"
  },
  {
    id: "14",
    title: "Python Algorithmic Utilities",
    category: "Algorithms & Automation",
    group: "systems",
    metric: "Core DSA routines",
    description:
      "Curated repository of algorithmic scripts, mathematical utilities, numerical methods, and automated utility routines written in pure Python.",
    stack: ["Python", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/shekharsameer2308/python-scripts"
  }
];

const experienceData = [
  {
    role: "Summer Intern, Quality Management",
    organization: "Central Coalfields Limited (CCL)",
    period: "May 2026 - Jun 2026",
    location: "Ranchi, India",
    points: [
      "Conducted proximate analysis (moisture, ash, volatile matter, gross calorific value) under ASTM standards across coal seams.",
      "Audited commercial billing against dispatch specifications and quality penalty frameworks."
    ]
  },
  {
    role: "Research Intern, Materials Characterization",
    organization: "Tata Steel Limited",
    period: "Jun 2025 - Jul 2025",
    location: "Jamshedpur, India",
    points: [
      "Formulated polymer modification batches and characterized structural morphologies via SEM and FTIR spectroscopy.",
      "Analyzed thermal degradation behaviors using DSC and TGA curves for industrial steel coatings."
    ]
  },
  {
    role: "Joint President",
    organization: "IIChE Student Chapter, BIT Mesra",
    period: "2023 - Present",
    location: "Mesra, India",
    points: [
      "Leading department technical initiatives, student workshops, and research lectures in computational chemical engineering.",
      "Organized technical symposiums bridging process simulation with applied machine learning."
    ]
  },
  {
    role: "B.Tech in Chemical Engineering",
    organization: "Birla Institute of Technology, Mesra",
    period: "2023 - 2027",
    location: "Mesra, India",
    points: [
      "Focus areas: Transport Phenomena, Chemical Reaction Engineering, Process Dynamics, and Scientific Computing.",
      "Presidential leadership and active research in surrogate neural operator modeling."
    ]
  }
];

const skillCategories = [
  {
    category: "Scientific ML & Modeling",
    skills: ["Fourier Neural Operators (FNO)", "DeepONet", "Physics-Informed NNs (PINNs)", "PyTorch", "BoTorch Bayesian Opt"]
  },
  {
    category: "Process & Industrial Chemistry",
    skills: ["Transport Phenomena", "Reaction Kinetics", "ASTM Proximate Analysis", "Simplex LP Optimization", "Navier-Stokes CFD"]
  },
  {
    category: "Systems & Full-Stack",
    skills: ["Apache Kafka", "Docker", "PostgreSQL", "FastAPI", "Next.js", "TypeScript", "Python"]
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function ProfessionalPortfolio() {
  const [selectedGroup, setSelectedGroup] = useState<"all" | "sciml" | "systems" | "ai" | "fintech">("all");
  const [githubRepos, setGithubRepos] = useState<any[]>([]);
  const [isLoadingGithub, setIsLoadingGithub] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCert, setActiveCert] = useState<{ title: string; issuer: string; image: string } | null>(null);

  const email = "shekharsameer2308@gmail.com";

  const fetchGithub = async () => {
    setIsLoadingGithub(true);
    try {
      const res = await fetch("/api/github");
      if (res.ok) {
        const data = await res.json();
        if (data.repos && Array.isArray(data.repos)) {
          setGithubRepos(data.repos);
          return;
        }
      }
      const direct = await fetch("https://api.github.com/users/shekharsameer2308/repos?per_page=100&sort=pushed");
      if (direct.ok) {
        const d = await direct.json();
        if (Array.isArray(d)) {
          setGithubRepos(
            d.filter((r: any) => !r.fork && r.name !== "shekharsameer2308").map((r: any) => ({
              id: r.id,
              name: r.name,
              description: r.description,
              html_url: r.html_url,
              homepage: r.homepage,
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language,
              topics: r.topics || [],
              updated_at: r.updated_at,
              pushed_at: r.pushed_at,
            }))
          );
        }
      }
    } catch (e) {
      console.warn("GitHub fetch error:", e);
    } finally {
      setIsLoadingGithub(false);
    }
  };

  useEffect(() => {
    fetchGithub();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg text-fg font-sans selection:bg-primary selection:text-white transition-colors duration-200">
      
      {/* 1. FLOATING PILL NAVBAR */}
      <header className="sticky top-5 z-50 px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto rounded-full border border-border/80 bg-card/85 backdrop-blur-md px-5 py-2.5 shadow-sm flex items-center justify-between"
        >
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-xs text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              SS
            </div>
            <span className="font-semibold text-sm tracking-tight text-fg hidden sm:inline">
              Sameer Shekhar
            </span>
          </a>

          <nav className="flex items-center gap-1 sm:gap-2 text-xs font-medium text-fg-muted">
            <a href="#about" className="px-3 py-1.5 rounded-full hover:text-fg hover:bg-bg-subtle transition-colors">About</a>
            <a href="#projects" className="px-3 py-1.5 rounded-full hover:text-fg hover:bg-bg-subtle transition-colors">Projects</a>
            <a href="#experience" className="px-3 py-1.5 rounded-full hover:text-fg hover:bg-bg-subtle transition-colors">Experience</a>
            <a href="#skills" className="px-3 py-1.5 rounded-full hover:text-fg hover:bg-bg-subtle transition-colors">Skills</a>
            <a href="#contact" className="px-3 py-1.5 rounded-full hover:text-fg hover:bg-bg-subtle transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <LampToggle />
          </div>
        </motion.div>
      </header>

      {/* 2. MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-28">

        {/* HERO SECTION */}
        <section id="about" className="space-y-10">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Status Indicator */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-bg-subtle text-xs font-mono text-fg-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>BIT Mesra Class of 2027 • Chemical Engineering &amp; SciML</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-fg leading-[1.1]">
                Engineering software &amp; <br />
                <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  scientific machine learning.
                </span>
              </h1>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-fg-muted leading-relaxed max-w-2xl font-normal">
              Undergraduate at <strong>Birla Institute of Technology, Mesra</strong> and Joint President of the Indian Institute of Chemical Engineers (IIChE). I research neural operators (Fourier Neural Operators, DeepONet) for solving transport-reaction differential equations, and build industrial optimization tools for process plants.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-full bg-primary text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-primary-hover shadow-sm hover:shadow transition-all inline-flex items-center gap-2 group"
              >
                <span>View Selected Work</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-border hover:border-border-hover bg-card text-xs sm:text-sm font-semibold tracking-wide text-fg hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/shekharsameer2308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border/80 hover:border-border-hover bg-card flex items-center justify-center text-fg-muted hover:text-fg transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>

                <a
                  href="https://linkedin.com/in/sameershekhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border/80 hover:border-border-hover bg-card flex items-center justify-center text-fg-muted hover:text-fg transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Kinetic Wave Preview Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-44 sm:h-52 rounded-2xl border border-border/80 bg-card overflow-hidden relative shadow-sm"
          >
            <KineticWave />
            
            <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
              <div className="flex items-center justify-between text-xs font-mono text-fg-subtle">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Wave Dynamics &amp; Transport Physics
                </span>
                <span className="text-primary font-bold">Continuous Modeling</span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/60">
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-fg">100,000×</div>
                  <div className="text-[11px] font-mono text-fg-subtle">FNO Inference Speedup</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400">+20.66%</div>
                  <div className="text-[11px] font-mono text-fg-subtle">CO₂ Conversion Gain</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-fg">Simplex LP</div>
                  <div className="text-[11px] font-mono text-fg-subtle">Blend Quality Optimizer</div>
                </div>
              </div>
            </div>
          </motion.div>

        </section>

        {/* 3. PROJECTS SECTION (All 14 Projects from GitHub) */}
        <section id="projects" className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  Portfolio Catalog
                </span>
                <span className="text-xs font-mono text-fg-subtle">•</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  GitHub: @shekharsameer2308
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg">
                All Projects &amp; Software
              </h2>
              <p className="text-xs sm:text-sm text-fg-muted mt-0.5">
                Scientific neural operator surrogates, industrial optimization engines, agentic pipelines, and full-stack software.
              </p>
            </div>

            {/* Live Refresh Status */}
            <div className="flex items-center gap-2">
              <button
                onClick={fetchGithub}
                disabled={isLoadingGithub}
                className="px-3 py-1.5 rounded-full border border-border bg-card hover:border-border-hover text-xs font-mono text-fg-muted hover:text-fg transition-colors inline-flex items-center gap-1.5"
                title="Refresh from GitHub API"
              >
                <RefreshCw size={12} className={isLoadingGithub ? "animate-spin text-primary" : ""} />
                <span>{isLoadingGithub ? "Syncing..." : "Sync GitHub"}</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            {[
              { id: "all", label: `All Projects (${portfolioProjects.length})` },
              { id: "sciml", label: `Scientific ML & CFD (${portfolioProjects.filter(p => p.group === "sciml").length})` },
              { id: "systems", label: `Optimization & Systems (${portfolioProjects.filter(p => p.group === "systems").length})` },
              { id: "ai", label: `AI & Intelligence (${portfolioProjects.filter(p => p.group === "ai").length})` },
              { id: "fintech", label: `FinTech & Full-Stack (${portfolioProjects.filter(p => p.group === "fintech").length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedGroup(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedGroup === tab.id
                    ? "border-primary bg-primary text-white font-semibold shadow-sm"
                    : "border-border/80 bg-card hover:border-border-hover text-fg-muted hover:text-fg"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ALL PROJECTS GRID */}
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioProjects
              .filter((proj) => selectedGroup === "all" || proj.group === selectedGroup)
              .map((proj) => {
                const liveRepo = githubRepos.find(
                  (r) => r.html_url.toLowerCase() === proj.githubUrl.toLowerCase() ||
                         proj.githubUrl.toLowerCase().includes(r.name.toLowerCase())
                );
                return (
                  <motion.div
                    layout
                    key={proj.title}
                    variants={fadeInUp}
                    className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between space-y-5 hover:border-border-hover hover:shadow-sm transition-all group"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                          {proj.category}
                        </span>

                        <div className="flex items-center gap-2">
                          {liveRepo && liveRepo.stars > 0 && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-500 font-bold">
                              <Star size={11} className="fill-amber-500" />
                              {liveRepo.stars}
                            </span>
                          )}
                          <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                            {proj.metric}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-lg font-bold text-fg group-hover:text-primary transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-fg-muted leading-relaxed line-clamp-3">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3.5 pt-3.5 border-t border-border/60">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-bg-subtle text-fg-subtle border border-border/40">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1 text-xs font-medium">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg hover:text-primary inline-flex items-center gap-1.5 transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span>Code Repository</span>
                        </a>

                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1 font-semibold"
                          >
                            <span>Live App</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>

        </section>

        {/* 4. EXPERIENCE & LEADERSHIP */}
        <section id="experience" className="space-y-8">
          <div className="border-b border-border/80 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg">
              Experience &amp; Leadership
            </h2>
            <p className="text-xs sm:text-sm text-fg-muted mt-1">
              Industrial quality analysis, materials characterization, and student society leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-border/80 bg-card p-6 space-y-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-fg">{exp.role}</h3>
                    <div className="text-xs font-mono text-primary font-medium mt-0.5">
                      {exp.organization}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-fg-subtle whitespace-nowrap bg-bg-subtle px-2.5 py-1 rounded-full border border-border/40">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-fg-muted leading-relaxed list-disc list-inside">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Verified Certifications Lightbox */}
          <div className="pt-6 border-t border-border/60 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-fg">Verified Credentials</h3>
              <span className="text-xs font-mono text-fg-subtle">Click to inspect</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certs.map((c) => (
                <div
                  key={c.title}
                  onClick={() => setActiveCert({ title: c.title, issuer: c.issuer, image: c.image })}
                  className="rounded-xl border border-border/80 p-3.5 bg-card hover:border-border-hover cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-fg group-hover:text-primary transition-colors">
                      {c.title}
                    </div>
                    <div className="text-[11px] font-mono text-fg-subtle">
                      {c.issuer}
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-fg-subtle group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TECHNICAL SKILLS MATRIX */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-border/80 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg">
              Technical Toolkit
            </h2>
            <p className="text-xs sm:text-sm text-fg-muted mt-1">
              Core technologies, chemical engineering principles, and distributed architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl border border-border/80 bg-card p-6 space-y-4"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-fg">
                  {idx === 0 && <FlaskConical size={16} className="text-primary" />}
                  {idx === 1 && <Cpu size={16} className="text-primary" />}
                  {idx === 2 && <Layers size={16} className="text-primary" />}
                  <span>{cat.category}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-bg-subtle border border-border/60 text-fg-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="space-y-6">
          <div className="rounded-3xl border border-border/80 bg-gradient-to-b from-card to-bg-subtle p-8 sm:p-12 text-center space-y-6 shadow-sm">
            
            <div className="max-w-md mx-auto space-y-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-fg">
                Let's build something together.
              </h2>
              <p className="text-xs sm:text-sm text-fg-muted">
                Open for scientific machine learning research, software engineering roles, and process modeling collaborations.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-2.5 rounded-full bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-hover shadow-sm transition-all inline-flex items-center gap-2"
              >
                {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                <span>{copiedEmail ? "Email Copied" : "Copy Email"}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="px-6 py-2.5 rounded-full border border-border bg-card text-xs sm:text-sm font-semibold text-fg hover:text-primary hover:border-border-hover transition-colors inline-flex items-center gap-2"
              >
                <Mail size={15} />
                <span>Open Mail Client</span>
              </a>
            </div>

            <div className="text-xs font-mono text-fg-subtle pt-2">
              {email}
            </div>

          </div>
        </section>

      </main>

      {/* 7. FOOTER */}
      <footer className="border-t border-border/70 py-8 px-6 text-xs text-fg-subtle">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Sameer Shekhar. Department of Chemical Engineering, BIT Mesra.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/shekharsameer2308" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/sameershekhar" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} className="hover:text-fg transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Verified Certificates */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-2xl w-full bg-card border border-border rounded-2xl p-6 space-y-4 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center text-fg hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-fg">{activeCert.title}</h4>
                <p className="text-xs font-mono text-fg-subtle">{activeCert.issuer}</p>
              </div>

              <div className="rounded-xl border border-border overflow-hidden bg-black/10 flex items-center justify-center min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
