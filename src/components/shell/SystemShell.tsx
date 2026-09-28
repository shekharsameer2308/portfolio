"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface SystemContextType {
  activeProject: number;
  setActiveProject: (index: number) => void;
}

const SystemContext = createContext<SystemContextType | null>(null);

export function useSystem() {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error("useSystem must be used within a SystemShell");
  }
  return context;
}

export function SystemShell({ children }: { children: ReactNode }) {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <SystemContext.Provider value={{ activeProject, setActiveProject }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
          delay: 0.1
        }}
        className="min-h-screen bg-void text-text-primary relative"
      >
        {children}
      </motion.div>
    </SystemContext.Provider>
  );
}
