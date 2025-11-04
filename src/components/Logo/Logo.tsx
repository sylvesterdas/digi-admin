import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <div className="flex items-center justify-center w-8 h-8 bg-midnight rounded">
        <span className="text-white font-bold text-lg">K</span>
      </div>
      <span className="text-midnight dark:text-white font-bold text-xl tracking-tight">
        Komm.ONE
      </span>
    </div>
  )
}
