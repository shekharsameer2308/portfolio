"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, X, ChevronDown, ChevronUp } from "lucide-react";
import LampToggle from "@/components/LampToggle";
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

interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  metric: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  details?: string;
}

const featuredProjects: ProjectData[] = [
  {
    id: "fno-pde",
    title: "Neural PDE Solver",
    category: "Scientific ML",
    tagline: "In-browser Fourier Neural Operator surrogates for continuous reaction-diffusion dynamics",
    problem:
      "Classical numerical solvers (finite difference, finite volume) for non-linear PDEs like Fisher-KPP and phase-field dynamics require fine spatiotemporal meshing, leading to prohibitive computation times for real-time visualization and parameter exploration.",
    solution:
      "Trained a Fourier Neural Operator (FNO) surrogate that maps continuous initial condition functions to solution trajectories across arbitrary grid resolutions. Deployed in-browser with real-time HTML5 canvas heatmaps and surface convergence metrics.",
    metric: "100,000× faster inference",
    stack: ["PyTorch", "React", "FastAPI", "Canvas API", "SciML"],
    githubUrl: "https://github.com/shekharsameer2308/Prototype-FNO-1D-RxnDynamics-",
    liveUrl: "https://fnoproject.vercel.app",
    details:
      "Unlike standard CNN-based surrogates that are tied to fixed grid discretizations, the Fourier Neural Operator learns operators in continuous frequency space, enabling zero-shot super-resolution without retraining."
  },
  {
    id: "deeponet-reactor",
    title: "Reactor Model & Bayesian Optimization",
    category: "Process Simulation",
    tagline: "DeepONet surrogate modeling for catalytic fixed-bed e-methanol synthesis",
    problem:
      "Simulating multi-component gas-phase catalytic reaction kinetics with coupled 2D heat and mass transfer differential equations requires minutes per evaluation in classical CFD, making global optimization sweeps intractable.",
    solution:
      "Developed a DeepONet neural operator surrogate modeling temperature and concentration profiles across varying feed space velocities and inlet compositions. Coupled the surrogate with BoTorch for multi-objective Bayesian optimization to identify optimal operating windows.",
    metric: "+20.66% CO₂ conversion gain",
    stack: ["Python", "PyTorch", "BoTorch", "SciML", "CFD"],
    githubUrl: "https://github.com/shekharsameer2308/exi1",
    details:
      "The branch net encodes variable operating parameters while the trunk net encodes the reactor spatial domain, cutting simulation query times to under 15ms per run."
  },
  {
    id: "analyzer-coal",
    title: "Analyzer",
    category: "Industrial Analytics",
    tagline: "Coal quality assessment, GCV regression, and linear programming blend optimizer",
    problem:
      "Thermal power utilities and steel plants receive heterogeneous coal consignments with wide fluctuations in proximate parameters (moisture, ash, volatile matter, fixed carbon). Manual blending calculations often miss contractual quality thresholds, incurring steep penalty fees.",
    solution:
      "Engineered an end-to-end analytical platform combining XGBoost regression for Gross Calorific Value (GCV) prediction, multivariate Isolation Forest to detect anomalous laboratory assay logs, and a Simplex linear programming optimizer to formulate lowest-cost blends meeting strict ash (<34%) and thermal criteria.",
    metric: "Simplex LP optimizer",
    stack: ["Next.js", "FastAPI", "XGBoost", "SciPy Optimize", "DuckDB"],
    githubUrl: "https://github.com/shekharsameer2308/analyzer",
    liveUrl: "https://analyzer-self.vercel.app",
    details:
      "Directly developed following on-site proximate analysis work at Central Coalfields Limited, translating industrial lab assay protocols into an automated algorithmic decision engine."
  },
  {
    id: "nexus-streaming",
    title: "NEXUS Analytics",
    category: "Distributed Systems",
    tagline: "High-throughput marketplace event streaming engine on Kafka & Docker",
    problem:
      "Simulating and processing high-velocity transaction event streams requires a resilient distributed pipeline that decouples ingestion from analytical aggregation without dropping messages.",
    solution:
      "Orchestrated 11 containerized Docker microservices utilizing Apache Kafka brokers for event ingestion, PostgreSQL for star-schema analytical storage, WebSockets for sub-second client broadcasts, and Grafana for system health telemetry.",
    metric: "10–50 events/sec throughput",
    stack: ["Apache Kafka", "PostgreSQL", "Docker", "FastAPI", "Grafana", "WebSockets"],
    githubUrl: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-",
    liveUrl: "https://real-time-data-analysis.vercel.app/"
  },
  {
    id: "attribute-extraction",
    title: "E-Commerce Attribute Extraction",
    category: "Multimodal AI",
    tagline: "Packaging vision & NER pipeline with deterministic validation",
    problem:
      "Extracting structured numerical attributes (net weight, volume, nutritional counts) from packaging photos using raw LLM prompts frequently generates arithmetic hallucinations and invalid data formats.",
    solution:
      "Built a hybrid pipeline combining Google Gemini multimodal vision, EasyOCR text extraction, and a custom-trained Averaged Perceptron NER model, backed by deterministic Pydantic schema validation to ensure mathematical consistency (93.3% test accuracy).",
    metric: "93.3% extraction accuracy",
    stack: ["Python", "Google Gemini", "EasyOCR", "Pydantic", "NER"],
    githubUrl: "https://github.com/shekharsameer2308/ecom-attribute-extraction"
  }
];

const experienceList = [
  {
    period: "May 2026 – Jun 2026",
    role: "Summer Intern, Quality Management",
    org: "Central Coalfields Limited (CCL)",
    location: "Ranchi, India",
    description:
      "Ran proximate analysis protocols (moisture, ash, volatile matter, gross calorific value) on coal samples across heterogeneous mine seams. Cleaned and audited lab assay logs into structured datasets to benchmark consignments against billing specifications and contractual penalty limits."
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "Research Intern, Materials Characterization",
    org: "Tata Steel Limited",
    location: "Jamshedpur, India",
    description:
      "Collaborated with senior research scientists on polymer modification experimental protocols. Operated analytical characterization instruments including SEM, FTIR, DSC, and TGA to correlate microstructure changes with thermal degradation curves."
  },
  {
    period: "2023 – Present",
    role: "Joint President",
    org: "Indian Institute of Chemical Engineers (IIChE), BIT Mesra",
    location: "Ranchi, India",
    description:
      "Leading the chemical engineering student chapter: coordinating technical symposiums, research seminars, and student workshops on process simulation and computational engineering tools."
  }
];

const competenceList = [
  {
    area: "Scientific ML & Modeling",
    skills: "Neural Operators (FNO, DeepONet), BoTorch, Navier-Stokes, SciPy Optimize, CFD"
  },
  {
    area: "Machine Learning & AI",
    skills: "XGBoost, Scikit-Learn, PyTorch, Gemini Multimodal API, NER, Anomaly Detection"
  },
  {
    area: "Data & Systems",
    skills: "Apache Kafka, PostgreSQL, Docker, FastAPI, Grafana, Next.js, TypeScript, Python"
  },
  {
    area: "Laboratory & Characterization",
    skills: "ASTM Proximate Analysis (D3172), SEM, FTIR, DSC, TGA, Polymer Characterization"
  }
];

export default function FluidPortfolio() {
  const [copied, setCopied] = useState(false);
  const [activeCert, setActiveCert] = useState<{ title: string; issuer: string; image: string } | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const email = "shekharsameer2308@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-fg selection:text-bg">
      
      {/* Top Floating Header */}
      <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border transition-colors">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-semibold text-sm tracking-tight text-fg group-hover:text-fg-muted transition-colors">
              Sameer Shekhar
            </span>
            <span className="text-xs text-fg-subtle hidden sm:inline">&middot; Chemical Eng &amp; ML</span>
          </a>

          <nav className="flex items-center gap-5 text-xs font-medium text-fg-muted">
            <a href="#work" className="hover:text-fg transition-colors">Work</a>
            <a href="#experience" className="hover:text-fg transition-colors">Experience</a>
            <a href="#competencies" className="hover:text-fg transition-colors">Skills</a>
            <a href="#contact" className="hover:text-fg transition-colors">Contact</a>
            <LampToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-20">

        {/* 1. HERO SECTION */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg leading-[1.25]">
              Building neural operators, process surrogates, and streaming data architectures.
            </h1>
            <p className="text-base sm:text-lg text-fg-muted leading-relaxed font-normal pt-1">
              I am a final-year Chemical Engineering student at <strong className="text-fg font-medium">BIT Mesra</strong> and Joint President of IIChE. My work sits at the intersection of transport phenomena, reaction engineering, and machine learning—replacing slow numerical PDE solvers with Fourier Neural Operators, applying Bayesian optimization to chemical reactors, and engineering distributed data pipelines for industrial quality optimization.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs font-medium">
            <a
              href="https://github.com/shekharsameer2308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-fg hover:underline underline-offset-4 decoration-border"
            >
              <GithubIcon size={14} />
              GitHub
              <ArrowUpRight size={11} className="text-fg-subtle" />
            </a>

            <a
              href="https://linkedin.com/in/sameershekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-fg hover:underline underline-offset-4 decoration-border"
            >
              <LinkedinIcon size={14} />
              LinkedIn
              <ArrowUpRight size={11} className="text-fg-subtle" />
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 text-fg hover:underline underline-offset-4 decoration-border"
            >
              Email
              <ArrowUpRight size={11} className="text-fg-subtle" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-fg-muted hover:text-fg transition-colors font-mono"
            >
              {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              <span>{copied ? "Copied" : "Copy email"}</span>
            </button>
          </div>
        </section>

        {/* 2. SELECTED WORK */}
        <section id="work" className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Selected Work
            </h2>
            <span className="text-xs text-fg-subtle font-mono">01 &ndash; 05</span>
          </div>

          <div className="space-y-6">
            {featuredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;
              return (
                <div
                  key={project.id}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-fg-subtle/50 transition-all space-y-4"
                >
                  {/* Title Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg font-semibold tracking-tight text-fg">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-bg-subtle text-fg-subtle font-mono">
                        {project.category}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
                      {project.metric}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-fg font-medium">
                    {project.tagline}
                  </p>

                  {/* Problem & Solution Flow */}
                  <div className="space-y-2 text-xs sm:text-sm text-fg-muted leading-relaxed font-normal">
                    <p>{project.solution}</p>
                    {isExpanded && project.details && (
                      <p className="pt-2 text-xs text-fg-subtle border-t border-border/60">
                        {project.details}
                      </p>
                    )}
                  </div>

                  {/* Footer Bar: Tech Stack & Action Links */}
                  <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap gap-1.5 font-mono text-fg-subtle">
                      {project.stack.map((tech, i) => (
                        <span key={tech}>
                          {tech}{i < project.stack.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 font-medium">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-1 text-fg-muted hover:text-fg transition-colors"
                      >
                        <span>{isExpanded ? "Less" : "Notes"}</span>
                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-fg hover:underline underline-offset-4"
                      >
                        GitHub <ArrowUpRight size={11} className="text-fg-subtle" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-fg hover:underline underline-offset-4"
                        >
                          Live <ArrowUpRight size={11} className="text-fg-subtle" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. EXPERIENCE & RESEARCH */}
        <section id="experience" className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Industrial Experience &amp; Research
            </h2>
            <span className="text-xs text-fg-subtle font-mono">2023 &ndash; Present</span>
          </div>

          <div className="space-y-8">
            {experienceList.map((exp) => (
              <div key={exp.role} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-fg">{exp.role}</h3>
                    <p className="text-xs text-fg-muted">
                      {exp.org} &middot; <span className="text-fg-subtle">{exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-fg-subtle whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-fg-muted">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TECHNICAL COMPETENCIES */}
        <section id="competencies" className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Domain Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competenceList.map((c) => (
              <div key={c.area} className="p-4 rounded-xl bg-card border border-border space-y-1.5">
                <div className="text-xs font-semibold text-fg">{c.area}</div>
                <p className="text-xs text-fg-muted font-mono leading-relaxed">
                  {c.skills}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. EDUCATION & VERIFIED CREDENTIALS */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Education &amp; Credentials
            </h2>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-fg">
                  Birla Institute of Technology, Mesra
                </h3>
                <p className="text-xs text-fg-muted">
                  Bachelor of Technology in Chemical Engineering &middot; Ranchi, Jharkhand, India
                </p>
              </div>
              <span className="text-xs font-mono text-fg-subtle">Class of 2023 &ndash; 2027</span>
            </div>

            <div className="pt-2 space-y-2">
              <span className="text-xs font-medium text-fg-muted block">Verified Certifications:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {certs.map((c) => (
                  <button
                    key={c.title}
                    onClick={() => setActiveCert(c)}
                    className="p-3 rounded-lg border border-border bg-card hover:border-fg-subtle text-left flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-medium text-fg group-hover:underline underline-offset-2">
                        {c.title}
                      </div>
                      <div className="text-[11px] text-fg-subtle">{c.issuer}</div>
                    </div>
                    <span className="text-[10px] font-mono text-fg-subtle group-hover:text-fg pl-2">
                      Preview &rarr;
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT */}
        <section id="contact" className="space-y-6 pt-4 border-t border-border">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-fg">
              Let's connect.
            </h2>
            <p className="text-sm text-fg-muted leading-relaxed max-w-xl">
              Always open to discussing neural operators, chemical process optimization, industrial analytics, or distributed event streaming.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href={`mailto:${email}`}
              className="px-4 py-2 rounded-lg bg-fg text-bg font-medium hover:opacity-90 transition-opacity"
            >
              Send an email
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-lg border border-border bg-card hover:bg-bg-subtle text-fg font-medium transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span>{copied ? "Email Copied!" : email}</span>
            </button>
          </div>
        </section>

        {/* 7. FOOTER */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-fg-subtle">
          <div>
            &copy; {new Date().getFullYear()} Sameer Shekhar &middot; Ranchi, Jharkhand, India
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/shekharsameer2308" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/sameershekhar" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-fg transition-colors">Top &uarr;</a>
          </div>
        </footer>

      </main>

      {/* Lightbox Modal for Certifications */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl p-6 max-w-xl w-full shadow-2xl relative space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-fg">{activeCert.title}</h3>
                <p className="text-xs text-fg-muted mt-0.5">{activeCert.issuer}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1 rounded text-fg-subtle hover:text-fg hover:bg-bg-subtle transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-border bg-bg-subtle max-h-[65vh] flex items-center justify-center">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
