'use client'

// ============================================================
// FINAL TRYOUTS landing page — FB-ads funnel, dead-end on purpose.
// Site nav/banner/footer are hidden here; every link stays on-page.
// ============================================================

import { useState, useRef, useEffect } from 'react'
import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'
import LiteYouTube from '../../components/ui/LiteYouTube'
import { PLAYERS, TEAMS, BADGES } from '../../components/warriors/rosterData'
import { ScheduleExplorer } from '../schedule/page'

const EVAL_API = 'https://warriors-basketball-eval.vercel.app/api/submissions'
// Cheer submissions go to the cheer backend so Coach Lizzy's sheet + inbox
// get her leads directly (different schema: name + numeric age, questions).
const CHEER_API = 'https://warriors-cheer-tryout.vercel.app/api/submissions'
const CHEER_PROGRAM = 'Cheer (all ages)'

// ── Coach-editable: which players to showcase (order = display order) ──
// photo = index into that player's photos[] (0 = portrait, 1/2 = action shots).
// Some portraits are small cutouts — game shots crop better on cards.
const FEATURED = [
  // Cutout-style portraits (Brolen, Tre, Clay) render uncropped (fit: contain) —
  // trading-card style. Normal photos crop to fill (cover).
  { slug: 'brolen-hill', photo: 0, fit: 'contain' },
  { slug: 'jace-rucker', photo: 0, pos: 'center 20%' },
  // Tre + Clay: skinny full-body cutouts cropped to head/torso closeups (cover, top-anchored)
  { slug: 'tre-rucker', photo: 0, pos: 'center 2%' },
  { slug: 'clay-dinsmore', photo: 0, pos: 'center 6%' },
  { slug: 'preston-bishop', photo: 0, pos: 'center 25%' },
  // James: pre-cropped closeup file (src override), exact 3:4
  { slug: 'james-dinsmore', src: '/players/james-dinsmore/portrait-close.jpg' },
  { slug: 'zane-hamilton', photo: 0, pos: 'center 25%' },
  // Javion next to Zane, Howard next to Cai — pairs read more uniform on mobile (Jason's call)
  { slug: 'javion-rucker', photo: 0, pos: 'center 25%' },
  { slug: 'howard-zeigenbein', photo: 0, pos: 'center 20%' },
  { slug: 'cai-hamilton', photo: 0, pos: 'center 25%' },
]

// Tryout-page-only badge label tweaks (rosterData names untouched site-wide)
const BADGE_LABEL = { Rebounding: 'Rebounder' }

// Landing-page-only display cap on open spots (real counts stay in rosterData).
const SPOT_CAP = 3
const capSpots = (n) => Math.min(n || 0, SPOT_CAP)

// (Schedule rendering comes from the real schedule experience —
// ScheduleExplorer, imported from app/schedule/page.js in embed mode.)

// ── What separates a Warrior (differentiators grid) ──
const SEPARATORS = [
  {
    k: 'Dr. Dish Shooting Machine',
    v: 'Thousands of tracked reps a week. Makes counted, percentages logged — shooters aren’t born, they’re built.',
  },
  {
    k: 'Knees-Over-Toes Strength',
    v: 'ATG-based strength work that bulletproofs knees, builds bounce, and keeps athletes on the floor — from day one.',
  },
  {
    k: 'Daily Film Study',
    v: 'Pros watch film. So do Warriors. IQ is trained on a screen before it shows up on the scoreboard.',
  },
  {
    k: 'A Recruiting-Ready Profile — Done for Them',
    v: `Every Warrior gets a pro-grade profile page — season and career stats flow in automatically, highlight film included. You raise the athlete; we handle the résumé. You’re looking at ${FEATURED.length} of them below.`,
  },
]

// ── Tryout facts (from the Aug 14 flyer) ──
const VENUE = { name: '931 N. Walnut Ave.', city: 'Republic, MO 65738' }
const MAPS_URL = 'https://maps.google.com/?q=931+N+Walnut+Ave+Republic+MO+65738'
const SESSIONS = [
  { time: '9:00 – 11:00 AM', who: 'Boys · 10U / 12U / 14U' },
  { time: '11:30 AM – 1:30 PM', who: 'All Girls · All Ages' },
  { time: '2:00 – 4:00 PM', who: 'Boys · 16U / 18U' },
  { time: '2:00 – 4:00 PM', who: 'Cheer · All Ages' },
]
const PROGRAMS = [
  { value: 'Boys 10U', session: '9:00 – 11:00 AM', cal: ['090000', '110000'] },
  { value: 'Boys 12U', session: '9:00 – 11:00 AM', cal: ['090000', '110000'] },
  { value: 'Boys 14U', session: '9:00 – 11:00 AM', cal: ['090000', '110000'] },
  { value: 'Girls (all ages)', session: '11:30 AM – 1:30 PM', cal: ['113000', '133000'] },
  { value: 'Boys 16U', session: '2:00 – 4:00 PM', cal: ['140000', '160000'] },
  { value: 'Boys 18U', session: '2:00 – 4:00 PM', cal: ['140000', '160000'] },
  { value: 'Cheer (all ages)', session: '2:00 – 4:00 PM', cal: ['140000', '160000'] },
]

const boysSpots = TEAMS.reduce((n, t) => n + capSpots(t.openSpots), 0)

function calendarUrl(program) {
  const p = PROGRAMS.find((x) => x.value === program) || PROGRAMS[0]
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Missouri Warriors Final Tryouts — ${p.value}`,
    dates: `20260814T${p.cal[0]}/20260814T${p.cal[1]}`,
    ctz: 'America/Chicago',
    location: `${VENUE.name}, ${VENUE.city}`,
    details: `Final Warriors tryouts for the 2026–27 season. Parent meeting 4:30 PM. Bring: basketball shoes / athletic wear, water. Free to attend.`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

const statLine = (p) =>
  `${p.stats.ppg} PPG · ${p.stats.rpg} RPG · ${p.stats.apg} APG`

export default function TryoutLanding() {
  // The Aug 14 tryout has passed. The page is now a rolling roster-spot /
  // private-evaluation funnel, so the 'tryout' path (RSVP to a dated event,
  // calendar links, session times) is no longer reachable. Left in place
  // rather than deleted so it can be revived for the next tryout date.
  const [path, setPath] = useState('eval') // 'tryout' | 'eval'
  const [form, setForm] = useState({
    parentName: '', parentEmail: '', parentPhone: '',
    athleteNameAge: '', cheerName: '', cheerAge: '',
    program: PROGRAMS[1].value, schoolType: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  // Fires once, the first time anyone touches any field. Combined with PageView
  // this separates three very different failure modes: never reached the form,
  // reached it but never started, or started and abandoned partway.
  const startedRef = useRef(false)
  const trackFormStart = () => {
    if (startedRef.current || typeof window === 'undefined') return
    startedRef.current = true
    if (typeof window.fbq === 'function') window.fbq('trackCustom', 'FormStart')
    if (typeof window.gtag === 'function') window.gtag('event', 'form_start')
    if (typeof window.clarity === 'function') window.clarity('event', 'form_start')
  }

  const update = (k) => (e) => {
    trackFormStart()
    setForm((f) => ({ ...f, [k]: e.target.value }))
  }

  const isCheer = form.program === CHEER_PROGRAM

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    const tag = path === 'tryout'
      ? `[TRYOUT RSVP · AUG 14] Program: ${form.program}`
      : `[ROSTER SPOT — private evaluation] Program: ${form.program}`
    const url = isCheer ? CHEER_API : EVAL_API
    const payload = isCheer
      ? {
          cheerleaderName: form.cheerName,
          age: Number(form.cheerAge),
          grade: '',
          parentName: form.parentName,
          parentEmail: form.parentEmail,
          parentPhone: form.parentPhone,
          city: '',
          experience: '',
          schoolType: form.schoolType,
          howHeard: 'Other',
          questions: form.message ? `${tag}\n${form.message}` : tag,
        }
      : {
          parentName: form.parentName,
          parentEmail: form.parentEmail,
          parentPhone: form.parentPhone,
          athleteNameAge: form.athleteNameAge,
          competitiveExperience: '',
          educationSetup: form.schoolType,
          additionalInfo: form.message ? `${tag}\n${form.message}` : tag,
        }
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }
      // Meta Pixel conversion event (fires only once the Pixel is installed)
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'Lead')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  const chosen = PROGRAMS.find((p) => p.value === form.program) || PROGRAMS[1]
  const featured = FEATURED
    .map(({ slug, photo, pos, fit, src }) => {
      const p = PLAYERS[slug]
      return p
        ? { ...p, cardPhoto: src || (p.photos[photo] || p.photos[0]).src, cardPos: pos || 'center 25%', cardFit: fit || 'cover' }
        : null
    })
    .filter(Boolean)

  // Full schedule embed is heavy — collapsed behind a button by default.
  const [showSched, setShowSched] = useState(false)

  // Expanded in-page profile (the "menu" — tap a card, profile opens below).
  const [openProfile, setOpenProfile] = useState(null)
  const profileRef = useRef(null)
  useEffect(() => {
    if (openProfile && profileRef.current) {
      profileRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [openProfile])
  const profile = featured.find((p) => p.id === openProfile) || null

  return (
    <div className="page-enter lp">
      {/* Hide the global site chrome — this page is a closed funnel. */}
      <style>{`
        .nav, .announce-bar, .footer { display: none !important; }
        .lp { background: var(--ink); }
        .lp-nav { position: sticky; top: 0; z-index: 50; background: rgba(6,7,7,0.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--ink-4); }
        .lp-nav-inner { max-width: var(--maxw); margin: 0 auto; padding: 14px 32px; display: flex; align-items: center; gap: 24px; }
        .lp-nav-links { display: flex; gap: 22px; align-items: center; margin-left: auto; }
        .lp-nav-links a { font-family: var(--f-mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,242,236,0.72); }
        .lp-nav-links a:hover { color: var(--paper); }
        .lp-cta { background: var(--brass); color: var(--paper); font-family: var(--f-mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 18px; white-space: nowrap; }
        .lp-cta:hover { background: var(--brass-hi); }
        .lp-hero { position: relative; padding: 96px 0 72px; overflow: hidden; }
        .lp-hero-bg { position: absolute; inset: 0; background: url('/hero-dunk.jpg') center 30% / cover no-repeat; opacity: 0.28; }
        .lp-hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(6,7,7,0.3), var(--ink) 92%); }
        .lp-proof-strip { display: flex; flex-wrap: wrap; gap: 12px 28px; border-top: 1px solid var(--ink-4); border-bottom: 1px solid var(--ink-4); padding: 18px 0; }
        .lp-grid { display: grid; gap: 16px; }
        .lp-players { grid-template-columns: repeat(5, 1fr); }
        .lp-teams { grid-template-columns: repeat(4, 1fr); }
        .lp-badges { grid-template-columns: repeat(8, 1fr); gap: 10px; }
        .lp-badge-card { padding: 14px 8px 12px; display: flex; flex-direction: column; align-items: center; min-width: 0; }
        .lp-badge-imgbox { height: 108px; width: 100%; display: flex; align-items: center; justify-content: center; }
        .lp-badge-imgbox img { max-height: 108px; max-width: 100%; width: auto; height: auto; display: block; }
        .lp-badge-label { font-size: 10px; letter-spacing: 0.08em; margin-top: 10px; color: var(--paper-2); text-transform: uppercase; text-align: center; min-height: 26px; display: flex; align-items: flex-start; justify-content: center; overflow-wrap: anywhere; max-width: 100%; }
        .lp-sched-toggle { margin-top: 8px; width: 100%; max-width: 760px; padding: 15px 18px; text-align: center; background: rgba(4,97,49,0.14); border: 1px solid var(--brass); color: var(--brass-hi); font-size: 13px; letter-spacing: 0.1em; cursor: pointer; font-weight: 700; }
        .lp-sched-toggle:hover { background: rgba(4,97,49,0.26); }
        .lp-card { border: 1px solid var(--ink-4); background: var(--ink-2); }
        .lp-player-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: center 25%; display: block; background: var(--ink-3); }
        .lp-seps { grid-template-columns: repeat(2, 1fr); max-width: 900px; }
        .lp-player-card { text-align: left; padding: 0; cursor: pointer; font: inherit; color: inherit; transition: border-color .15s ease, transform .15s ease; display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; }
        .lp-player-card:hover { border-color: rgba(245,242,236,0.35); transform: translateY(-2px); }
        .lp-player-card.is-open { border-color: var(--brass); }
        .lp-profile { padding: clamp(20px, 4vw, 36px); }
        .lp-profile-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 32px; align-items: start; }
        .lp-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 20px; }
        .lp-sessions { border: 1px solid var(--ink-4); max-width: 780px; }
        .lp-session-row { display: grid; grid-template-columns: 190px 1fr; gap: 20px; padding: 20px 24px; align-items: baseline; }
        .lp-session-row + .lp-session-row { border-top: 1px solid var(--ink-4); }
        .lp-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 28px; }
        .lp-toggle button { font-family: var(--f-mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 10px; border: 1px solid var(--ink-4); background: transparent; color: rgba(245,242,236,0.6); cursor: pointer; }
        .lp-toggle button.on { border-color: var(--brass); background: rgba(4,97,49,0.18); color: var(--paper); }
        @media (max-width: 960px) {
          .lp-nav-links a:not(.lp-cta) { display: none; }
          .lp-homeschool { grid-template-columns: 1fr !important; }
          .lp-players { grid-template-columns: repeat(2, 1fr); }
          .lp-teams { grid-template-columns: repeat(2, 1fr); }
          .lp-badges { grid-template-columns: repeat(4, 1fr); gap: 8px; }
          .lp-badge-card { padding: 12px 4px 10px; }
          .lp-badge-imgbox { height: 86px; }
          .lp-badge-imgbox img { max-height: 86px; }
          .lp-badge-label { font-size: 9px; letter-spacing: 0.04em; }
          .lp-seps { grid-template-columns: 1fr; }
          .lp-profile-grid { grid-template-columns: 1fr; gap: 24px; }
          .lp-hero { padding: 64px 0 48px; }
          .lp-session-row { grid-template-columns: 1fr; gap: 4px; }
        }
        @media (max-width: 480px) {
          .lp-players { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ── Sticky anchor nav (looks like the site, exits nowhere) ── */}
      <div className="lp-nav">
        <div className="lp-nav-inner">
          <img src="/waw-logo.png" alt="Missouri Warriors" style={{ height: 28, width: 'auto' }} />
          <div className="lp-nav-links">
            <a href="#standard">The Standard</a>
            <a href="#players">The Proof</a>
            <a href="#teams">Teams</a>
            <a href="#aug14">Visit</a>
            <a className="lp-cta" href="#register">Schedule an Eval →</a>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero-bg" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <Eyebrow>Republic, MO · Free evaluation · Season starting soon</Eyebrow>
          <h1 className="h-hero" style={{ margin: '20px 0', maxWidth: '14ch' }}>
            Missed<br />Tryouts?
          </h1>
          <p className="lead" style={{ maxWidth: '56ch' }}>
            <strong style={{ color: 'var(--paper)' }}>2 spots left on the 12U Warriors</strong> —
            the #2 ranked team in the nation. Every other age group, 10U through 18U,
            has room for the right fit, and girls &amp; cheer rosters are forming now.
            If your athlete loves the game, we&apos;ll set up a private evaluation.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="brass" href="#register">Schedule an Evaluation</Btn>
          </div>
          <div className="lp-proof-strip mono" style={{ marginTop: 56, color: 'var(--paper-2)', fontSize: 13 }}>
            <span style={{ color: 'var(--brass-hi)' }}>#2 IN THE NATION · 12U</span>
            <span>GOLD BALL CHAMPIONS</span>
            <span>HEARTLAND REGIONAL CHAMPIONS</span>
            <span>NCHBC NATIONALS · 2026</span>
          </div>
        </div>
      </section>

      {/* ── THE STANDARD ── */}
      <section id="standard" className="section-tight" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <Eyebrow>The Standard</Eyebrow>
          <h2 className="h-section" style={{ margin: '16px 0 20px' }}>
            This is not<br />rec ball.
          </h2>
          <p className="lead" style={{ marginBottom: 20 }}>
            Warriors train like it matters — because it does. Elite skill development,
            strength and bulletproof-knee work, daily film, and a badge system where
            nothing is given and everything is earned.
          </p>
          <p className="lead" style={{ marginBottom: 40 }}>
            And here&apos;s the part that makes it different:
            <strong style={{ color: 'var(--paper)' }}> when you earn a badge, you teach it.</strong>{' '}
            Older badge-holders coach the younger Warriors through what they&apos;ve
            mastered. Leaders get built the same way shooters do — on purpose.
            Faith first. Family always. Zero shortcuts.
          </p>
          <div className="lp-grid lp-badges">
            {BADGES.map((b) => (
              <div key={b.name} className="lp-card lp-badge-card">
                <div className="lp-badge-imgbox">
                  <img src={b.img} alt={b.name} loading="lazy" decoding="async" />
                </div>
                <div className="mono lp-badge-label">{BADGE_LABEL[b.name] || b.name}</div>
              </div>
            ))}
          </div>
          <p className="mono" style={{ marginTop: 18, color: 'var(--muted)', fontSize: 12 }}>
            · THE BADGE ECONOMY — EARN IT. PROVE IT IN GAMES. THEN TEACH IT.
          </p>

          <div style={{ marginTop: 56 }}>
            <h3 className="h-sub" style={{ marginBottom: 24 }}>What separates a Warrior.</h3>
            <div className="lp-grid lp-seps">
              {SEPARATORS.map((s) => (
                <div key={s.k} className="lp-card" style={{ padding: '22px 22px 24px', borderLeft: '2px solid var(--brass)' }}>
                  <div className="mono" style={{ fontSize: 12, letterSpacing: '0.1em', color: 'var(--brass-hi)', textTransform: 'uppercase', marginBottom: 10 }}>
                    {s.k}
                  </div>
                  <p className="body" style={{ fontSize: 15 }}>{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLAYER PROOF ── */}
      <section id="players" className="section-tight" style={{ background: 'var(--ink-2)', borderTop: '1px solid var(--ink-4)', borderBottom: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <Eyebrow>The Proof</Eyebrow>
          <h2 className="h-section" style={{ margin: '16px 0 20px' }}>
            Warriors get<br />built here.
          </h2>
          <p className="lead" style={{ marginBottom: 40 }}>
            Real athletes. Real numbers. This is what a season in the program does.
          </p>
          <div className="lp-grid lp-players">
            {featured.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`lp-card lp-player-card${openProfile === p.id ? ' is-open' : ''}`}
                onClick={() => setOpenProfile(openProfile === p.id ? null : p.id)}
                aria-expanded={openProfile === p.id}
              >
                <img className="lp-player-img" src={p.cardPhoto} alt={p.name} style={{ objectPosition: p.cardPos, objectFit: p.cardFit }} loading="lazy" decoding="async" />
                <div style={{ padding: '14px 14px 16px' }}>
                  <div className="h-card" style={{ fontSize: 20 }}>{p.name}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--brass-hi)', margin: '6px 0 8px', letterSpacing: '0.08em' }}>
                    #{p.jersey} · {p.ageGroup.toUpperCase()} · {p.position.toUpperCase()}
                  </div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--paper-2)' }}>{statLine(p)}</div>
                  {p.accolades[0] && (
                    <div className="mono" style={{ fontSize: 11, color: 'var(--paper)', marginTop: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      ★ {p.accolades[0]}
                    </div>
                  )}
                  <div className="mono" style={{ fontSize: 10, color: openProfile === p.id ? 'var(--brass-hi)' : 'var(--muted)', marginTop: 10, letterSpacing: '0.1em' }}>
                    {openProfile === p.id ? '— CLOSE' : '+ SNEAK PEEK'}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {profile && (
            <div ref={profileRef} className="lp-card lp-profile" style={{ marginTop: 18, borderColor: 'var(--brass)' }}>
              <div className="lp-profile-grid">
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--brass-hi)', letterSpacing: '0.12em' }}>
                    PLAYER PROFILE — SNEAK PEEK · {profile.stats.season}
                  </div>
                  <div className="h-sub" style={{ margin: '10px 0 2px' }}>{profile.name}</div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--paper-2)', letterSpacing: '0.08em' }}>
                    #{profile.jersey} · {profile.ageGroup.toUpperCase()} · {profile.position.toUpperCase()} · {profile.height} · {profile.classOf.toUpperCase()}
                  </div>

                  <div className="lp-stat-grid">
                    {[['PPG', profile.stats.ppg], ['RPG', profile.stats.rpg], ['APG', profile.stats.apg], ['SPG', profile.stats.spg], ['FG%', profile.stats.fg], ['3PT', profile.stats.three], ['FT%', profile.stats.ft], ['GP', profile.stats.gp]].map(([l, v]) => (
                      <div key={l} style={{ padding: '12px 8px', border: '1px solid var(--ink-4)', textAlign: 'center' }}>
                        <div className="h-card" style={{ fontSize: 22 }}>{v}</div>
                        <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', marginTop: 2 }}>{l}</div>
                      </div>
                    ))}
                  </div>

                  {profile.careerHighs?.length > 0 && (
                    <div style={{ marginTop: 18 }}>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', marginBottom: 8 }}>· CAREER HIGHS</div>
                      <div className="mono" style={{ fontSize: 12, color: 'var(--paper-2)', lineHeight: 1.9 }}>
                        {profile.careerHighs.map(([n, l, ctx]) => `${n} ${l} (${ctx})`).join(' · ')}
                      </div>
                    </div>
                  )}

                  {profile.accolades?.length > 0 && (
                    <div className="mono" style={{ marginTop: 14, fontSize: 11, color: 'var(--brass-hi)', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 2 }}>
                      {profile.accolades.map((a) => `★ ${a}`).join('  ')}
                    </div>
                  )}

                  {profile.coachQuote?.text && (
                    <p className="body" style={{ marginTop: 18, fontStyle: 'italic', borderLeft: '2px solid var(--brass)', paddingLeft: 14 }}>
                      “{profile.coachQuote.text}” <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>— {profile.coachQuote.attr}</span>
                    </p>
                  )}
                </div>

                <div>
                  {profile.highlight?.id ? (
                    <>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', marginBottom: 8 }}>· HIGHLIGHT FILM</div>
                      <LiteYouTube id={profile.highlight.id} title={profile.highlight.title} />
                    </>
                  ) : (
                    <img src={profile.cardPhoto} alt={profile.name} style={{ width: '100%', height: 'auto', border: '1px solid var(--ink-4)' }} loading="lazy" decoding="async" />
                  )}
                  <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <Btn kind="brass" href="#register">Get Your Athlete a Profile</Btn>
                  </div>
                </div>
              </div>
            </div>
          )}
          <p className="mono" style={{ marginTop: 16, color: 'var(--muted)', fontSize: 11, letterSpacing: '0.1em' }}>
            · TAP ANY PLAYER FOR A SNEAK PEEK AT THEIR PROFILE — STATS UPDATE AUTOMATICALLY ALL SEASON
          </p>
        </div>
      </section>

      {/* ── TEAMS + OPEN SPOTS ── */}
      <section id="teams" className="section-tight" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <Eyebrow>2026–27 Rosters</Eyebrow>
          <h2 className="h-section" style={{ margin: '16px 0 20px' }}>
            The final<br />few pieces.
          </h2>
          <p className="lead" style={{ marginBottom: 40 }}>
            We&apos;re not rebuilding — we&apos;re reloading. Every team needs its last
            few pieces, and a private evaluation is where they get found.
          </p>
          <div className="lp-grid lp-teams">
            {TEAMS.map((t) => (
              <div key={t.id} className="lp-card" style={{ padding: 20 }}>
                <div className="h-card">{t.label}</div>
                {t.tag ? (
                  <div className="mono" style={{ fontSize: 11, color: 'var(--brass-hi)', marginTop: 6, letterSpacing: '0.08em' }}>{t.tag.toUpperCase()}</div>
                ) : (
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{t.season}</div>
                )}
                <div className="mono" style={{ marginTop: 14, fontSize: 12, color: t.openSpots <= 2 ? '#E8B84B' : 'var(--paper-2)', letterSpacing: '0.08em' }}>
                  {t.openSpots >= SPOT_CAP ? '2–3 SPOTS' : `${t.openSpots} SPOT${t.openSpots === 1 ? '' : 'S'}`} LEFT
                </div>
              </div>
            ))}
            <div className="lp-card" style={{ padding: 20 }}>
              <div className="h-card">All Girls</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--brass-hi)', marginTop: 6, letterSpacing: '0.08em' }}>ROSTERS FORMING</div>
              <div className="mono" style={{ marginTop: 14, fontSize: 12, color: 'var(--paper-2)', letterSpacing: '0.08em' }}>ALL AGES WELCOME</div>
            </div>
            <div className="lp-card" style={{ padding: 20 }}>
              <div className="h-card">Cheer</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--brass-hi)', marginTop: 6, letterSpacing: '0.08em' }}>SQUADS FORMING</div>
              <div className="mono" style={{ marginTop: 14, fontSize: 12, color: 'var(--paper-2)', letterSpacing: '0.08em' }}>ALL AGES WELCOME</div>
            </div>
          </div>

          {/* The real schedule experience, embedded (countdown, team filters, calendar) */}
          <div style={{ marginTop: 64 }}>
            <Eyebrow>The Season They&apos;re Walking Into</Eyebrow>
            <h3 className="h-sub" style={{ margin: '14px 0 10px' }}>The real 2026–27 schedule. Live.</h3>
            <p className="body" style={{ maxWidth: '62ch', marginBottom: 20 }}>
              This isn&apos;t a brochure — it&apos;s the same live schedule the program runs on,
              synced from the master sheet. Filter by team, flip to calendar view, and add
              games straight to your own calendar.
            </p>
            <button
              type="button"
              className="lp-sched-toggle mono"
              onClick={() => setShowSched(!showSched)}
              aria-expanded={showSched}
            >
              {showSched ? '— HIDE THE SCHEDULE' : '＋ SHOW THE FULL 2026–27 SCHEDULE'}
            </button>
            {showSched && <div style={{ marginTop: 12 }}><ScheduleExplorer embed /></div>}
            <p className="mono" style={{ marginTop: 16, color: 'var(--muted)', fontSize: 12 }}>
              · TEAM-BY-TEAM DETAIL COVERED AT YOUR EVALUATION
            </p>
          </div>

          {/* Homeschool advantage — one tight block, no “academy” anywhere */}
          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) minmax(280px, 1fr)', gap: 40, alignItems: 'center', flexWrap: 'wrap' }} className="lp-homeschool">
            <div>
              <Eyebrow>Built Different</Eyebrow>
              <h3 className="h-sub" style={{ margin: '14px 0 14px' }}>Homeschool families — this was built for you.</h3>
              <p className="body">
                Daytime training while other kids sit in a classroom. A schedule that works
                with your family, not against it. Christ-centered coaching, real competition
                on a national stage, and a locker room that feels like family — because it is.
              </p>
            </div>
            <img src="/culture-warrior-gym.jpg" alt="Warriors culture in the gym" style={{ width: '100%', height: 'auto', border: '1px solid var(--ink-4)' }} loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* ── WARRIORS CHEER ── */}
      <section id="cheer" className="section-tight" style={{ background: 'var(--ink-2)', borderTop: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <div className="lp-homeschool" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) minmax(280px, 1fr)', gap: 40, alignItems: 'center' }}>
            <img
              src="/cheer/squad-2.jpg"
              alt="Warriors Cheer squad"
              style={{ width: '100%', height: 'auto', border: '1px solid var(--ink-4)' }}
              loading="lazy"
              decoding="async"
            />
            <div>
              <Eyebrow>Warriors Cheer</Eyebrow>
              <h3 className="h-sub" style={{ margin: '14px 0 14px' }}>Same family. Same fire. Pom-poms optional.</h3>
              <p className="body">
                Warriors Cheer is ages 5–18, every skill level — from first-time
                cheerleaders to seasoned flyers. Real coaching, real routines, and the
                same faith-first, family-always standard the basketball program runs on.
                Squads are forming for 2026–27 right now, and Coach Lizzy will set up a time
                for your cheerleader to come meet the squad.
              </p>
              <div style={{ marginTop: 22 }}>
                <Btn
                  kind="brass"
                  href="#register"
                  onClick={() => {
                    setPath('tryout')
                    setForm((f) => ({ ...f, program: CHEER_PROGRAM }))
                  }}
                >
                  Claim a Cheer Spot
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUG 14 DETAILS ── */}
      <section id="aug14" className="section-tight" style={{ background: 'var(--ink)', borderTop: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <Eyebrow>Republic, MO</Eyebrow>
          <h2 className="h-section" style={{ margin: '16px 0 20px' }}>
            One day.<br />One gym.
          </h2>
          <p className="lead" style={{ marginBottom: 8 }}>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" style={{ color: 'var(--paper)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              {VENUE.name} · {VENUE.city}
            </a>
          </p>
          <p className="mono" style={{ color: 'var(--muted)', marginBottom: 32, fontSize: 12 }}>
            · FREE TO ATTEND · PRE-REGISTRATION HOLDS YOUR ATHLETE&apos;S SPOT
          </p>
          <div className="lp-sessions">
            {SESSIONS.map((s, i) => (
              <div key={i} className="lp-session-row">
                <div className="mono" style={{ color: 'var(--brass-hi)' }}>{s.time}</div>
                <div style={{ color: 'var(--paper)', fontSize: 15 }}>{s.who}</div>
              </div>
            ))}
            <div className="lp-session-row" style={{ background: 'rgba(4,97,49,0.12)' }}>
              <div className="mono" style={{ color: 'var(--brass-hi)' }}>4:30 PM</div>
              <div style={{ color: 'var(--paper)', fontSize: 15 }}>
                <strong>Parent Meeting</strong> — meet the coaches, hear the vision, get your questions answered.
              </div>
            </div>
          </div>
          <p className="mono" style={{ marginTop: 20, color: 'var(--muted)', fontSize: 12 }}>
            · BRING: BASKETBALL SHOES / ATHLETIC WEAR · WATER · YOUR BEST EFFORT
          </p>
        </div>
      </section>

      {/* ── REGISTER ── */}
      <section id="register" className="section-tight" style={{ background: 'var(--ink)' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Eyebrow>{path === 'tryout' ? 'Claim Your Spot · Free' : 'Book a Private Eval · Free'}</Eyebrow>
          <h2 className="h-section" style={{ margin: '16px 0 16px' }}>
            {path === 'tryout' ? <>See you on<br />the 14th.</> : <>Let&apos;s get them<br />in the gym.</>}
          </h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            {path === 'tryout'
              ? 'Lock in your athlete’s tryout spot. Takes 30 seconds — a coach will confirm by email.'
              : 'Tell us about your athlete and a Warriors coach will reach out within 24 hours to set up a private evaluation at a time that works.'}
          </p>

          <div style={{ background: 'var(--ink-2)', border: '1px solid var(--ink-4)', padding: 'clamp(24px, 5vw, 48px)' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div className="mono" style={{ color: 'var(--brass-hi)', marginBottom: 12, letterSpacing: '0.14em' }}>
                  {path === 'tryout' ? '· SPOT CLAIMED' : '· REQUEST RECEIVED'}
                </div>
                <h3 className="h-sub" style={{ marginBottom: 14 }}>
                  {path === 'tryout' ? 'You’re on the list.' : 'We’ll be in touch.'}
                </h3>
                {path === 'tryout' ? (
                  <>
                    <p className="lead" style={{ maxWidth: '52ch', margin: '0 auto 20px' }}>
                      <strong style={{ color: 'var(--paper)' }}>{form.program}</strong> tries out{' '}
                      <strong style={{ color: 'var(--paper)' }}>{chosen.session}</strong> on Friday, August 14 at{' '}
                      {VENUE.name}, {VENUE.city}. Parent meeting at 4:30 PM. Bring shoes, water, and your best effort.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Btn kind="brass" href={calendarUrl(form.program)}>Add to Calendar</Btn>
                      <Btn kind="ghost" href={MAPS_URL}>Get Directions</Btn>
                    </div>
                  </>
                ) : (
                  <p className="lead" style={{ maxWidth: '52ch', margin: '0 auto' }}>
                    A Warriors coach will reach out within 24 hours to schedule your athlete&apos;s
                    private evaluation. Go Warriors!
                  </p>
                )}
              </div>
            ) : (
              <>
                {/* Path toggle hidden: the Aug 14 tryout has passed, so there is
                    only one path now (private evaluation). Restore this block
                    when the next dated tryout is announced. */}
                {false && (
                  <div className="lp-toggle" role="tablist">
                    <button type="button" className={path === 'tryout' ? 'on' : ''} onClick={() => setPath('tryout')}>
                      I&apos;ll be there Aug 14
                    </button>
                    <button type="button" className={path === 'eval' ? 'on' : ''} onClick={() => setPath('eval')}>
                      Can&apos;t make it — book an eval
                    </button>
                  </div>
                )}
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Parent / Guardian Name</label>
                      <input placeholder="Full name" value={form.parentName} onChange={update('parentName')} required />
                    </div>
                    <div className="form-field">
                      <label>Email</label>
                      <input type="email" placeholder="you@example.com" value={form.parentEmail} onChange={update('parentEmail')} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Phone</label>
                      <input type="tel" placeholder="(417) 555-0000" value={form.parentPhone} onChange={update('parentPhone')} required />
                    </div>
                    {isCheer ? (
                      <div className="form-field" style={{ display: 'grid', gridTemplateColumns: '1fr 90px', gap: 10 }}>
                        <div>
                          <label>Cheerleader&apos;s Name</label>
                          <input placeholder="Full name" value={form.cheerName} onChange={update('cheerName')} required />
                        </div>
                        <div>
                          <label>Age</label>
                          <input type="number" min={5} max={18} placeholder="5–18" value={form.cheerAge} onChange={update('cheerAge')} required />
                        </div>
                      </div>
                    ) : (
                      <div className="form-field">
                        <label>Athlete&apos;s Name + Age</label>
                        <input placeholder="e.g. Micah · 13" value={form.athleteNameAge} onChange={update('athleteNameAge')} required />
                      </div>
                    )}
                  </div>
                  <div className="form-field" style={{ marginBottom: 20 }}>
                    <label>Program</label>
                    <select value={form.program} onChange={update('program')} style={{ width: '100%', background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink-4)', padding: '12px 14px', fontSize: 15 }}>
                      {PROGRAMS.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field" style={{ marginBottom: 24 }}>
                    <label>Athlete&apos;s Current Schooling</label>
                    <select
                      value={form.schoolType}
                      onChange={update('schoolType')}
                      required
                      style={{ width: '100%', background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink-4)', padding: '12px 14px', fontSize: 15, marginBottom: 20 }}
                    >
                      <option value="" disabled>Select one…</option>
                      <option value="Homeschool">Homeschool</option>
                      <option value="Public">Public school</option>
                      <option value="Private">Private school</option>
                      <option value="Other">Other</option>
                    </select>

                    <label>Anything we should know? (optional)</label>
                    <textarea rows={3} placeholder="Experience, questions, sibling athletes..." value={form.message} onChange={update('message')} />
                  </div>
                  <Btn kind="brass" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting'
                      ? 'Sending…'
                      : path === 'tryout' ? 'Claim My Athlete’s Spot' : 'Book My Free Eval'}
                  </Btn>
                  {status === 'error' && (
                    <div style={{ marginTop: 16, color: '#ff8a8a', fontSize: 14 }}>{errorMsg}</div>
                  )}
                  <div className="mono" style={{ marginTop: 16, fontSize: 11, letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    Free · No commitment · A coach confirms by email
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Minimal footer — no site links, funnel stays closed ── */}
      <div style={{ borderTop: '1px solid var(--ink-4)', padding: '40px 0 48px', background: 'var(--ink)' }}>
        <div className="wrap" style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src="/waw-logo.png" alt="Missouri Warriors" style={{ height: 34, width: 'auto' }} />
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase' }}>
            Faith Driven · Family Focused · Hard Work · High Standards · Warrior for Life
          </div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--paper-2)' }}>
            <a href="mailto:coachjason@mo-warriors.com" style={{ color: 'inherit' }}>coachjason@mo-warriors.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
