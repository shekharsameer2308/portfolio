import React from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function GithubActivitySection() {
  const verifiedRepositories = [
    {
      name: "analyzer",
      description: "Coal quality analytics, GCV prediction, anomaly detection and feedstock blending optimization platform.",
      language: "Python / TypeScript",
      url: "https://github.com/shekharsameer2308/analyzer",
      topics: ["machine-learning", "xgboost", "fastapi", "industrial-analytics", "nextjs"],
    },
    {
      name: "nexus",
      description: "Real-time e-commerce analytics platform with Kafka event streaming, star schema data warehouse, and Prometheus observability.",
      language: "Python / Docker",
      url: "https://github.com/shekharsameer2308/nexus",
      topics: ["kafka", "postgresql", "fastapi", "websockets", "prometheus"],
    },
    {
      name: "LLM-",
      description: "Scout: AI-powered market intelligence, FinBERT sentiment scoring, BERTopic modeling, and vector search RAG.",
      language: "Python / Qdrant",
      url: "https://github.com/shekharsameer2308/LLM-",
      topics: ["rag", "finbert", "bertopic", "qdrant", "fastapi"],
    },
    {
      name: "TrackFin",
      description: "Modern personal finance platform featuring automated categorization heuristics and cashflow analytics.",
      language: "Python / JavaScript",
      url: "https://github.com/shekharsameer2308/TrackFin",
      topics: ["flask", "chartjs", "sqlalchemy", "behavioral-analytics"],
    },
    {
      name: "emethanol-membrane-reactor",
      description: "Scientific machine learning (SciML) and surrogate models for e-methanol catalytic membrane reactors.",
      language: "Python / SciPy",
      url: "https://github.com/shekharsameer2308",
      topics: ["chemical-engineering", "sciml", "surrogate-modeling", "transport-phenomena"],
    },
  ];

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle">
      <SectionHeader
        number="07"
        subtitle="CODEBASE & REPOSITORIES"
        title="Built in Public"
        description="Transparent source repositories reflecting clean commit histories, containerized topologies, and modular architectures."
      />

      <div className="p-6 sm:p-8 rounded-lg border border-border bg-surface mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-surface-raised border border-border-subtle text-cyan-400">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono font-bold text-base text-text-primary">
                github.com/shekharsameer2308
              </div>
              <div className="text-xs text-text-muted font-mono">
                Open Source Repositories & Engineering Systems
              </div>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-xs font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
          >
            <span>Visit Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {verifiedRepositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded border border-border-subtle bg-surface-raised hover:border-cyan-500/50 hover:bg-surface-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 font-mono">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary group-hover:text-cyan-300">
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-text-muted group-hover:text-cyan-400" />
                </div>

                <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed mb-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border-subtle/50 flex items-center justify-between font-mono text-[10px] text-text-muted">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
                  {repo.language}
                </span>
                <span>Open Source</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
