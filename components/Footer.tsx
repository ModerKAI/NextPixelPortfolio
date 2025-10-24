'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-gray">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main footer content */}
          <div className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <span className="text-xl font-bold gradient-text">NextPixel</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-text-secondary text-sm"
            >
              © 2025 NextPixel. Made with{' '}
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="inline-flex items-center gap-1 text-accent-purple"
              >
                <Coffee className="w-4 h-4" />
                coffee
              </motion.span>
              {' '}and{' '}
              <motion.span
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="inline-flex items-center gap-1 text-accent-mint"
              >
                <Code className="w-4 h-4" />
                code
              </motion.span>
            </motion.p>
          </div>


        </motion.div>
      </div>
    </footer>
  )
}
