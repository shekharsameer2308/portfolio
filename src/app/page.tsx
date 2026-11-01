"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, X } from "lucide-react";
import LampToggle from "@/components/LampToggle";
import { certs } from "@/data/certs";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Neural PDE Solver",
    subtitle: "In-Browser Fourier Neural Operator Surrogates",
    description:
      "Evaluates Fourier Neural Operator (FNO) surrogates against traditional numerical solvers on Fisher-KPP reaction-diffusion and phase-field dynamics. Runs client-side in the browser with real-time canvas heatmaps, delivering 100,000× faster inference on equivalent spatial grids.",
    metric: "100,000× faster inference",
    stack: ["PyTorch", "React", "FastAPI", "Canvas API"],
    githubUrl: "https://github.com/shekharsameer2308/Prototype-FNO-1D-RxnDynamics-",
    liveUrl: "https://fnoproject.vercel.app"
  },
  {
    title: "Reactor Model & Optimization",
    subtitle: "DeepONet Surrogate for E-Methanol Synthesis",
    description:
      "A scientific computing framework building DeepONet neural operator surrogates of a catalytic fixed-bed methanol synthesis reactor. Coupled with BoTorch for multi-objective Bayesian optimization, reducing simulation runtimes from minutes to milliseconds and identifying parametric regimes that yielded +20.66% higher CO₂ conversion.",
    metric: "+20.66% CO₂ conversion gain",
    stack: ["Python", "PyTorch", "BoTorch", "SciML"],
    githubUrl: "https://github.com/shekharsameer2308/exi1"
  },
  {
    title: "Analyzer",
    subtitle: "Industrial Coal Quality Regression & Blend Optimizer",
    description:
      "Industrial analytics platform born out of laboratory proximate analysis at Central Coalfields Limited. Deploys XGBoost regression to predict Gross Calorific Value (GCV), multivariate Isolation Forests to flag anomalous lab assays, and a Simplex-based linear programming optimizer to formulate lowest-cost coal blends satisfying strict moisture, ash, and thermal thresholds.",
    metric: "Linear programming optimizer",
    stack: ["Next.js", "FastAPI", "XGBoost", "SciPy Optimize"],
    githubUrl: "https://github.com/shekharsameer2308/analyzer",
    liveUrl: "https://analyzer-self.vercel.app"
  },
  {
    title: "NEXUS Analytics",
    subtitle: "Distributed Real-Time Event Streaming Engine",
    description:
      "Enterprise-grade data streaming platform simulating high-throughput marketplace transaction telemetry. Orchestrates 11 containerized Docker microservices, ingesting 10–50 events/second through Apache Kafka into a PostgreSQL star schema, with sub-second WebSocket broadcasting and Grafana dashboards.",
    metric: "10–50 events/sec throughput",
    stack: ["Apache Kafka", "PostgreSQL", "Docker", "FastAPI", "Grafana"],
    githubUrl: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-",
    liveUrl: "https://real-time-data-analysis.vercel.app/"
  },
  {
    title: "E-Commerce Attribute Extraction",
    subtitle: "Multimodal Vision & NER Pipeline",
    description:
      "End-to-end computer vision and NLP pipeline extracting structured product attributes from packaging images. Combines Google Gemini multimodal inference, EasyOCR, and a custom-trained Averaged Perceptron NER model with deterministic Pydantic schema validation to eliminate arithmetic LLM hallucinations (93.3% test accuracy).",
    metric: "93.3% extraction accuracy",
    stack: ["Python", "Google Gemini", "EasyOCR", "Pydantic", "NER"],
    githubUrl: "https://github.com/shekharsameer2308/ecom-attribute-extraction"
  }
];

const experiences = [
  {
    period: "May 2026 – Jun 2026",
    role: "Summer Intern, Quality Management",
    org: "Central Coalfields Limited (CCL)",
    location: "Ranchi, India",
    details:
      "Conducted ASTM proximate analysis (moisture, ash, volatile matter, gross calorific value) across heterogeneous coal seams. Cleaned and structured laboratory assay logs into analytical datasets, assisting plant management in auditing dispatches against contractual specifications and penalty limits."
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "Research Intern, R&D Materials Characterization",
    org: "Tata Steel Limited",
    location: "Jamshedpur, India",
    details:
      "Collaborated on polymer modification experimental protocols. Operated analytical characterization instruments including SEM, FTIR, DSC, and TGA, correlating molecular morphology changes with thermal degradation profiles."
  },
  {
    period: "2023 – Present",
    role: "Joint President",
    org: "Indian Institute of Chemical Engineers (IIChE), BIT Mesra",
    location: "Ranchi, India",
    details:
      "Leading the chemical engineering student chapter. Coordinating technical symposia, research talks, and student workshops on process modeling, simulation, and computational tools."
  }
];

const skillGroups = [
  {
    label: "Scientific ML & Modeling",
    items: "Neural Operators (FNO, DeepONet), BoTorch Bayesian Optimization, Navier-Stokes, SciPy Optimize, CFD"
  },
  {
    label: "Machine Learning & AI",
    items: "XGBoost, Scikit-Learn, PyTorch, Gemini Multimodal API, Named Entity Recognition, Isolation Forest"
  },
  {
    label: "Data & Systems",
    items: "Apache Kafka, PostgreSQL, Docker, FastAPI, Grafana, WebSockets, Next.js, TypeScript, Python"
  },
  {
    label: "Laboratory & Characterization",
    items: "Proximate Analysis (ASTM D3172), SEM, FTIR, DSC, TGA, Polymer Characterization"
  }
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeCert, setActiveCert] = useState<{ title: string; issuer: string; image: string } | null>(null);

  const email = "shekharsameer2308@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-accent selection:text-white">
      
      <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24 space-y-16">
        
        {/* HEADER */}
        <header className="flex items-start justify-between gap-4 border-b border-border pb-8">
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-fg">
              Sameer Shekhar
            </h1>
            <p className="text-sm text-fg-muted font-normal">
              Chemical Engineering &times; Machine Learning &times; Scientific Computing
            </p>
            <p className="text-xs text-fg-subtle pt-0.5">
              BIT Mesra &middot; Class of 2027 &middot; Ranchi, India
            </p>
          </div>

          <div className="flex items-center gap-2">
            <LampToggle />
          </div>
        </header>

        {/* BIO / INTRODUCTION */}
        <section className="space-y-4 text-base leading-relaxed text-fg-muted font-normal">
          <p>
            I am a final-year Chemical Engineering student at{" "}
            <span className="text-fg font-medium">BIT Mesra</span> and Joint President of IIChE. Rather than treating software and machine learning in isolation, I build computational tools where physical domain constraints, transport phenomena, and thermodynamics meet rigorous mathematical modeling.
          </p>
          <p>
            My work focuses on{" "}
            <strong className="text-fg font-medium">scientific machine learning</strong> (neural operator surrogates for PDEs and catalytic reactors),{" "}
            <strong className="text-fg font-medium">industrial analytics</strong> (predictive quality modeling and linear programming blend optimization), and{" "}
            <strong className="text-fg font-medium">real-time streaming architectures</strong>.
          </p>
          <p>
            Previously, I worked on coal quality testing and assay analytics at{" "}
            <span className="text-fg font-medium">Central Coalfields Limited</span> and materials characterization (SEM, FTIR, DSC, TGA) at{" "}
            <span className="text-fg font-medium">Tata Steel R&D</span>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              href="https://github.com/shekharsameer2308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-fg hover:underline underline-offset-4 decoration-border font-medium"
            >
              GitHub <ArrowUpRight size={13} className="text-fg-subtle" />
            </a>
            <a
              href="https://linkedin.com/in/sameershekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-fg hover:underline underline-offset-4 decoration-border font-medium"
            >
              LinkedIn <ArrowUpRight size={13} className="text-fg-subtle" />
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 text-fg hover:underline underline-offset-4 decoration-border font-medium"
            >
              Email <ArrowUpRight size={13} className="text-fg-subtle" />
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
            >
              {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span>{copied ? "Copied address" : "Copy email"}</span>
            </button>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="space-y-6 pt-4">
          <div className="flex items-baseline justify-between border-b border-border pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Selected Projects
            </h2>
            <span className="text-xs text-fg-subtle font-mono">01 &ndash; 05</span>
          </div>

          <div className="space-y-10 divide-y divide-border">
            {projects.map((project, idx) => (
              <article key={project.title} className={idx === 0 ? "space-y-2.5" : "pt-8 space-y-2.5"}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-fg tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs text-fg-subtle font-mono">
                      &middot; {project.subtitle}
                    </span>
                  </div>

                  {project.metric && (
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
                      {project.metric}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-fg-muted font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
                  <div className="flex flex-wrap gap-1.5 font-mono text-fg-subtle">
                    {project.stack.map((item, i) => (
                      <span key={item}>
                        {item}{i < project.stack.length - 1 ? " &middot;" : ""}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 font-medium">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-fg hover:underline underline-offset-4"
                    >
                      Source <ArrowUpRight size={11} className="text-fg-subtle" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-fg hover:underline underline-offset-4"
                      >
                        Live Demo <ArrowUpRight size={11} className="text-fg-subtle" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="space-y-6 pt-4">
          <div className="flex items-baseline justify-between border-b border-border pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Experience & Leadership
            </h2>
            <span className="text-xs text-fg-subtle font-mono">2023 &ndash; Present</span>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.role} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-semibold text-fg">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-fg-muted font-medium">
                      {exp.org} &middot; <span className="text-fg-subtle">{exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-fg-subtle whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-fg-muted pt-0.5">
                  {exp.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL COMPETENCIES */}
        <section className="space-y-6 pt-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Technical Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="p-3.5 rounded-lg border border-border bg-card space-y-1">
                <div className="text-xs font-semibold text-fg">{group.label}</div>
                <p className="text-xs text-fg-muted leading-relaxed font-mono">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="space-y-6 pt-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-fg">
              Education & Credentials
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-fg">
                  Birla Institute of Technology, Mesra
                </h3>
                <p className="text-xs text-fg-muted">
                  Bachelor of Technology in Chemical Engineering &middot; Ranchi, Jharkhand
                </p>
              </div>
              <span className="text-xs font-mono text-fg-subtle">2023 &ndash; 2027</span>
            </div>

            <div className="pt-2">
              <div className="text-xs font-medium text-fg-muted mb-2">Verified Certifications:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {certs.map((c) => (
                  <button
                    key={c.title}
                    onClick={() => setActiveCert(c)}
                    className="text-left p-2.5 rounded border border-border hover:bg-card hover:border-fg-subtle transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-medium text-fg group-hover:underline underline-offset-2">
                        {c.title}
                      </div>
                      <div className="text-[11px] text-fg-subtle">{c.issuer}</div>
                    </div>
                    <span className="text-[10px] font-mono text-fg-subtle group-hover:text-fg pl-2">
                      View
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-fg-subtle">
          <div>
            &copy; {new Date().getFullYear()} Sameer Shekhar &middot; Ranchi, India
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${email}`} className="text-fg-muted hover:text-fg transition-colors">
              shekharsameer2308@gmail.com
            </a>
            <a href="#" className="text-fg-muted hover:text-fg transition-colors">
              Top &uarr;
            </a>
          </div>
        </footer>

      </main>

      {/* Certificate Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-card border border-border rounded-xl p-5 max-w-xl w-full shadow-2xl relative space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold text-fg">{activeCert.title}</h4>
                <p className="text-xs text-fg-muted">{activeCert.issuer}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1 rounded text-fg-subtle hover:text-fg hover:bg-bg-subtle transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="rounded-lg overflow-hidden border border-border bg-bg-subtle max-h-[60vh] flex items-center justify-center">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-auto max-h-[58vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
