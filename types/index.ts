// Project types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link?: string
  github?: string
}

// Team member types
export interface TeamMember {
  id: number
  name: string
  role: string
  icon: React.ComponentType<any>
  color: string
  description: string
}

// Contact form types
export interface ContactForm {
  name: string
  email: string
  message: string
}

// Contact info types
export interface ContactInfo {
  icon: React.ComponentType<any>
  label: string
  value: string
  href: string
}

// Animation variants type
export interface AnimationVariant {
  initial?: any
  animate?: any
  exit?: any
  transition?: any
  whileHover?: any
  whileTap?: any
  whileInView?: any
  viewport?: any
}

// Theme types
export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}

// Component props types
export interface SectionProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

// Form types
export interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<any>
}

// Social media types
export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<any>
  color: string
}

// Blog types (for future use)
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
  image: string
  slug: string
}

// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<any>
  features: string[]
  price?: string
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}
