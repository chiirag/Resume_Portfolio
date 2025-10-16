import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chirag Jain - AI Engineering Manager | AI Architect',
  description: 'Data Science Leader with 15+ years building ML, DL, and LLM solutions. Expert in GenAI, RAG systems, and AI Agents at Bain, Citi, Barclays, and dunnhumby.',
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
