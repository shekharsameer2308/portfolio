"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const MarginAnnotation = ({ text, colorClass, className = "" }: { text: string, colorClass?: string, className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`absolute hidden lg:flex flex-col items-center gap-2 font-handwriting text-2xl -rotate-6 ${colorClass || 'text-pastel-purple'} ${className}`}
    >
      <span>{text}</span>
      <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-80">
        <path d="M10 10 Q 50 50, 90 90 M 70 90 L 90 90 L 90 70" fill="transparent" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
};
