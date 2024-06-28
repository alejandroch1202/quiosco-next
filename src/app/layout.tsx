import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiosco Next.js',
  description: 'Quiosco Next.js'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='es'>
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  )
}

export default RootLayout
