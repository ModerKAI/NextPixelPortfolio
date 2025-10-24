import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
