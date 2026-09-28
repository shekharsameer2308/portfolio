"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const PastelHighlightCard = ({ 
  title, 
  children, 
  colorClass,
  delay = 0,
  rotate = "-rotate-1"
}: { 
  title: string, 
  children: React.ReactNode, 
  colorClass: string,
  delay?: number,
  rotate?: string
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, rotate: 0 }}
      className={`group relative flex flex-col p-6 bg-white border-2 border-ink rounded shadow-ink hover:shadow-ink-hover transition-all transform ${rotate} h-full`}
    >
      <div className={`absolute top-4 left-4 w-1/2 h-8 ${colorClass} mix-blend-multiply opacity-80 -rotate-2 -z-0 transition-all duration-300 group-hover:w-3/4 rounded-sm`} />
      
      <div className="relative z-10 mb-4">
         <h3 className="font-handwriting text-3xl font-bold text-ink leading-tight pt-1">{title}</h3>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col">
         {children}
      </div>
    </motion.div>
  );
};
