import Link from 'next/link'
import type { Job } from '@/lib/data'
import { MapPin, Briefcase, Calendar, ExternalLink } from 'lucide-react'

interface JobCardProps {
  job: Job
  compact?: boolean
}

export default function JobCard({ job, compact = false }: JobCardProps) {
  if (compact) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
        <h4 className="font-sans font-bold text-sm text-foreground line-clamp-1">{job.title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{job.company}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" aria-hidden="true" />{job.location}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" aria-hidden="true" />Closes {job.closingDate}</span>
        </div>
        <Link
          href="/jobs"
          className="mt-3 inline-block text-xs font-semibold text-primary hover:text-accent-foreground transition-colors"
        >
          View all jobs &rarr;
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif font-bold text-base leading-snug">{job.title}</h3>
          <span className="shrink-0 text-xs bg-secondary text-secondary-foreground font-semibold px-2 py-0.5 rounded">
            {job.industry}
          </span>
        </div>
        <p className="font-sans font-semibold text-sm text-primary mt-0.5">{job.company}</p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{job.description}</p>

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[var(--gold)]" aria-hidden="true" />
          {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-[var(--gold)]" aria-hidden="true" />
          {job.industry}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" aria-hidden="true" />
          Closing: {job.closingDate}
        </span>
      </div>

      <a
        href={job.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Apply Now <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </div>
  )
}
