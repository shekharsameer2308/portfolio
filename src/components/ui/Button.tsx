import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-medium",
    md: "px-4 py-2 text-sm font-medium",
    lg: "px-5 py-2.5 text-base font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold shadow-sm shadow-cyan-950/40 active:translate-y-px transition-all border border-cyan-400/60",
    secondary:
      "bg-surface-elevated text-text-primary hover:bg-surface-hover border border-border hover:border-border-highlight active:translate-y-px transition-all",
    outline:
      "bg-transparent text-text-secondary hover:text-text-primary border border-border hover:border-cyan-500/50 hover:bg-cyan-950/20 active:translate-y-px transition-all",
    ghost:
      "bg-transparent text-text-muted hover:text-text-primary hover:bg-surface-raised active:translate-y-px transition-all",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-mono tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
