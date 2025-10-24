
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'purple' | 'mint' | 'white'
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'purple', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  const colorClasses = {
    purple: 'border-accent-purple border-t-transparent',
    mint: 'border-accent-mint border-t-transparent',
    white: 'border-white border-t-transparent',
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full ${className}`}
    />
  )
}
