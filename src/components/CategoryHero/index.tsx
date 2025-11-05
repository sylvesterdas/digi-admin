import React from 'react'
import { GeometricShapes } from '@/components/GeometricShapes'
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

  return (
    <div className={`relative overflow-hidden ${bgColorMap[variant]} py-12`}>
      <GeometricShapes variant={variant} className="opacity-60" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className={`flex h-16 w-16 items-center justify-center rounded-full ${iconColorMap[variant]}`}>
            <LucideIcon className="h-8 w-8" />
          </div>
          <div>
            <div className="text-sm font-normal text-midnight">Komm.ONE</div>
            <h1 className="text-2xl font-bold text-midnight md:text-3xl">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
