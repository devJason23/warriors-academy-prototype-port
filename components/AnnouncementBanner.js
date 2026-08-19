'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ── Edit this block for the next tryout (or set show:false to hide) ──
const TRYOUT = {
  // Aug 14 has passed — banner off until there's a new event to announce.
  show: false,
  label: 'Final Tryouts · Friday, August 14',
  detail: 'Basketball & Cheer · 931 N. Walnut Ave., Republic, MO · Free',
  href: '/tryout',
}
// ────────────────────────────────────────────────────────────────────

export default function AnnouncementBanner() {
  const pathname = usePathname()
  if (!TRYOUT.show) return null
  // The /tryout landing page advertises itself — no banner there.
  if (['/tryout','/tryout/','/privacy','/privacy/'].includes(pathname)) return null
  return (
    <Link href={TRYOUT.href || '/tryouts'} className="announce-bar">
      <span className="announce-inner">
        <span className="announce-pulse" aria-hidden="true" />
        <strong className="announce-label">{TRYOUT.label}</strong>
        <span className="announce-detail">{TRYOUT.detail}</span>
        <span className="announce-cta">See details →</span>
      </span>
    </Link>
  )
}
