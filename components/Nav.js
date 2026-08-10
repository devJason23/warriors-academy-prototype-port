'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const items = [
  { href: '/', label: 'Home' },
  { href: '/day', label: 'A Day at Warriors' },
  { href: '/training', label: 'Training' },
  { href: '/warrior-life-app', label: 'Warrior Life App' },
  { href: '/case', label: 'The Case' },
  { href: '/warriors', label: 'Warriors' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/tuition', label: 'Tuition' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  // Close the mobile menu whenever the route changes.
  useEffect(() => { setOpen(false) }, [pathname])

  // /tryout is a closed ad-landing funnel — render no site chrome there.
  // (Exact match so /tryouts, the info page, keeps its nav.)
  if (pathname === '/tryout' || pathname === '/tryout/') return null

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Warriors Academy">
          <img src="/waw-logo.png" alt="We Are Warriors" className="nav-logo-img" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-toggle-bars ${open ? 'is-open' : ''}`} aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        </button>

        <div id="primary-nav" className={`nav-links ${open ? 'is-open' : ''}`}>
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`nav-link ${isActive(i.href) ? 'active' : ''}`}
            >
              {i.label}
            </Link>
          ))}
          <Link href="/experience" className="nav-cta">Book Eval →</Link>
        </div>
      </div>
    </nav>
  )
}
