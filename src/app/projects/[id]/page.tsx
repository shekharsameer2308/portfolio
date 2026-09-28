import React from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans p-4 md:p-8 selection:bg-white selection:text-black">
      <div className="max-w-4xl mx-auto space-y-12 py-12">
        <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to systems
        </Link>
        
        <header className="space-y-4">
          <div className="flex justify-between items-start">
             <span className="text-xs font-mono text-zinc-500">{project.num}</span>
             <span className={`text-xs font-mono px-2 py-1 rounded uppercase ${project.status === 'operational' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-800 text-zinc-400'}`}>
               {project.status}
             </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white">{project.title}</h1>
          <p className="text-xl text-zinc-400">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map(tech => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">{tech}</span>
            ))}
          </div>
        </header>

        <section className="space-y-6 pt-8 border-t border-zinc-800">
           <h2 className="text-sm font-mono text-white mb-2 uppercase">Overview</h2>
           <p className="text-lg leading-relaxed text-zinc-300">{project.description}</p>
        </section>

        {project.caseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
             <section className="space-y-4">
               <h2 className="text-sm font-mono text-white mb-2 uppercase">Context & Problem</h2>
               <p className="text-zinc-400 leading-relaxed">{project.caseStudy.problem}</p>
               <p className="text-zinc-400 leading-relaxed">{project.caseStudy.context}</p>
             </section>
             <section className="space-y-4">
               <h2 className="text-sm font-mono text-white mb-2 uppercase">Approach</h2>
               <p className="text-zinc-400 leading-relaxed">{project.caseStudy.approach}</p>
             </section>
          </div>
        )}
        
        {project.caseStudy?.architecture && (
          <section className="space-y-6 pt-8 border-t border-zinc-800">
             <h2 className="text-sm font-mono text-white mb-2 uppercase">Architecture</h2>
             <p className="text-zinc-300">{project.caseStudy.architecture.description}</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.caseStudy.architecture.nodes.map((node: any) => (
                   <div key={node.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                      <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">{node.type}</div>
                      <h3 className="text-white font-medium">{node.label}</h3>
                      <p className="text-sm text-zinc-400 mt-1">{node.sublabel}</p>
                   </div>
                ))}
             </div>
          </section>
        )}

        <footer className="pt-12 flex justify-between items-center border-t border-zinc-800">
          <div className="flex gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <Github size={16} /> Repository
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <ExternalLink size={16} /> Live System
              </a>
            )}
          </div>
          <div className="w-2 h-2 rounded-full bg-zinc-800" />
        </footer>
      </div>
    </main>
  );
}
