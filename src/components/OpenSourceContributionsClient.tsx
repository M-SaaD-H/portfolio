'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { childVariant } from '@/components/ui/animation-wrapper'
import { type Contribution } from '@/lib/github-prs'

type Tab = 'all' | 'open' | 'merged'

const StatusBadge = ({ status }: { status: Contribution['status'] }) => {
  const configs = {
    MERGED: {
      label: 'Merged',
      className: 'text-violet-500',
    },
    OPEN: {
      label: 'Open',
      className: 'text-emerald-500',
    },
    DRAFT: {
      label: 'Draft',
      className: 'text-muted-foreground',
    },
  };

  const { label, className } = configs[status];

  return (
    <span className={cn('text-xs font-medium', className)}>
      {label}
    </span>
  )
}

const TabButton = ({
  tab,
  label,
  active,
  onClick,
}: {
  tab: Tab
  label: string
  active: boolean
  onClick: () => void
}) => (
  <button
    id={`contributions-tab-${tab}`}
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={cn(
      'relative px-3 py-1 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border rounded-md',
      active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
    )}
  >
    {label}
    {active && (
      <motion.div
        layoutId="contributions-minimal-tab-indicator"
        className="absolute inset-0 rounded-md bg-secondary"
        style={{ zIndex: -1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
      />
    )}
  </button>
)

interface OpenSourceContributionsClientProps {
  contributions: Contribution[]
}

export function OpenSourceContributionsClient({
  contributions,
}: OpenSourceContributionsClientProps) {
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [showAll, setShowAll] = useState(false);

  const merged = contributions.filter(c => c.status === 'MERGED');
  const open = contributions.filter(c => c.status === 'OPEN' || c.status === 'DRAFT');

  const tabData: Record<Tab, Contribution[]> = {
    all: contributions,
    open,
    merged,
  };

  const visibleContributions = tabData[activeTab];
  const INITIAL_COUNT = 5;
  const displayedContributions = showAll ? visibleContributions : visibleContributions.slice(0, INITIAL_COUNT);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setShowAll(false);
  }

  return (
    <div id="open-source" className="mt-8">
      {/* Header & Tabs Inline */}
      <div className="flex justify-between items-center mb-2">
        <motion.h3
          variants={childVariant}
          className="text-2xl font-bold tracking-tight"
        >
          Open Source
        </motion.h3>

        <motion.div
          variants={childVariant}
          role="tablist"
          aria-label="Filter contributions"
          className="flex items-center gap-1 border border-border p-0.5 rounded-lg bg-card shadow-sm"
        >
          <TabButton
            tab="all"
            label="All"
            active={activeTab === 'all'}
            onClick={() => handleTabChange('all')}
          />
          <TabButton
            tab="open"
            label="Open"
            active={activeTab === 'open'}
            onClick={() => handleTabChange('open')}
          />
          <TabButton
            tab="merged"
            label="Merged"
            active={activeTab === 'merged'}
            onClick={() => handleTabChange('merged')}
          />
        </motion.div>
      </div>

      {/* PR List */}
      <motion.div variants={childVariant} className="flex flex-col min-h-[350px] sm:min-h-[250px]">
        <AnimatePresence mode="wait">
          {visibleContributions.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-muted-foreground py-4"
            >
              No contributions found.
            </motion.p>
          ) : (
            <motion.div
              key={activeTab}
              variants={childVariant}
              className="flex flex-col"
            >
              {displayedContributions.map((c) => (
                <Link
                  key={`${c.repository.nameWithOwner}-${c.number}`}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-2 border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors px-2 -mx-2 rounded-lg"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono text-muted-foreground shrink-0 sm:w-12">
                      #{c.number}
                    </span>
                    <span className="text-sm truncate font-medium">
                      {c.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 shrink-0">
                    <span className="text-xs text-muted-foreground truncate max-w-[120px] sm:max-w-none">
                      {c.repository.nameWithOwner}
                    </span>
                    <StatusBadge status={c.status} />
                  </div>
                </Link>
              ))}

              {visibleContributions.length > INITIAL_COUNT && (
                <motion.div
                  variants={childVariant}
                  className="pt-4 pb-2 flex justify-center"
                >
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-all px-3 py-1.5 rounded-full cursor-pointer border border-border bg-card shadow-sm hover:shadow"
                  >
                    {showAll ? 'Show less' : `Show all (${visibleContributions.length})`}
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
