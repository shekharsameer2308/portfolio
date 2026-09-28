"use client";

import React, { useState, useEffect } from "react";
import { Database, Cpu, Network, LayoutDashboard, CheckCircle2, Activity, GitBranch } from "lucide-react";

export function SystemPipelineVisual() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: "data",
      label: "DATA SOURCES",
      sub: "Sensor logs, Seam assays, Event streams",
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      status: "INGESTING",
      metric: "1.4k ev/sec",
    },
    {
      id: "pipeline",
      label: "PIPELINES & ETL",
      sub: "Kafka topics, DuckDB schemas, Validation",
      icon: <GitBranch className="w-4 h-4 text-cyan-400" />,
      status: "VALIDATED",
      metric: "<15ms p99",
    },
    {
      id: "models",
      label: "MODELS & RAG",
      sub: "XGBoost GCV, FinBERT, Qdrant vectors",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      status: "SERVING",
      metric: "0.94 r² score",
    },
    {
      id: "systems",
      label: "PRODUCTION APIs",
      sub: "FastAPI REST, WebSockets, Docker clusters",
      icon: <Network className="w-4 h-4 text-cyan-400" />,
      status: "ONLINE",
      metric: "99.98% SLA",
    },
    {
      id: "decisions",
      label: "DECISION ENGINES",
      sub: "Blending optimizer, Market alerts, Scoring",
      icon: <LayoutDashboard className="w-4 h-4 text-cyan-400" />,
      status: "DISPATCHED",
      metric: "Optimal formulation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [stages.length]);

  return (
    <div className="w-full rounded-lg border border-border bg-surface p-4 sm:p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden font-mono">
      {/* Subtle top header bar with telemetry */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-text-primary tracking-wider">
            SYSTEM CONSOLE // TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-text-muted">
          <span>HOST: <span className="text-cyan-400">CLUSTER-01</span></span>
          <span className="hidden sm:inline">STATE: <span className="text-emerald-400">OPTIMAL</span></span>
        </div>
      </div>

      {/* Pipeline Stages Horizontal/Vertical Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
        {stages.map((stage, idx) => {
          const isActive = activeStage === idx;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded border transition-all cursor-pointer relative ${
                isActive
                  ? "bg-cyan-950/40 border-cyan-500/70 shadow-md shadow-cyan-950/50"
                  : "bg-surface-raised/60 border-border-subtle hover:border-border hover:bg-surface-elevated"
              }`}
            >
              {/* Connector indicator for desktop */}
              {idx < stages.length - 1 && (
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-border-subtle text-[10px]">
                  →
                </div>
              )}

              <div className="flex items-center justify-between mb-1.5">
                <div className="p-1 rounded bg-surface border border-border-subtle">
                  {stage.icon}
                </div>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-600/40"
                      : "bg-surface text-text-muted border border-border-subtle"
                  }`}
                >
                  {stage.status}
                </span>
              </div>

              <div className="font-bold text-xs text-text-primary tracking-wide mb-1">
                {stage.label}
              </div>

              <p className="text-[11px] text-text-muted leading-snug line-clamp-2 mb-2">
                {stage.sub}
              </p>

              <div className="text-[10px] text-cyan-400/90 font-semibold pt-1 border-t border-border-subtle/50">
                {stage.metric}
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal Live Output Log */}
      <div className="mt-4 pt-3 border-t border-border-subtle bg-background/70 rounded p-3 text-[11px] text-text-secondary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-text-muted">STAGE ACTIVE:</span>
          <span className="text-cyan-300 font-semibold">
            {stages[activeStage].label} → {stages[activeStage].sub}
          </span>
        </div>
        <div className="text-[10px] text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>ALL WORKERS OPERATIONAL</span>
        </div>
      </div>
    </div>
  );
}
