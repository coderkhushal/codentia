import { Inter } from 'next/font/google'

import '../styles/globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Codentia',
  description: 'Blog for developers who want to stay updated with current big changes in technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="mainnav">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          
        </ul>
      </nav>
        {children}
        </body>
      {/* <Script src='/sc.js'/> */}
    </html>
  )
}
