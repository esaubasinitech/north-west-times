import type { Application } from '@/lib/data'
import { University, CalendarRange, ExternalLink } from 'lucide-react'

interface ApplicationCardProps {
  application: Application
}

export default function ApplicationCard({ application }: ApplicationCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 rounded-full p-2 shrink-0">
          <University className="w-5 h-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">Applications Open</span>
          <h3 className="font-serif font-bold text-base leading-snug mt-0.5">{application.institution}</h3>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{application.description}</p>

      <div className="flex flex-col gap-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CalendarRange className="w-3.5 h-3.5 text-[var(--gold)]" aria-hidden="true" />
          Opens: <span className="font-medium text-foreground ml-1">{application.openDate}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarRange className="w-3.5 h-3.5 text-destructive" aria-hidden="true" />
          Closes: <span className="font-medium text-foreground ml-1">{application.closeDate}</span>
        </span>
      </div>

      <a
        href={application.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-1.5 border border-primary text-primary text-sm font-semibold px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        Apply Online <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </div>
  )
}
