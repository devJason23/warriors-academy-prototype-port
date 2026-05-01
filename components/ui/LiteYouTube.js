'use client'

import { useState } from 'react'

export default function LiteYouTube({ id, title, poster, aspect = '16/9', autoplay = true }) {
  const [active, setActive] = useState(false)
  const thumb = poster || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  const fallbackThumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  const handlePlay = () => setActive(true)

  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: aspect,
        width: '100%',
        background: 'var(--ink)',
        overflow: 'hidden',
        cursor: active ? 'default' : 'pointer',
        border: '1px solid var(--ink-4)',
      }}
      onClick={!active ? handlePlay : undefined}
      role={!active ? 'button' : undefined}
      aria-label={!active ? `Play video: ${title}` : undefined}
      tabIndex={!active ? 0 : undefined}
      onKeyDown={(e) => {
        if (!active && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          handlePlay()
        }
      }}
    >
      {!active ? (
        <>
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            onError={(e) => {
              if (e.target.src !== fallbackThumb) e.target.src = fallbackThumb
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(0.7)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: '50%',
                background: 'var(--brass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
                transition: 'transform 0.2s ease',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '16px solid transparent',
                  borderBottom: '16px solid transparent',
                  borderLeft: '24px solid var(--ink)',
                  marginLeft: 6,
                }}
              />
            </div>
          </div>
          {title && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                color: 'var(--paper)',
                fontFamily: 'var(--f-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                pointerEvents: 'none',
              }}
            >
              ▶ {title}
            </div>
          )}
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      )}
    </div>
  )
}
