'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useLoading } from '@/app/providers'

export default function HeroSection() {
  const { isLoaded } = useLoading()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-mint/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Abstract lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <motion.path
            d="M100 200 Q500 100 900 200 T100 400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isLoaded ? 1 : 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M200 600 Q600 500 800 600 T200 800"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isLoaded ? 1 : 0 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A86CF5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4EF0C1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4EF0C1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A86CF5" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            We create websites that{' '}
            <span className="gradient-text">inspire</span> and{' '}
            <span className="gradient-text">perform</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Custom web solutions combining creativity and technology. 
            We use AI tools to amplify human creativity, not replace it.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-text-primary hover:border-accent-mint text-text-primary hover:text-accent-mint px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3"
              data-cursor="hover"
            >
              Get a Quote
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
