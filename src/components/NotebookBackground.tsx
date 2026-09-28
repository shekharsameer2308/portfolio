"use client";
import React from 'react';

export const NotebookBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#fdfbf7] overflow-hidden">
      {/* Graph paper square grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          backgroundPosition: '0 0, 0 0'
        }}
      />
      
      {/* Subtle paper grain */}
      <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
    </div>
  );
};
