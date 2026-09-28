"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export const CertificationsSection = () => {
  if (!portfolioData.certifications || portfolioData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative z-20 py-24 md:py-32">
      <div className="mb-16">
        <h2 className="inline-block px-4 py-1 mb-4 bg-white border-2 border-ink text-ink font-handwriting text-2xl font-bold transform -rotate-2 shadow-ink">
          Credentials
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-ink tracking-tight relative inline-block">
          <span className="relative z-10">Certifications.</span>
          <span className="absolute bottom-2 left-0 w-full h-6 bg-pastel-purple mix-blend-multiply opacity-80 -z-10 transform rotate-1"></span>
        </h3>
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
              className={`group flex flex-col bg-white p-4 border-2 border-ink rounded shadow-ink transform ${rotation} hover:-translate-y-2 hover:shadow-ink-hover transition-all h-full`}
            >
              {cert.image ? (
                <div className="relative w-full aspect-[4/3] border-2 border-ink bg-slate-100 overflow-hidden mb-4 rounded-sm">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[4/3] border-2 border-ink bg-slate-100 mb-4 rounded-sm flex items-center justify-center">
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Photo Missing</span>
                </div>
              )}
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-ink mb-2 leading-tight">{cert.title}</h4>
                  <p className="text-sm font-handwriting text-2xl text-slate-500 mb-4">{cert.issuer}</p>
                </div>
                <div className="flex items-center justify-between border-t-2 border-slate-200 border-dashed pt-2">
                  <span className="text-xs text-slate-500 font-bold px-2 py-1 bg-slate-100 rounded border border-slate-200">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
};
