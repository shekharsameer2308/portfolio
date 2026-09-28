"use client";
import React from 'react';

export const NotebookContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-notebook text-ink font-sans selection:bg-pastel-pink selection:text-ink overflow-x-hidden">
      {/* Graph paper square grid */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          backgroundPosition: '0 0, 0 0'
        }}
      />
      {/* Subtle paper grain */}
      <div className="fixed inset-0 opacity-[0.2] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24">
        {children}
      </div>
    </div>
  );
};
