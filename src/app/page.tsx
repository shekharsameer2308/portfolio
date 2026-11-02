"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Copy,
  Check,
  X,
  Menu,
  FlaskConical,
  GraduationCap,
  Award,
  Briefcase,
  Sliders,
  Zap,
  LineChart,
  Layers,
  Database,
  ExternalLink,
  ChevronRight,
  Star,
  GitFork,
  RefreshCw
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

const portfolioProjects = [
  {
    id: "01",
    title: "Neural PDE Solver",
    category: "SCIENTIFIC ML",
    subtitle: "In-Browser Fourier Neural Operator Surrogates",
    metric: "100,000× faster inference",
    description:
      "Evaluates Fourier Neural Operator (FNO) surrogates against numerical solvers on Fisher-KPP reaction-diffusion dynamics with in-browser parameter sweeps.",
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
    description:
      "Surrogate neural operators of a catalytic fixed-bed methanol synthesis reactor paired with BoTorch for multi-objective Bayesian optimization under thermal constraints.",
    stack: ["Python", "PyTorch", "BoTorch", "SciML"],
    githubUrl: "https://github.com/shekharsameer2308/exi1"
  },
  {
    id: "03",
    title: "Industrial Quality & Blend Analyzer",
    category: "OPTIMIZATION & ANALYTICS",
    subtitle: "Coal Quality Regression & Blend Optimizer",
    metric: "Simplex LP optimizer",
    description:
      "Predicts Gross Calorific Value via XGBoost, isolates faulty lab assays with Isolation Forest, and optimizes coal blending ratios with linear programming.",
    stack: ["Next.js", "FastAPI", "XGBoost", "SciPy Optimize"],
    githubUrl: "https://github.com/shekharsameer2308/analyzer",
    liveUrl: "https://analyzer-self.vercel.app"
  },
  {
    id: "04",
    title: "NEXUS Distributed Analytics",
    category: "DISTRIBUTED SYSTEMS",
    subtitle: "Real-Time Marketplace Streaming Engine",
    metric: "10–50 events/sec throughput",
    description:
      "High-throughput telemetry simulation across 11 containerized Docker microservices, Kafka event streams, PostgreSQL star schemas, and Grafana telemetry.",
    stack: ["Kafka", "PostgreSQL", "Docker", "FastAPI", "Grafana"],
    githubUrl: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-",
    liveUrl: "https://real-time-data-analysis.vercel.app/"
  },
  {
    id: "05",
    title: "Attribute Extraction Pipeline",
    category: "MULTIMODAL AI",
    subtitle: "Packaging Vision & NER Extraction",
    metric: "93.3% extraction accuracy",
    description:
      "Extracts structured attributes from product photos using Google Gemini, EasyOCR, and Averaged Perceptron NER with deterministic Pydantic schema validation.",
    stack: ["Python", "Google Gemini", "EasyOCR", "Pydantic", "NER"],
    githubUrl: "https://github.com/shekharsameer2308/ecom-attribute-extraction"
  },
  {
    id: "06",
    title: "GPU Fluid Simulation (CFD)",
    category: "FLUID DYNAMICS",
    subtitle: "Navier-Stokes Solver & CNN Surrogate",
    metric: "Taichi GPU-parallel",
    description:
      "GPU-accelerated incompressible Navier-Stokes fluid simulation with CNN surrogate integration for instantaneous velocity and pressure-field inference.",
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
    details:
      "Core training in transport phenomena, process dynamics, reaction engineering, and mathematical modeling of industrial chemical systems."
  },
  {
    degree: "Joint President",
    institution: "IIChE (Indian Institute of Chemical Engineers), BIT Mesra",
    period: "2023 - Present",
    score: "Student Leadership",
    details:
      "Directing student chapter initiatives, coordinating technical hackathons, research talks, and workshops on scientific computing in process engineering."
  }
];

const experienceItems = [
  {
    role: "Summer Intern, Quality Management",
    company: "Central Coalfields Limited (CCL)",
    period: "May - Jun 2026",
    score: "Ranchi, India",
    details:
      "Conducted ASTM proximate analysis (moisture, ash, volatile matter, gross calorific value) across heterogeneous coal seams. Audited commercial dispatches against contract penalty specifications."
  },
  {
    role: "Research Intern, Materials Characterization",
    company: "Tata Steel Limited",
    period: "Jun - Jul 2025",
    score: "Jamshedpur, India",
    details:
      "Conducted polymer modification experiments utilizing Scanning Electron Microscopy (SEM), FTIR spectroscopy, DSC, and TGA to correlate structural morphology with thermal degradation curves."
  }
];

export default function WixEditorialPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<{ title: string; issuer: string; image: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  // Showcase Interactive Simulator State
  const [activeSimTab, setActiveSimTab] = useState<"fno" | "analyzer" | "deeponet">("fno");
  const [diffusionParam, setDiffusionParam] = useState(45);

  // GitHub Live API State
  const [githubRepos, setGithubRepos] = useState<any[]>([]);
  const [isLoadingGithub, setIsLoadingGithub] = useState(false);
  const [repoFilter, setRepoFilter] = useState<"featured" | "all">("featured");

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
      // Direct client fallback
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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] font-sans selection:bg-[var(--primary)] selection:text-white transition-colors duration-200">
      
      {/* 1. TOP HEADER BAND (Matching the grey header band in Wix screenshot) */}
      <header className="w-full bg-[var(--bg-band)] border-b border-border/70 transition-colors">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Identity / Title */}
          <div>
            <a href="#" className="group inline-block">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-fg group-hover:text-[var(--primary)] transition-colors">
                Sameer Shekhar
              </h1>
            </a>
            <p className="text-xs sm:text-sm text-fg-muted font-medium mt-1 tracking-wide">
              Chemical Engineer &amp; SciML Researcher, BIT Mesra
            </p>
          </div>

          {/* Nav Links & Controls */}
          <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 border-t md:border-t-0 border-border/60 pt-4 md:pt-0">
            <nav className="flex items-center gap-6 text-sm font-medium text-fg-muted">
              <a href="#home" className="hover:text-[var(--primary)] transition-colors">Home</a>
              <a href="#projects" className="hover:text-[var(--primary)] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[var(--primary)] transition-colors">Resume</a>
              <a href="#research" className="hover:text-[var(--primary)] transition-colors">Research</a>
              <a href="#contact" className="hover:text-[var(--primary)] transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <LampToggle />
            </div>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION (Clean White Center Canvas matching Wix Layout) */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-28">

        {/* Hero Grid: Square visual box on left + Editorial text with red overlines on right */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Square Showcase Box (Replacing the person's face photo!) */}
          <div className="lg:col-span-5">
            <div className="aspect-square w-full rounded-sm border border-border bg-[var(--card)] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
              
              {/* Box Top Header */}
              <div className="flex items-center justify-between border-b border-border/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-fg uppercase">
                    SciML Laboratory
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--primary)] font-bold">
                  LIVE MODEL
                </span>
              </div>

              {/* Box Tab Buttons */}
              <div className="grid grid-cols-3 gap-1.5 py-2 text-[11px] font-mono font-semibold">
                <button
                  onClick={() => setActiveSimTab("fno")}
                  className={`py-1.5 px-2 text-center transition-colors border ${
                    activeSimTab === "fno"
                      ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary-muted)]"
                      : "border-border text-fg-muted hover:text-fg"
                  }`}
                >
                  Neural PDE
                </button>
                <button
                  onClick={() => setActiveSimTab("analyzer")}
                  className={`py-1.5 px-2 text-center transition-colors border ${
                    activeSimTab === "analyzer"
                      ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary-muted)]"
                      : "border-border text-fg-muted hover:text-fg"
                  }`}
                >
                  Coal LP
                </button>
                <button
                  onClick={() => setActiveSimTab("deeponet")}
                  className={`py-1.5 px-2 text-center transition-colors border ${
                    activeSimTab === "deeponet"
                      ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary-muted)]"
                      : "border-border text-fg-muted hover:text-fg"
                  }`}
                >
                  DeepONet
                </button>
              </div>

              {/* Dynamic Center Simulation Content */}
              {activeSimTab === "fno" && (
                <div className="space-y-3 py-2">
                  <div className="h-28 rounded-sm bg-gradient-to-br from-[var(--bg-subtle)] to-[var(--card)] p-3 border border-border flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between items-center text-[10px] font-mono text-fg-subtle">
                      <span>Fisher-KPP Reaction Wavefront</span>
                      <span className="text-[var(--primary)] font-bold">100,000× Speedup</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="h-6 w-full rounded-sm bg-gradient-to-r from-[var(--primary)] via-amber-400 to-emerald-400 opacity-80 flex items-center justify-around px-2 text-[9px] font-mono font-bold text-white shadow-inner">
                        <span>t=0.2s</span>
                        <span>Phase Field</span>
                        <span>Error &lt; 1e-4</span>
                      </div>
                      <div className="h-1.5 w-full bg-[var(--bg-band)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--primary)] transition-all duration-300"
                          style={{ width: `${diffusionParam}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[9px] font-mono text-fg-subtle">
                      <span>1024 spatial mesh</span>
                      <span>0.8ms evaluation</span>
                    </div>
                  </div>

                  {/* Interactive Slider */}
                  <div className="border border-border/80 p-2.5 bg-[var(--bg-subtle)] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-fg-muted flex items-center gap-1.5">
                      <Sliders size={12} className="text-[var(--primary)]" />
                      Diffusion (D):
                    </span>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={diffusionParam}
                      onChange={(e) => setDiffusionParam(Number(e.target.value))}
                      className="accent-[var(--primary)] cursor-pointer w-24 sm:w-32"
                    />
                    <span className="text-[var(--primary)] font-bold">{(diffusionParam / 100).toFixed(2)}</span>
                  </div>
                </div>
              )}

              {activeSimTab === "analyzer" && (
                <div className="space-y-3 py-2 font-mono text-xs">
                  <div className="h-28 rounded-sm bg-[var(--bg-subtle)] p-3 border border-border flex flex-col justify-between">
                    <div className="flex justify-between text-[10px] text-fg-subtle">
                      <span>Simplex LP Blend Formulation</span>
                      <span className="text-emerald-600 font-bold">Optimal</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="border border-border/80 p-1.5 bg-[var(--card)]">
                        <span className="text-fg-subtle block text-[9px]">Ash Constraint:</span>
                        <span className="font-bold text-fg">&lt; 34% (Met)</span>
                      </div>
                      <div className="border border-border/80 p-1.5 bg-[var(--card)]">
                        <span className="text-fg-subtle block text-[9px]">GCV Min:</span>
                        <span className="font-bold text-fg">&gt; 4200 kcal</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-[var(--primary)] font-bold">
                      Ratio: 62% Seam A + 38% Seam B
                    </div>
                  </div>

                  <div className="border border-border/80 p-2.5 bg-[var(--bg-subtle)] text-[10px] text-fg-muted flex justify-between">
                    <span>ASTM proximate laboratory assays</span>
                    <span className="text-emerald-600 font-bold">Validated</span>
                  </div>
                </div>
              )}

              {activeSimTab === "deeponet" && (
                <div className="space-y-3 py-2 font-mono text-xs">
                  <div className="h-28 rounded-sm bg-[var(--bg-subtle)] p-3 border border-border flex flex-col justify-between">
                    <div className="flex justify-between text-[10px] text-fg-subtle">
                      <span>Catalytic E-Methanol Reactor</span>
                      <span className="text-[var(--primary)] font-bold">+20.66% Gain</span>
                    </div>
                    <div className="space-y-1 text-[10px] text-fg-muted">
                      <div>• Branch Net: Space velocity &amp; inlet gas ratios</div>
                      <div>• Trunk Net: 2D radial/axial coords</div>
                      <div className="text-emerald-600 font-bold">• BoTorch Bayesian sweep converged</div>
                    </div>
                    <div className="text-[9px] text-fg-subtle">
                      Inference: 11.4ms vs 420s CFD
                    </div>
                  </div>

                  <div className="border border-border/80 p-2.5 bg-[var(--bg-subtle)] text-[10px] text-fg-muted flex justify-between">
                    <span>Fixed-bed kinetic surrogate</span>
                    <span className="text-[var(--primary)] font-bold">Active</span>
                  </div>
                </div>
              )}

              {/* Box Bottom Meta */}
              <div className="border-t border-border/80 pt-2 flex items-center justify-between text-[11px] font-mono text-fg-subtle">
                <span>BIT Mesra Chemical Engineering</span>
                <a
                  href="https://fnoproject.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                >
                  fnoproject.vercel.app
                  <ArrowUpRight size={12} />
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Content (Exactly matching Wix layout: red line + title + paragraph + red outline button) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Section 1: Recent Roles */}
            <div className="space-y-3">
              <div className="w-10 h-1 bg-[var(--primary)]" />
              <h2 className="text-2xl font-bold tracking-tight text-fg">
                Recent Roles &amp; Engineering Focus
              </h2>
              <p className="text-base text-fg-muted leading-relaxed font-normal pt-1">
                Chemical Engineering undergraduate at <strong>Birla Institute of Technology, Mesra</strong> and Joint President of the Indian Institute of Chemical Engineers (IIChE) student chapter. My technical focus bridges scientific machine learning (neural operators for PDE boundary problems and catalytic reactors), process simulation, and industrial quality analytics.
              </p>
            </div>

            {/* Section 2: Upcoming Projects & Impact */}
            <div className="space-y-3">
              <div className="w-10 h-1 bg-[var(--primary)]" />
              <h2 className="text-2xl font-bold tracking-tight text-fg">
                Upcoming Projects &amp; Selected Work
              </h2>
              <p className="text-base text-fg-muted leading-relaxed font-normal pt-1">
                Trained Fourier Neural Operator surrogates to evaluate reaction dynamics <strong>100,000× faster</strong> than numerical solvers. Optimized catalytic e-methanol synthesis with DeepONet surrogates and BoTorch to achieve a <strong>+20.66% CO₂ conversion gain</strong>, and formulated linear programming models to minimize coal blend procurement costs while strictly satisfying ASTM quality limits.
              </p>
            </div>

            {/* Red Outline Action Buttons (Matching the "Watch Reel" button in the Wix screenshot) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://fnoproject.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-fg text-fg hover:text-fg px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>Live FNO Demo</span>
                <ExternalLink size={15} />
              </a>
            </div>

          </div>

        </section>

        {/* 3. PROJECTS SECTION (Clean Editorial Presentation + Direct GitHub Fetch) */}
        <section id="projects" className="space-y-10 border-t border-border/80 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="w-10 h-1 bg-[var(--primary)]" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
                Projects &amp; GitHub Repositories
              </h2>
              <p className="text-sm text-fg-muted max-w-2xl">
                Scientific neural operator surrogates, industrial optimization engines, and live public repositories directly fetched from GitHub.
              </p>
            </div>

            {/* GitHub Live Status & View Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-[var(--bg-subtle)] text-xs font-mono text-fg-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  GitHub: @shekharsameer2308 {githubRepos.length > 0 && `(${githubRepos.length} Repos)`}
                </span>
                <button
                  onClick={fetchGithub}
                  disabled={isLoadingGithub}
                  className="hover:text-[var(--primary)] transition-colors p-0.5"
                  title="Refetch directly from GitHub"
                >
                  <RefreshCw size={12} className={isLoadingGithub ? "animate-spin text-[var(--primary)]" : ""} />
                </button>
              </div>

              <div className="inline-flex border border-border p-1 bg-[var(--bg-subtle)] text-xs font-mono">
                <button
                  onClick={() => setRepoFilter("featured")}
                  className={`px-3 py-1 font-semibold transition-colors ${
                    repoFilter === "featured"
                      ? "bg-[var(--card)] text-[var(--primary)] shadow-sm"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  Featured (6)
                </button>
                <button
                  onClick={() => setRepoFilter("all")}
                  className={`px-3 py-1 font-semibold transition-colors ${
                    repoFilter === "all"
                      ? "bg-[var(--card)] text-[var(--primary)] shadow-sm"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  All GitHub ({githubRepos.length || 13})
                </button>
              </div>
            </div>
          </div>

          {/* VIEW 1: FEATURED PROJECTS */}
          {repoFilter === "featured" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((proj) => {
                const liveRepo = githubRepos.find(
                  (r) => r.html_url.toLowerCase() === proj.githubUrl.toLowerCase() ||
                         proj.githubUrl.toLowerCase().includes(r.name.toLowerCase())
                );
                return (
                  <div
                    key={proj.title}
                    className="border border-border/90 bg-[var(--card)] p-7 flex flex-col justify-between space-y-6 hover:border-[var(--primary)] transition-colors group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-border/70 pb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[var(--primary)]">
                          {proj.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {liveRepo && liveRepo.stars > 0 && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-500 font-bold">
                              <Star size={11} className="fill-amber-500" />
                              {liveRepo.stars}
                            </span>
                          )}
                          <span className="text-xs font-mono font-bold text-fg-subtle">
                            {proj.id}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-fg group-hover:text-[var(--primary)] transition-colors">
                          {proj.title}
                        </h3>
                        <div className="text-xs font-mono text-[var(--primary)] font-bold mt-1">
                          {proj.metric}
                        </div>
                      </div>

                      <p className="text-sm text-fg-muted leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border/70">
                      <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-fg-subtle">
                        {proj.stack.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-[var(--bg-subtle)] border border-border/60">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1 text-xs font-semibold">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg hover:text-[var(--primary)] inline-flex items-center gap-1 transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span>Code Repository</span>
                        </a>

                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Live App</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* VIEW 2: ALL DIRECT GITHUB REPOSITORIES */}
          {repoFilter === "all" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(githubRepos.length > 0 ? githubRepos : portfolioProjects.map(p => ({
                  id: p.id,
                  name: p.title,
                  description: p.description,
                  html_url: p.githubUrl,
                  homepage: p.liveUrl,
                  stars: 0,
                  forks: 0,
                  language: p.stack[0],
                  topics: []
                }))).map((repo: any) => (
                  <div
                    key={repo.name}
                    className="border border-border/90 bg-[var(--card)] p-6 flex flex-col justify-between space-y-4 hover:border-[var(--primary)] transition-colors group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[var(--primary)] px-2 py-0.5 border border-[var(--primary)]/30 bg-[var(--primary-muted)]">
                          {repo.language || "Software"}
                        </span>
                        <div className="flex items-center gap-3 text-xs font-mono text-fg-subtle">
                          {repo.stars > 0 && (
                            <span className="inline-flex items-center gap-1 text-amber-500 font-bold">
                              <Star size={12} className="fill-amber-500" />
                              {repo.stars}
                            </span>
                          )}
                          {repo.forks > 0 && (
                            <span className="inline-flex items-center gap-1">
                              <GitFork size={12} />
                              {repo.forks}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-fg group-hover:text-[var(--primary)] transition-colors break-words">
                        {repo.name}
                      </h3>

                      <p className="text-xs text-fg-muted leading-relaxed line-clamp-3">
                        {repo.description || "Public repository developed by Sameer Shekhar."}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/70 flex items-center justify-between text-xs font-semibold">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg hover:text-[var(--primary)] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>

                      {repo.homepage && (
                        <a
                          href={repo.homepage.startsWith("http") ? repo.homepage : `https://${repo.homepage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <a
                  href="https://github.com/shekharsameer2308?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-fg hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  <GithubIcon size={15} />
                  <span>View Full Profile on GitHub (@shekharsameer2308)</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          )}
        </section>

        {/* 4. RESUME & EXPERIENCE (Clean Editorial Timeline) */}
        <section id="experience" className="space-y-12 border-t border-border/80 pt-16">
          <div className="space-y-2">
            <div className="w-10 h-1 bg-[var(--primary)]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
              Experience &amp; Academic Training
            </h2>
            <p className="text-sm text-fg-muted max-w-2xl">
              Industrial quality management, experimental materials characterization, and student leadership at BIT Mesra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left: Industrial Internships */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-mono font-bold tracking-wider text-[var(--primary)] uppercase border-b border-border pb-2">
                <Briefcase size={16} />
                <span>Industrial Experience</span>
              </div>

              <div className="space-y-8">
                {experienceItems.map((exp) => (
                  <div key={exp.company} className="border-l-2 border-[var(--primary)] pl-6 space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-bold text-fg">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-fg-subtle whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-bold text-[var(--primary)]">
                      {exp.company} • {exp.score}
                    </div>

                    <p className="text-sm text-fg-muted leading-relaxed pt-1">
                      {exp.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Education & Leadership */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-mono font-bold tracking-wider text-[var(--primary)] uppercase border-b border-border pb-2">
                <GraduationCap size={16} />
                <span>Education &amp; Leadership</span>
              </div>

              <div className="space-y-8">
                {educationItems.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-border pl-6 space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-bold text-fg">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-fg-subtle whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-bold text-fg-muted">
                      {edu.institution}
                    </div>

                    <p className="text-sm text-fg-muted leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Verified Certifications Section */}
          <div className="pt-8 border-t border-border/80 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-fg">Verified Certifications</h3>
                <p className="text-xs text-fg-subtle">
                  Rigorous credentialing across Deep Learning, Algorithmic Problem Solving, and Chemical Engineering.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certs.map((c) => (
                <div
                  key={c.title}
                  onClick={() => setActiveCert({ title: c.title, issuer: c.issuer, image: c.image })}
                  className="border border-border/80 p-4 bg-[var(--card)] hover:border-[var(--primary)] cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-fg group-hover:text-[var(--primary)] transition-colors">
                      {c.title}
                    </div>
                    <div className="text-[11px] font-mono text-fg-subtle">
                      {c.issuer}
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-fg-subtle group-hover:text-[var(--primary)] group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section id="contact" className="space-y-8 border-t border-border/80 pt-16">
          <div className="space-y-2">
            <div className="w-10 h-1 bg-[var(--primary)]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">
              Contact &amp; Inquiries
            </h2>
            <p className="text-sm text-fg-muted max-w-xl">
              Available for research collaborations, engineering roles, and scientific computing consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details Card */}
            <div className="md:col-span-6 border border-border p-8 bg-[var(--card)] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] font-bold">
                  DIRECT EMAIL
                </span>
                <div className="text-xl font-bold text-fg mt-1">
                  {email}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
                </button>

                <a
                  href={`mailto:${email}`}
                  className="border border-border hover:border-fg text-fg px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={14} />
                  <span>Open Mail App</span>
                </a>
              </div>

              <div className="pt-4 border-t border-border/80 flex items-center gap-4">
                <a
                  href="https://github.com/shekharsameer2308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border hover:border-[var(--primary)] text-fg hover:text-[var(--primary)] flex items-center justify-center transition-colors"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href="https://linkedin.com/in/sameershekhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border hover:border-[var(--primary)] text-fg hover:text-[var(--primary)] flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="md:col-span-6 border border-border p-8 bg-[var(--bg-subtle)] space-y-4">
              <h3 className="text-lg font-bold text-fg">
                Institution &amp; Department
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                Department of Chemical Engineering<br />
                Birla Institute of Technology, Mesra<br />
                Ranchi, Jharkhand, India - 835215
              </p>
              <div className="text-xs font-mono text-[var(--primary)] font-bold pt-2">
                IIChE Student Chapter Executive Office
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 6. BOTTOM FOOTER BAND (Matching the grey footer band in Wix screenshot) */}
      <footer className="w-full bg-[var(--bg-band)] border-t border-border/70 py-8 px-6 sm:px-12 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-subtle">
            © 2026 by Sameer Shekhar. Department of Chemical Engineering, BIT Mesra.
          </p>

          <div className="flex items-center gap-4 text-fg-subtle">
            <a
              href="https://github.com/shekharsameer2308"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/sameershekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-[var(--primary)] transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Verified Certificates */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="max-w-2xl w-full bg-[var(--card)] border border-border p-6 space-y-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 w-8 h-8 border border-border flex items-center justify-center text-fg hover:text-[var(--primary)] transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-fg">{activeCert.title}</h4>
              <p className="text-xs font-mono text-fg-subtle">{activeCert.issuer}</p>
            </div>

            <div className="border border-border/80 overflow-hidden bg-black/10 flex items-center justify-center min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
