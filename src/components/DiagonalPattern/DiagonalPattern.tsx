import React from 'react'
import clsx from 'clsx'

interface DiagonalPatternProps {
  color: 'teal' | 'green' | 'lime' | 'orange'
  className?: string
}

export const DiagonalPattern: React.FC<DiagonalPatternProps> = ({ color, className }) => {
  const colorClasses = {
    teal: 'from-[#00B2A9]/20 via-[#00B2A9]/40 to-[#00B2A9]',
    green: 'from-emerald-400/20 via-emerald-500/40 to-emerald-600',
    lime: 'from-lime-400/20 via-lime-500/40 to-lime-600',
    orange: 'from-orange-300/20 via-orange-400/40 to-orange-500',
  }

  return (
    <div className={clsx('absolute inset-0 overflow-hidden', className)}>
      {/* First diagonal shape */}
      <div
        className={clsx(
          'absolute right-0 top-0 h-full w-[60%]',
          'bg-gradient-to-br',
          colorClasses[color],
        )}
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />
      {/* Second diagonal shape (overlay) */}
      <div
        className={clsx(
          'absolute right-0 top-0 h-full w-[45%]',
          'bg-gradient-to-br',
          colorClasses[color],
          'opacity-80',
        )}
        style={{
          clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 10% 100%)',
        }}
      />
      {/* Third diagonal shape (overlay) */}
      <div
        className={clsx(
          'absolute right-0 top-0 h-full w-[30%]',
          'bg-gradient-to-br',
          colorClasses[color],
          'opacity-60',
        )}
        style={{
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 20% 100%)',
        }}
      />
    </div>
  )
}
