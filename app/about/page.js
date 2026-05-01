'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AboutRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/warriors')
  }, [router])

  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/warriors" />
        <link rel="canonical" href="/warriors" />
      </head>
      <div className="page-enter" style={{ padding: '160px 0', textAlign: 'center' }}>
        <div className="wrap-narrow">
          <p className="lead">
            This page moved to <a href="/warriors" style={{ color: 'var(--accent)' }}>/warriors</a>.
          </p>
        </div>
      </div>
    </>
  )
}
