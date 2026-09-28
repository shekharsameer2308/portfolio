"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const WashiTabDivider = () => {
  const tabs = [
    { name: 'About', color: 'bg-pastel-pink' },
    { name: 'Projects', color: 'bg-pastel-purple' },
    { name: 'Experience', color: 'bg-pastel-green' },
  ];

  return (
    <nav className="fixed right-0 top-32 z-50 flex flex-col gap-4">
      {tabs.map((tab, i) => (
        <motion.a
          key={tab.name}
          href={`#${tab.name.toLowerCase()}`}
          whileHover={{ x: -10 }}
          className={`px-4 py-2 ${tab.color} border-y-2 border-l-2 border-ink rounded-l-xl font-handwriting text-2xl font-bold text-ink shadow-[-4px_4px_0px_#1e293b] transform origin-right transition-transform hover:-rotate-2 cursor-pointer opacity-90`}
        >
          {tab.name}
        </motion.a>
      ))}
    </nav>
  );
};
