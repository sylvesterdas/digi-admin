import React from 'react'

interface GeometricShapesProps {
  variant?: 'teal' | 'green' | 'lime' | 'orange'
  className?: string
}

export const GeometricShapes: React.FC<GeometricShapesProps> = ({ 
  variant = 'teal',
  className = '' 
}) => {
  const colorMap = {
    teal: {
      primary: '#00B2A9',
      secondary: '#008C85',
      light: '#4DD4CB'
    },
    green: {
      primary: '#00A651',
      secondary: '#008741',
      light: '#33C679'
    },
    lime: {
      primary: '#A4D233',
      secondary: '#8BC220',
      light: '#C2E564'
    },
    orange: {
      primary: '#FF9E1B',
      secondary: '#FF8C00',
      light: '#FFB84D'
    }
  }

  const colors = colorMap[variant]

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid slice"
    >
      {/* Background layer - lightest */}
      <path
        d="M 800 0 L 800 400 L 400 400 L 500 200 Z"
        fill={colors.light}
        opacity="0.3"
      />
      
      {/* Middle layer */}
      <path
        d="M 800 100 L 800 400 L 500 400 L 600 250 Z"
        fill={colors.primary}
        opacity="0.6"
      />
      
      {/* Foreground layer - darkest */}
      <path
        d="M 800 200 L 800 400 L 600 400 L 700 300 Z"
        fill={colors.secondary}
        opacity="0.8"
      />
    </svg>
  )
}
