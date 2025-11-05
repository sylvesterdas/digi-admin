import React from 'react'
import Link from 'next/link'
import { DiagonalPattern } from '../DiagonalPattern/DiagonalPattern'

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color: 'teal' | 'green' | 'lime' | 'orange'
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  href,
  color,
}) => {
  const bgColors = {
    teal: 'bg-[#E0F7F6]',
    green: 'bg-emerald-50',
    lime: 'bg-lime-50',
    orange: 'bg-orange-50',
  }

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg transition-all hover:shadow-lg"
    >
      <div className={`relative ${bgColors[color]} p-6 min-h-[180px] flex flex-col justify-between`}>
        <DiagonalPattern color={color} />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-midnight">{icon}</div>
            <div>
              <div className="text-sm font-normal text-midnight">Komm.ONE</div>
              <h3 className="text-xl font-bold text-midnight">{title}</h3>
            </div>
          </div>
          <p className="text-sm text-midnight/80 mt-3">{description}</p>
        </div>
      </div>
    </Link>
  )
}
