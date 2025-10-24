'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', message: '' })
        }, 3000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        {/* Contact form - centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Tell us about your <span className="gradient-text">project</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary mb-4 leading-relaxed">
            Ready to bring your vision to life? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>

          {/* Reply time badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-12 px-4 py-2 bg-accent-mint/10 border border-accent-mint/30 rounded-full"
          >
            <span className="text-2xl">💌</span>
            <span className="text-accent-mint font-medium">we reply within 24 hours</span>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 text-left"
          >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-alt border border-border-gray rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-purple focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email / Telegram
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-alt border border-border-gray rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-purple focus:outline-none transition-colors"
                  placeholder="your@email.com or @telegram"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg-alt border border-border-gray rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-purple focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.95 }}
                className="w-full bg-accent-purple hover:bg-accent-purple/90 disabled:bg-accent-purple/50 text-white px-8 py-4 rounded-lg font-semibold text-lg btn-glow flex items-center justify-center gap-3 transition-all duration-300"
                data-cursor="hover"
              >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </motion.div>
                  ) : isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      Send Request
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </motion.div>
      </div>
    </section>
  )
}
