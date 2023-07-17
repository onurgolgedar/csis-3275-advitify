import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Home | Advitify",
    template: '%s | Advitify'
  },
  description: 'Advityfy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
