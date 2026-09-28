"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export const CertificationsSection = () => {
  if (!portfolioData.certifications || portfolioData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative z-20 max-w-7xl mx-auto px-8 py-24 md:py-32 md:pl-32">
      <div className="mb-16">
        <h2 className="inline-block px-3 py-1 mb-4 bg-purple-300 border-2 border-slate-900 text-slate-900 font-mono text-sm font-bold transform -rotate-2 shadow-[4px_4px_0px_#0f172a]">
          Credentials
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Certifications.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.certifications.map((cert: any, i: number) => {
          const rotation = i % 2 === 0 ? 'rotate-2' : '-rotate-1';
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group flex flex-col bg-white p-4 border-2 border-slate-900 rounded-lg shadow-[8px_8px_0px_#0f172a] transform ${rotation} hover:-translate-y-2 hover:shadow-[12px_12px_0px_#0f172a] transition-all h-full`}
            >
              {cert.image ? (
                <div className="relative w-full aspect-[4/3] border-2 border-slate-900 bg-slate-100 overflow-hidden mb-4 rounded">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[4/3] border-2 border-slate-900 bg-slate-100 mb-4 rounded flex items-center justify-center">
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Photo Missing</span>
                </div>
              )}
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-2 leading-tight">{cert.title}</h4>
                  <p className="text-sm font-bold text-blue-600 mb-4">{cert.issuer}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold font-mono px-2 py-1 bg-slate-100 rounded border border-slate-300">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
};
