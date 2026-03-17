'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JobCard from '@/components/JobCard'
import { jobs } from '@/lib/data'
import { Search, Filter } from 'lucide-react'

const allLocations = ['All', ...Array.from(new Set(jobs.map((j) => j.location)))]
const allIndustries = ['All', ...Array.from(new Set(jobs.map((j) => j.industry)))]

export default function JobsPage() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('All')
  const [industry, setIndustry] = useState('All')

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        !search ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
      const matchLocation = location === 'All' || job.location === location
      const matchIndustry = industry === 'All' || job.industry === industry
      return matchSearch && matchLocation && matchIndustry
    })
  }, [search, location, industry])

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="border-b-2 border-primary pb-3 mb-8">
          <h1 className="font-serif font-black text-3xl text-foreground">Job Listings</h1>
          <p className="font-sans text-muted-foreground text-sm mt-1">
            Find employment opportunities across the North West Province
          </p>
        </div>

        {/* Filters */}
        <div className="bg-secondary rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4 items-start md:items-end" aria-label="Filter jobs">
          {/* Search */}
          <div className="flex-1 min-w-0">
            <label htmlFor="job-search" className="block text-xs font-sans font-semibold text-foreground mb-1">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
              <input
                id="job-search"
                type="search"
                placeholder="Job title or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-border rounded bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Location */}
          <div className="w-full md:w-48">
            <label htmlFor="location-filter" className="block text-xs font-sans font-semibold text-foreground mb-1">
              Location
            </label>
            <select
              id="location-filter"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-border rounded bg-card text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {allLocations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>

          {/* Industry */}
          <div className="w-full md:w-48">
            <label htmlFor="industry-filter" className="block text-xs font-sans font-semibold text-foreground mb-1">
              Industry
            </label>
            <select
              id="industry-filter"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full border border-border rounded bg-card text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {allIndustries.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          {/* Reset */}
          <button
            onClick={() => { setSearch(''); setLocation('All'); setIndustry('All') }}
            className="flex items-center gap-1.5 text-xs font-sans font-semibold text-muted-foreground hover:text-foreground border border-border px-3 py-2 rounded bg-card transition-colors self-end"
          >
            <Filter className="w-3.5 h-3.5" aria-hidden="true" /> Reset
          </button>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6 font-sans">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> job{filtered.length !== 1 ? 's' : ''}
          {location !== 'All' && ` in ${location}`}
          {industry !== 'All' && ` · ${industry}`}
        </p>

        {/* Job grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-serif">No jobs match your filters.</p>
            <p className="text-sm mt-2">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
