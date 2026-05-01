'use client'

import Link from 'next/link'

function Arrow() {
  return <span className="arrow">→</span>
}

export default function Btn({ children, kind = 'primary', onClick, href, type, disabled }) {
  const cls =
    kind === 'primary' ? 'btn btn-primary'
    : kind === 'brass' ? 'btn btn-brass'
    : 'btn btn-ghost'

  if (href) {
    if (href.startsWith('/') && !href.startsWith('//')) {
      return (
        <Link className={cls} href={href}>
          {children}
          <Arrow />
        </Link>
      )
    }
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
        <Arrow />
      </a>
    )
  }
  return (
    <button className={cls} onClick={onClick} type={type || 'button'} disabled={disabled}>
      {children}
      <Arrow />
    </button>
  )
}

export { Arrow }
