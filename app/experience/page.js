'use client'

import { useEffect } from 'react'

// The evaluation experience now lives on the dedicated form app (persuasive
// copy + working form in one place). This page is retired and redirects there.
const FORM_URL = 'https://warriors-basketball-eval.vercel.app'

export default function ExperiencePage() {
  useEffect(() => {
    window.location.replace(FORM_URL)
  }, [])

  return (
    <div
      className="page-enter"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        textAlign: 'center',
      }}
    >
      <div>
        <div className="mono" style={{ color: 'var(--muted)', marginBottom: 16 }}>
          Redirecting…
        </div>
        <p className="lead" style={{ marginBottom: 24 }}>
          Taking you to the Warriors evaluation form.
        </p>
        <a href={FORM_URL} style={{ color: 'var(--accent)', fontWeight: 600 }}>
          Continue to the evaluation form →
        </a>
      </div>
    </div>
  )
}
