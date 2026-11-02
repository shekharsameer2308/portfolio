"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function KineticWave({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let step = 0;
    const isDark = resolvedTheme === "dark";

    const lines = [
      { frequency: 0.008, amplitude: 35, speed: 0.015, color: isDark ? "rgba(59, 130, 246, 0.4)" : "rgba(37, 99, 235, 0.25)" },
      { frequency: 0.012, amplitude: 25, speed: 0.02, color: isDark ? "rgba(99, 102, 241, 0.35)" : "rgba(79, 70, 229, 0.2)" },
      { frequency: 0.006, amplitude: 45, speed: 0.01, color: isDark ? "rgba(14, 165, 233, 0.3)" : "rgba(2, 132, 199, 0.15)" },
      { frequency: 0.015, amplitude: 20, speed: 0.025, color: isDark ? "rgba(168, 85, 247, 0.25)" : "rgba(147, 51, 234, 0.15)" }
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      lines.forEach((line, index) => {
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = line.color;

        const centerY = height * 0.5 + Math.sin(step * 0.5 + index) * 15;

        for (let x = 0; x < width; x += 3) {
          const y =
            centerY +
            Math.sin(x * line.frequency + step * line.speed * 60) * line.amplitude +
            Math.cos(x * 0.004 + step * 0.01) * (line.amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      step += 0.016;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none select-none ${className}`}
    />
  );
}
