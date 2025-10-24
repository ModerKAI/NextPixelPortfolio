import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import { LoadingProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextPixel',
  description: 'We create websites that inspire and perform. Custom web solutions combining creativity and technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <LoadingScreen />
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
