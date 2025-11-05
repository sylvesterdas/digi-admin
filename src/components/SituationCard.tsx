'use client'

import Link from 'next/link'
import * as Icons from 'lucide-react'
import { Info } from 'lucide-react'
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
        'group relative flex flex-col gap-4 rounded-lg',
        'bg-white border border-gray-200 p-5 transition-all duration-200',
        'hover:shadow-lg',
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-link/10 p-2.5 text-link">
            <LucideIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-midnight leading-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      )}
      <div className="mt-auto flex items-center gap-2 text-sm text-link">
        <Info className="h-4 w-4" />
        <span>Mehr Info</span>
      </div>
    </Link>
  )
}
