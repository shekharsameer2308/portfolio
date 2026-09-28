import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-technical",
        "font-mono text-tech-xs text-text-muted",
        "bg-surface-distant border border-border-subtle",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
