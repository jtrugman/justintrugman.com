import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Justin Trugman',
  description: 'My Thoughts, Ideas, and Projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XPQE45XZ02" />
    </html>
  )
}
