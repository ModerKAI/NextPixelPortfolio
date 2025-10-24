'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '@/app/providers'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { setIsLoaded } = useLoading()

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Wait a bit before hiding and notify that loading is complete
          setTimeout(() => {
            setIsLoading(false)
            setIsLoaded(true)
          }, 500)
          return 100
        }
        // Increase progress (faster at start, slower at end)
        const increment = prev < 60 ? 3 : prev < 90 ? 2 : 1
        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [setIsLoaded])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-bg"
        >
          {/* Video Animation */}
          <div className="relative flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/videos/loading.mp4" type="video/mp4" />
              </video>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-mint/20 blur-3xl animate-pulse" />
            </motion.div>

            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="text-6xl font-bold gradient-text mb-4">
                {progress}%
              </div>

              {/* Progress bar */}
              <div className="w-64 h-2 bg-dark-bg-alt rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-accent-purple to-accent-mint"
                />
              </div>

              {/* Loading text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 text-text-secondary text-sm"
              >
                {progress < 30 && "Initializing..."}
                {progress >= 30 && progress < 60 && "Loading assets..."}
                {progress >= 60 && progress < 90 && "Almost there..."}
                {progress >= 90 && "Ready!"}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
