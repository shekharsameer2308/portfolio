"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Copy,
  Check,
  X,
  ChevronRight,
  Star,
  GitFork,
  RefreshCw,
  Briefcase,
  GraduationCap
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

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  group: "all" | "web" | "systems" | "simulation" | "data";
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const portfolioProjects: ProjectItem[] = [
  {
    id: "01",
    title: "TrackFin Intelligence Platform",
    category: "Full-Stack Web",
    group: "web",
    description:
      "Personal finance tracking application for logging income and expenses, viewing categorized summaries, and tracking spending trends with responsive charts.",
    stack: ["JavaScript", "React", "Next.js", "Chart.js"],
    githubUrl: "https://github.com/shekharsameer2308/TrackFin",
    liveUrl: "https://track-fin-bay.vercel.app"
  },
  {
    id: "02",
    title: "NEXUS Distributed Streaming Engine",
    category: "Distributed Systems",
    group: "systems",
    description:
      "Marketplace telemetry simulator running across 11 containerized Docker microservices with Apache Kafka message brokers, PostgreSQL, and real-time Grafana monitoring.",
    stack: ["Apache Kafka", "Docker", "PostgreSQL", "FastAPI", "Grafana"],
    githubUrl: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-",
    liveUrl: "https://real-time-data-analysis.vercel.app/"
  },
  {
    id: "03",
    title: "Industrial Coal Quality Analyzer",
    category: "Data & Optimization",
    group: "data",
    description:
      "Predictive quality regression model trained on proximate analysis assays with an automated simplex linear programming optimizer for commercial coal blending ratios.",
    stack: ["TypeScript", "Next.js", "FastAPI", "XGBoost", "SciPy"],
    githubUrl: "https://github.com/shekharsameer2308/Analyzer",
    liveUrl: "https://analyzer-ochre.vercel.app"
  },
  {
    id: "04",
    title: "Neural PDE Reaction Dynamics Solver",
    category: "Numerical Simulation",
    group: "simulation",
    description:
      "In-browser numerical solver and neural operator evaluation tool for Fisher-KPP non-linear reaction-diffusion partial differential equations.",
    stack: ["Python", "PyTorch", "React", "FastAPI", "Canvas API"],
    githubUrl: "https://github.com/shekharsameer2308/Prototype-FNO-1D-RxnDynamics-",
    liveUrl: "https://prototype-fno-1-d-rxn-dynamics.vercel.app"
  },
  {
    id: "05",
    title: "Catalytic Fixed-Bed Reactor Model",
    category: "Chemical Process Simulation",
    group: "simulation",
    description:
      "Numerical simulation of a fixed-bed catalytic reactor for carbon dioxide hydrogenation, paired with Bayesian optimization algorithms to maximize methanol yield.",
    stack: ["Python", "PyTorch", "BoTorch", "NumPy"],
    githubUrl: "https://github.com/shekharsameer2308/exi1"
  },
  {
    id: "06",
    title: "Project Prism: Marketing Attribution Engine",
    category: "Data Systems",
    group: "data",
    description:
      "Attribution modeling engine evaluating omnichannel marketing spend using first-order Markov chains and multi-touch heuristic allocation algorithms.",
    stack: ["Python", "Pandas", "Statsmodels", "SciPy", "SQL"],
    githubUrl: "https://github.com/shekharsameer2308/ProjectPrism"
  },
  {
    id: "07",
    title: "Packaging Attribute Extraction Pipeline",
    category: "Data & Automation",
    group: "data",
    description:
      "Data pipeline for parsing product attributes from packaging images using optical character recognition, named entity recognition, and structured Pydantic schema validation.",
    stack: ["Python", "EasyOCR", "Pydantic", "FastAPI"],
    githubUrl: "https://github.com/shekharsameer2308/ecom-attribute-extraction"
  },
  {
    id: "08",
    title: "Scout Market Intelligence Platform",
    category: "Data & Automation",
    group: "data",
    description:
      "Market research tool automating web crawling, structured content aggregation, and news synthesis across target industry domains.",
    stack: ["Python", "FastAPI", "BeautifulSoup", "AsyncIO"],
    githubUrl: "https://github.com/shekharsameer2308/Scout"
  },
  {
    id: "09",
    title: "Incompressible Fluid Dynamics Solver",
    category: "Fluid Simulation",
    group: "simulation",
    description:
      "2D fluid dynamics simulation solving the incompressible Navier-Stokes equations with GPU acceleration and velocity field visualization.",
    stack: ["Python", "Taichi Lang", "CUDA", "NumPy"],
    githubUrl: "https://github.com/shekharsameer2308/Flow-simulation-"
  },
  {
    id: "10",
    title: "ParkWay Stream Validation Pipeline",
    category: "Data Systems",
    group: "data",
    description:
      "Stream processing architecture for directory record validation, schema conformance checking, and anomaly filtering developed for the Summer Analytics capstone.",
    stack: ["Python", "Pathway", "Pandas", "Jupyter"],
    githubUrl: "https://github.com/shekharsameer2308/ParkWay"
  },
  {
    id: "11",
    title: "Provider Directory Validation Workflow",
    category: "Data Systems",
    group: "data",
    description:
      "Healthcare directory validation workflow implementing automated credential reconciliation, format standardization, and data deduplication.",
    stack: ["Python", "Jupyter Notebook", "Pandas"],
    githubUrl: "https://github.com/shekharsameer2308/eyprototype"
  },
  {
    id: "12",
    title: "Machine Learning Algorithms Library",
    category: "Applied Machine Learning",
    group: "data",
    description:
      "Implementations of core classification, regression, and clustering algorithms from scratch with documentation, unit tests, and validation benchmarks.",
    stack: ["Python", "Scikit-Learn", "Matplotlib", "NumPy"],
    githubUrl: "https://github.com/shekharsameer2308/ML-models-"
  },
  {
    id: "13",
    title: "Relational DBMS & Storage Engine",
    category: "Database Systems",
    group: "systems",
    description:
      "Implementation of relational data structures, B-tree index traversal, query parsing, and ACID transaction safety concepts.",
    stack: ["SQL", "HTML", "JavaScript"],
    githubUrl: "https://github.com/shekharsameer2308/Database-Management-System-"
  },
  {
    id: "14",
    title: "Python Algorithmic Utilities",
    category: "Algorithms",
    group: "systems",
    description:
      "Utility library implementing classic data structures, sorting algorithms, numerical root-finding routines, and optimization benchmarks.",
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
      "Conducted proximate analysis (moisture, ash, volatile matter, gross calorific value) under ASTM laboratory protocols across coal dispatches.",
      "Audited billing records and delivery schedules against contract quality penalty thresholds."
    ]
  },
  {
    role: "Research Intern, Materials Characterization",
    organization: "Tata Steel Limited",
    period: "Jun 2025 - Jul 2025",
    location: "Jamshedpur, India",
    points: [
      "Prepared polymer modification formulations and inspected microstructural morphologies using Scanning Electron Microscopy (SEM) and FTIR spectroscopy.",
      "Analyzed thermal degradation behaviors using Differential Scanning Calorimetry (DSC) and Thermogravimetric Analysis (TGA)."
    ]
  },
  {
    role: "Joint President",
    organization: "IIChE Student Chapter, BIT Mesra",
    period: "2023 - Present",
    location: "Mesra, India",
    points: [
      "Directing student chapter operations, organizing technical symposiums, coding workshops, and guest lectures from chemical engineering researchers.",
      "Coordinated academic hackathons and peer learning programs in computational modeling."
    ]
  },
  {
    role: "B.Tech in Chemical Engineering",
    organization: "Birla Institute of Technology, Mesra",
    period: "2023 - 2027",
    location: "Mesra, India",
    points: [
      "Core coursework: Transport Phenomena, Chemical Reaction Engineering, Process Dynamics and Control, Thermodynamics, and Numerical Methods.",
      "Active research in numerical process simulation and optimization."
    ]
  }
];

const skillCategories = [
  {
    category: "Programming & Web",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "React", "Next.js", "FastAPI", "Node.js", "Tailwind CSS", "HTML/CSS"]
  },
  {
    category: "Systems & Infrastructure",
    skills: ["Docker", "Apache Kafka", "PostgreSQL", "Git & GitHub", "Linux / Bash", "RESTful APIs", "Grafana", "Vercel"]
  },
  {
    category: "Engineering & Data",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "PyTorch", "Process Simulation", "Linear Programming (Simplex)", "ASTM Analysis"]
  }
];

export default function Portfolio() {
  const [selectedGroup, setSelectedGroup] = useState<"all" | "web" | "systems" | "simulation" | "data">("all");
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
      
      {/* 1. CLEAN TOP NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-base tracking-tight text-fg hover:text-primary transition-colors">
            Sameer Shekhar
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-6 text-sm text-fg-muted">
              <a href="#about" className="hover:text-fg transition-colors">About</a>
              <a href="#projects" className="hover:text-fg transition-colors">Projects</a>
              <a href="#experience" className="hover:text-fg transition-colors">Experience</a>
              <a href="#skills" className="hover:text-fg transition-colors">Skills</a>
              <a href="#contact" className="hover:text-fg transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-2">
              <LampToggle />
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-20 space-y-20">

        {/* HERO SECTION */}
        <section id="about" className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
              Sameer Shekhar
            </h1>
            <p className="text-lg text-fg-muted font-normal">
              Software Developer &amp; Chemical Engineering Student at BIT Mesra
            </p>
          </div>

          <p className="text-base text-fg-muted leading-relaxed max-w-2xl font-normal">
            Undergraduate at Birla Institute of Technology, Mesra and Joint President of the Indian Institute of Chemical Engineers (IIChE) student chapter. I build distributed systems, full-stack applications, and engineering process software with Python, TypeScript, and modern data infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-fg text-bg hover:opacity-90 text-sm font-medium transition-opacity inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#contact"
              className="px-4 py-2.5 rounded-lg border border-border hover:border-fg text-sm font-medium text-fg transition-colors inline-flex items-center gap-2"
            >
              <span>Contact</span>
            </a>

            <a
              href="https://github.com/shekharsameer2308"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-fg text-fg-muted hover:text-fg transition-colors inline-flex items-center justify-center"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://linkedin.com/in/sameershekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-fg text-fg-muted hover:text-fg transition-colors inline-flex items-center justify-center"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 border-t border-border/80 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-fg">
                Projects
              </h2>
              <p className="text-sm text-fg-muted">
                Software, distributed systems, and engineering tools built with TypeScript, Python, and SQL.
              </p>
            </div>

            <button
              onClick={fetchGithub}
              disabled={isLoadingGithub}
              className="px-3 py-1.5 rounded-md border border-border bg-card text-xs font-mono text-fg-muted hover:text-fg transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto"
              title="Sync with GitHub"
            >
              <RefreshCw size={12} className={isLoadingGithub ? "animate-spin text-primary" : ""} />
              <span>{isLoadingGithub ? "Syncing..." : "Sync GitHub"}</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            {[
              { id: "all", label: `All (${portfolioProjects.length})` },
              { id: "web", label: `Full-Stack & Web (${portfolioProjects.filter(p => p.group === "web").length})` },
              { id: "systems", label: `Distributed & Systems (${portfolioProjects.filter(p => p.group === "systems").length})` },
              { id: "simulation", label: `Simulation & Physics (${portfolioProjects.filter(p => p.group === "simulation").length})` },
              { id: "data", label: `Data & Automation (${portfolioProjects.filter(p => p.group === "data").length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedGroup(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedGroup === tab.id
                    ? "border-fg bg-fg text-bg font-semibold"
                    : "border-border/80 bg-card hover:border-fg/40 text-fg-muted hover:text-fg"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioProjects
              .filter((proj) => selectedGroup === "all" || proj.group === selectedGroup)
              .map((proj) => {
                const liveRepo = githubRepos.find(
                  (r) => r.html_url.toLowerCase() === proj.githubUrl.toLowerCase() ||
                         proj.githubUrl.toLowerCase().includes(r.name.toLowerCase())
                );
                return (
                  <div
                    key={proj.title}
                    className="rounded-xl border border-border/80 bg-card p-5 flex flex-col justify-between space-y-4 hover:border-fg/30 transition-colors"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-fg-subtle">
                          {proj.category}
                        </span>

                        {liveRepo && liveRepo.stars > 0 && (
                          <span className="inline-flex items-center gap-1 font-mono text-amber-500 font-medium">
                            <Star size={11} className="fill-amber-500" />
                            {liveRepo.stars}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-semibold text-fg">
                        {proj.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-fg-muted leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-border/60">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((t) => (
                          <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-subtle text-fg-subtle border border-border/40">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1 text-xs font-medium">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg-muted hover:text-fg inline-flex items-center gap-1.5 transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span>Repository</span>
                        </a>

                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fg hover:underline inline-flex items-center gap-1 font-semibold"
                          >
                            <span>Live App</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-8 border-t border-border/80 pt-16">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-fg">
              Experience &amp; Leadership
            </h2>
            <p className="text-sm text-fg-muted">
              Industrial quality management, materials characterization, and student society leadership.
            </p>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp) => (
              <div
                key={exp.role}
                className="rounded-xl border border-border/80 bg-card p-6 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-fg">{exp.role}</h3>
                    <div className="text-sm text-fg-muted font-normal mt-0.5">
                      {exp.organization} • {exp.location}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-fg-subtle">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-fg-muted leading-relaxed list-disc list-inside pt-1">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Verified Credentials */}
          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-fg">Certifications &amp; Training</h3>
              <span className="text-xs font-mono text-fg-subtle">Click to view credential</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certs.map((c) => (
                <div
                  key={c.title}
                  onClick={() => setActiveCert({ title: c.title, issuer: c.issuer, image: c.image })}
                  className="rounded-lg border border-border/80 p-3 bg-card hover:border-fg/30 cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-medium text-fg group-hover:text-primary transition-colors">
                      {c.title}
                    </div>
                    <div className="text-[11px] font-mono text-fg-subtle">
                      {c.issuer}
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-fg-subtle group-hover:translate-x-0.5 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-6 border-t border-border/80 pt-16">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-fg">
              Technical Skills
            </h2>
            <p className="text-sm text-fg-muted">
              Languages, libraries, developer tools, and engineering computation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-border/80 bg-card p-5 space-y-3"
              >
                <h3 className="text-sm font-semibold text-fg">
                  {cat.category}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-bg-subtle border border-border/60 text-fg-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-6 border-t border-border/80 pt-16">
          <div className="rounded-2xl border border-border/80 bg-card p-8 sm:p-10 space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-fg">
                Get in Touch
              </h2>
              <p className="text-sm text-fg-muted">
                Feel free to reach out for software engineering roles, research inquiries, or collaborations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-lg bg-fg text-bg hover:opacity-90 text-sm font-medium transition-opacity inline-flex items-center gap-2"
              >
                {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                <span>{copiedEmail ? "Email Copied" : "Copy Email"}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="px-4 py-2.5 rounded-lg border border-border hover:border-fg text-sm font-medium text-fg transition-colors inline-flex items-center gap-2"
              >
                <Mail size={15} />
                <span>Open Mail Client</span>
              </a>
            </div>

            <div className="text-xs font-mono text-fg-subtle pt-1">
              {email}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/70 py-8 px-6 text-xs text-fg-subtle">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Sameer Shekhar. Birla Institute of Technology, Mesra.</p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/shekharsameer2308" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/sameershekhar" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} className="hover:text-fg transition-colors">Email</a>
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
            className="max-w-2xl w-full bg-card border border-border rounded-xl p-6 space-y-4 relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-border flex items-center justify-center text-fg hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="space-y-0.5">
              <h4 className="text-base font-semibold text-fg">{activeCert.title}</h4>
              <p className="text-xs font-mono text-fg-subtle">{activeCert.issuer}</p>
            </div>

            <div className="rounded-lg border border-border overflow-hidden bg-black/10 flex items-center justify-center min-h-[300px]">
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
