"use client";

import React from "react";
import { ArchitectureNode } from "@/types";
import { Database, Server, Cpu, Cloud, Monitor, ArrowRight, Waypoints } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowDiagramProps {
  nodes: ArchitectureNode[];
  asciiDiagram?: string;
}

const iconMap: Record<ArchitectureNode["type"], React.ReactNode> = {
  source: <Cloud className="w-5 h-5" />,
  stream: <Waypoints className="w-5 h-5" />,
  processing: <Cpu className="w-5 h-5" />,
  storage: <Database className="w-5 h-5" />,
  model: <Server className="w-5 h-5 text-flare" />,
  api: <Server className="w-5 h-5" />,
  ui: <Monitor className="w-5 h-5" />,
  decision: <ArrowRight className="w-5 h-5" />
};

export function FlowDiagram({ nodes, asciiDiagram }: FlowDiagramProps) {
  // If ASCII diagram is provided, render that (preferred for this terminal aesthetic)
  if (asciiDiagram) {
    return (
      <div className="font-mono text-[10px] sm:text-xs leading-[1.2] whitespace-pre text-text-secondary overflow-x-auto selection:bg-flare/20">
        {asciiDiagram}
      </div>
    );
  }

  // Fallback visual flow (simple flex layout)
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 py-8">
      {nodes.map((node, index) => (
        <React.Fragment key={node.id}>
          <div className="flex-1 flex flex-col items-center justify-center p-4 border border-border-subtle rounded-technical bg-void/50 min-w-[120px]">
            <div className="text-text-muted mb-3">
              {iconMap[node.type]}
            </div>
            <div className="font-mono text-xs text-text-primary text-center uppercase tracking-wider mb-1">
              {node.label}
            </div>
            {node.sublabel && (
              <div className="font-mono text-[10px] text-text-muted text-center max-w-xs truncate">
                {node.sublabel}
              </div>
            )}
          </div>

          {index < nodes.length - 1 && (
            <div className="flex justify-center sm:rotate-0 rotate-90 my-2 sm:my-0 text-border-subtle">
              <ArrowRight className="w-4 h-4" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
