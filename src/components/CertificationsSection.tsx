"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export const CertificationsSection = () => {
  if (!portfolioData.certifications || portfolioData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative z-20 max-w-7xl mx-auto px-4 py-32 border-t border-white/[0.04]">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-widest">Credentials</h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Certifications.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.certifications.map((cert: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.04] bg-[#0c0c0e]/40 backdrop-blur-md hover:border-white/[0.12] transition-colors h-full"
          >
            {cert.image ? (
               <div className="relative w-full aspect-video border-b border-white/[0.04] overflow-hidden">
                 <Image 
                   src={cert.image} 
                   alt={cert.title} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 to-transparent" />
               </div>
            ) : (
               <div className="relative w-full aspect-video border-b border-white/[0.04] bg-white/[0.02] flex items-center justify-center">
                 <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">Document Pending</span>
               </div>
            )}
            
            <div className="p-6 flex-1 flex flex-col justify-between">
               <div>
                 <h4 className="text-lg font-medium text-white mb-2 leading-snug">{cert.title}</h4>
                 <p className="text-sm font-mono text-cyan-400/80 mb-4">{cert.issuer}</p>
               </div>
               <span className="text-xs text-zinc-500 font-mono tracking-widest">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
