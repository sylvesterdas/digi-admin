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
      <div className="flex items-center justify-center w-9 h-9 bg-midnight rounded">
        <span className="text-white font-bold text-sm">K</span>
      </div>
      <div className="flex flex-col gap-0 leading-none">
        <span className="text-midnight font-normal text-base leading-tight">Komm.ONE</span>
        <span className="text-midnight font-bold text-base leading-tight">Services Portal</span>
      </div>
    </div>
  )
}
