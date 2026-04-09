import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'MO Warriors | Homeschool Basketball & Entrepreneur Academy',
  description: 'Faith-based homeschool basketball and entrepreneur academy in Springfield, MO. The only ATG-certified training program within 200 miles.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-green-900/30">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-black tracking-widest text-white">W<span className="text-green-500">A</span>W</Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/" className="text-gray-300 hover:text-green-400 transition">Home</Link>
              <Link href="/why-homeschool" className="text-gray-300 hover:text-green-400 transition">Why Homeschool?</Link>
              <Link href="/player" className="text-gray-300 hover:text-green-400 transition">Player Profile</Link>
              <a href="https://wearewarriorsapparel.com" target="_blank" className="text-gray-300 hover:text-green-400 transition">Shop</a>
            </div>
            <a href="#contact" className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-4 py-2 rounded transition">Join Us</a>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-[#0d1f17] border-t border-green-900/30 py-12">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div>
              <h3 className="text-white font-black text-lg mb-2">W<span className="text-green-500">A</span>W</h3>
              <p>Missouri Warriors Basketball</p>
              <p>Springfield, Missouri</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Links</h4>
              <div className="flex flex-col gap-1">
                <Link href="/" className="hover:text-green-400">Home</Link>
                <Link href="/why-homeschool" className="hover:text-green-400">Why Homeschool?</Link>
                <Link href="/player" className="hover:text-green-400">Player Profiles</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Contact</h4>
              <a href="mailto:missouriwarriorsbasketball@gmail.com" className="hover:text-green-400">missouriwarriorsbasketball@gmail.com</a>
                          <p className="mt-2 text-xs">Privacy Policy 2026</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
