"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ConnectingThread() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Calculate a fixed path that fills the viewport
  // We'll use strokeDashoffset mapping to make it feel like it's moving
  const generatePath = () => {
    let path = `M 50 0 `;
    for (let i = 1; i <= 10; i++) {
      const y = i * 10; // 0 to 100 viewbox units
      const x = i % 2 === 0 ? 50 : 30; 
      const prevY = (i - 1) * 10;
      const prevX = (i - 1) % 2 === 0 ? 50 : 30;
      const cp1y = prevY + 5;
      const cp2y = y - 5;
      path += `C ${prevX} ${cp1y}, ${x} ${cp2y}, ${x} ${y} `;
    }
    return path;
  };

  const pathOffset = useTransform(smoothProgress, [0, 1], [0, -200]);

  return (
    <div className="fixed inset-0 w-full h-[100vh] pointer-events-none z-30 opacity-20">
      <svg 
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <motion.path
          d={generatePath()}
          fill="none"
          stroke="var(--flare-start)"
          strokeWidth="0.2"
          strokeDasharray="4 8"
          strokeDashoffset={pathOffset}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
