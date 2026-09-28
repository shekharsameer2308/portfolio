import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  num: string
  title: string
}

export function SectionHeader({ num, title, className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-16", className)} {...props}>
      <span className="font-mono text-tech-sm opacity-50">[{num}]</span>
      <h2 className="text-xl font-sans tracking-[0.2em] uppercase text-inherit font-semibold">
        {title}
      </h2>
      <div className="flex-1 h-[1px] bg-current opacity-10 ml-4" />
    </div>
  )
}
