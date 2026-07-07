import Link from 'next/link'

// ── Edit this block for the next tryout (or set show:false to hide) ──
const TRYOUT = {
  show: true,
  label: 'Warriors Tryouts · Friday, July 10',
  detail: 'Cheer (ages 5–18) & Basketball (ages 10–18) · Betsy & Bobby Allison Sportstown, Springfield',
}
// ────────────────────────────────────────────────────────────────────

export default function AnnouncementBanner() {
  if (!TRYOUT.show) return null
  return (
    <Link href="/tryouts" className="announce-bar">
      <span className="announce-inner">
        <span className="announce-pulse" aria-hidden="true" />
        <strong className="announce-label">{TRYOUT.label}</strong>
        <span className="announce-detail">{TRYOUT.detail}</span>
        <span className="announce-cta">See details →</span>
      </span>
    </Link>
  )
}
