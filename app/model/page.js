'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ModelRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/day')
  }, [router])

  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/day" />
        <link rel="canonical" href="/day" />
      </head>
      <div className="page-enter" style={{ padding: '160px 0', textAlign: 'center' }}>
        <div className="wrap-narrow">
          <p className="lead">
            This page moved to <a href="/day" style={{ color: 'var(--accent)' }}>/day</a>.
          </p>
        </div>
      </div>
    </>
  )
}
