import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gen AI Portfolio - Chirag Jain',
  description: 'Generative AI Engineer Portfolio showcasing innovative AI projects and solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
