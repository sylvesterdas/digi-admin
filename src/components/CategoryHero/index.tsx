import React from 'react'
import * as Icons from 'lucide-react'

interface CategoryHeroProps {
  title: string
  icon: string
  variant?: 'teal' | 'green' | 'lime' | 'orange'
}

export const CategoryHero: React.FC<CategoryHeroProps> = ({ 
  title, 
  icon,
  variant = 'teal' 
}) => {
  const LucideIcon = (Icons as any)[icon] || Icons.FileText
  
  const bgColorMap = {
    teal: 'bg-category-teal-light',
    green: 'bg-category-green-light',
    lime: 'bg-category-lime-light',
    orange: 'bg-category-orange-light',
  }
  
  const iconColorMap = {
    teal: 'bg-category-teal text-white',
    green: 'bg-category-green text-white',
    lime: 'bg-category-lime text-white',
    orange: 'bg-category-orange text-white',
  }

  const shapeColorMap = {
    teal: '#00B2A9',
    green: '#00A651',
    lime: '#A4D233',
    orange: '#FF9E1B',
  }

  return (
    <div className={`relative ${bgColorMap[variant]} py-16`}>
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex items-center gap-6">
          <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${iconColorMap[variant]}`}>
            <LucideIcon className="h-10 w-10" strokeWidth={1.5} />
          </div>
          <div>
            <div className="mb-1 text-base font-normal text-midnight">Komm.ONE</div>
            <h1 className="text-3xl font-bold text-midnight md:text-4xl">{title}</h1>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 bottom-0 overflow-hidden pointer-events-none" style={{ width: '50%' }}>
        <svg 
          className="absolute right-0 top-0 h-full" 
          width="700" 
          height="200" 
          viewBox="0 0 700 200" 
          preserveAspectRatio="xMaxYMid meet"
          fill="none"
        >
          <path 
            d="M400 0 L700 0 L700 90 L580 160 Z" 
            fill={shapeColorMap[variant]}
            opacity="0.5"
          />
          <path 
            d="M550 110 L700 60 L700 200 L480 200 Z" 
            fill={shapeColorMap[variant]}
            opacity="0.35"
          />
        </svg>
      </div>
    </div>
  )
}
