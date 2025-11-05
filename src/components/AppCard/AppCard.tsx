import React from 'react'
import Link from 'next/link'
import { Info, Bookmark } from 'lucide-react'

interface AppCardProps {
  title: string
  abbreviation: string
  href: string
  color?: 'teal' | 'green' | 'lime' | 'orange' | 'blue' | 'purple'
  bookmarked?: boolean
}

export const AppCard: React.FC<AppCardProps> = ({
  title,
  abbreviation,
  href,
  color = 'teal',
  bookmarked = false,
}) => {
  const colorClasses = {
    teal: 'bg-[#00B2A9] border-[#00B2A9]',
    green: 'bg-emerald-500 border-emerald-500',
    lime: 'bg-lime-500 border-lime-500',
    orange: 'bg-orange-400 border-orange-400',
    blue: 'bg-blue-500 border-blue-500',
    purple: 'bg-purple-500 border-purple-500',
  }

  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start gap-3 mb-3">
        <div className={`flex items-center justify-center w-12 h-12 rounded border-t-4 ${colorClasses[color]}`}>
          <span className="text-sm font-bold text-midnight bg-white px-2 py-1 rounded">
            {abbreviation}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-midnight leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <Link
          href={href}
          className="flex items-center gap-1 text-xs text-gray-600 hover:text-midnight transition-colors"
        >
          <Info className="w-4 h-4" />
          <span>Mehr Info</span>
        </Link>
        <button
          className={`p-1 transition-colors ${
            bookmarked ? 'text-midnight' : 'text-gray-300 hover:text-gray-600'
          }`}
          aria-label="Bookmark"
        >
          <Bookmark className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  )
}
