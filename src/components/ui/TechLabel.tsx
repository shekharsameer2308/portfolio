import { cn } from "@/lib/utils"

interface TechLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean
}

export function TechLabel({ children, active, className, ...props }: TechLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-tech-xs tracking-wider uppercase",
        active ? "text-flare" : "text-text-muted",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
