// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

export const hoverLift = {
  whileHover: { y: -8 },
  transition: { duration: 0.3 }
}

export const hoverGlow = {
  whileHover: { 
    boxShadow: '0 0 30px rgba(168, 108, 245, 0.5)',
    y: -2
  },
  transition: { duration: 0.3 }
}

// Scroll-triggered animations
export const scrollAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}

export const scrollAnimationDelay = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true }
})

// Page transitions
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
}

// Loading animations
export const loadingSpinner = {
  animate: { rotate: 360 },
  transition: { duration: 1, repeat: Infinity, ease: "linear" }
}

export const loadingPulse = {
  animate: { scale: [1, 1.1, 1] },
  transition: { duration: 1.5, repeat: Infinity }
}

// Text animations
export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export const textSlide = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
}

// Button animations
export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    boxShadow: '0 0 20px rgba(168, 108, 245, 0.4)'
  },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
}

// Card animations
export const cardHover = {
  whileHover: { 
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
  },
  transition: { duration: 0.3 }
}

// Icon animations
export const iconRotate = {
  whileHover: { rotate: 360 },
  transition: { duration: 0.5 }
}

export const iconBounce = {
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
  transition: { duration: 0.2 }
}
