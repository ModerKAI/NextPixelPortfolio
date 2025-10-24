'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Heart } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Alex',
    role: 'Full-Stack Developer',
    icon: Code,
    color: '#A86CF5',
    description: 'Crafts clean, efficient code with modern frameworks and AI assistance.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python'],
    experience: '5+ years',
  },
  {
    id: 2,
    name: 'Maya',
    role: 'UI/UX Designer',
    icon: Palette,
    color: '#4EF0C1',
    description: 'Creates beautiful, user-centered designs that tell your story.',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    experience: '4+ years',
  },
  {
    id: 3,
    name: 'Jordan',
    role: 'AI Integration Specialist',
    icon: Zap,
    color: '#FF6B6B',
    description: 'Leverages AI tools to enhance creativity and streamline workflows.',
    skills: ['Machine Learning', 'AI Tools', 'Automation', 'Data Analysis'],
    experience: '3+ years',
  },
]

export default function AboutSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const handleMemberClick = (memberId: number) => {
    if (selectedMember === memberId) {
      setSelectedMember(null)
    } else {
      setSelectedMember(memberId)
    }
  }

  const isActive = (memberId: number) => {
    return hoveredMember === memberId || selectedMember === memberId
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              About <span className="gradient-text">NextPixel</span>
            </h2>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We are a team of developers and designers who use AI tools 
                not to replace creativity, but to amplify it.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Every project we make is handcrafted with attention to detail. 
                We believe in the perfect balance between human creativity and 
                technological innovation.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-purple mb-2">50+</div>
                <div className="text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-mint mb-2">3+</div>
                <div className="text-text-secondary">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Team members */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-mint/10 rounded-3xl blur-3xl" />
            
            <div className="relative bg-dark-bg-alt border border-border-gray rounded-3xl p-6 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Meet the Team</h3>
              
              {/* Mobile hint - visible only on small screens */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center text-text-secondary text-sm mb-4 md:hidden flex items-center justify-center gap-2"
              >
                <span className="text-accent-purple">👆</span>
                Tap a character to see their info
              </motion.p>
              
              <div className="flex flex-wrap justify-center items-end gap-4 md:gap-6 min-h-[250px] md:min-h-[300px]">
                {teamMembers.map((member, index) => {
                  // Map role to correct filename
                  const roleMap: { [key: string]: string } = {
                    'Full-Stack Developer': 'developer',
                    'UI/UX Designer': 'designer', 
                    'AI Integration Specialist': 'innovator'
                  }
                  const roleKey = roleMap[member.role] || 'developer'
                  const grayImage = `/images/team/${roleKey}-gray.png`
                  const colorImage = `/images/team/${roleKey}-color.png`
                  
                  return (
                    <motion.div
                      key={member.id}
                      onHoverStart={() => setHoveredMember(member.id)}
                      onHoverEnd={() => setHoveredMember(null)}
                      onClick={() => handleMemberClick(member.id)}
                      className="group cursor-pointer relative"
                    >
                      {/* Character Image */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-36 h-36 md:w-52 md:h-52 flex items-end justify-center"
                      >
                        <img
                          src={isActive(member.id) ? colorImage : grayImage}
                          alt={member.name}
                          className="w-full h-full object-contain transition-all duration-300"
                          onError={(e) => {
                            console.error(`Failed to load image: ${isActive(member.id) ? colorImage : grayImage}`)
                          }}
                        />
                      </motion.div>

                      {/* Name above character (like nickname in games) */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ 
                          opacity: isActive(member.id) ? 1 : 0,
                          y: isActive(member.id) ? 0 : -10
                        }}
                        transition={{ duration: 0.3, delay: isActive(member.id) ? 0.1 : 0 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
                      >
                        <span 
                          className="text-sm font-semibold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${member.color}20`,
                            color: member.color,
                            border: `1px solid ${member.color}40`,
                          }}
                        >
                          {member.name}
                        </span>
                      </motion.div>

                      {/* Member info - appears below character */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: isActive(member.id) ? 1 : 0,
                          y: isActive(member.id) ? 0 : 10
                        }}
                        transition={{ duration: 0.3, delay: isActive(member.id) ? 0.2 : 0 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-auto w-48 bg-dark-bg-alt border border-border-gray rounded-lg p-3 z-20 pointer-events-none"
                        style={{
                          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.7)`,
                        }}
                      >
                        <p className="text-xs text-text-secondary mb-1 text-center">
                          {member.role}
                        </p>
                        <p className="text-[10px] text-text-secondary mb-2 text-center">
                          {member.experience}
                        </p>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-[10px] px-1.5 py-0.5 rounded-full"
                              style={{
                                backgroundColor: `${member.color}20`,
                                color: member.color,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
