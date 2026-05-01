import './globals.css'
import { Bebas_Neue, Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  variable: '--font-fraunces',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata = {
  title: 'Warriors Academy — Christ-Centered 4-Day Homeschool Athletic Academy · Springfield, MO',
  description:
    'Train like a warrior. Build like a founder. Live like a champion. A Christ-centered 4-day homeschool athletic academy for serious student-athletes ages 10–18.',
}

export default function RootLayout({ children }) {
  const fontClasses = `${bebas.variable} ${fraunces.variable} ${inter.variable} ${jetbrains.variable}`
  return (
    <html lang="en" className={fontClasses}>
      <body data-theme="midnight" data-density="normal">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
