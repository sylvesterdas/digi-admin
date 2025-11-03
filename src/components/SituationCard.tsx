'use client'

import Link from 'next/link'
import * as Icons from 'lucide-react'
import { cn } from '@/utilities/ui'

interface SituationCardProps {
  title: string
  icon: string
  href?: string
  description?: string
}

export function SituationCard({ title, icon, href = '#', description }: SituationCardProps) {
  const LucideIcon = (Icons as any)[icon] || Icons.FileText

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col items-start gap-3 rounded-lg border border-border',
        'bg-card p-6 transition-all duration-200',
        'hover:border-primary hover:shadow-md hover:scale-[1.02]',
      )}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <LucideIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none text-foreground group-hover:text-primary">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  )
}
