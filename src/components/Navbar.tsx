"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const tabs = [
    { name: 'About', color: 'bg-pink-300' },
    { name: 'Projects', color: 'bg-yellow-300' },
    { name: 'Experience', color: 'bg-green-300' },
    { name: 'Certifications', color: 'bg-blue-300' }
  ];

  return (
    <nav className="fixed top-20 right-0 z-50 flex flex-col gap-4">
      {tabs.map((tab, i) => (
        <motion.a
          key={tab.name}
          href={`#${tab.name.toLowerCase()}`}
          whileHover={{ x: -10 }}
          className={`px-4 py-2 ${tab.color} border-y-2 border-l-2 border-slate-900 rounded-l-xl font-bold text-slate-900 shadow-[-4px_4px_0px_#0f172a] transform origin-right transition-transform hover:-rotate-2 text-sm md:text-base cursor-pointer`}
        >
          {tab.name}
        </motion.a>
      ))}
    </nav>
  );
};
