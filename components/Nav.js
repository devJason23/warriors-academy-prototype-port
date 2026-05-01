'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label: 'Home' },
  { href: '/day', label: 'A Day at Warriors' },
  { href: '/training', label: 'Training' },
  { href: '/warrior-life-app', label: 'Warrior Life App' },
  { href: '/case', label: 'The Case' },
  { href: '/warriors', label: 'Warriors' },
  { href: '/tuition', label: 'Tuition' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const pathname = usePathname()
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Warriors Academy">
          <img src="/waw-logo.png" alt="We Are Warriors" className="nav-logo-img" />
        </Link>
        <div className="nav-links">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`nav-link ${isActive(i.href) ? 'active' : ''}`}
            >
              {i.label}
            </Link>
          ))}
          <Link href="/experience" className="nav-cta">Spend a Day →</Link>
        </div>
      </div>
    </nav>
  )
}
