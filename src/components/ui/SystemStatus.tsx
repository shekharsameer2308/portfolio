import { cn } from "@/lib/utils"

interface SystemStatusProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SystemStatus({ className, ...props }: SystemStatusProps) {
  return (
    <div className={cn("flex items-center gap-2 font-mono text-tech-sm", className)} {...props}>
      <span className="text-status-online text-[10px]">●</span>
      <span className="text-text-secondary tracking-widest uppercase">System Online</span>
    </div>
  )
}
