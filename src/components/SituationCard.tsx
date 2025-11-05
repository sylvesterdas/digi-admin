'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Info, Bookmark } from 'lucide-react'
import { cn } from '@/utilities/ui'

interface SituationCardProps {
  title: string
  abbreviation: string
  category?: 'life' | 'business' | 'authority'
  href?: string
  description?: string
}

const categoryColors = {
  life: 'bg-category-teal text-white',
  business: 'bg-category-green text-white',
  authority: 'bg-category-lime text-midnight',
}

export function SituationCard({ 
  title, 
  abbreviation, 
  category = 'life',
  href = '#', 
}: SituationCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="group relative flex flex-col rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <button
        onClick={(e) => {
          e.preventDefault()
          setIsBookmarked(!isBookmarked)
        }}
        className={cn(
          'absolute top-4 right-4 p-1.5 rounded transition-colors',
          isBookmarked ? 'text-midnight' : 'text-gray-400 hover:text-gray-600'
        )}
        aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      >
        <Bookmark className={cn('h-5 w-5', isBookmarked && 'fill-current')} />
      </button>

      <Link href={href} className="flex flex-col p-6 flex-1">
        <div className={cn(
          'inline-flex items-center justify-center w-16 h-16 rounded font-bold text-xl mb-4',
          categoryColors[category]
        )}>
          {abbreviation}
        </div>

        <h3 className="text-base font-semibold text-midnight mb-auto">
          {title}
        </h3>

        <div className="mt-6 flex items-center gap-2 text-sm text-link font-medium">
          <Info className="h-4 w-4" />
          <span>Mehr Info</span>
        </div>
      </Link>
    </div>
  )
}
