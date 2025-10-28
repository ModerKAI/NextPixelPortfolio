'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'NightHold',
    description: 'Modern Lending website for a crypto-courses with custom animations and CMS integration.',
    image: '/images/projects/corporate.png',
    category: 'Landing',
    tags: ['React', 'Next.js', 'Tailwind'],
    url: 'https://www.nighthold.academy',
  },
  {
    id: 2,
    title: 'BuildWise',
    description: 'An example of work on the design and functionality of a landing site',
    image: '/images/projects/landing.jpg',
    category: 'Landing',
    tags: ['React', 'Next.js'],
    url: 'https://landing-for-build-wise.vercel.app/',
  },
  {
    id: 3,
    title: 'NextPixel Space',
    description: 'Interactive cosmic portfolio with 3D planets and smooth animations.',
    image: '/images/projects/project3.jpg',
    category: 'Portfolio',
    tags: ['Three.js', 'React', 'WebGL'],
    url: 'https://3-d-portfolio-with-example-projects.vercel.app/',
  },
]

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  // Block scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Work</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Each project is crafted with attention to detail, combining creativity with cutting-edge technology.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-bg-alt border border-border-gray rounded-2xl overflow-hidden card-hover cursor-pointer"
                onClick={() => {
                  // Для третьего проекта открываем в новой вкладке, для остальных - модалку
                  if (project.id === 3) {
                    window.open(project.url, '_blank')
                  } else {
                    setSelectedProject(project.id)
                  }
                }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  {/* Blur background - visible by default on desktop only */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 0 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-mint/20 hidden md:block"
                  >
                    <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-accent-purple/10 to-accent-mint/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center">
                        <Eye className="w-8 h-8 text-accent-purple" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Real project image - always visible on mobile, appears on hover on desktop */}
                  <motion.div
                    className="absolute inset-0 md:opacity-0"
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : undefined,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </motion.div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-accent-purple text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-border-gray text-text-secondary px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-transparent border border-border-gray hover:border-accent-purple text-text-primary hover:text-accent-purple py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                    data-cursor="hover"
                  >
                    More Details
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile preview modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Phone frame */}
              <div className="relative w-[375px] h-[667px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
                
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <iframe
                    src={projects.find(p => p.id === selectedProject)?.url}
                    className="w-full h-full"
                    title="Mobile Preview"
                  />
                </div>
              </div>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-accent-purple rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
