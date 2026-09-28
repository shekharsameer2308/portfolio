"use client";
import React from 'react';

export const NotebookBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#fdfbf7] overflow-hidden">
      {/* Notebook ruled lines */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '100% 2rem',
          backgroundPosition: '0 2rem'
        }}
      />
      
      {/* Margin lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-20 w-[1px] bg-red-400/60" />
      <div className="absolute top-0 bottom-0 left-[28px] md:left-[84px] w-[1px] bg-red-400/60" />
      
      {/* Subtle paper grain */}
      <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
    </div>
  );
};
