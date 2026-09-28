"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Award } from 'lucide-react';

export const CertificationsSection = () => {
  if (!portfolioData.certifications || portfolioData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative z-20 max-w-4xl mx-auto px-4 py-32 border-t border-white/[0.04]">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-cyan-400 mb-4 uppercase tracking-widest">Credentials</h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Certifications.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.certifications.map((cert: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-white/[0.04] bg-[#0c0c0e]/40 backdrop-blur-md hover:border-white/[0.1] transition-colors flex items-start gap-4 group"
          >
            <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-full text-zinc-500 group-hover:text-cyan-400 transition-colors shrink-0">
               <Award size={24} />
            </div>
            <div>
               <h4 className="text-lg font-medium text-white mb-1">{cert.title}</h4>
               <p className="text-sm font-mono text-cyan-400 mb-2">{cert.issuer}</p>
               <span className="text-xs text-zinc-500 font-mono tracking-widest">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
