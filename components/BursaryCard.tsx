import type { Bursary } from '@/lib/data'
import { GraduationCap, Calendar, Building2, ExternalLink } from 'lucide-react'

interface BursaryCardProps {
  bursary: Bursary
}

export default function BursaryCard({ bursary }: BursaryCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
      <div>
        <span className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wide">Bursary</span>
        <h3 className="font-serif font-bold text-base leading-snug mt-1">{bursary.title}</h3>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{bursary.description}</p>

      <div className="flex flex-col gap-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" aria-hidden="true" />
          <span className="font-medium text-foreground">{bursary.sponsor}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" aria-hidden="true" />
          {bursary.fieldOfStudy}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" aria-hidden="true" />
          Deadline: <span className="font-medium text-foreground ml-1">{bursary.deadline}</span>
        </span>
      </div>

      <a
        href={bursary.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-1.5 bg-[var(--gold)] text-[var(--gold-foreground)] text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Apply Now <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </div>
  )
}
