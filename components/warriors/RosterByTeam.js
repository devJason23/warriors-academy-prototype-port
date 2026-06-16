'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Eyebrow from '../ui/Eyebrow'
import Btn from '../ui/Btn'
import { PLAYERS, TEAMS } from './rosterData'

const EVAL_HREF = '/experience#evaluation'

function PlayerCard({ p }) {
  return (
    <Link
      href={`/player/${p.id}`}
      style={{
        textAlign: 'left', cursor: 'pointer', textDecoration: 'none',
        background: 'var(--ink)', border: '1px solid var(--ink-4)',
        padding: 0, color: 'inherit', font: 'inherit',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color .15s ease, transform .15s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brass)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--ink-4)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <div className="placeholder" style={{ aspectRatio: '4/5' }}>
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <span className="placeholder-label">#{p.jersey} · {p.ageGroup}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
          <span className="mono" style={{ color: 'rgba(245,242,236,0.5)', fontSize: 10 }}>// PORTRAIT</span>
        </div>
      </div>
      <div style={{ padding: 22, borderTop: '1px solid var(--ink-4)' }}>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: 24, color: 'var(--paper)', lineHeight: 1, marginBottom: 8 }}>{p.name}</div>
        <div className="mono" style={{ color: 'var(--brass)', marginBottom: 12 }}>{p.position} · {p.height} · {p.ageGroup}</div>
        <div style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(245,242,236,0.7)' }}>{p.classOf} · {p.archetype}</div>
        <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--ink-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="mono" style={{ color: 'var(--muted)', fontSize: 10 }}>OPEN PROFILE</span>
          <span style={{ color: 'var(--brass)' }}>→</span>
        </div>
      </div>
    </Link>
  )
}

function OpenSpotCard({ short }) {
  return (
    <Link
      href={EVAL_HREF}
      className="open-spot-card"
      style={{ textDecoration: 'none' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brass)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--ink-4)' }}
    >
      <div className="placeholder" style={{ aspectRatio: '4/5', display: 'grid', placeItems: 'center' }}>
        <span style={{ fontFamily: 'var(--f-display)', fontSize: 46, color: 'var(--ink-4)' }}>+</span>
      </div>
      <div style={{ padding: 22, borderTop: '1px solid var(--ink-4)' }}>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: 22, color: 'var(--paper)', lineHeight: 1, marginBottom: 8 }}>Open Spot</div>
        <div className="mono" style={{ color: 'var(--brass)', marginBottom: 12 }}>{short} · 25–26</div>
        <div style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(245,242,236,0.66)' }}>Tryouts open. Inquire about an evaluation.</div>
        <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--ink-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="mono" style={{ color: 'var(--muted)', fontSize: 10 }}>BOOK EVALUATION</span>
          <span style={{ color: 'var(--brass)' }}>→</span>
        </div>
      </div>
    </Link>
  )
}

function TeamSection({ team }) {
  const live = team.players.map((id) => PLAYERS[id]).filter(Boolean)
  return (
    <section id={team.id} style={{ scrollMarginTop: 150, padding: '72px 0', borderTop: '1px solid var(--ink-4)' }}>
      <div className="wrap">
        <div className="team-head">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <h3 className="team-title">{team.label}</h3>
              {team.flagship && <span className="team-flag">★ Flagship</span>}
            </div>
            <div className="mono team-meta">{team.tag} · {team.season} · {team.coach}</div>
            <p className="team-blurb">{team.blurb}</p>
          </div>
          <Btn kind="ghost" href={EVAL_HREF}>Evaluations open</Btn>
        </div>
        <div className="team-grid">
          {live.map((p) => <PlayerCard key={p.id} p={p} />)}
          {Array.from({ length: team.openSpots }).map((_, i) => (
            <OpenSpotCard key={i} short={team.short} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function RosterByTeam() {
  const [activeTeam, setActiveTeam] = useState(TEAMS[0].id)

  const jumpTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 150
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  useEffect(() => {
    const ids = [...TEAMS.map((t) => t.id), 'team-girls']
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveTeam(e.target.id) })
    }, { rootMargin: '-150px 0px -55% 0px', threshold: 0 })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ background: 'var(--ink-2)' }}>
      <section style={{ padding: '100px 0 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <Eyebrow>The 25–26 Teams</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 16 }}>
              Five boys teams.<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Find your age.</span>
            </h2>
            <p className="lead">Pick your son&rsquo;s age group below. Each team carries its coach, last season&rsquo;s results, and every Warrior&rsquo;s profile &mdash; tap a player to open stats, film, academics, and a coach contact. Girls&rsquo; teams are forming now.</p>
          </div>
        </div>
      </section>

      {/* sticky jump-to-team nav */}
      <div className="team-jump">
        <div className="wrap team-jump-inner">
          <span className="team-jump-label">Jump to team →</span>
          {TEAMS.map((t) => (
            <button key={t.id} className="team-chip" data-active={activeTeam === t.id} onClick={() => jumpTo(t.id)}>
              {t.short}
            </button>
          ))}
          <button className="team-chip" data-active={activeTeam === 'team-girls'} onClick={() => jumpTo('team-girls')}>
            Girls
          </button>
        </div>
      </div>

      {TEAMS.map((t) => (
        <TeamSection key={t.id} team={t} />
      ))}

      {/* ===== GIRLS · FORMING ===== */}
      <section id="team-girls" style={{ scrollMarginTop: 150, padding: '72px 0 100px', borderTop: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <div className="team-head">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                <h3 className="team-title">Girls Warriors</h3>
                <span className="team-flag">Forming · 25–26</span>
              </div>
              <div className="mono team-meta">All age groups · 10U–18U · Evaluations open</div>
              <p className="team-blurb">We&rsquo;re building girls&rsquo; teams across every age group right now &mdash; same coaches, same Badge Economy, same recruiting-grade profiles. Be one of the founding Warriors.</p>
            </div>
            <Btn kind="brass" href={EVAL_HREF}>Book an evaluation</Btn>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['10U', '12U', '14U', '16U', '18U'].map((a) => (
              <div key={a} className="girls-pill">{a} · forming</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
